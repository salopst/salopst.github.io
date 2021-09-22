---
author: admin
origin: wordpress
comments: true
date: 2014-12-14T13:20:54+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
categories:
slug: ssh-key-pair-authentication
title: SSH key pair authentication
wordpress_id: 1391
draft: false
categories:
- Linux
- Sysadmin
- Tech
tags:
- SSH
- sysadmin
- Linux
- OS X
---

Well, flummery. It's been a while since I had to do this, so here, future self, some awesome notes...

### LOCAL

```bash
$ ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_4096
$ scp -P 2222 192.168.0.108:/home/yearluk/.ssh/yearluk.ehecatl.pub
```

### SSH to REMOTE...

```bash
$ cat ~/.ssh/yearluk.ehecatl.pub >> authorized_keys
```
