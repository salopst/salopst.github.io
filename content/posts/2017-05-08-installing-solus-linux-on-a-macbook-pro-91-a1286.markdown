---
author: admin
comments: true
date: 2017-05-08 07:03:14+00:00
layout: post
link: http://stephen.yearl.us/installing-solus-linux-on-a-macbook-pro-91-a1286/
slug: installing-solus-linux-on-a-macbook-pro-91-a1286
title: Installing Solus linux on a Macbook Pro 9,1 (A1286)
wordpress_id: 1320
categories:
- Apple
- Linux
- os x
- Solus
- tech
---

I've been sunning* [Solus](https://solus-project.com) as guest in a Parallels virtual machine on a macOS Sierra 10.12.4 host for a couple of months now, and I am delighted and impressed, so impressed I <del>bought the company</del>** wanted to install this on Apple iron. Solus installed beautifully on an 2010 Lenovo X201 and on a new and cheap and plastically Dell Inspiron 14-3452, so it should have no probs installing on a mid-2012, 15.4" Hi-Res MBP. Right? Right? Wrong!

[*] s/sunning/running/ but gonna let that stand because, as typos go, this is pretty funny
[**] Showing my age... [thanks Victor Kiam!](https://www.youtube.com/watch?v=qf22bddvLnc)

So, minus the bits where I was as <del>angry</del> frustrated as a guy who met a [stranger in the Alps](https://www.youtube.com/watch?v=4koLWPq2qDY&feature=youtu.be&t=1m21s) [may not be SFW. Depends where you work.]:

--------------------------
EDIT: 2017-05-11
#001 Disable SIP (System Integrity Protection)
Reboot, holding CMD+R
```bash
❯ csrutil disable[/cc]
Reboot
```bash
❯ csrutil status
System Integrity Protection status: disabled. [/cc]
--------------------------

#01 Grab the 2017-04-18 ISO torrent from [https://solus-project.com/download/](https://solus-project.com/download/)
#02 Burn to a 16GB shiny-new USB thumdrive using [etcher](https://etcher.io/).
#03 Press opt (alt) key at boot, select the livecd image

and, Mr. Franklin, it balked. Black Screen of Death. If you do the googles this usually has something to do with graphics *and stuff*. Which, for me, means:
```bash

❯ system_profiler SPDisplaysDataType | grep -i chipset
      Chipset Model: Intel HD Graphics 4000
      Chipset Model: NVIDIA GeForce GT 650M[/cc]

Boot at runlevel 3, wired connection and all that. Run the usual [cc lang="bash" inline="true"]dmesg | less[/cc] , [cc lang="bash" inline="true"]journalctl | less[/cc], [cc lang="bash" inline="true"]linux-driver-management status[/cc], [cc lang="bash" inline="true"]modprobe [/cc] and the googles. Poke and prod and pull hair, and finally...

---------------

#1 Press opt (alt) key at boot, select the livecd image
#2 Immediately press 'e' and edit the kernel command line parameters (boot options), replacing "quiet splash" with "nomodeset nouveau.blacklist=1 3". Full KMS now reads:
```bash
initrd root=live:CDLABEL=SolusLiveBudgie ro rd.luks=0 rd.md=0 nomodeset nouveau.blacklist=1 text 3[/cc]
#3 Login prompt. User is "live", there is no password
#4 Become root, password is "root"
#5 Unload nouveau (open source NVIDIA drivers) 
```bash
# modprobe -r nouveau[/cc]
#6 get more drivers from the Solus repository
```bash
# eopkg it nvidia-glx drivers[/cc]
#7 load Intel (integrated) graphics
```bash
# modprobe i915[/cc]
#8 Boot graphically
```bash
# /sbin/init 5[/cc]
#9 Install and...
#10 sell as lakefront property
#11 PROFIT!
