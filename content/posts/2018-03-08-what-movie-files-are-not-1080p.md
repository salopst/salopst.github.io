---
author: admin
origin: wordpress
comments: true
draft: false
date: 2018-03-08T23:23:48+00:00
layout: post
slug: what-movie-files-are-not-1080p
title: What movie files are not 1080P?
wordpress_id: 1342
categories:
- Media
- Tech
tags:
- ffmpeg
- media
- NAS
- video
---

Again with the _Openmediavault_ NAS.

A fair few movies I encoded to result in less than 1080P files in order to preserve disk space. That is not really an issue (for now). So, what movies have what resolution?

(I feel like this should all been in shell script, but hey; whatever works right?!)

```ruby
require 'find'

basedir = '/Volumes/Movies'

# get filetypes
# find . -type f | egrep -i -E -o "\.{1}\w*$" | sort -su

files = %x[find #{basedir} -type f | egrep -i -E  "\.mp4|\.avi|\.mkv|\.m4v|\.mpg" | sort -d]
videos = files.split(/\n+/)
videos = videos.reject! {|item| item =~ /sample.*|\._.*/i }

# puts "#{videos.size} videos found\n"
# videos.each { |x|
#   puts "#{x}\n"
# }

File.open('low-res-video.txt', 'w') do |fo|
  videos.each do |x|
    size = %x[/usr/local/bin/ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 '#{x}']
    if size.to_i < 1080
      fo.puts "#{x}...#{size} less than 1080P... reencode?"
    end
  end
end
```

Output something like:

```text
/Volumes/Movies/_German language movies/Nackt unter Wolfen (2015)/Nackt unter Wolfen (2015).mkv...720
 less than 1080P... reencode?
/Volumes/Movies/_German language movies/The Edukators (2004)/The Edukators (2004)-CD1.avi...592
 less than 1080P... reencode?
/Volumes/Movies/_German language movies/The Edukators (2004)/The Edukators (2004)-CD2.avi...592
 less than 1080P... reencode?
```
