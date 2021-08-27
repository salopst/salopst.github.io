---
author: admin
comments: true
date: 2017-03-11 03:20:04+00:00
layout: post
link: http://stephen.yearl.us/librevault-on-solus-os/
slug: librevault-on-solus-os
title: Librevault on Solus OS
wordpress_id: 1290
categories:
- Linux
- Solus
tags:
- compiling
- Linux
- solus
- source code
---

Still playing with [Solus OS](https://solus-project.com), and liking it more and more. The [eopkg](https://wiki.solus-project.com/Package_Management) repository of software is a little thin in comparison to the likes of Debian-based apt-get and Arch's AUR, but most of the things I want are there. And if they are not there I am thinking maybe I should review my needs... I am in the process of planning for a life without OS X/MacOS after all, so a prefect time for reflection. This is also part of the reason I am attracted to Solus... because not everything is there, and because not everything is answered by a quick google search, I have to take some effort to actually find things out again. Some nostalgia there.




## Cloudage


[Librevault](https://librevault.com/) is... "transfers data directly from one device to another. You can use it in your local network, and it will work even without Internet access." So not exactly cloud storage. In fact not even close to that. So why do I think I need it? I don't. But I wont know until I try. Chances are I can get away with continuing with Dropbox, but since I am working on a major change of OS I might as well kinda think about previous tools and workflows and so on. Anyway there is no librevault in the Solus repository. Compiling time!

Not to flog a dead horse, but what follows is what worked for me, soup to nuts. Playing with librevault will have to wait a few days, cause the weather is awesome and I've a potato patch to dig out of raw sod up the orchard, Besides [rclone](http://rclone.org/) and Google drive are working for what I need *at the moment*... and all that is, is, primarily, syncing files from the MacOS partition to the Solus partition. Google drive will have to go though when the time is right.

[cc e lang="bash"]

$ sudo eopkg it -c system.devel
$ sudo eopkg it cryptopp-devel libboost-devel libicu-devel openssl-devel protobuf-devel
$ sudo eopkg it qca-qt5 qt5-base-devel qt5-svg-devel qt5-tools-devel qt5-websockets-devel

$ mkdir ~/usr/src
$ cd ~/usr/src
$ git clone https://github.com/Librevault/librevault.git
$ cd librevault && git submodule update --init
$ mkdir build && cd build
# $ cmake .. && cmake --build .
$ cmake --pthread .. && cmake --pthread --build .
$ sudo make install

[/cc]

DICE!
Install the project...
-- Install configuration: "RelWithDebInfo"
-- Installing: /usr/local/bin/librevault-daemon
-- Installing: /usr/local/bin/librevault-gui
-- Installing: /usr/local/share/applications/Librevault.desktop
-- Installing: /usr/local/share/icons/hicolor/scalable/apps/librevault.svg
-- Installing: /usr/local/bin/librevault-cli

Now, do I go to the trouble of packaging this? Other's who better know what they are doing in this area will prolly get it done soon enough, but why not give it a shot, eh? If I am going to be living with Solus I might as well get to know her a little better.
