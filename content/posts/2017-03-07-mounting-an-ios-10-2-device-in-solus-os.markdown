---
author: admin
comments: true
date: 2017-03-07 03:12:21+00:00
layout: post
link: http://stephen.yearl.us/mounting-an-ios-10-2-device-in-solus-os/
slug: mounting-an-ios-10-2-device-in-solus-os
title: Mounting an iOS 10.2 device in Solus OS
wordpress_id: 1287
categories:
- Apple
- Linux
- os x
- Solus
- tech
tags:
- compiling
- distro
- Linux
- source
---

## tl;dr


I feel that after ten years I can no longer countenance the purchase of a new Apple laptop should my existing machine shit the bed. All that nonsense associated with the race to thinness and the resultant lack of expandability of the newer machines, where everything is soldered or glued into place, has me pretty upset. Oh, and the OS itself has been getting more annoying with each release since Snow Leopard. So I am planning for a day without OS X/ MacOS. After a few distro trials (ongoing) I've come down to:

[Linux Mint 18.1](https://linuxmint.com/rel_serena_cinnamon_whatsnew.php)

[Solus OS](https://solus-project.com/)

[True OS](https://www.trueos.org/)

With the thinking that Solus will be "The One".


## Problem: iPhone 5, iOS: 10.2.1 (14D27) will not mount under Solus OS.


iPhones, generally, used to mount fine prior to the iOS 10 release. The developers of `libimobiledevice` have rectified this, but many down stream distos have not quite caught up. Solution is to build oneself. Or wait. I didn't want to wait.... in large part because Solus's packaging system eopkg is completely rewritten and not based on AUR or apt-get I wanted to get to poke around it some more.

My hand-compiling of this is probably moot since Solus, being a rolling release, will eventually catch up. It probably will have by the time any reads this.

```bash
$ sudo eopkg it -c system.devel git
$ sudo eopkg it -c libtool pkg-config python-devel ibplist-devel libusb-devel fuse-devel

$ mkdir -p ~/usr/src
$ cd ~/usr/src

$ for x in libusbmuxd usbmuxd  ifuse; do git clone https://github.com/libimobiledevice/${x}.git;done

$ cd ~/usr/src/libusbmuxd
$ ./autogen.sh --prefix="$HOME/usr"
$ make && make install

$ cd ~/usr/src/libimobiledevice
$ ./autogen.sh --prefix="$HOME/usr"
$ make && make install

$ cd ~/usr/src/usbmuxd
$ ./autogen.sh --prefix="$HOME/usr"
$ make && sudo make install

$ cd ~/usr/src/ifuse
$ ./autogen.sh --prefix="$HOME/usr"
$ make && make install

$ mkdir -p ~/usr/mnt
$ ~idevice_id -l
$ ~/usr/bin/idevicepair pair

$ nautilus &
$ ls $ ls ~/usr/mnt/

```

All the real work was done by someone else (isn't it always?), here: [https://gist.github.com/samrocketman/70 ... 33c259a0fc](https://gist.github.com/samrocketman/70dff6ebb18004fc37dc5e33c259a0fc)
