---
author: admin
comments: true
date: 2014-09-23 23:31:02+00:00
layout: post
slug: cleaning-up-a-homebrew-installation
title: cleaning up a homebrew installation
wordpress_id: 616
categories:
- tech, os x, Apple
tags:
- homebrew
- OS X
- ruby
- scripts
---

I keep meaning to get around to do this, but never do. This evening I took a look at [exercism.io](http://exercism.io) and the installation of its CLI program had a homebrew option, so then was a good a moment as any, that and with the imminent relsease of OS 42 (X.10.10)...

```bash
$brew -v[/cc]
```
==> 0.9.5

```bash
$sudo chown -R `whoami` /usr/local
$cd /usr/local
$git fetch origin
$git reset --hard origin/master
$brew cleanup
$brew upgrade
```

==> ALL OK!

```bash
$brew update
```

==> Err. re. tap ... but mostly OK.

--exercism install--
```bash
$brew tap homebrew/binary
$brew install exercism
```

==> Err :-( "no available formula for exercism" "searching taps..."

```bash
$brew untap homebrew/binary
$brew upgrade
$brew update
$brewcleanup
$brew tap homebrew/binary
$brew install exercism
```

==> DICE

```bash
$exercism configure --key=MY_API_KEY
```

==> config at `~/.exercism.json`
==> API key is in accounts at [Exercism.io](https://exercism.io/)


