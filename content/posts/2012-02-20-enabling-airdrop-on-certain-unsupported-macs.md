---
author: salopst
origin: posterous
comments: true
date: 2012-02-20 12:18:001+00:00
publishDate: 2012-02-20
lastMod: 2012-02-20 12:18:001+00:00
layout: post
link: http://stephen.yearl.us/enabling-airdrop-on-certain-unsupported-macs/
slug: enabling-airdrop-on-certain-unsupported-macs
title: Enabling AirDrop on (certain) unsupported Macs
categories:
- tech
tags:
- apple
- os x
- tech
- mac
---



#### Macs that support AirDrop ( must have OS X Lion):

- MacBook Pro (Late 2008 or newer)*  
- MacBook Air (Late 2010 or newer)
- MacBook (Late 2008 or newer)*
- iMac (Early 2009 or newer)
- Mac Mini (Mid 2010 or newer)
- Mac Pro (Early 2009 with AirPort Extreme card, or Mid 2010)
- * The MacBook Pro (17-Inch Late 2008) and the white MacBook (Late 2008) do not support AirDrop.

-----
-----
-----

My early 2008 Macbook pro does not but....

```bash
defaults write com.apple.NetworkBrowser BrowseAllInterfaces 1
killall Finder && open /System/Library/CoreServices/Finder.app
```

and:

Airdrop_early_2008_mbp

## 💥 Boomshaka!
