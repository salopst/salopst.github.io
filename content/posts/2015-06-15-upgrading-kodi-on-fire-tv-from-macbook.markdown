---
author: admin
comments: true
date: 2015-06-15 05:42:34+00:00
layout: post
slug: upgrading-kodi-on-fire-tv-from-macbook
title: Upgrading Kodi on Fire TV from Macbook
wordpress_id: 910
categories:
- tech
---

From: [http://kodi.wiki/view/HOW-TO:Install_Kodi_on_Fire_TV#tab=OS_X](http://kodi.wiki/view/HOW-TO:Install_Kodi_on_Fire_TV#tab=OS_X)

Download APK:
[https://www.apkmirror.com/apk/xbmc-foundation/kodi/kodi-15-0-beta1-android-apk-download/](https://www.apkmirror.com/apk/xbmc-foundation/kodi/kodi-15-0-beta1-android-apk-download/)
(Or from wherever future versions of it happen to be)
[cc]
❯ adb kill-server
❯ adb start-server
* daemon not running. starting it now on port 5037 *
* daemon started successfully *
❯ adb connect 192.168.1.203
connected to 192.168.1.203:5555
❯ cd ~/Downloads

❯ adb install kodi-14.2-Helix-armeabi-v7a.apk
1285 KB/s (62638253 bytes in 47.572s)
pkg: /data/local/tmp/kodi-14.2-Helix-armeabi-v7a.apk

[/cc]
Success!
