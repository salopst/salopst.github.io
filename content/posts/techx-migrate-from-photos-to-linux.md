---
author: "yearluk"
origin: "scratch"
title: "Migrating Photos.app from MacOS Sierra to…"
slug: "migrating photos from macos sierra"
date: 2017-04-07
publishDate: 2017-04-07
lastMod: 2017-04-07
draft: false
noLicense: false
weight: 1001
summary: "Apple Photos is a beastly application, and identifyinf iles in it from another other than its own interface is an exercise in frustration. Soooo let's rationalise that file structure..."
description: "Apple Photos is a beastly application, and identifyinf iles in it from another other than its own interface is an exercise in frustration. Soooo let's rationalise that file structure..."
categories:
- Tech
- Apple
- Linux
tags:
- photos
- techx
- apple
- media
---


## 0. Photos are everywhere

- 0.1 some are in dropbox, mostly of the kids, shared by ex-wife. unsorted. prolly not in Photos.app
- 0.2 some are knocking around the filesystem, thing that I did not want under photo management— desktop wallpapers, screenshots, “utility photos” (ones made of gas meter readings and so on), vital documents, raw TIFF scans, other random images
- 0.3 Photographs from Photos
- 0.4 new photos coming in from phone.
- 0.5 from a shit-tonne of devices over many, many years


## 1. Rename based on EXIF data if not a “named” image. Named image is prolly a scan. unnamed==DSC-00142.jpeg or some such.

Using http://www.sno.phy.queensu.ca/~phil/exiftool/index.html
Since command line and .: will work under Linux. Also scriptable should I ever need this… on images in certain directory, auto rename/process and or/convert format

```bash
$ cd ~/Dropbox
# exiftools does not work for mp4 as relies on EXIF CreateDate, so are renaming before converting to mp4
# NOW RENAME
$ for x in ~/Dropbox/Camera\ Uploads/*.MOV; do ffmpeg -i ${x} -vcodec h264 -acodec aac -strict -2 ${x}.mp4  ;done
```

## 2. Grab some existing ruby from my maid `rules.rb` file:

```ruby
 # 
  # Camera Uploads -- Convert MOV files to MP4
  #   
  rule 'Convert .mov to .mp4 in ~/Dropbox/Camera Uploads' do
    dir('~/Dropbox/Camera\ Uploads/*.mov').each do |mov_file|
      mp4_file = mov_file[/.*(?=\..+$)/]+".mp4"
      puts "Convert QT movie... #{mov_file} to #{mp4_file}\n\n"
      cmd = "ffmpeg -i \"#{mov_file}\" -vcodec h264 -acodec aac -strict -2 \"#{mp4_file}\""
      system(cmd)
      remove(mov_file)
    end
  end
```  
So:

```bash  
❯  for x in ~/Pictures/apple-photos-export/*.jpg; do echo ${x};done
❯  
#GENERIC
❯  for x in ~/Dropbox/Camera\ Uploads/*.MOV; do echo ${x};done
❯
❯  for x in ./in/*.MOV.mp4; do mv ${x} ./in/$(basename ${x} .MOV.mp4).mp4; done
```







