---
author: admin
comments: true
date: 2012-01-31 14:05:01+00:00
layout: post
link: http://stephen.yearl.us/brokering-with-sixxs/
slug: brokering-with-sixxs
title: Brokering with SIXXs
wordpress_id: 101
categories:
- networking
- tech
tags:
- ipv6
---

Going to be changing ipv4 addresses a lot over the next little while, so I've decided to try a different v4-6 brokering arrangement. he.net's tunnelbroker has been rock solid and I've been using it on and off since '08, but I think it time to try something else.

The ideal would be a self-monitoring client that identifies local ipv4 changes here (kind like a dynDNS client might), and renegotiate an ipv6 endpoint to tunnel through based on that change. he.net's configureation is a little more static than that, and there is no API that I can see that I can hook into to write that client myself. I sure as hell am not going the 'scrape screens' route for this.

First up is [sixxxs](http://www.sixxs.net). Looks like they have a client ([AICCU](https://www.sixxs.net/tools/aiccu/)) that might do the trick. Here goes.

A lot of the below is lifted from [https://www.sixxs.net/wiki/Aiccu/Installation](https://www.sixxs.net/wiki/Aiccu/Installation) No apologies from me for that. Just wanted it in a concise space for future reference.



	
  * Request a tunnel from [https://www.sixxs.net/home/requesttunnel/](https://www.sixxs.net/home/requesttunnel/) (request approved in ca. 15 mins)

	
  * download tun/tap drivers (tuntap_20111101.tar.gz) for OSX: [http://tuntaposx.sourceforge.net/download.xhtml](http://tuntaposx.sourceforge.net/download.xhtml)

	
  * install .pkg

	
  * get AICCU source: [http://www.sixxs.net/tools/aiccu/#downloads](http://www.sixxs.net/tools/aiccu/#downloads)

	
  * install (defaults to /usr/sbin/aiccu ; installs a Debian-style init.d ; config: /etc/aiccu.conf )


```bash
$ tar -zxf aiccu_current.tar.gz
$ cd aiccu
$ make clean
$ make
$ sudo make install
$ chmod 600 /etc/aiccu.conf
$ cd /usr/sbin
$ sudo aiccu start
$ ifconfig -a
```
Boomshaka!

```
gif0: flags=8051 mtu 1280 tunnel inet 31.111.38.188 --> 216.93.250.26 inet6 fe80::222:41ff:fe35:cf82%gif0 prefixlen 64 scopeid 0x2 inet6 2001:4830:1100:1c8::2 --> 2001:4830:1100:1c8::1 prefixlen 128
```

	
  * [The Status of IPv6 and Open Source/Free Operating systems](http://www.slideshare.net/oej/the-status-of-ipv6-and-open-sourcefree-operating-systems) (slideshare.net)


