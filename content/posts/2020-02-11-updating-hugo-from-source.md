---
title: Updating Hugo from source
date: 2022-02-11T08:18:29+0000
origin: scratch
author: yearluk
draft: false
categories:
- Tech
- Blog
tags:
- Hogo
- websites
---

# Updating Hugo from source (0.89-DEV+Extended to Github latest)

Well this was a wee bit of a pain. The previous two installs from Github were a simple

```bash
cd src
git clone https://github.com/gohugoio/hugo.git
cd hugo && go install --tags extended
```

And 🔥Boom🔥! The Hugo binary was installed to `/usr/local/bin`

So naturally a

```bash
cd src/hugo
git fetch
cd hugo && go install --tags extended
```

should work. But no cigar this time. Instead (and this is the long work around so as not to confuse subsequent senile self)...

```bash
#  move old binary out of the way
sudo mv /usr/local/bin/hugo /usr/local/bin/hugo-v0.89-DEV+extended

# move old source as well, because they we KNOW we are clean
mv -r ~/src/hugo ~/src/hugo-v0.89

# re-clone
git clone https://github.com/gohugoio/hugo.git

cd hugo

# get latest go deps and build
go get
go build -o hugo main.go
```

This places a binary at `~/go/bin/hugo` so hard link it:

```bash
sudo ln -f ~/go/bin/hugo /usr/local/bin/hugo

which hugo && hugo version
#==> /usr/local/bin/hugo
#==> hugo v0.93.0-DEV+extended linux/amd64 BuildDate=unknown
```

Now we are good to go (pun not intended):

```bash
cd ~/code/hugo-sites/salopst.github.io
hugo server -DEF --minify --watch --gc
```
