---
author: salopst
origin: posterous
comments: true
date: 2011-06-18T19:21:32+00:00
lastMod: 2021-08-31T06:23:00+01:00
layout: post
slug: he-net-ipv6-certification-questions-and-answers-guru
title: HE.net IPV6 Certification questions and answers -- \#4 Guru
wordpress_id: 164
categories:
- networking
- tech
tags:
- ipv6
- networking
- he.net
---


## [http://ipv6.he.net/certification/](http://ipv6.he.net/certification/)


  * [0. Newbie Test](/he-net-ipv6-certification-questions-and-answers-newbie/)

	
  * [1. Enthusiast Test](/he-net-ipv6-certification-questions-and-answers-enthusiast/)

	
  * [2. Administrator Test](/he-net-ipv6-certification-questions-and-answers-administrator/)

	
  * [3. Professional Test](/he-net-ipv6-certification-questions-and-answers-professional/)

	
  * [5. Sage Test](/he-net-ipv6-certification-questions-and-answers-sage/)


## Guru technical test -- not done yet, despite being sage!
## covers technical knowledge of IPv6 routing and IPv6 related protocols.

#### 1. When using auto-configuration, what is used from the host to configure the last 64bits of the IPv6 address?
- Random number generator is used
- Nothing on the host is used
- The IPv4 address on the ethernet interface
- The MAC address of the ethernet interface
- The loopback interface IPv4 address

#### 2.A MAC address is only 48bits. So when using auto-configuration, what is used to fill in the missing 16bits?
- FFFF
- FE80
- 0
- Nothing, a MAC is really 64bits
- FFFE

#### 3.On many routers, which one of the following commands is used to configure an IPv6 address on an interface?
- ip address 2001:A:B:C::1/64
- ipv6 address 2001:A:B:C:1
- ipv6 address 2001:A:B:C::1/64
- ipv6 address 2001:A:B:C:1/64

#### 4. What is the length of an IPv6 packet header?
- 40 bytes
- 128 bits
- 16 bytes
- 32 bits

#### 5. Which of the following organizations assigns IPv6 addresses?
- ARIN
- RIPE
- APNIC
- LACNIC
- AFRINIC
- All of the above

#### 6. What protocol number is used for 6in4 IPv4 packets?
- 41
- 6
- 53
- 4

#### 7. Which of the following is the 6to4 IPv6 prefix?
- ff00::/8
- 2001:0000::/32
- 2001:db8::/32
- 2002::/16

#### 8. Which of the following well-known prefixes is used for Teredo?
- 2001:0000::/32
- 2002::/16
- ff00::/8
- 2001:db8::/32

#### 9. Which of the following is an IPv4-mapped IPv6 address?
- fe80::20c:dbff:fefb:232b
- 2001:db8::/32
- ::10.10.10.2
- ::ffff:10.10.10.2

#### 10. On operating systems that support it, IPv4-mapped IPv6 addresses are used to:
- make it so that you have to write separate code for IPv6 socket calls and IPv4 socket calls
- map IPv4 addresses to an IPv6 address to make it so that IPv6 socket system calls can be used with both IPv4 or IPv6 addresses
- map IPv6 addresses to IPv4

#### 11. Which of the following is an IPv4-compatible IPv6 address?
- fe80::20c:dbff:fefb:232b
- ::ffff:10.10.10.2
- 2001:db8::/32
- ::10.10.10.2

#### 12. IPv4-compatible IPv6 addresses are deprecated in RFC 4291.
- True
- False

#### 13. Should you ever see packets with IPv4-mapped IPv6 addresses on the wire (outside of a host)?
- No
- Yes

#### 14. Which version of OSPF supports IPv6?
- OSPFv3
- OSPFv6
- OSPFv0
- OSPFv1

#### 15. Which of the following can be used by an IPv6 host to learn the address of a default gateway?
- stateless autoconfiguration
- neighbor introduction protocol
- neighbor discovery protocol
- international autoconfiguration

#### 16. Which of the following can be used by a host to learn its own IPv6 address?
- neighbor discovery protocol
- international autoconfiguration
- neighbor introduction protocol
- stateless autoconfiguration

#### 17. If you translate IPv4 packets to IPv6 or IPv6 packets to IPv4, this is called:
- 6in4
- completely compatible with all protocols
- nat64/dns64/ds-lite
- not possible

#### 18. On many routers, what command shows IPv6 routes?
- show ipv6 ospf summary
- show ipv6 route
- show ipv6 bgp summary

#### 19. On many routers, what command shows IPv6 BGP sessions?
- show ipv6 ospf summary
- show ipv6 bgp route
- show ipv6 bgp summary

#### 20. On many routers, what command shows IPv6 BGP routes?
- sh ipv6 ospf
- sh ipv6 bgp