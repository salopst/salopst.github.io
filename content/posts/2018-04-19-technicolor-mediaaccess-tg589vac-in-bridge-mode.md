---
author: admin
origin: wordpress
comments: true
draft: false
date: 2018-04-19 12:17:19+00:00
layout: post
slug: technicolor-mediaaccess-tg589vac-in-bridge-mode
title: Technicolor MediaAccess TG589vac in bridge mode
wordpress_id: 1372
categories:
- Networking
- Tech
---

Like >90% of folk, I've typically used whatever POS modem/router/switch/WAP combo that my ISP supplied me with. These all-in-ones are pretty convenient, but there is something just not right about bundling so many features into a single unit... it basically means that whilst is can do all these things it does not do any one thing particularly well.

Wireless range, for example, is particularly bad (even on the 2.4MHz band). Time for a change. I've finally had enough.

**#1** get your router's login credentials to the service. My ISP had these hard-coded and were not supplied to me. It was a royal waste of 40 minutes trying to explain that I was not trying to login to the TG589vac itself, but instead to use that which allows login to the ISPs edge router... need this to pass on to the replacement router (Ubiquiti's [Edgerouter X](https://www.ubnt.com/edgemax/edgerouter-x/)) otherwise... no Internetz!

**#2** logging in to the TG589vac as "admin" gives one rather limited options, and certainly none for resetting the router. It's not in the consumer documentation, but log in as "engineer" and use the value next to "Access Key" on the bottom of the device.

**#3** Gateway >> Setup Your Gateway >> change "routed type" to bridge

**#4** if VSDL retain VLAN 101; if ADSL set ATM VP to 0 and ATM VC to 38

**#5** Cross fingers and reboot

**#6** Congratulations you now have no Internet access; the TG589vac is now just a modem!

**#7** need to get into the device again... that's an ethernet cable into port #4, so obvs do not connect your new router to this port.

For giggles as "engineer" you get to see that your ISP has probably enabled TR-069 / CWMP. The what now? That's the L7 protocol that kept your device up-to-date with firmware and such... or is/was a means for them to have get another means to sniff your packets. If you disabled it as soon as you initially got your device, TURN IT BACK ON BEFORE YOU CALL your ISP's tech support (see #1).  Mine got real pissy when I called on an unrelated issue and they could not get in and poke around.
