---
author: admin
origin: wordpress
comments: true
date: 2015-06-26T13:26:53+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: homebrew-woes-wtf
title: homebrew woes. WTF?
wordpress_id: 894
categories:
- Tech
tags:
- Homebrew
- sysdamin
---

```bash
sudo chown -R $(whoami):admin /usr/local/lib/node_modules
sudo chown -R $(whoami):admin $(brew --prefix)
==========

brew update
# ==> fails with "error: Your local changes to the following files would be overwritten by merge:"
cd $(brew --prefix)
brew cleanup --force
brew untap homebrew/dupes
brew untap homebrew/versions
brew untap caskroom/cask
brew untap phinze/cask
brew prune
brew cleanup --force -s
rm -rf "$(brew --cache)"
brew tap phinze/cask
brew tap caskroom/cask
brew tap homebrew/dupes
# ==> Tapping homebrew/dupes
Cloning into '/usr/local/Library/Taps/homebrew/homebrew-dupes'...
remote: Counting objects: 40, done.
remote: Compressing objects: 100% (40/40), done.
remote: Total 40 (delta 1), reused 12 (delta 0), pack-reused 0
Unpacking objects: 100% (40/40), done.
Checking connectivity... done.
Tapped 37 formulae (99 files, 404K)
brew tap homebrew/versions
git clean -fd
git reset --hard
git fetch origin
git reset --hard origin/master
>> HEAD is now at 9c3bba5 pdf2svg: update 0.2.3 bottle.
git status
>>On branch master
>>nothing to commit, working directory clean
```
-----
-----
-----

```bash
brew --config
HOMEBREW_VERSION: 0.9.5
ORIGIN: https://github.com/Homebrew/homebrew
HEAD: 1024bbbc56971eac629863216a0d190811192561
Last commit: never
HOMEBREW_PREFIX: /usr/local
HOMEBREW_CELLAR: /usr/local/Cellar
CPU: 8-core 64-bit ivybridge
OS X: 10.10.3-x86_64
Xcode: 6.3.2
CLT: 6.3.2.0.1.1431401888
Clang: 6.1 build 602
X11: 2.7.7 => /opt/X11
System Ruby: 2.0.0-p481
Perl: /usr/bin/perl
Python: /usr/bin/python
Ruby: /usr/bin/ruby
Java: 1.6.0_65
```

-----
-----
-----

```bash
brew --env
HOMEBREW_CC: clang
HOMEBREW_CXX: clang++
MAKEFLAGS: -j8
CMAKE_PREFIX_PATH: /usr/local
CMAKE_INCLUDE_PATH: /usr/include/libxml2:/System/Library/Frameworks/OpenGL.framework/Versions/Current/Headers
CMAKE_LIBRARY_PATH: /System/Library/Frameworks/OpenGL.framework/Versions/Current/Libraries
PKG_CONFIG_LIBDIR: /usr/lib/pkgconfig:/usr/local/Library/ENV/pkgconfig/10.10
ACLOCAL_PATH: /usr/local/share/aclocal
PATH: /usr/local/Library/ENV/4.3:/usr/bin:/bin:/usr/sbin:/sbin
```

-----
-----
-----

```bash
brew list
ack		    	freetype		libtiff			pkg-config
aften			fribidi			libtool			qt
autoconf		gdbm			libvorbis		rbenv
automake		gettext			libvpx			rbenv-gem-rehash
avidemux		git			    libyaml			readline
bash			gmp			    lua 			rsync
bazaar			hevea			lzo	    		ruby
brew-cask		imagemagick		makedepend		ruby-build
cask			jpeg			mariadb			sqlite
chruby			lame			mcrypt			tmux
class-dump		libass			mercurial		tokyo-cabinet
cmake			libdca			mhash			urlview
cscope			libdvdcss		mutt			whereami
curl			libevent		node			x264
emacs			libffi			objective-caml	xvid
enscript		libgcrypt		opencore-amr	xz
faac			libgpg-error	openssh			zsh
faad2			libksba			openssl
fish			libogg			pandoc
fontconfig		libpng			pcre
```

### As of a [clean install](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/FAQ.md#how-do-i-uninstall-homebrew) (script now @ ``~/uninstall-brew.rb`):

```bash
brew list
antigen		gdbm		libtiff		macvim		tokyo-cabinet
cask		imagemagick	libtool		node		urlview
chruby		jpeg		libvorbis	openssl		whereami
cscope		lame		little-cms	pcre		xz
emacs		libogg		little-cms2	pkg-config	zsh
freetype	libpng		lua		    rbenv
```
