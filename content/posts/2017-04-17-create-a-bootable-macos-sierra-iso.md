---
author: admin
origin: wordpress
comments: true
draft: false
date: 2017-04-17 03:38:31+00:00
layout: post
slug: create-a-bootable-macos-sierra-iso
title: Create a bootable ISO of macOS Sierra
wordpress_id: 1315
categories:
- Tech
- Apple
- Linux
tags:
- Linux
- os x
- Solus
---

Playing with Solus recently got me to thinking that maybe I could live again in a Linux world, but rather than running Linux in a Virtual Machine (that would currently be Parallels 12 for me), what if I dit it the other way around? That is, run OS X 10.12.4 (macOS Sierra) as a guest and Linux as a host...

Download MacOS Sierra from AppStore.

Reboot.

```bash
❯ hdiutil attach /Applications/Install\ macOS\ Sierra.app/Contents/SharedSupport/InstallESD.dmg -noverify -nobrowse -mountpoint /Volumes/install_app
❯ hdiutil create -o /tmp/Sierra.cdr -size 7316m -layout SPUD -fs HFS+J
❯ hdiutil attach /tmp/Sierra.cdr.dmg -noverify -nobrowse -mountpoint /Volumes/install_build
❯ asr restore -source /Volumes/install_app/BaseSystem.dmg -target /Volumes/install_build -noprompt -noverify -erase
❯ rm /Volumes/OS\ X\ Base\ System/System/Installation/Packages
❯ cp -rp /Volumes/install_app/Packages /Volumes/OS\ X\ Base\ System/System/Installation/
❯ cp -rp /Volumes/install_app/BaseSystem.chunklist /Volumes/OS\ X\ Base\ System/BaseSystem.chunklist
❯ cp -rp /Volumes/install_app/BaseSystem.dmg /Volumes/OS\ X\ Base\ System/BaseSystem.dmg
❯ hdiutil detach /Volumes/install_app
❯ hdiutil detach /Volumes/OS\ X\ Base\ System/
❯ hdiutil convert /tmp/Sierra.cdr.dmg -format UDTO -o /tmp/Sierra.iso
❯ mv /tmp/Sierra.iso.cdr ~/Desktop/Sierra.iso
```

I grabbed this off the internets somewhere, and I do not know whence. Thanks to the original author, whoever ~~she~~ he may be.
**EDIT [2017-05-08]**: Found you: [https://gist.github.com/arobb/447a962af4f07ef81e79987d686275e5](https://gist.github.com/arobb/447a962af4f07ef81e79987d686275e5)
