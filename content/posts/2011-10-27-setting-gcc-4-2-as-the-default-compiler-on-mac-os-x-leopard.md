---
author: salopst
origin: posterous
comments: true
date: 2011-10-27 15:00:01+00:00
lastMod: 2021-08-31 06:23:00+01:00
layout: post
slug: setting-gcc-4-2-as-the-default-compiler-on-mac-os-x-leopard
title: Setting GCC 4.2 as the default compiler on Mac OS X Leopard
categories:
- tech
tags:
- c
- os x
- apple
---


Im my experience (limited), changing CC in .profile does not change Lion's (10.7.2) defaulting to i686-apple-darwin11-llvm-gcc-4.2. I wonder if this has anything to do with Apple's own sym linking:
a partial: `$ls -la /usr/bin | grep .*gcc.*`:

```bash
lrwxr-xr-x     1 root   wheel        12 25 oct 19:31 cc -> llvm-gcc-4.2lrwxr-xr-x     1 root   wheel        12 25 oct 19:31 gcc -> llvm-gcc-4.2lrwxr-xr-x     1 root   admin        32 25 oct 19:31 llvm-gcc-4.2 -> ../llvm-gcc-4.2/bin/llvm-gcc-4.2
```

I am wary about breaking these and adding my own to `usr/bin/gcc-4.2` per Martin v. Löwis's answer.



* * *



My stackoverflow response.... no one noticed I was running Lion in this response... odd b/c Leopard ships with GCC.
