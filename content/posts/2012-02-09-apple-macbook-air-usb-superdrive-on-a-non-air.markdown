---
author: admin
comments: true
date: 2012-02-09 13:53:37+00:00
layout: post
link: http://stephen.yearl.us/apple-macbook-air-usb-superdrive-on-a-non-air/
slug: apple-macbook-air-usb-superdrive-on-a-non-air
title: Apple Macbook Air USB "superdrive" on a non-Air
wordpress_id: 186
categories:
- tech
tags:
- Apple
- OS X
---

So I borrowed a mate's external USB superdrive in order to get some old files off of archived CDs,  and the internal optical drive in my April '08 MacBook Pro has long since shit the bed. Requirements for the drive suggest that an Air is required (Apple website, original packaging and a  call to an Apple store), and sure enough when plugged into the MBP running Lion (10.7.2)... no  dice. 

 I've been toying with geting some sort of Apple certification/credential, so I've a not  unreasonable collection of old (and new tech docs from them). Reading through that I came to the following: 

 as root, edit:
`/Library/Preferences/SystemConfiguration/com.apple.Boot.plist`
after:
`Kernel Flag`
 add entry: 
`mbasd=1`

Recycle the machine.... and Boomshaka!
