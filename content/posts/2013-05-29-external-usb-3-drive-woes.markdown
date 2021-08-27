---
author: admin
comments: true
date: 2013-05-29 22:17:00+00:00
layout: post
link: http://stephen.yearl.us/external-usb-3-drive-woes/
slug: external-usb-3-drive-woes
title: External USB 3 drive woes
wordpress_id: 294
categories:
- tech
tags:
- hardware
---

  * External HFS + USB drive could not be found HFS.
  * Disk Utility, [Disk Warrior](http://www.alsoft.com/diskwarrior/) and [Drive Genius](http://www.prosofteng.com/products/drive_genius.php) could not repair or rebuild the drive.  

  * Tried to reformat under Disk Utility, but the "drive could not be unmounted".  

  * Disk Warrior and Drive Genius could not reformat either.

  


Drive was recognised as "Untitled" at /media/Untitled under Ubuntu 12

[cc_bash]sudo blkid[/cc]

reveals "Untitled" to be [cc inline="true"]/dev/sdb2[/cc]

[cc_bash]df -k /dev/sdb2[/cc] reveals 1% usage so I guess I have lost all my data. But have I lost my drive?

  


[cc_bash]ls -la /dev/sdb2 shows a huge .journal file[/cc]

  


Remounting the disk under OS X 10.8.3 .... indicates a blank HPFS+ volume. Yeah, OK, so I lost  a backup and a few files outsides of that, but all in all not a bad result. At least the drive is not hosed!

  


Well aparently it is. After a full time machine backup one of my lovely children knocked out the connecting USB cable, the drive was unceremoniosly unmounted and was again beyond Disk Utility's repair. Drive Genius (3.2.2, BTW) _was_ able to rebuild it, but this situation is not tenable. I cannot trust the drive/file system/cable to be reliable, and if there is anything one needs in a backup it is reliability.

  


I think my next steps are to use [Carbon Copy Cloner](http://www.bombich.com/) to clone my HD to yet another drive, take this dodgy Western Digital Passbook drive, reformat it as a non-journaled FS (FAT 32, if Time Machine can work with that), and see how improperly unmounting the drive affects its contents.
