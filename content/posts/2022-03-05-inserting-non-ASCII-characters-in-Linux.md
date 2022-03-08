---
title: "Inserting non ASCII chars in Linux: XCompose and AltGr" 
date: 2022-03-05T19:11:20+00:00
lastMod:
slug: inserting-non-ASCII-characters-in-Linux
layout: post
author: yearluk
origin: hugo
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
- Linux
tags:
- Linux
- Desktop
- howto
---
# Inserting non ASCII chars in Linux: XCompose and AltGr

## XCompose

`/usr/share/X11/locale/compose` contains thee compose table for various locales. Current locale is found with, err, `locale`. Strange that /s.

The tables below contain a handy reference for my most commonly used (default) altGr inserts with exceptions for 'European' diacritics, `altGR+'+e` for e acute 'é' etc. Since these are so commoly used-- and there are so many of them-- they are not worth listing.

Having realised that there were a couple of missing Old English letters (wynn and yogh), and only ash eth and thorn are represented in the defaults, I added to an seperate `!/.XCompose` file. This file is *additive* to the defaults.

So, whilst I was at that, I added a few IPA glyphs as well. And some Greek entries. The current [.Xcompose](https://gist.github.com/salopst/30aa6db8e59bf1347c32bfb875c0640b), also included below.

For example...

```yaml
<Multi_key> <w> <y>     : "ƿ"  # Latin Small Letter Wynn         U+01BF
<Multi_key> <W> <Y>     : "Ƿ"  # Latin Capital Letter Wynn       U+01F7
<Multi_key> <g> <h>     : "ȝ"  # Latin Small Letter Yogh         U+021D
<Multi_key> <G> <H>     : "Ȝ"  # Latin Capital Letter Yogh       U+021C
```

**NB**

In addition to using, say `altGr+W+Y` for "Ƿ", one could equally use `Ctrl+Shift+U+01F7`

## Common defaults

- `altGr + key1 + key2 [+key3] = result`

|key1|key2|result|name|
|---|---|---|---|
| l | = | £ | GBP |
| e | = | € | Euro |
| r | = | ₹ | Rupee |
| y | = | ¥ | Yen |
| c | \| | ¢ | cent |
| . | : | ∵ | because |
| : | . | ∴ | therefore |
| o | o | ° | degree |
| = | _ | ≡ | identical |
| = | / | ≠ | not equal |
| < | = | ≤ | less or equal to |
| > | = | ≥ | greater or equal to |
| + | - | ± | plus-minus|
| p | ! | ¶ | paragraph (pilcrow) |
| s | ! | § | section |
| t | h | þ | thorn |
| d | h | ð | eth |
| a | e | æ | ash |
| o | e | œ | oe-ligature |

And some 3-keyers:

|key1|key2|key3|result|name|
|---|---|---|---|---|
| - | - | . | – | n-dash |
| - | - | - | — | m-dash |
| p | o | o | 💩 | m-dash |

## Current .XCompose

{{<gist salopst 30aa6db8e59bf1347c32bfb875c0640b >}}

## Resources

- <https://wiki.debian.org/XCompose>
- <https://help.ubuntu.com/community/GtkComposeTable>
- <https://cgit.freedesktop.org/xorg/lib/libX11/plain/nls/en_US.UTF-8/Compose.pre>
- <https://unicode-table.com/en/search>
