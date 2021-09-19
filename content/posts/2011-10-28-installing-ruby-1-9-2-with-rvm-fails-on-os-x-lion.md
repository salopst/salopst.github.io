---
author: salopst
origin: posterous
comments: true
date: 2011-10-28T14:51:58+00:00
lastMod: 2021-08-31T06:23:00+01:00
layout: post
slug: installing-ruby-1-9-2-with-rvm-fails-on-os-x-lion
title: Installing Ruby 1.9.2 with RVM fails on OS X Lion
wordpress_id: 122
categories:
- tech
tags:
- c
- code
- os x
- ruby
- tech
---

Remove RVM, thus making for a cleaner install later:
```bash
$ RVM implode
```
Remove XCode:
```bash
$ sudo /Developer/Library/uninstall-devtools –mode=all
```
XCode is removed since in 4.2, at least, all references to gcc are linked to llvm-gcc (Apple's) own fork of gcc. llvm will NOT compile ruby.

(One can always re-install from the AppStore later)
download and install GCC-10.7-v2.pkg from [https://github.com/kennethreitz/osx-gcc-installer/downloads](https://github.com/kennethreitz/osx-gcc-installer/downloads)

This will install just the bare-bones GCC compiler. It can safely be overwritten by XCode if you decide to reinstall it, or simple removed using the same command as that used for removing XCode.
reinstall RVM: [http://beginrescueend.com/rvm/install/](http://beginrescueend.com/rvm/install/)
Install the package manager "homebrew" from [http://mxcl.github.com/homebrew/](http://mxcl.github.com/homebrew/) and with it install libiconv.

```bash
$ brew install libiconv
```

This will install several files to homebrew's home directory "`/usr/local/cellar`"
backup `/usr/local/lib/libiconv.2.dylib[/cci], and copy `/usr/local/cellar/libiconv/1.14/lib/libiconv.2.dylib` into it's place in [cci]/usr/local/lib`

At this point you should have everything in place to install ruby 1.9.2 using RVM:

```bash
CC=gcc-4.2 rvm install 1.9.2-p290 --with-iconv-dir=/usr/local/Cellar/libiconv/1.14.1
```

(RVM does not actually support --with-iconv-dir, if you check the config.log file, but it might someday... in which case the copying of libiconv will be unnecessary)

Now go install gems and rails and anything else you might need.

-----

{my stack overflow comment}
