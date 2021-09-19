---
author: admin
origin: wordpress
comments: true
draft: false
date: 2018-03-09T07:25:54+00:00
layout: post
slug: join-two-or-more-videos-on-the-command-line
title: Join two or more videos on the command line
wordpress_id: 1336
categories:
- Tech
- Networking
tags:
- CLI
- media
- tech
- video
---

Having just dropped a couple of 4TB Western Digital NAS drives in the _openmediavault_ box, I can now get around to adding more media. My _Moby Dick_ is split over two DVD disks... that's a pain. Let's join them...

The obvious, and lazy, and probably-will-not-work way:

```bash
~/MyRips/Moby Dick (1998)
$ cat "Moby Dick (1998) - CD 1.avi" "Moby Dick (1998) - CD 2.avi" > "Moby Dick (1998).avi"
```

Video will only play the length of the first file because this is where the avi header information is. Have to rebuild header information.
 
[http://www.mactricksandtips.com/2011/01/join-avi-or-other-movie-files-together.html](http://www.mactricksandtips.com/2011/01/join-avi-or-other-movie-files-together.html) suggests _mencoder_, but another tool from half-a-decade ago seems like hassle.

So let's do this with _ffmpeg_ (making temporary list first for flexibility)...  

```bash
~/MyRips/Moby Dick (1998)
$ printf "file '%s'\n" ./*.avi > manifest.txt
$ ffmpeg -f concat -safe 0 -i manifest.txt -c copy "Moby Dick (1998)"
```

#### 🎲🎲 DICE!

#### UNTRIED, BUT MAYBE NEATER:
 
```bash
$ find STREAM -type f -name '*' -printf "file '$PWD/%p'\n"
```
