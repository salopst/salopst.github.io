---
author: admin
comments: true
date: 2015-07-04 15:15:22+00:00
layout: post
link: http://stephen.yearl.us/everything-is-illegal-in-massachusetts-some-ffmpeg-examples/
slug: everything-is-illegal-in-massachusetts-some-ffmpeg-examples
title: Everything is illegal in Massachusetts -- some FFMPEG examples
wordpress_id: 898
categories:
- tech
---

The general format of invoking ffmpeg from the command line is:

[cc lang="bash" nowrap="false"]ffmpeg  -i in.mp4 -ss [start] -t [duration] -c:v copy -c:a copy out.mp4[/cc]

Of the below, #5a seemed to work the best...

[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 26 -af "volume=10dB" -pix_fmt yuv420p ~/Movies/vlc-clip-05a.mp4[/cc]




* * *



Other attempts:
# 1     Works, but drops few ms of video. Copies video; sets volume. 262 KB
[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v copy -af "volume=10dB"  ~/Movies/vlc-clip-01.mp4[/cc]

# as above but addresses bframes issue
[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v copy  -bsf:v mpeg4_unpack_bframes -af "volume=10dB"  ~/Movies/vlc-clip-01a.mp4[cc/]

# 2     Perfect. Video transocded to H264, lossless. Volume increased. 4.4 MB file though! 59s to encode!
[cc]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -preset ultrafast -qp 0 -af "volume=10dB"  ~/Movies/vlc-clip-02.mp4[/cc]

# 3     Very good. Video transocded to H264, optimised for fast encoding. 482 KB, 49s encode time.
[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -preset ultrafast -af "volume=10dB"  ~/Movies/vlc-clip-03.mp4[/cc]

# 4     Best yet. Video transocded to H264, optimised for youtube. 246 KB. 47s to encode.
[cc lang="bash" nowrap="false"]ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -preset slow -af "volume=10dB" -pix_fmt yuv420p ~/Movies/vlc-clip-04.mp4[/cc]

# CRF (Constant Rate Factor) scale is 0-51: where 0 is lossless, 23 is default, and 51 is worst possible.
# A lower value is a higher quality and a subjectively sane range is 18-28.
# Consider 18 to be visually lossless or nearly so
# The range is exponential, so increasing the CRF value +6 is roughly half the bitrate.
# Choose the highest CRF value that still looks good

# 5     Bester :-)... audio not increased, but sounds great (except on youtube. Grrr). Quality just fine. 185 KB. 30s to encode.
[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 26 -c:a copy -pix_fmt yuv420p ~/Movies/vlc-clip-05.mp4[/cc]

# 5a as above but with vol. inc.
[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 26 -af "volume=10dB" -pix_fmt yuv420p ~/Movies/vlc-clip-05a.mp4[/cc]

#6 as above 47 s to encode. 13 KB... bit worse, but not worth the extra encoding time for the file size delta
[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 30  -c:a copy -pix_fmt yuv420p ~/Movies/vlc-clip-06.mp4[/cc]

#7 as #5, but with -bsf:v mpeg4_unpack_bframes bitstream
[cc]$ ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7 -c:v libx264 -crf 26  -c:a copy -pix_fmt yuv420p -flags global_header ~/Movies/vlc-clip-07.mp4[/cc]

[cc lang="bash" nowrap="false"]$ ffmpeg -i ~/Movies/L-sit.mp4 -c:v libx264 -crf 26 -c:a copy -pix_fmt yuv420p ~/Movies/l-sit-01.mp4[/cc]
