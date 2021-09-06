---
author: yearluk
origin: scratch
title: Make iCloud nativefier app for iCal on Linux
slug: make icloud nativefier app for ical on linux
date: 2021-02-17
draft: false
noLicense: false
weight: 1001
categories:
- Tech
- Apple
- Linux
tags:
 - ical
 - apple
 - GNOME
 - linux
 - calendar
 - techx
---

### [Nativefier](https://github.com/nativefier/nativefier) 
"...is a command-line tool to easily create a desktop app for any web site with minimal configuration. Apps are wrapped by Electron (which uses Chromium under the hood) in an OS executable (.app, .exe, etc) for use on Windows, macOS and Linux."

'Tis a beautiful app to be sure.



```bash
mkdir -p ~/tmp/icloud-nativefier-build-dir
cd ../tmp/icloud-nativefier-build-dir
# get nice icon
wget https://i.imgur.com/m0abT4k.png -O icon.png
nativefier -p linux -a x64 -i icon.png --disable-context-menu --disable-dev-tools --single-instance https://www.icloud.com/
# App built to /home/yearluk/tmp/icloud-nativefier-build-dir/iCloud-linux-x64
mv ~/tmp/icloud-nativefier-build-dir/iCloud-linux-x64 ~/bin/
# add to $XDG_CONFIG_HOME/.shell_aliases.sh ... 
# alias icloud="$HOME/bin/iCloud-linux-x64/iCloud"
cd ~/bin/iCloud-linux-x64
# make the desktop file.... put in ~/.local/share/applications ... or /usr/share/applications/
vscodium icloud.desktop
chmod +x ./icloud.desktop
```

## And then make a desktop file:

- create `~/.local/share/applications/yearluk.nativifier.icloud.desktop` :  

```text
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Terminal=false
Exec=/home/yearluk/bin/iCloud-linux-x64/iCloud
Name=iCloud (nativefier)
Icon=/home/yearluk/bin/iCloud-linux-x64/resources/app/icon.png
```

```bash
$ sudo cp ~/.local/share/applications/yearluk.nativifier.icloud.desktop /usr/share/applications
```

Run a desktop file from a terminal. If gtk3 is installed, run:   `gtk-launch application.desktop`

BUT Imma gonna be calling this from [Ulauncher](https://ulauncher.io/), which whilst not quite as good as the MacOS-only [Alfred](https://www.alfredapp.com/), really isn't too-too shabby.