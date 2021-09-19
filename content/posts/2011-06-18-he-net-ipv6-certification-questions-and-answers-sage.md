---
author: salopst
origin: posterous
comments: true
date: 2011-06-18T19:27:14+00:00
lastMod: 2021-08-31T06:23:00+01:00
layout: post
slug: he-net-ipv6-certification-questions-and-answers-sage
title: HE.net IPV6 Certification questions and answers -- \#5 Sage
wordpress_id: 170
categories:
- networking
- tech
tags:
- ipv6
- networking
- he.net
---


[http://ipv6.he.net/certification/](http://ipv6.he.net/certification/)

	
  * [0. Newbie Test](/he-net-ipv6-certification-questions-and-answers-newbie/)

	
  * [1. Enthusiast Test](/he-net-ipv6-certification-questions-and-answers-enthusiast/)

	
  * [2. Administrator Test](/he-net-ipv6-certification-questions-and-answers-administrator/)

	
  * [3. Professional Test](/he-net-ipv6-certification-questions-and-answers-professional/)

	
  * [4. Guru Test](/he-net-ipv6-certification-questions-and-answers-guru/)


## Sage technical test covers technical knowledge of IPv6 Glue for nameservers.

#### 1. You request IPv6 glue for your nameservers through:
- _ARIN
- __IETF
- __RIPE
- _The registrar of the domain used by your name servers   ✅

#### 2. IPv6 glue for nameservers resides on which nameservers?
- The TLDs'   ✅
- The ROOTs
- Your own

#### 3. Which of the following queries proves working IPv6 glue?
- dig AAAA ns1.exampledomain.tld @tld.server   ✅
- dig -x 2001:db8::1 @tld.server
- dig A ns1.exampledomain.tld @tld.server
- ping ns1.exampledomain.tld

#### 4. Which TLD listed below is authoritative for .com & .net IPv6 Glue?
- A.GTLD-SERVERS.net   ✅
- a0.org.afilias-nst.info
- ipv6.arpa
- GDNS1.ULTRADNS.NET

#### 5. What is another name sometimes used for A or AAAA nameserver glue records found in the top level domain zone files?
- CNAME records
- GHOST records
- host records   ✅
- PTR records

#### 6. What is a registrar?
- An organization that is able to register domains   ✅
- A notary
- A glue record
- A nameserver

#### 7. What is a registry?
- An organization responsible for operating the authorative nameservers and database for  a top level domain   ✅
- A host record
- A nameserver
- A notary

#### 8. Why does getting AAAA records for your nameservers in the corresponding TLD (top level domain) zone matter?
- It enables entirely native IPv6 DNS queries and makes it possible for IPv6 only hosts to reach the nameservers for your domain, since they can't use glue that is just an A record.   ✅
- It doesn't. It's too hard, so you shouldn't bother.
- It registers your domain
- It provides reverse DNS for your domain

#### 9. IPv6 AAAA records have been added for several of the root nameservers.
- False
- True   ✅