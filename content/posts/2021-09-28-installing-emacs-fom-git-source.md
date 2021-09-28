---
title: "Installing Emacs 28.0.50 from source on Ubuntu 21.04"
slug: installing-emacs-28-0.50-from-source-on-Ubuntu-21-04
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

```bash
# yearluk
# 2021-02-23/2021-09-28
# BASH strict mode
# https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425
set -euxo pipefail
cd $HOME/src
git --depth=1 clone git://git.savannah.gnu.org/emacs.git
cd emacs
sudo apt install libpng-dev librsvg2-dev libtiff-dev libxaw7-dev libxft-dev libxml2-dev libxpm-dev libz-dev libjansson-dev make ncurses-term texinfo ttf-ancient-fonts
./autogen.sh
./configure --with-gnutls=ifavailable
make check && sudo make install
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
