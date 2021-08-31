---
author: salopst
origin: posterous
comments: true
date: 2011-06-18 18:57:34+00:00
lastMod: 2021-08-31 06:23:00+01:00
layout: post
link: http://stephen.yearl.us/he-net-ipv6-certification-questions-and-answers-professional/
slug: he-net-ipv6-certification-questions-and-answers-professional
title: HE.net IPV6 Certification questions and answers -- \#3 Professional
wordpress_id: 159
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

	
  * [4. Guru Test](/he-net-ipv6-certification-questions-and-answers-guru/)

	
  * [5. Sage Test](/he-net-ipv6-certification-questions-and-answers-sage/)


## Covers technical knowledge of well known IPv6 prefixes and expands on your understanding of IPv6 related Linux and Windows commands.

#### 1. What command shows IPv6 addresses configured on ethernet interfaces under UNIX (Linux, FreeBSD, etc.)?
- ip -a
- ifconfig /all
- ip link show
- ifconfig  ✅
- ipconfig

#### 2. What command shows IPv6 addresses configured on ethernet interfaces under Microsoft Windows?
- netsh interface show
- ifconfig /all
- netsh
- ifconfig
- ipconfig   ✅

#### 3. Under FreeBSD, what does the generic tunneling interface start with?
- png
- gif   ✅
- fxp
- jif

#### 4. Under Linux, what kernel module needs to be loaded to support IPv6 networking?
- ip6tables
- eepro1000
- ipv6   ✅
- sit

#### 5. Are routers allowed to fragment IPv6 packets?
- Yes
- No   ✅

#### 6. How many bytes are in an IPv6 address?
- 1
- 128
- 16   ✅
- 8

#### 7. How many /48 subnets are available in a /32 prefix?
- 256
- 6
- 128
- 65536   ✅

#### 8. Which protocol is used for manually configured tunnels?
- 6to4
- 6in4 X
- Teredo

#### 9. Which of the following is the IPv6 documentation prefix?
- ::/8
- 2002::/16
- 2001:db8::/32   ✅
- fe80::/10

#### 10. Which of the following is the IPv6 link-local prefix?
- 2002::/16
- fe80::/10   ✅
- ::/8
- ff00::/8

#### 11. Which of the following is the IPv6 multicast prefix?
- ::/8
- ff00::/8   ✅
- fe80::/10
- 2002::/16

#### 12. Which of the following is the IPv6 ULA (unique local addresses) prefix?
- fe80::/10
- fc00::/7   ✅
- 2002::/16
- ff00::/8

#### 13. Which of the following is a subnet of 2001:db8::/32?
- fe80::20c:dbff:fefb:232b
- 2001:db8:7fa5::/48   ✅
- 2001:db9::/32
- 2001:db8::/16

#### 14. On Linux, how would you traceroute to the IPv6 address of he.net?
- owamp he.net
- traceroute6 he.net   ✅
- smokeping he.net
- tracert6 he.net

#### 15. On Windows Vista, how would you traceroute to the IPv6 address of he.net?
- smokeping he.net
- traceroute6 he.net
- owamp he.net
- tracert he.net   ✅

#### 16. On Linux, what is the IPv6 ping command?
- pong
- pingit
- plonk!
- ping6   ✅

#### 17. Which command forces the UNIX command ssh to use IPv6 to connect to example.com (useful for domains with both A and AAAA records)?
- ssh -4 example.com
- ssh -6 example.com   ✅
- putty example.com
- ssh6 example.com

#### 18. You would force the UNIX command ssh to use IPv4 (useful if it had both A and AAAA records) to connect to example.com using which command?
- ssh4 example.com
- ssh -6 example.com
- ssh -4 example.com   ✅
- putty example.com

#### 19. Which command forces the UNIX command wget to use IPv6 to make a HTTP GET request to he.net (useful for domains with both A and AAAA records)?
- http he.net
- wget -4 he.net
- wget -6 he.net   ✅
- wget6 he.net

#### 20. Which command forces the UNIX command wget to use IPv4 to make a HTTP GET request to he.net (useful for domains with both A and AAAA records)?
- wget -4 he.net   ✅
- http he.net
- wget -6 he.net
- wget4 he.net

#### 21. Which command forces the UNIX command mtr to use IPv6 to traceroute to he.net (useful for domains with both A and AAAA records)?
- mtr6
- mtr -4 he.net
- mtr -6 he.net   ✅
- ping6 he.net

#### 22. Which command forces the UNIX command mtr to use IPv4 to traceroute to he.net (useful for domains with both A and AAAA records)?
- mtr -4 he.net   ✅
- mtr -6 he.net
- ping4 he.net
- mtr4 he.net