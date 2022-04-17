---
title: "Installing Hugo with SASS support on Linux"
slug: install-hugo-extended-from-source-on-ubuntu
date: 2021-10-07T21:31:37+01:00
lastmod: 2022-04-17T16:13:51+01:00
layout: post
author: yearluk
origin: hugo
description: "Out of the box, Hugo does not come with support for compiling SASS/SCSS to CSS."
draft: false
categories:
- Tech
- Blog
tags:
- webdev
- hugo
- SSGs
- blogging
- install
- ubuntu
- linux
---

Out of the box, Hugo does not come with support for compiling SASS/SCSS to CSS. This has led to a number of errors highlighted by Chrome's Inspector after my having had modified the SCSS files that came with the thems I am using. So we need to compile these extensions in.

The following command did the trick on Pop!_OS (Ubuntu 21.04), and gives me the latest version of Hugo (0.89) to boot.

This is the current version:

```bash
which hugo && hugo version
/usr/local/bin/hugo
hugo v0.88.1-5BC54738 linux/386 BuildDate=2021-09-04T09:39:19Z VendorInfo=gohugoio
```

To update to the latest (with extensions for SASS compilation):

```bash
sudo apt install golang-go
cd  ~/src
git clone https://github.com/gohugoio/hugo.git
cd hugo
go build --tags extended
./hugo version
#=> hugo v0.89.0-DEV+extended linux/amd64 BuildDate=unknown
sudo mv /usr/local/bin/hugo /usr/local/bin/hugo-v0.88.1-5BC54738
sudo cp ./hugo /usr/local/bin/hugo
```

## 2022-04-17 update -- Updating system wide Go version

The go version installed with `apt`was version 1.17. Let's upgrade that:

```bash
cd ~/Downloads
wget https://go.dev/dl/go1.18.1.linux-amd64.tar.gz
sudo rm -rf /usr/local/go 
sudo tar -C /usr/local -xzf go1.18.1.linux-amd64.tar.gz
```

### 🎲🎲 DICE

Heading back to the local site, we see we are back up and running:

```bash
cd ~/code/hugo-sites/salopst.gitbhub.io

../salopst.github.io on  main [!?⇡] via  v16.10.0
 🧠 13GiB/23GiB avec λ=❯ ...
  ❯❯  hugo server -DEF --minify --disableFastRender
Start building sites …
hugo v0.89.0-DEV+extended linux/amd64 BuildDate=unknown
```
