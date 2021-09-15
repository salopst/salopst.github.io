---
author: admin
comments: true
date: 2015-07-27 05:59:42+00:00
layout: post
slug: customised-os-x-keybindings-with-karabiner-correct-shift-keys
title: Customised OS X Keybindings…. with Karabiner.... 'correct' shift keys
wordpress_id: 978
categories:
- tech
tags:
- keybinding
---

Like this fellow, [Steve Losh --  better shifting](http://stevelosh.com/blog/2012/10/a-modern-space-cadet/#better-shifting), I've been using the wrong shift keys for upper-case letters for as long as I've been using a keyboard... as well as some even more egregious errors (right ring finger for 'p', right index for 'b'... the list is nigh endless). Lo, his Karabiner solution:

**Arghh!..... It  has only been a couple of hours and this is devilishly frustrating!!**

[cc lang="xml"]

    Use the correct shift keys.
    private.correct_shift_keys

    --KeyToKey-- KeyCode::Q, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::W, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::E, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::R, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::T, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::A, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::S, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::D, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::F, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::G, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::Z, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::X, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::C, ModifierFlag::SHIFT_L, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::V, ModifierFlag::SHIFT_L, KeyCode::VK_NONE

    --KeyToKey-- KeyCode::Y, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::U, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::I, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::O, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::P, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::H, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::J, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::K, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::L, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::SEMICOLON, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::N, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::M, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::COMMA, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::DOT,   ModifierFlag::SHIFT_R, KeyCode::VK_NONE
    --KeyToKey-- KeyCode::QUOTE, ModifierFlag::SHIFT_R, KeyCode::VK_NONE
[/cc]
