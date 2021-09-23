---
author: admin
origin: wordpress
comments: true
date: 2015-07-04T15:15:22+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: everything-is-illegal-in-massachusetts-some-ffmpeg-examples
title: Everything is illegal in Massachusetts -- some FFMPEG examples
wordpress_id: 898
categories:
- Tech
- Media
tags:
- ffmpeg
- media
- audio / video
---

## The general format of invoking `ffmpeg` from the command line is:

```bash
ffmpeg  -i in.mp4 -ss [start] -t [duration] -c:v copy -c:a copy out.mp4
```

Of the below, **5a** seemed to work the best...

```bash
ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 26 -af "volume=10dB" -pix_fmt yuv420p ~/Movies/vlc-clip-05a.mp4
```

-----
-----
-----

## Other attempts:

### 1. Works, but drops few ms of video. Copies video; sets volume. 262 KB
```bash
ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v copy -af "volume=10dB"  ~/Movies/vlc-clip-01.mp4
```

### as above but addresses bframes issue
```bash
ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v copy  -bsf:v mpeg4_unpack_bframes -af "volume=10dB"  ~/Movies/vlc-clip-01a.mp4
```

### 2. Perfect. Video transocded to H264, lossless. Volume increased. 4.4 MB file though! 59s to encode!
```
ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -preset ultrafast -qp 0 -af "volume=10dB"  ~/Movies/vlc-clip-02.mp4
```

### 3.     Very good. Video transocded to H264, optimised for fast encoding. 482 KB, 49s encode time.
```bash ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -preset ultrafast -af "volume=10dB"  ~/Movies/vlc-clip-03.mp4

### 4.     Best yet. Video transocded to H264, optimised for youtube. 246 KB. 47s to encode.
[cc lang="bash" nowrap="false"]ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -preset slow -af "volume=10dB" -pix_fmt yuv420p ~/Movies/vlc-clip-04.mp4```

# CRF (Constant Rate Factor) scale is 0-51: where 0 is lossless, 23 is default, and 51 is worst possible.
# A lower value is a higher quality and a subjectively sane range is 18-28.
# Consider 18 to be visually lossless or nearly so
# The range is exponential, so increasing the CRF value +6 is roughly half the bitrate.
# Choose the highest CRF value that still looks good

### 5. Bester :-)... audio not increased, but sounds great (except on youtube. Grrr). Quality just fine. 185 KB. 30s to encode.
```bash ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 26 -c:a copy -pix_fmt yuv420p ~/Movies/vlc-clip-05.mp4
```

### 5a. as above but with vol. inc.
```bash ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 26 -af "volume=10dB" -pix_fmt yuv420p ~/Movies/vlc-clip-05a.mp4
```

### 6. as above 47 s to encode. 13 KB... bit worse, but not worth the extra encoding time for the file size delta
```bash ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7  -c:v libx264 -crf 30  -c:a copy -pix_fmt yuv420p ~/Movies/vlc-clip-06.mp4
```

### 7. as #5, but with -bsf:v mpeg4_unpack_bframes bitstream
```
ffmpeg -i ~/Movies/Edge.Of.Darkness.2010/Edge.Of.Darkness.2010.avi -ss  00:54:54 -t 00:00:7 -c:v libx264 -crf 26  -c:a copy -pix_fmt yuv420p -flags global_header ~/Movies/vlc-clip-07.mp4
```

```bash ffmpeg -i ~/Movies/L-sit.mp4 -c:v libx264 -crf 26 -c:a copy -pix_fmt yuv420p ~/Movies/l-sit-01.mp4
```
