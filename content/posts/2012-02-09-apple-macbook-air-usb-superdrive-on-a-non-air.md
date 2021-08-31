---
author: salopst
origin: posterous
comments: true
date: 2012-02-09 08:35:01+00:00
lastMod: 2021-08-31 06:23:00+01:00
layout: post
link: http://stephen.yearl.us/apple-macbook-air-usb-superdrive-on-a-non-air
slug: apple-macbook-air-usb-superdrive-on-a-non-air
title: Apple Macbook Air USB "superdrive" on a non-Air
wordpress_id: 126
categories:
- tech
- apple
- hardware
tags:
- apple
- mac
- os x
- tech
---


So I borrowed a mate's external USB superdrive in order to get some
old files off of archived CDs, and the internal optical drive in my
April '08 MacBook Pro has long since shit the bed. Requirements for the
drive suggest that an Air is required (Apple website, original
packaging and a call to an Apple store), and sure enough when plugged
into the MBP running Lion (10.7.2)... no dice.

I've been toying with geting some sort of Apple
certification/credential, so I've a not unreasonable collection of old
(and new tech docs from them). Reading through that I came to the
following:

as root, edit:
`/Library/Preferences/SystemConfiguration/com.apple.Boot.plist`

after:

`<key>Kernel Flag</key>` 

add entry:

`<string>mbasd=1</string>`

Recycle the machine, and...
#### 💥 bingo!