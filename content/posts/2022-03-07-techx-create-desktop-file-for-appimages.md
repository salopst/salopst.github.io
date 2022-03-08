---
title: How to create desktop files (shortcuts) for AppImages
date: 2022-03-07T07:46:40+00:00
lastMod:
slug: How-to-create-desktop-files-shortcuts-for-appimages
layout: post
author: yearluk
origin: hugo
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
- Linux
tags:
- Linux
- Desktop
- howto
---

# How to create .desktop files (shortcuts) for AppImages

## What are .desktop files?

`.desktop` files are [YAML](https://yaml.org/spec/) formatted text files that the Destop Environment (DE) interprets to point to an executable file elsewhere on the system. In this context means that an installed application will be made available though various graphical menus and application launchers. Typically these desktop files are installed for you, but this is not the case for, as here, AppImages.

Windows users may know them simply as *shortcuts* that they might typically keep on the desktop.

## What are AppImages?

> AppImage provides a way for upstream developers to provide “native” binaries for Linux users just the same way they could do for other operating systems. It allow packaging applications for any common Linux based operating system, e.g., Ubuntu, Debian, openSUSE, RHEL, CentOS, Fedora etc. AppImages come with all dependencies that cannot be assumed to be part of each target system in a recent enough version and will run on most Linux distributions without further modifications.
>
> ~~ <https://docs.appimage.org/introduction/index.html>

**Say wha?** Simply, AppImages are a way software developers package, and make available, the programs (applications) they create. There are other means through which they do this, but the AppImage format means a convenient, portable mechanism for installation regardless of the Linux distribution you are using, and without the need for administrative, 'root', privileges.

## The 'Howto'

### Download the AppImage, make it executable

- download an AppImage file that is of interest. Here we are going to use the excellent Markdown+ editor, [Zettlr](https://www.zettlr.com). The AppImage can be downloaded from: [<https://www.zettlr.com/download/appimage64](https://www.zettlr.com/download/appimage64>)[https://www.zettlr.com/download](https://www.zettlr.com/download) 

```bash
# create a directory for AppImages, if one does not exist
if [ ! -d ~/app-images ]; then
  mkdir -p ~/app-images;
fi

# copy AppImages to our new directory
cp ~/Downloads/*.AppImage ~/app-images

# make AppImages executable
chmod +x ~/app-images/*.AppImage

# make sure we can find the executable (from the command line)
# change to .profile, .bashrc, .fishrc... whatever
# this is not strictly necessary here, but you may have other AppImages
# that you *do* want to call from the command line
echo 'export PATH=~/app-images/:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### Create the .desktop file

- In `~/.local/share/applications` create a file as below. The icon we'll just grab using a "right-click >> Save As" from zerttlr.com. The direct URL to a suitable icon file is `https://www.zettlr.com/themes/zettlr/assets/img/32x32.png`

- It doesn't really matter what you call the desktop file provided it ends in `.desktop`. For clarity, though, it is a good idea to 'namespace' your files for easier identification in the future. For example, here I am using the name `yearluk.appimage.zettlr.desktop` to indicate that the referenced binary is an AppImage and was created by me.  

```bash
[Desktop Entry]

# 2022-02-07
# yearluk

Name=Zettlr (AppImage)
Comment=Zettlr-2.2.4-x86_64.AppImage
Type=Application
Terminal=false
Version=2.2.4

Path=/home/yearluk/app-images
Exec=/home/yearluk/app-images/Zettlr-2.2.4-x86_64.AppImage
Icon=/home/yearluk/app-images/zettlr-32x32.png

# Describes the categories in which this entry should be shown
# Categories=
```

## 🎲🎲 Dice

And that's it; you're finished!
