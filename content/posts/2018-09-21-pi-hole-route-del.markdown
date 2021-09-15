---
author: admin
comments: true
date: 2018-09-21 11:42:50+00:00
layout: post
slug: pi-hole-route-del
title: pi-hole route del
wordpress_id: 1448
categories:
- networking
- tech
---

Sooo, my TP-Link Archer C8 AC1750 Gigabit router decided to not play nice after a short power outage. Didn't do much anyway except keep a couple of machines in a their own little subnet in which the [pi-hole](http://stephen.yearl.us/pi-hole-dns-level-ad-blocker/) was located.

Replaced it with... [NETGEAR GS108Tv2](https://amzn.to/2NVxXD1) 8-Port Gigabit managed switch and flatten the network a little. Everything was peachy with that set up, but the pihole was still on 172.16.0.0/24... reconfigured that with [cc lang="bash" inline="true"]pihole -r[/cc] and all looked well except for the pi-hole could not ping outside of the LAN. Grrr! Much hair pulling until...

```bash 
pi@pihole:~ $ ping 1.1.1.1
PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
From 192.168.2.101 icmp_seq=1 Destination Host Unreachable
^Z
[11]+  Stopped                 ping 1.1.1.1
pi@pihole:~ $ clear

pi@pihole:~ $ route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         172.16.0.1      0.0.0.0         UG    202    0        0 eth0
default         192.168.2.1     0.0.0.0         UG    303    0        0 wlan0
default         192.168.2.1     0.0.0.0         UG    304    0        0 wlan1
192.168.2.0     0.0.0.0         255.255.255.0   U     202    0        0 eth0
192.168.2.0     0.0.0.0         255.255.255.0   U     303    0        0 wlan0
192.168.2.0     0.0.0.0         255.255.255.0   U     304    0        0 wlan1

.
.
.
pi@pihole:~ $ sudo route del -net 0.0.0.0 gw 172.16.0.1 metric 202 dev eth0
.
.
.
pi@pihole:~ $ route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         192.168.2.1     0.0.0.0         UG    303    0        0 wlan0
default         192.168.2.1     0.0.0.0         UG    304    0        0 wlan1
192.168.2.0     0.0.0.0         255.255.255.0   U     202    0        0 eth0
192.168.2.0     0.0.0.0         255.255.255.0   U     303    0        0 wlan0
192.168.2.0     0.0.0.0         255.255.255.0   U     304    0        0 wlan1
pi@pihole:~ $ ping 1.1.1.1
PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
64 bytes from 1.1.1.1: icmp_seq=1 ttl=59 time=20.9 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=59 time=21.3 ms
```

DICE!
[amazon_link asins='B00N2ROH0C' template='ProductCarousel' store='yearlus-21' marketplace='UK' link_id='ef52193e-bd92-11e8-bc64-3fd3414c5d61']

Lord knows when I purchased the Archer, but it was a good few years ago, and I sure as eggs didn't spent _that_ much on it. What gives?

[amazon_link asins='B000RAILSQ' template='ProductCarousel' store='yearlus-21' marketplace='UK' link_id='3f06ea16-bd93-11e8-b286-471b8f214940']
