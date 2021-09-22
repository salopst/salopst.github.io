---
author: admin
origin: wordpress
comments: true
date: 2013-07-22T23:05:50+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: automated-file-management-with-maid
title: Automated file management with maid
wordpress_id: 539
categories:
- Tech
tags:
- apps
- OS X
- Ruby
- scripts
---

I've been playing with [Hazel](http://www.noodlesoft.com/hazel.php) a bit recently, mostly so I can get a handle on it to support others' usage of a simple file automation/ housekeeping application. I like it, but it is somewhat limited in not allowed nested conditional and other basic logic statements. Anyway, what Hazel does is not much more-- and very frequently less-- that what I've been doing with ad hoc cron scripts. These are not very tidy having built built up over the years. And so I Googled and I found a x-platform, ruby based Hazel alternative in [maid](http://rubygems.org/gems/maid).

```bash
$ gem install maid
```

Well I get a slew of errors, so:

```
$ which ruby
/usr/local/bin/ruby
$ ruby -v
ruby 1.8.6 (2007-03-13 patchlevel 0) [i686-darwin8.10.1]
```

This version corresponds to Apple's default on early 2008 Macbook Pros which came preinstalled with Leopard (OS X 10.5). I guess this shows that although I am running Mountain Lion now on a mid-2012 MBP I have not had a clean OS install since April '08, and I have never done so myself on my own machine. So, proof that:

  1. I am lazy?

  2. Upgrades work 'plenty fine', and Apple do a pretty good job in this regard?

  3. I'm scared of losing all the custom build of compilers, interpreters, symlinks, scripts in odd locations doing various things, settings galore… etc, etc. that make this machine mine?


Think I'll persist on this path through Mavericks *then* start fresh with OS XI… if I am am still using an increasingly annoying Apple OS.

```bash
$ ls -la /usr/bin | grep ruby
lrwxr-xr-x     1 root   wheel        76 Jul 27  2012 ruby -> ../../System/Library/Frameworks/Ruby.framework/Versions/Current/usr/bin/ruby
-rwxr-xr-x     1 root   wheel       450 Nov 18  2011 sqlite3_ruby

$ rvm -v
rvm 1.9.0 by Wayne E. Seguin (wayneeseguin@gmail.com) [https://rvm.beginrescueend.com]
$ ls -la /Users/yearlus/.rvm/rubies/
drwxr-xr-x   8 yearlus  yearlus  272 Oct 26  2011 ruby-1.9.2-p290
```

### Update rvm:

```bash
$ cd ~/.rvm/
$ \curl -L https://get.rvm.io | bash -s -- --version latest
$ rvm -v
A RVM version 1.21.13 is installed yet 1.9.0 is loaded.
 Please do one of the following:
  * 'rvm reload'
  * open a new shell

$ rvm reload
RVM reloaded!

$ rvm -v
rvm 1.21.13 (latest) by Wayne E. Seguin <wayneeseguin@gmail.com>, Michal Papis <mpapis@gmail.com> [https://rvm.io/]

$ rvm use 1.9.2
Using /Users/yearlus/.rvm/gems/ruby-1.9.2-p290
$ which ruby
/Users/yearlus/.rvm/rubies/ruby-1.9.2-p290/bin/ruby
```

### I could fsck with `.profile`, but will keep flexible for now. Could also use the default flag:

```bash
$ rvm use 1.9.2 --default
$sudo gem install maid
dyld: Library not loaded: /Users/sjy2/.rvm/rubies/ruby-1.9.2-p290/lib/libruby.1.9.1.dylib Referenced from: /Users/yearlus/.rvm/rubies/ruby-1.9.2-p290/bin/ruby
Reason: image not found
```

### Oh, Brother!

```bash
$ rvm list known
$ rvm list
rvm rubies=> ruby-1.9.2-p290 [ x86_64 ]
$ rvm install 1.9.1
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.8/x86_64/ruby-1.9.1-p431.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
You requested building with '/usr/bin/gcc-4.2' but it is not in your path.
```
### 😠 Grrrr!

```bash
$ sudo rvm requirements
Aborting
Error: Failure while executing: git pull -q origin refs/heads/master:refs/remotes/origin/master
Failed to update Homebrew, follow instructions here: [https://github.com/mxcl/homebrew/wiki/Common-Issues](https://github.com/mxcl/homebrew/wiki/Common-Issues) and make sure `brew update` works before continuing.
Requirements installation failed with status: 1[/cc_dos]

Following worked (outputs omitted):

```bash
$ chown -R yearlus $(brew --prefix)/.git
$ sudo chgrp -R admin /usr/local
$ sudo chmod -R g+rwx /usr/local
$ sudo chmod -R o-w /usr/local
$ cd /usr/local && git reset --hard && git clean -d -f/
$rvm requirements
$brew update
$ sudo gem install maid
$ sudo gem update
```

## FINIS!!
