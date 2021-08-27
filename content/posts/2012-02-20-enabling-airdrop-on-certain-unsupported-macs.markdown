---
author: admin
comments: true
date: 2012-02-20 13:59:34+00:00
layout: post
link: http://stephen.yearl.us/enabling-airdrop-on-certain-unsupported-macs/
slug: enabling-airdrop-on-certain-unsupported-macs
title: Enabling AirDrop on (certain) unsupported Macs
wordpress_id: 191
categories:
- tech
tags:
- OS X
---

Macs that support AirDrop ( must have OS X Lion): 

MacBook Pro (Late 2008 or newer)* 
MacBook Air (Late 2010 or newer) 
MacBook (Late 2008 or newer)* 
iMac (Early 2009 or newer) 
Mac Mini (Mid 2010 or newer) 
Mac Pro (Early 2009 with AirPort Extreme card, or Mid 2010) 
* The MacBook Pro (17-Inch Late 2008) and the white MacBook (Late 
2008) do not support AirDrop. 

 ================ 
My early 2008 Macbook pro does not but....
```bash
defaults write com.apple.NetworkBrowser BrowseAllInterfaces 1
killall Finder && open /System/Library/CoreServices/Finder.app
```

and... Boomshaka!:
[caption id="attachment_192" align="aligncenter" width="321"][![Enabling Airdrop on an early 2008 MBP](http://sjy.yearl.us/wp-content/uploads/2013/04/airdrop_early_2008_MBP.png)](http://sjy.yearl.us/wp-content/uploads/2013/04/airdrop_early_2008_MBP.png) Enabling Airdrop on an early 2008 MBP[/caption]
