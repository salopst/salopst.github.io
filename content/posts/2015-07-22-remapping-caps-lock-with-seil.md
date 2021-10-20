---
author: admin
origin: wordpress
comments: true
date: 2015-07-22T04:27:20+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: remapping-caps-lock-with-seil
title: Remapping CAPS LOCK with seil/karabiner
wordpress_id: 959
categories:
- Tech
- Apple
tags:
- Apple
- keybinding
- OS X
---

### For the longest time I have had caps lock set to “no action” in System Preferences >> Keyboard>> Modifier Keys:

{{< image src="/uploads/caps-lock-no-action.png" alt="caps-lock-no-action" position="center" style="border-radius: 50px;" >}}

But recently I’ve been playing with Vim (and also finally getting around to learning how to touch type) a little more now that I have some time on my hands, and decided that I needed an escape key that wasn’t such a PITA to get to without risking breaking my left pinkie. Enter [Karibiner](https://pqrs.org/osx/karabiner/)

Karabiner bindings are stored in ``~/Library/Application Support/Karabiner/private.xml` the syntax of which is pretty easy to follow, and so I have entry in this file that maps caps lock to escape on the one hand, and also as a “hyper” modifier key when pressed in conjunction with certain other keys. The “code” for this is"

```xml
F19 to F19
(F19 to Hyper (ctrl+shift+cmd+opt) + F19 Only, send escape)
private.f192f19_escape

    --KeyOverlaidModifier--
    KeyCode::F19,
    KeyCode::COMMAND_L,
    ModifierFlag::OPTION_L | ModifierFlag::SHIFT_L | ModifierFlag::CONTROL_L,
    KeyCode::ESCAPE
```

But, apparently, the caps lock key is a “special" key— at least on Macbook Pro keyboards, and some additional configuration needs be done before entries to Karabiner’s private.xml will take effect. The fundamental new mapping of caps lock is therefore done in [seil](https://pqrs.org/osx/karabiner/seil.html.en)  (a “utility for the caps lock key and some international keys in PC keyboards.”):

{{< image src="/uploads/seil-mapping-caps-lock.png" alt="seil-mapping-caps-lock" position="center" style="border-radius: 50px;" >}}

Here it is mapped to OS X character code 80 (the F19 key). A complete list of OS X key codes can be seen by executing:

```bash
grep '^ *kVK’ /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h|tr -d ,|while read x y z;do printf '%d %s %s\n' $z $z ${x#kVK_};done|sort -n```
