---
author: admin
comments: true
date: 2015-07-22 04:27:20+00:00
layout: post
link: http://stephen.yearl.us/remapping-caps-lock-with-seil/
slug: remapping-caps-lock-with-seil
title: Remapping CAPS LOCK with seil/karabiner
wordpress_id: 959
categories:
- tech
tags:
- Apple
- keybinding
- OS X
---

For the longest time I have had caps lock set to “no action” in System Preferences >> Keyboard>> Modifier Keys:


[![caps-lock-no-action](http://stephen.yearl.us/wp-content/uploads/2015/07/caps-lock-no-action.png)](http://stephen.yearl.us/wp-content/uploads/2015/07/caps-lock-no-action.png)




But recently I’ve been playing with Vim (and also finally getting around to learning how to touch type) a little more now that I have some time on my hands, and decided that I needed an escape key that wasn’t such a PITA to get to without risking breaking my left pinkie. Enter [Karibiner](https://pqrs.org/osx/karabiner/)


Karabiner bindings are stored in [cci lang="bash" inline="true"]~/Library/Application Support/Karabiner/private.xml[/cc] the syntax of which is pretty easy to follow, and so I have entry in this file that maps caps lock to escape on the one hand, and also as a “hyper” modifier key when pressed in conjunction with certain other keys. The “code” for this is"

[cc lang="xml" nowrap="false"]
    
    
            F19 to F19
            (F19 to Hyper (ctrl+shift+cmd+opt) + F19 Only, send escape)
            private.f192f19_escape
            
                --KeyOverlaidModifier--
                KeyCode::F19,
                KeyCode::COMMAND_L,
                ModifierFlag::OPTION_L | ModifierFlag::SHIFT_L | ModifierFlag::CONTROL_L,
                KeyCode::ESCAPE
            
        [/cc]


But, apparently, the caps lock key is a “special" key— at least on Macbook Pro keyboards, and some additional configuration needs be done before entries to Karabiner’s private.xml will take effect. The fundamental new mapping of caps lock is therefore done in [seil](https://pqrs.org/osx/karabiner/seil.html.en)  (a “utility for the caps lock key and some international keys in PC keyboards.”):


[![seil-mapping-caps-lock](http://stephen.yearl.us/wp-content/uploads/2015/07/seil-mapping-caps-lock.png)](http://stephen.yearl.us/wp-content/uploads/2015/07/seil-mapping-caps-lock.png)




Here it is mapped to OS X character code 80 (the F19 key). A complete list of OS X key codes can be seen by executing:

[cc lang="bash" nowrap="false"]grep '^ *kVK’ /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h|tr -d ,|while read x y z;do printf '%d %s %s\n' $z $z ${x#kVK_};done|sort -n[/cc]
