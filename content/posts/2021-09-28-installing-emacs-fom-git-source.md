---
title: "Installing Emacs 28.0.50 from source on Ubuntu 21.04"
slug: installing-emacs-28-0-50-from-source-on-Ubuntu-21-04
date: 2021-09-28T05:30:00+01:00
layout: post
author: yearluk
origin: hugo
description: Installing Emacs 28.0.50 from source on Ubuntu 21.04... and creating a GNOME desktop file.
draft: false
categories:
- Tech
tags:
- editors
- emacs
---

## Latest Emacs (28.0.50)

There has been much discussion in various Emacs fora about the speed increase brought about by the inclusion of nativecomp, that is the build option `--with-native-compilation`. This essentially means that support has been added for compiling EmacsLisp to native code using `libgccjit`. Now all Elisp packages shipped with Emacs are compiled to native code, providing a noticeable out-of-the-box performance improvement.

My previously installed version of 26.3 that is still current with the base install of Pop!_OS (and that available from the `apt` repositories) does not have this feature.

```bash
# yearluk
# 2021-02-23/2021-09-28
# BASH strict mode
# https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425
set -euxo pipefail
cd $HOME/src
git --depth=1 clone git://git.savannah.gnu.org/emacs.git
cd emacs

sudo apt install libpng-dev librsvg2-dev libgccjit-dev libgcc-10-dev libtiff-dev libxaw7-dev libxft-dev libxml2-dev libxpm-dev libz-dev libjansson-dev make ncurses-term texinfo ttf-ancient-fonts

./autogen.sh

./configure \
--with-native-compilation  \
--with-gnutls=ifavailable \
--with-json \
--with-jpeg \
--with-png \
--with-rsvg \
--with-tiff \
--with-wide-int \
--with-xft \
--with-xml2 \
--with-xpm

make bootstrap
sudo make install
emacs --version
#==> GNU Emacs 28.0.50
```

And save a `.desktop` file to `$HOME/.local/share/applications`...

```text
[Desktop Entry]

# 2021-09-28
# yearluk
# $HOME/.local/share/applications/yearluk.emacs.desktop
# desktop-file-validate yearluk.emacs.desktop
# https://wiki.archlinux.org/index.php/Desktop_entries

Name=Emacs (compiled from Git Source)
Comment=Emacs (compiled from Git Source)
Type=Application
Terminal=false
Version=1.0

Exec=/usr/local/bin/emacs
Icon=/home/yearluk/bin/emacs-icon.png

# Describes the categories in which this entry should be shown
# Categories=
```
