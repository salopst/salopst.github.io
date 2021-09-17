---
author: admin
origin: wordpress
comments: true
draft: false
date: 2018-04-19 13:25:28+00:00
layout: post
slug: edgerouter-x-dns-issues
title: Edgerouter X -- DNS issues
wordpress_id: 1376
categories:
- Networking
- Tech
tags:
- edgerouter
- ubiquiti
---

**#1** Plug laptop into eth0

**#2** Edgerouter X defaults to `192.168.1.1` as did the [TG589vac](http://stephen.yearl.us/technicolor-mediaaccess-tg589vac-in-bridge-mode/), but that doesn't matter as it is now just a modem.

**#3** get on same net segment... statically configure laptop to
IP  192.168.1.42 ('cause Douglas Adams, obvs)
NM  255.255.255.0
DG  192.168.1.1

**#4** Browser to `192.168.1.1`, default login usr and pswd: 'ubnt' / 'ubnt'

#### 🎲🎲 Dice!

OOH WHAT A PRETTY INTERFACE. Kinda overwhelming actually. Enable SSH, enable DNS forwarding on all interfaces. Should be good to go right? Wrong!

```bash
$ ping 1.1.1.1
PING 1.1.1.1 (1.1.1.1): 56 data bytes
64 bytes from 1.1.1.1: icmp_seq=0 ttl=59 time=15.007 ms
64 bytes from 1.1.1.1: icmp_seq=1 ttl=59 time=15.275 ms

$ ping gnu.org
ping: cannot resolve gnu.org: Unknown host
```

Oh noes.

```bash
$ ssh 192.168.1.1 -p 2222 -l ubnt

ubnt@ubnt:~$ show dns forwarding nameservers
-----------------------------------------------
 Nameservers configured for DNS forwarding
-----------------------------------------------
1.1.1.1 available via 'system'
8.8.8.8 available via 'system'
89.145.254.78 available via 'ppp pppoe0'
94.30.127.100 available via 'ppp pppoe0'

ubnt@ubnt:~$ ping 1.1.1.1
PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
64 bytes from 1.1.1.1: icmp_req=1 ttl=60 time=18.4 ms
64 bytes from 1.1.1.1: icmp_req=2 ttl=60 time=14.6 ms

ubnt@ubnt:~$ ping google.com
PING google.com (216.58.213.78) 56(84) bytes of data.
64 bytes from lhr25s01-in-f14.1e100.net (216.58.213.78): icmp_req=1 ttl=57 time=15.3 ms
64 bytes from lhr25s01-in-f14.1e100.net (216.58.213.78): icmp_req=2 ttl=57 time=15.3 ms

ubnt@ubnt:~$configure
uubnt@ubnt#set service dns forwarding system
uubnt@ubnt#commit
uubnt@ubnt# commit
[edit]
ubnt@ubnt# save
Saving configuration to '/config/config.boot'...
Done
[edit]
ubnt@ubnt# exit
exit
ubnt@ubnt:~$
```

#### 🎲🎲 DICE!

Now for the rest of the network... but it's sooo nice outside. There's this orange thing in the sky, apparently
