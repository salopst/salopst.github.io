---
author: admin
comments: true
date: 2011-06-18 18:29:02+00:00
layout: post
link: http://stephen.yearl.us/he-net-ipv6-certification-questions-and-answers-administrator/
slug: he-net-ipv6-certification-questions-and-answers-administrator
title: HE.net IPV6 Certification questions and answers -- Administrator
wordpress_id: 152
categories:
- networking
- tech
---

[http://ipv6.he.net/certification/](http://ipv6.he.net/certification/)



	
  * [0. Newbie Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-newbie/)

	
  * [1. Enthusiast Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-enthusiast/)

	
  * [3. Professional Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-professional/)

	
  * [4. Guru Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-guru/)

	
  * [5. Sage Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-sage/)


Covers technical knowledge of DNS and general IPv6 topics.

[ccW lines="-1"]1. On Redhat, CentOS, and Fedora Core systems that don't accept ::/0 as the IPv6 default route, which of the following should you use instead?
::1/128
fe80::/10
0.0.0.0
2000::/3 X

2. When configuring forward DNS entries for use with an IPv6 address, what record type do you use?
AAAA X
PTR
mysql
A

3. When configuring reverse DNS with BIND for addresses in the IPv6 allocation 2001:A:B:C::/64, what is the correct format for the zone?
2.0.0.1.0.0.0.A.0.0.0.B.0.0.0.C
C.0.0.0.B.0.0.0.A.0.0.0.1.0.0.2.ip6.arpa X
2.0.0.1.0.0.0.A.0.0.0.B.0.0.0.C.ip6.arpa
2.0.0.1.A.B.C
C.B.A.1.0.0.2.ip6.arpa

4.What is the IPv6 default route?
::/0 X
0.0.0.0
127.0.0.1
::1/128

5. What is the IPv6 localhost address?
::/0
::1/128 X
127.0.0.1
0.0.0.0

6. Which of the following is a link-local address?
::1 XX
::
fe80::20c:dbff:fefb:232b X
3ffe:3200::/32

7. Which of the following URLs specifies a literal IPv6 address correctly?
ipv6://2001:470:0:64::2
http://[2001:470:0:64::2] X
http:[2001:470:0:64::2]
http://2001:470:0:64::2

8. Which of the following URLs specifies a literal IPv6 address and port number correctly?
https://2001:0db8:85a3:08d3:1319:8a2e:0370:7344:443
https:[2001:0db8:85a3:08d3:1319:8a2e:0370:7344]:443
https://[2001:0db8:85a3:08d3:1319:8a2e:0370:7344].443
https://[2001:0db8:85a3:08d3:1319:8a2e:0370:7344]:443 X

9. If you run native IPv4 and IPv6 at the same time this is called:
6in4
6and4
NAT-PT
Dual stack X

10. How do you use the dig command to get the IPv6 address record for domain he.net?
dig he.net 6
dig he.net A
dig he.net AAAA X

11. How do you use the dig command to get the PTR record for the IPv6 address 2001:470:0:76::2?
dig 2001:470:0:76::2
dig 2001:470:0:76::2 PTR
dig -x 2001:470:0:76::2 X

[/ccW]
