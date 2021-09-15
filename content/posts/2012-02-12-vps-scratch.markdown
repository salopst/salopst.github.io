---
author: admin
comments: true
date: 2012-02-12 20:51:13+00:00
layout: post
slug: vps-scratch
title: VPS Scratch
wordpress_id: 235
categories:
- tech
tags:
- Linux
- VPS
---

New VPS ordered today: £7 per quarter, 256MB OpenVZ, Deb. 5 (Lenny), 1 ipv4, 10 ipv6 from [allsimple.net](http://www.allsimple.net/).

general setup:



	
  * update, upgrade-stable, update

	
  * change root

	
  * disable root ssh

	
  * change ssh port

	
  * add vps label to yearl.us zonefile; AAAA only-- 1st ipv6 addr

	
  * add usr

	
  * add sudo

	
  * mail -- ipv6 only?

	
  * rdns

	
  * iptables

	
  * certs

	
  * WWW -- nginix?

	
  * mySQL | postgres

	
  * PHP

	
  * VPN-- 4 or 6?

	
  * backups/ vm export





* * *




### 1. Upgrade & update


```bash
#apt-get update
#apt-get upgrade
#apt-get dist-upgrade #apt-get update
```

**Boomshaka!** == Debian 6 (squeeze), but after upgrade terminal is in Spanish.

-- OS X side:
```bash
$sudo languagesetup
```

-- Deb side:
```bash
$ nano ~/.profile
```
add: 
```bash
export LANG=en to `~/.profile`
```

```bash
$ sudo dpkg-reconfigure locales
... /usr/sbin/dpkg-reconfigure: locales no está instalado
$ sudo apt-get install locales
```
**Boomshaka!**



* * *




### 2. SSHD

```bash $nano /etc/ssh/sshd_config```

change to:

```
Protocol 2
PermitRootLogin no
StrictModes yes
Port [myObscurePort#]
ListenAddress [oneIPv6Addr]
ChallengeResponseAuthentication no
LoginGraceTime 600
# /etc/init.d/ssh restart
# netstat -tulpn | grep :[myObscurePort#]
```

**Boomshaka!**



* * *




### 3. sudo


[caption id="attachment_241" align="aligncenter" width="360"][![Sudo sandwich](/wp-uploadscaption]

```bash
$su
#apt-get install sudo
#visudeo
```



* * *




### 4. Email (Postfix and Dovecot, SASL, Alpine)


Relocated to [http://sjy.yearl.us/installing-postfix-and-dovecot-on-debian-6-squeeze/](http://sjy.yearl.us/installing-postfix-and-dovecot-on-debian-6-squeeze/)



* * *




### 5. WWW with nginix


[Nginix](http://wiki.nginx.org/) is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server. Let's give it a whirl instead of Apache!

```bash
$ sudo apt-get install nginx
$ sudo /etc/init.d/nginx start
$ sudo mkdir /var/www
$ sudo chown www-data:www-data /var/www
$ sudo nano /var/www/index.html
$ /etc/nginx/nginx.conf
```

**Boomshaka!**
