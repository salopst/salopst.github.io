---
title: "KMonad, Colemak, key rebinds, typing and such"
author: yearluk
date: 2021-12-13T14:12:13+00:00
lastMod: 2022-03-25T06:45:16+00:00
origin: scratch
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories: 
- Tech
- Linux
tags:
- keyboard
- hardware
- keybindings
- keymaps
---

I don't know why— boredom, perhaps? A never ending desire to fill the void with *something*, like Kierkegaard's degenerate aesthete?— but I'm sort of interested in learning the Colemak keyboard layout. Perhaps it's a feeble attempt to gloss over the fact that I never really learned to touch-type properly anyway. Quién sabe?

At the very least, I should learn just how much QWERTY muscle memory there is in my fingers and wrists (even [the broken one](https://stephen.yearl.us/oopsies-iii/), where the actions of digiti III and IV were transposed almost ten years ago). It was a little weird that the muscles that should move II are wired to IV and vice versa, but brain has sort of compensated for that. Nothing short of amazing really.

## Colemak

Why? Well, we all know the history of QWERTY, so no need to repeat that. It's suboptimal (depending on how you define optimal, ofc), and other keyboard layouts not hampered by the egigencies of lever-and-cog operated buttons are grouped in such a way as to make more use of the stonger fingers, generally dominant hand, whatever.

Aaaand Colemak, it seems, is a re-ordering of keys such that many often used letters fall under the stronger fingers of the right hand on the home row. Neat. Also, it is not as crazy as the better-known Dvorak, since punctuation and several QWERTY locations remain in situ.

## Desired keyboard modifications

- Have had Caps Lock mapped to Ctrl for some time. Thanks `XModmap`!
- **WANT** Caps Lock *tap* to backspace and *hold* for Ctrl
- **WANT** tap shifts to be parens, hold for regular shift
- **WANT** *SOMETHING* + ijkl as arrow keys
- **WANT** space + something as a pseudo numberpad

~/$HOME/.Xmodmap`:

```bash
clear lock
clear control
add control = Caps_Lock Control_L Control_R
keycode 66 = Control_L Caps_Lock NoSymbol NoSymbol
```

## Getting keysyms and keycodes-- an example

We can use `xev` to get 'code points' for keypress (and release) events. So, for example, the `【fn】` button on the Lenovo Thinkpad T460:

```bash
KeyRelease event, serial 37, synthetic NO, window 0xa800001,
    root 0x7a5, subw 0x0, time 41053611, (272,536), root:(310,614),
    state 0x0, keycode 151 (keysym 0x1008ff2b, XF86WakeUp), same_screen YES,
    XLookupString gives 0 bytes:
    XFilterEvent returns: False
```

## Installing KMonad

1. Install [stack](https://github.com/commercialhaskell/stack) to compile Haskell projects. We are going to be using this to compile [KMonad](https://github.com/kmonad/kmonad):

```bash
curl -sSL https://get.haskellstack.org/ | sh
```

2. Compile Kmonad:

```bash
cd ~/src && git clone git@github.com:kmonad/kmonad.git
cd kmonad
# stack build   # To build only the binary
# stack haddock # To build the binary and the docs
stack install # builds and installs
```

3. Get the system keyboard (here a laptop):

```bash
ls /dev/input/by-path
#=>
platform-i8042-serio-0-event-kbd
```

External baoads are listed in `/dev/input/by-id`

5. Run KMonad

```bash
kmonad ~/.config/kmonad/salopst-kmonad.kbd
#=> kmonad: /dev/uinput: openFd: permission denied (Permission denied)
sudo modprobe uinput
sudo groupadd uinput
sudo usermod -aG input `whoami`
sudo usermod -aG uinput `whoami`
```

Make a file `~/.config/kmonad/50-kmonad-input.rules` containing

```text
KERNEL=="uinput", MODE="0660", GROUP="uinput", OPTIONS+="static_node=uinput"
```

and copy it to the relevant udev directory

`sudo cp ~/.config/kmonad/50-kmonad-input.rules /etc/udev/rules.d/`

and logout/login.

## Configuring KMonad

- Gonna keep my config in `$XDG_HOME/kmonad/salopst-kmonad.kbd`

- Load up a copy of the tutorial in editor *du jour* and work though the tutorial:

```bash
wget https://github.com/kmonad/kmonad/blob/master/keymap/tutorial.kbd -O $HOME/.config/kmonad/kmonad-tutorial2.kbd
code $HOME/.config/kmonad/kmonad-tutorial.kbd
```

Make thee the changes here and there, run the modifications, make changes, rerun the modified config… rinse and repeat. You know the trial-and-error drill.

Current configuration gives me:

- "Left-hand" numberpad when holding space.
- Navigation with  【i】↑,【j】←,【k】↓ and【l】→ when holding space.
- Left and right parens when tapping (but not holding) left and right shift
- Capslock as Ctrl when held; backspace when tapped
- Colemak layer when pressing 【F12】

{{< image src="/uploads/2022-03-25-salopst-kmonad.png" alt="KMonad Layout" position="center" style="border-radius: 30px;" >}}
[http://www.keyboard-layout-editor.com/#/gists/0a3ef725e2c72fee30bd9a1e3301927a](http://www.keyboard-layout-editor.com/#/gists/0a3ef725e2c72fee30bd9a1e3301927a)

## Una pequeña problema

The input source will differ depending on whether or not an external keyboard is used. This is problematic becuase my laptop is often plugged into a Lenovo Ultradock to which is connected a USB keyboard, thus, either one of two should be un-commented, depending on the connection.

```bash
(defcfg
  ;; laptop... `ls /dev/input/by-path`
  ;; input (device-file "/dev/input/by-path/platform-i8042-serio-0-event-kbd")
  ;; desktop... `ls /dev/input/by-id `
     input (device-file "/dev/input/by-id/usb-MAX_Blackbird_TKL_MAX_Blackbird_TKL-event-kbd")
)
```

**TODO** Wrap `Kmonad` in a script to check if external boards are present, so an "If I am docked do load X" sort of thing

## References and resources

- "Colemak central": <https://colemakmods.github.io/mod-dh/>
- A Modern Space Cadet: <https://stevelosh.com/blog/2012/10/a-modern-space-cadet/#s17-shift-parentheses>
- KMonad tutorial file <https://github.com/kmonad/kmonad/blob/master/keymap/tutorial.kbd>
- KMonad example for the HHK mod layer: <https://gist.github.com/foosel/774f3d47f80ff4759e3ca133451c3ef0>
- KMonad vi layer: <https://github.com/salahdin-ahmed/dotfiles/tree/master/.config>

### Typing tutor/test sites

- <https://monkeytype.com>
- <https://www.ratatype.com/>
- <https://www.typing.com/>
- <https://www.typingclub.com/>
- <https://keybr.br/>
- <https://10fastfingers.com>
- <https://www.colemak.academy/>
