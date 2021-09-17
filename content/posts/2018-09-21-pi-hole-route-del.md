---
author: admin
origin: wordpress
comments: true
draft: false
date: 2018-09-21 11:42:50+00:00
layout: post
slug: pi-hole-route-del
title: pi-hole route del
wordpress_id: 1448
categories:
- Networking
- Tech
---

Sooo, my TP-Link Archer C8 AC1750 Gigabit router decided to not play nice after a short power outage. Didn't do much anyway except keep a couple of machines in a their own little subnet in which the [pi-hole](http://stephen.yearl.us/pi-hole-dns-level-ad-blocker/) was located.

Replaced it with a NETGEAR GS108Tv2 (link below) 8-Port Gigabit managed switch and flatten the network a little. Everything was peachy with that set up, but the pihole was still on `172.16.0.0/24`... reconfigured that with `pihole -r` and all looked well except for the pi-hole could not ping outside of the LAN. Grrr! Much hair pulling until...

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
{{< rawhtml >}}
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=yearlus-21&marketplace=amazon&amp;region=GB&placement=B00N2ROH0C&asins=B00N2ROH0C&linkId=3931553a0d63c6ca278eed48b06f9368&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
</iframe>
{{< /rawhtml >}}

Lord knows when I purchased the Archer, but it was a good few years ago, and I sure as eggs didn't spent _that_ much on it. What gives?

{{< rawhtml >}}
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=yearlus-21&marketplace=amazon&amp;region=GB&placement=B000RAILSQ&asins=B000RAILSQ&linkId=5608967455d26d1744d0aa2f5b6c2433&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
</iframe>
{{< /rawhtml >}}
