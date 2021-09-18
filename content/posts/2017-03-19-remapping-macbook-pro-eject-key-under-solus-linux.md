---
author: admin
origin: wordpress
comments: true
draft: false
date: 2017-03-19 12:35:43+00:00
layout: post
slug: remapping-macbook-pro-eject-key-under-solus-linux
title: Remapping Macbook Pro eject key under Solus linux
wordpress_id: 1296
categories:
- Tech
- Apple
- Linux
tags:
- Linux
- os x
- Solus
---

### Disable "Eject" in keyboard settings. It is the first entry under "Sound and Media"
### create a file, **~/.Xmodmap**, adding the line:

`keycode 151 = BackSpace`

### run 
```bash
xmodmap ~/.Xmodmap
```

### add that to wherever your startup scripts are for persistence

The keycode mappings I got from **xev**, kind of like "keyboard viewer" in OS X. Its available in the Solus repo:

```bash
sudo eopkg install xev
```
