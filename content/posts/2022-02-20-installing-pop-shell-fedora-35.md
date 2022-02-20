---
title: "Installing Pop Shell Tiling Window Manager on Fedora 35"
date: 2022-02-20T02:44:35+00:00
lastMod:
author: yearluk
origin: scratch
layout: post
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
- Linux
tags:
- desktop
- tiling WM
- Fedora
- PopOS
---

# Installing Pop Shell Tiling Window Manager on Fedora 35

Fedora gets updates to GNOME more quickly than does Pop which languishes on its Ubuntu base. This is a shame for Pop users (having to wait for their fix of shiny); it's also a blessing, because, you know stability. Pop does have it's lovely tiling extension, though, by default, but this has not been upstreamed to GNOME proper. Maybe because of the politics?

Anyway. Let's bring some pop goodies to Fedora:


## Check current system:

```bash
uname -r
cat /etc/os-release
gnome-shell --version
gnome-extensions list
```

## Install latest GNOME icon themes:

So out with the old Adwaita brown icons and in with the new multi-shaded and graded blue.

```bash
sudo dnf install autoconf automake git libappstream-glib make meson ninja-build ostree sassc
cd ~/src && git clone --depth=1 https://gitlab.gnome.org/GNOME/adwaita-icon-theme.git
cd adwaita-icon-theme
./autogen.sh
make
sudo make install
gsettings set org.gnome.desktop.interface icon-theme Adwaita
cd ~/src
```

## Install Pop!_OS GTK theme:

- https://github.com/pop-os/gtk-theme

```bash
sudo dnf install -y sassc git inkscape meson ninja-build optipng gtk-murrine-engine
cd ~/src && git clone https://github.com/pop-os/gtk-theme.git
mv gtk-theme pop-gtk-theme
cd pop-gtk-theme
meson build && cd build
ninja
ninja install
```

## Nord terminal theme

Well. Since we're doing themes... might just as well trow the mighty Nord in as well.

```bash
cd ~/src && git clone https://github.com/arcticicestudio/nord-gnome-terminal.git
cd nord-gnome-terminal/src && ./nord.sh
```

## Install Pop shell (the tiling bit... and the launcher)

- https://github.com/pop-os/shell#installation
- https://www.youtube.com/watch?v=fSXUoVqIjy0

There are two options. (1) package and (2) source:

1. `sudo dnf install -y gnome-shell-extension-pop-shell xprop` I've not tested this.

2.... Source install -- 2022-02-18

```bash
# General update
sudo dnf update -y && sudo dnf distro-sync -y && sudo dnf autoremove -y
sudo dnf install -y \
 autoconf automake clang cmake \
 glib* glib2-devel gnome-builder gridsite-clients kbd \
 ninja-build nodejs meson npm sassc

# NPM
if command -v npm &> /dev/null | grep 'no such'
then
   sudo dnf install -y npm
else
   echo "NPM installed ..... Y"
fi
# sometimes get perm issues with installing to /usr/local/lib/node_modules
mkdir -p $HOME/.config/npm-global
npm config set prefix '~/.config/npm-global'
export PATH=~/.config/npm-global/bin:$PATH >> $HOME/.profile
source $HOME/.profile

#
# ^^^ all of that for just this:
#

cd src && git clone https://github.com/pop-os/shell.git
cd shell
if ! command -v tsc >/dev/null
then
    npm install -g typescript
fi

make local-install
```

Aaaand DICE!!
