---
author: admin
comments: true
date: 2018-05-18 10:19:13+00:00
layout: post
link: http://stephen.yearl.us/create-root-ssh-keys-os-x-macos-high-sierra/
slug: create-root-ssh-keys-os-x-macos-high-sierra
title: Create root SSH keys OS X (MacOS High Sierra)
wordpress_id: 1393
categories:
- networking
- tech
tags:
- Apple
- MacOS
- os x


---

In all the years I've been running OS X (or MacOS as it is now called) I've never had the need to `su`,`sudo` was always good enough. And this is as it should be.

Until now. Obvs, "root" is disabled in High Sierra. So...

```bash
$ cd /System/Library/CoreServices/Applications/
$ ls
```

Some cool apps here...

```bash
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 About This Mac.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Archive Utility.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Directory Utility.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Feedback Assistant.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Folder Actions Setup.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Network Utility.app
drwxr-xr-x  3 root  wheel    96B May  2 10:03 RAID Utility.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Screen Sharing.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Storage Management.app
drwxr-xr-x  3 root  wheel    96B May  2 10:03 System Image Utility.app
drwxr-xr-x  3 root  wheel    96B Mar 30 12:48 Wireless Diagnostics.app
```

**Open Directory Utility** is the chappie we are interested in  

```bash
$ open Directory\ Utility.app
```

@ menu bar: Edit >> Enable Root User
Set the password... y'all know the rules here.

Oh, look! What's this? Past Self left me a little note. Thanks, Past Self! [http://stephen.yearl.us/ssh-key-pair-authentication/](http://stephen.yearl.us/ssh-key-pair-authentication/)

```bash
$ su
Password:
sh-3.2# 
sh-3.2# cd ~
sh-3.2# pwd
/var/root
sh-3.2# ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_4096
Generating public/private rsa key pair.
...
Your identification has been saved in /var/root/.ssh/id_rsa_4096.
Your public key has been saved in /var/root/.ssh/id_rsa_4096.pub.
...
sh-3.2# cp id_rsa_4096.pub /Users/yearluk/Desktop/root@xolotl-id_rsa_4096.pub
sh-3.2# exit
``` 

Job's a good un!
