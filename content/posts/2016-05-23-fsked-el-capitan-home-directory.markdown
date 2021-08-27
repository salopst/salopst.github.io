---
author: admin
comments: true
date: 2016-05-23 05:41:31+00:00
layout: post
link: http://stephen.yearl.us/fsked-el-capitan-home-directory/
slug: fsked-el-capitan-home-directory
title: Fsked El Capitan home directory
wordpress_id: 1274
categories:
- Apple
- os x
- tech
tags:
- install
- OS X
- ruby
- sysadmin
---

Not entirely sure how I managed to hose my user directory, but I did, and it followed a boot into safe mode (reboot and SHIFT) in order to update an ancient [MacPorts](https://www.macports.org/) installation; [homebrew](http://brew.sh/) sort of replaced that for my usage. OK, no biggie. I have back ups right? I do, but those back up in recent months have been based on Apple's [Time Machine](https://en.wikipedia.org/wiki/Time_Machine_%28OS_X%29). I changed to this from [Carbon Copy Cloner](https://bombich.com/) by means of experiment. CCC has been bullet-proof, and I have always used it for family members, but there was something enticing about the seeming simplicity of Time Machine... something that is great for restoring files, but not so great, it turns out, for a full system restore. Suffice to say that a combination of backup solutions really is the way to go.

There's no point in documenting the failures of Time Machine to restore my system "as was", better to say that from a hosed user directory (specifically something with ~/Applications and ~/Library), and after several attempts to restore:

Boot into guest user account and copy busted ~ dir to an external spinning platter hd.

Get new drive from Amazon of the UK; not the best price, but next day delivery, and that is pretty important right now. The Old Crucial MX100 500 GB drive may or may not be fsked, but It has gone through A LOT of write cycles over the past two years, and I could do with an additional drive in case of future failures anyway, so not pissing about, got the Samsung Evo 850, 500GB, and a few dongles. Very happy with the purchases, actually.

[caption id="attachment_1275" align="aligncenter" width="300"][![sammy-850-evo](http://stephen.yearl.us/wp-content/uploads/2016/05/sammy-850-evo-300x167.jpg)](http://stephen.yearl.us/wp-content/uploads/2016/05/sammy-850-evo.jpg) sammy-850-evo and accessories[/caption]

New, clean OS X 10.11.5 install

Hey... it's an opportunity to clear out years of crud... old compilers, settings weird dot files all sorts of "system shit" that's accumulated over the past 12 freaking years, and more than a couple of Macs, and to throw out apps that haven't been used in Lord knows how long. It's a bit of a PITA, but I think less so, perhaps, than dealing with all the quirks of years of accumulated cruft.

---------
With the Sammy external, CMD+R boot into recovery mode, and select install new OS on the Sammy. OS X check the validity of the current system on disk and then goes and downloads El Cap. in this case. About 4 hours. Boot from the external drive. Create new admin user, log into iCloud with AppleID, then install:
## Apps
* [Dropbox](http://www.dropbox.com/)
* [1password](https://agilebits.com/)
* [HMA](https://www.hidemyass.com/)
* [Firefox
](https://www.mozilla.org)Lord only knows what add ons and such I had installed. I guess these will come back to me on an as-needed basis
¡¡¡ [Carbon Copy Cloner](https://bombich.com/) !!!
* [Alfred 2](https://www.alfredapp.com/blog/announcements/alfred-v2-is-here/) because this is the way my fingers now work. And somewhat amazingly, and old post of mine proves to be surprisingly useful, and that is sort of the purpose of this blog thingamajig.  [http://stephen.yearl.us/alfred-2-workflows/
](http://stephen.yearl.us/alfred-2-workflows/)* [Flycut](https://itunes.apple.com/gb/app/flycut-clipboard-manager/id442160987?mt=12)
* [homebrew](http://brew.sh/)
brew install git (and zsh, imagemagick, lame, openssl, lua, tokyo-cabinet, urlview, npm)
brew cask install macvim
brew cask install mactex
brew install dnscrypt --with-plugins
--- MUCH MUCH MORE AS AND WHEN REQUIRED

* [TexStudio](http://www.texstudio.org/)
* [Skim PDF Reader](http://skim-app.sourceforge.net/)

AppCleaner
Grand Perspective
Transmission

Textmate,
bundles and packages to come later
nvAlt
Sublime Text 3
IA Writer

Skype
WhatsApp
VLC
Screenflow 5
Handbrake
Pixelmator
Boom 2

Parallels
add VMs later... win 10, win 95 (yeah, really!), PC-BSD

Karabiner
Hammerspoon
Maid -- a gem -- deal with gems later!

## "Files"
* copy over ~/.zshrc, ~/Documents, ~/Music (Launch iTunes... all good), ~/Pictures (launch Photos... all good)
And now a working system that sort of is mine, but is not. Much tweaking remains.

Parallels VMs (Win 98, Win 10, Ubuntu Gnome) -- didn't back these up. Oh well. Never really used them much anyway.

=====
To do:

Source Tree
Newer git tools? The whole git issue is going to be interesting when I get to look at that.
Mathematica 9 -- lost the license key?

Fonts -- Cousine, Nitti, Yale?, Ancient Greek, Office Code Pro...Computer Modern...??
color profiles
NTFS drivers and shit
Bit torrent Sync ?
Mega ?
Cloud app ?
Google drive?
Rubies and management
Rails, pythons etc.
npm, node js etc
macports? Quite possibly the thing that got me into this mess, but then again this is a fresh install

Fluid app -- protonmail, gmail, dict.cc, keybr

Adobe -- EEK!!
