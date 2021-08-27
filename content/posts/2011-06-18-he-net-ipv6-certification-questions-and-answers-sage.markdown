---
author: admin
comments: true
date: 2011-06-18 19:27:14+00:00
layout: post
link: http://stephen.yearl.us/he-net-ipv6-certification-questions-and-answers-sage/
slug: he-net-ipv6-certification-questions-and-answers-sage
title: HE.net IPV6 Certification questions and answers -- Sage
wordpress_id: 170
---

[http://ipv6.he.net/certification/](http://ipv6.he.net/certification/)



	
  * [0. Newbie Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-newbie/)

	
  * [1. Enthusiast Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-enthusiast/)

	
  * [2. Administrator Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-administrator/)

	
  * [3. Professional Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-professional/)

	
  * [4. Guru Test](http://sjy.yearl.us/he-net-ipv6-certification-questions-and-answers-guru/)


Sage technical test
Covers technical knowledge of IPv6 Glue for nameservers.

[ccW lines="-1"]1. You request IPv6 glue for your nameservers through:
_ARIN
__IETF
__RIPE
_The registrar of the domain used by your name servers X
2. IPv6 glue for nameservers resides on which nameservers?
The TLDs' X
The ROOTs
Your own

3. Which of the following queries proves working IPv6 glue?
dig AAAA ns1.exampledomain.tld @tld.server X
dig -x 2001:db8::1 @tld.server
dig A ns1.exampledomain.tld @tld.server
ping ns1.exampledomain.tld

4. Which TLD listed below is authoritative for .com & .net IPv6 Glue?
A.GTLD-SERVERS.net X
a0.org.afilias-nst.info
ipv6.arpa
GDNS1.ULTRADNS.NET

5. What is another name sometimes used for A or AAAA nameserver glue records found in the top level domain zone files?
CNAME records
GHOST records
host records X
PTR records

6. What is a registrar?
An organization that is able to register domains X
A notary
A glue record
A nameserver

7. What is a registry?
An organization responsible for operating the authorative nameservers and database for a top level domain X
A host record
A nameserver
A notary

8. Why does getting AAAA records for your nameservers in the corresponding TLD (top level domain) zone matter?
It enables entirely native IPv6 DNS queries and makes it possible for IPv6 only hosts to reach the nameservers for your domain, since they can't use glue that is just an A record. X
It doesn't. It's too hard, so you shouldn't bother.
It registers your domain
It provides reverse DNS for your domain

9. IPv6 AAAA records have been added for several of the root nameservers.
False
True X

[/ccW]
