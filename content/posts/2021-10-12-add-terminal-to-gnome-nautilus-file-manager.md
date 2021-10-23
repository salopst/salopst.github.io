---
title: "Adding a terminal to nautilus, GNOME's default file manager"
slug: add-terminal-to-gnome-nautilus-file-manager
author: yearluk
origin: hugo
date: 2021-10-11T06:45:19+01:00
lastMod:
description: "Adding a terminal to nautilus, GNOME's default file manager."
draft: false
toc: false
categories:
- Tech
tags:
- GNOME
- file manager
- install
- Ubuntu
- Linux
---

Unlike KDE's default GUI file manager, Dolphin, GNOME's nautilus does not have a built in terminal. Some wonderful person has written a handy-dandy solution to this, and it works wonderfully. It and installation and configuration details can be found at [https://github.com/flozz/nautilus-terminal](https://github.com/flozz/nautilus-terminal)

```bash
sudo apt install python3-nautilus python3-psutil python3-pip libglib2.0-bin dconf-editor

sudo pip3 install nautilus-terminal
sudo nautilus-terminal --install-system
nautilus -q
```

`F4` toggles.

Lovely stuff. One minor quibbe, though: whilst navigation via the GUI will change the "`PWD`" at the prompt, it does not work the other way around. Still, this will prove to be super useful. **EDIT** This is an open issue: [https://github.com/flozz/nautilus-terminal/issues/21](https://github.com/flozz/nautilus-terminal/issues/21)

{{< image src="/img/uploads/2021-10-12-gnome-nautilus-terminal.png" alt="Terminal prompt in GNOME Terminal" position="center" style="border-radius: 30px;" >}}
