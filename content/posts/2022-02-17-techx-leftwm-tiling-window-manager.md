---
title: Installing LeftWM Tiling Window Manager
date: 2022-02-17T20:33:14+0000
lastMod: 2022-02-05:38:21+0000
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
- "window manager"
- desktop
- leftwm
---

# Installing LEFTWM Tiling Window Manager

{{< image src="/uploads/2022-02-17-leftwm-polybar-basic.png" alt="LeftWM Basic Polybar default set up" style="border-radius: 50px;" >}}

What is LeftWM?
> Left is a tiling window manager written in rust for stability and performance. The core of left is designed to do one thing and one thing well. Be a window manager.
> ~~ http://leftwm.org/

Did you read that? RUST!. It is written in **RUST**! Rust is the new "I use Arch, BTW". Anyway.

Base system is PopOS 20.10, and rust was previously installed (rustup 1.24.3 (ce5817a94 2021-05-31)). Follow these instructions: https://www.rust-lang.org/tools/install

**Pre-install**:  `sudo apt install compton compton-conf i3 dmenu rofi feh nitrogen polybar lemonbar`

## Installing
```bash
cargo install leftwm
mkdir -p ~/.config/leftwm/themes && cd ~/.config/leftwm/themes
git clone git@github.com:leftwm/leftwm-community-themes.git
cd leftwm-community-themes
git submodule update --init --recursive
```

## Theming
Now. we have these options for to get started *stat*!

In the future, I think it would make sense to start with one of the polybar-based themes from the community about adopt. Polybar seems to be the bar of choice amongst the [r/unixporn](https://reddit.com/r/unixporn) crowd.

### 1. Start from one of the included basics
- <https://github.com/leftwm/leftwm/tree/main/themes>

```bash
cd ~/tmp
git clone https://github.com/leftwm/leftwm.git
cp -r ./leftwm/themes/* ~/.config/leftwm/themes/
rm -r leftwm
cd ~/.config/leftwm/themes
ln -s basic_polybar current
```

### 2. Symlink to a random one

```bash
cd ~/.config/leftwm/themes
git clone git@github.com:leftwm/leftwm-community-themes.git
cd leftwm-community-themes
git submodule update --init --recursive
ln -s ~/.config/leftwm/leftwm/themes/leftwm-community-themes/forest ~/.config/leftwm/leftwm/themes/current

```

### 3. Build the leftwm-theme binary
Since it's not currently (2022-02-17) available to install via cargo, if we want to use this method we gonna have to build it ourselves. Or start using Arch... because offc it is in the AUR :P

- <https://github.com/leftwm/leftwm-theme>

```bash
cd ~/.config/leftwm
git clone git@github.com:leftwm/leftwm-theme.git
cargo build --release
# for production installations (does not update when recompiled)
# sudo install -s -Dm755 ./target/release/leftwm-theme -t /usr/bin
#-- or --
# for developer installations (updates when recompiled)
sudo ln -s "$(pwd)"/target/release/leftwm-theme /usr/bin/leftwm-theme
```

#### Using leftwm-theme :

```bash
leftwm-theme update
leftwm-theme list
leftwm-theme install "Epitaph"
leftwm-theme apply "Epitaph"
leftwm-theme status
# to update thmes not just the repo listing:
leftwm-theme upgrade
```

## Starting the TWM

The cargo install method should have a desktop file for GDDM to pick up... so do nothing! But it DID NOT. Si I'll leave this as a warning and head back to the source we cloned in **1. Start from  one of the included basics**

```bash
sudo cp ~/tmp/leftwm/leftwm.desktop /usr/share/xsessions/
```


Fingers crossed. `CTRL+ALT+DEL`, $`gnome-session-quit --logout`, whatever ....

## Results
In a nutshell, this is not for me. While even the most basic an unriced polybar set up is functional enough, and pretty, I don't think (have never really thought) there really is a pressing need for them unless one has a spankingly huge monitor, and even then, with efficient use of workspaces and tiling-like addons for most DEs, they sort of only really work for terminal based workflows.

Terminals are fine, and I rock my editor like it is 1999, but not everything was better back in the day. I mean... look at this!

{{< image src="/uploads/2022-02-18-pop-os-tiling.png" alt="Tiling in Pop!_OS" position="center" style="border-radius: 50px;" >}}

BTW, the background image is of *Boreas* in all her Pre-Raphelite-esque glory, by John William Waterhouse (1903).

## One more thing-- flatpaks
The default dmenu launches in LeftWM (yes, of course you can configure others) did not pick up on flatpaks installed on the system. Now flatpaks can be run from the command line using some obscure incantation (largely because their official names are all mixed up), so wouldn't it be handy if you could just call them by something *like* their name?

So, before "[breaking out the Emacs and modifying that PERL script](https://youtu.be/BPazh2kDdvA?t=221)", A quick DDG of the WWW lead me to this beauty:

```bash
#!/usr/bin/env bash
#GPLv3

DIR=${DIR:-$HOME/.var/app}
CMD=${CMD:-flatpak run}

launch_app() {
    find "${DIR}" -mindepth 1 -maxdepth 1 \
     -type d -iname "*$1*" -printf '%f\n' \
    | xargs $CMD
}

# parse opts
while [ True ]; do
if [ "$1" = "--help" -o "$1" = "-h" ]; then
    echo " "
    echo "$0 [OPTIONS]"
    echo "--directory, -d   Location of flatpaks (default: $HOME/.var/app"
    echo " "
    exit
elif [ "$1" = "--directory" -o "$1" = "-d" ]; then
    DIR=$DIR
    shift 2
else
    break
fi
done

# main
launch_app "${1}"
```

Many thanks to the author over at: https://www.redhat.com/sysadmin/launch-flatpaks-terminal-fuzzpak!
