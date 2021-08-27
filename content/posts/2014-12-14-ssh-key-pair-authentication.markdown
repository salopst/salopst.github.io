---
author: admin
comments: true
date: 2014-12-14 13:20:54+00:00
layout: post
link: http://stephen.yearl.us/ssh-key-pair-authentication/
slug: ssh-key-pair-authentication
title: SSH key pair authentication
wordpress_id: 1391
categories:
- Linux
- os x
- tech
tags:
- SSH
---

Well flummery. It's been a while since I had to do this, so here, future self, some awesome notes...

LOCAL

[cc lang=bash]$ ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_4096 
$ scp -P 2222 192.168.0.108:/home/yearluk/.ssh/yearluk.ehecatl.pub[/cc]

SSH to REMOTE...

[cc lang=bash]$ cat ~/.ssh/yearluk.ehecatl.pub >> authorized_keys[/cc]
