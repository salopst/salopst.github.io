---
author: admin
comments: true
date: 2015-07-27 10:19:46+00:00
layout: post
link: http://stephen.yearl.us/ffmpeg-transcode-iphone-videos-to-mp4/
slug: ffmpeg-transcode-iphone-videos-to-mp4
title: FFMPEG transcode iPhone videos to mp4
wordpress_id: 984
categories:
- tech
---

Assuming one has [homebrew](http://brew.sh/) installed:

```bash
$ brew update && brew upgrade
$ brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype --with-frei0r --with-libass --with-libvo-aacenc --with-libvorbis --with-libvpx --with-opencore-amr --with-openjpeg --with-opus --with-rtmpdump --with-schroedinger --with-speex --with-theora --with-tools
$ cd ~/dropbox
$ for video in *.MOV; do ffmpeg -i "$video" -vcodec h264 -acodec aac -strict -2 "${video%.*}.mp4" ; done
$ rm *.MOV

```
