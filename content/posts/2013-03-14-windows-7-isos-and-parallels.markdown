---
author: admin
comments: true
date: 2013-03-14 22:01:16+00:00
layout: post
link: http://stephen.yearl.us/windows-7-isos-and-parallels/
slug: windows-7-isos-and-parallels
title: Windows 7, ISOs, and Parallels
wordpress_id: 64
tags:
- OSX
- VM
- Windows 7
---

I've had Windows 7 running under the Parallels VM for quite some time now-- just for those odd occasions when I might need to do something on that platform like, err, watching streaming European association football matches from servers in the the Middle East. (I am perhaps one of few Brits who do not bristle when I hear North Americans call football "soccer", because, "soccer" is derived from "association" football, and was used once upon a time to distinguish itself from that other footballing code: rugby.

I never particularly worried about internal backup of the Windows stuff, because it is a pretty naked install, with the usual stuff added:

[ClamAV
](www.clamav.net/)[Cygwin
](http://www.cygwin.com/)[WinDirStat
](http://windirstat.info/)[CCleaner
](http://www.piriform.com/ccleaner)[Notepad++
](http://notepad-plus-plus.org/)[Chrome
](https://www.google.com/intl/en/chrome/browser/)[Unlocker
](http://www.emptyloop.com/unlocker/)[Macrium Reflect Free](http://www.macrium.com/reflectfree.aspx)[
](http://www.emptyloop.com/unlocker/)[PowerISO
](http://www.poweriso.com/)[DAEMON Tools Lite](http://www.daemon-tools.cc/eng/products/dtLite)

_MSFT Office 2010... and Visio_

and the whole VM was backed up as part of the usual Mac backup (via [Carbon Copy Cloner](http://www.bombich.com/)). However, I found the need for an image of this system this morning, and in going through the usual route of creating an ISO in Win 7 I was somewhat surprised to see that the outcome would be a whopping 46GB. What to do? WellI found a pretty damned helpful page at Scott Hanselman's Computer Zen, [Guide to Freeing up Disk Space under Windows 7](http://www.hanselman.com/blog/GuideToFreeingUpDiskSpaceUnderWindows7.aspx). Particularly:

[cc_dos]cd /d %TEMP%
cd ../
rd /s temp[/cc]

couple of files could not be deleted in this directory... one that was open by ClamAV, so shutting that down did the trick. Also [cc inline="true"]FXSAPIDebugLogFile.txt[/cc] was locked. The following steps fixed that:



	
  * Go to Control Panel

	
  * Click on Program

	
  * Click On “Turn Windows Features On and Off”.

	
  * Navigate to Print and Document Services

	
  * Now uncheck that option

	
  * Now click Ok to confirm

	
  * Restart the computer


Identifying the processes that had these files open was pretty straightforward, but oftentimes this is *not* the case, then I recommend the free [Unlocker](http://www.emptyloop.com/unlocker/). It adda a contextual menu to Windows Explorer that will identify the process that is using any particular file: very useful if one ever comes across "The file is in use by another program or user", or "Cannot delete file: Access is denied", or some such.

After following Scott's advice, I'd saved about 10GB. Not enough. A running of WinDirStat identified one huge file and one large directory. The file was [cc inline="true"]20100314201842.vdmk[/cc], the directory [cc inline="true"]arc_20100314201842[/cc]. Being prudent I duplicated my Win732.pvm, deleted these files, crossed my fingers and restarted Parallels. And all was good with the world! Win 7 ran faster in the VM, and the size of the resulting ISO was a *much* improved 12GB, 3 DVDs worth.

If you find these files (your names will be different, these are obviously timestamps) in your Parallels VM, IT IS SAFE TO REMOVE THEM! I suspect they are left over from when I was toying with [VMWare Fusion](http://www.vmware.com/products/fusion/overview.html) and [VirtualBox](https://www.virtualbox.org/). If[cc_bash inline="true"]*vmdk[/cc] does not look like "Virtual Machine DisK" I do not know what does.

And as for the initial ISO creation when I installed win 7 in parallels back in 2010: The contents of the install CD were copied to a temp dir on the Mac, Disk Utility was used to create a DMG file, and then an ISO was created using [cc_bash]hdiutil convert /path/to/file.dmg -format UDTO -o /path/to/file.iso[/cc] It seemed faster to go this route as I had a soft copy of the install disk, and anything coming of off the hard drive was obviously going to install faster that the original install medium.


