---
author: admin
origin: wordpress
comments: true
date: 2015-07-23T11:29:29+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: customised-os-x-keybindings-with-karabiner
title: Customised OS X Keybindings.... with Karabiner
wordpress_id: 931
categories:
- Tech
- OS X
tags:
- keybinding
---

Apparently low-level keybindings in OS X used to be managed through ``~/Library/KeyBindings/DefaultKeyBinding.dict` which did not exist on this 10.10.4 system. So after having created it and added

```
{
/* Context Menu */
"\U0x3fc" = "rightMouseDown:"; /* Fun-C */
"^;" = "rightMouseDown:"; /* Ctrl-; */

/* Vim movement while Ctrl key down */
"^h" = ("moveLeft:");
"^j" = ("moveDown:");
"^k" = ("moveUp:");
"^l" = ("moveRight:");

}
```

it did, of course, not work.

Googling around a bit, I found [Karabiner (a powerful and stable keyboard customizer for OS X)](https://pqrs.org/osx/karabiner/), and this seems to be able to do the trick perfectly. So, editing ``~/Library/Application Support/Karabiner/private.xml` to include:


```xml

            VIM HJKL
            private.vim_hjkl

            __KeyToKey__
                KeyCode::H, ModifierFlag::FN,
                KeyCode::CURSOR_LEFT


                __KeyToKey__
                KeyCode::J, ModifierFlag::FN,
                KeyCode::CURSOR_DOWN


            __KeyToKey__
                KeyCode::K, ModifierFlag::FN,
                KeyCode::CURSOR_UP


            __KeyToKey__
                KeyCode::L, ModifierFlag::FN,
                KeyCode::CURSOR_RIGHT



        kybd control click
        private.keybd_to_control_click

            __KeyToKey__
            KeyCode::C, ModifierFlag::FN,
            KeyCode::VK_MOUSEKEY_BUTTON_RIGHT
```

I have two very simple sets of keybindings available to me under Karibiner. Fn+H thru L gives me VIM movement _in any app_, and Fn+c gives me access to contextual menus without the effort of right/control clicking and visual item in OS X.

Karabiner key code data is at [https://github.com/tekezo/Karabiner/blob/master/src/bridge/generator/keycode/data/KeyCode.data](https://github.com/tekezo/Karabiner/blob/master/src/bridge/generator/keycode/data/KeyCode.data)

OS X keycodes can be gotten from `events.h`, thus:

```bash
$ grep '^ *kVK' /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h|tr -d ,|while read x y z;do printf '%d %s %s\n' $z $z ${x#kVK_};done|sort -n
```
lists them all.

### Lovely jubly!
