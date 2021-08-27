---
author: admin
comments: true
date: 2017-05-11 09:35:12+00:00
layout: post
link: http://stephen.yearl.us/installing-solus-linux-on-a-macbook-pro-91-a1286-part-2/
slug: installing-solus-linux-on-a-macbook-pro-91-a1286-part-2
title: 'Installing Solus linux on a Macbook Pro 9,1 (A1286): PART 2'
wordpress_id: 1327
tags:
- Apple
- Linux
- OS X
- tech
---

Part 2 of installing Solus Linux on a 2012 Macbook Pro.

Part 1- simply booting the liveCD to even allow installation is here:
[https://stephen.yearl.us/installing-solus-linux-on-a-macbook-pro-9](https://stephen.yearl.us/installing-solus-linux-on-a-macbook-pro-9)

Rebooting after install lead to, you guessed it, the Black Screen of Death again. Solus was installed, accepting all defaults (and therefore one humongous / paritiion), to /dev/sdb2, /dev/sda1 is the EFI partition on which [rEFInd](http://www.rodsbooks.com/refind/index.html) was installed when running <del>OSX</del> MacOS.

```bash
❯ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sdb      8:16   0   477G  0 disk 
├─sdb2   8:18   0 473.2G  0 part /
└─sdb1   8:17   0   3.7G  0 part [SWAP]
sdc      8:32   1   3.9G  0 disk 
sda      8:0    0 465.8G  0 disk 
├─sda2   8:2    0   465G  0 part 
├─sda3   8:3    0 619.9M  0 part 
└─sda1   8:1    0   200M  0 part 
```

#1 boot back into MacOS, mount EFI paritition:
```bash
❯ sudo /Users/yearluk/Downloads/refind-bin-0.10.7/mountesp
❯  cd /Volumes/ESP/loader/entries
❯ nano Solus-lts-4.9.22-17.conf
```

#2 CHANGE:
```bash
title Solus 2017.04.18.0
linux /EFI/com.solus-project/kernel-com.solus-project.lts.4.9.22-17
initrd /EFI/com.solus-project/initrd-com.solus-project.lts.4.9.22-17
options root=PARTUUID=c96bc351-b364-4c61-9fe6-8489f0ceec8f quiet ro splash resume=UUID=8f7d1509-fe95-4e47-8017-41611ad0a14c
```

TO:
```bash
title Solus 2017.04.18.0
linux /EFI/com.solus-project/kernel-com.solus-project.lts.4.9.22-17
initrd /EFI/com.solus-project/initrd-com.solus-project.lts.4.9.22-17
options root=PARTUUID=c96bc351-b364-4c61-9fe6-8489f0ceec8f ro nomodeset nouveau.blacklist=1  resume=UUID=8f7d1509-fe95-4e47-8017-41611ad0a14c text 3
```

#3 Repeat steps #3 through #8 from [Part 1](http://stephen.yearl.us/installing-solus-linux-on-a-macbook-pro-91-a1286/) (#7 this time was `modprobe nvidia`)

#4 update entire system
```bash
sudo eopkg up
```

#5 using the Apple bootloader [hold opt key whilst booting] to boot... boots graphically now.
