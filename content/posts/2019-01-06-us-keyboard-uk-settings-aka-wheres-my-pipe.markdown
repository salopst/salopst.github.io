---
author: admin
comments: true
date: 2019-01-06 05:57:12+00:00
layout: post
link: http://stephen.yearl.us/us-keyboard-uk-settings-aka-wheres-my-pipe/
slug: us-keyboard-uk-settings-aka-wheres-my-pipe
title: 'US Keyboard, UK settings: AKA where''s my pipe?'
wordpress_id: 1474
categories:
- Linux
- tech
tags:
- debian
- keyboard
- settings
---

SSHed into a local Debian 9 server with a USB-attached US ANSI keyboard only to find the settings geared-up for a UK ISO keyboard. Not a biggie except for the location of the "|" ... pretty important as chars go 😋

So...


```bash
sudo install console-common
sudo dpkg-reconfigure keyboard-configuration
```

Follow all the things

```bash 
sudo service keyboard-setup restart
```

PROFIT!!
