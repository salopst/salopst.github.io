---
author: admin
comments: true
date: 2018-06-16 07:18:05+00:00
layout: post
slug: pi-hole-dns-level-ad-blocker
title: Pi-hole DNS-level ad blocker
wordpress_id: 1409
categories:
- Linux
- networking
- tech
tags:
- ad blocking
- DIG Internetz
- DNS
- raspberry pi
---

Getting pretty annoyed with keeping track of which browser on which machine has which add blockers installed, so it's time for a more holistic approach. Enter, stage left, the [Pi-hole](https://pi-hole.net/). In short it:



<blockquote>...acts as a forwarding DNS server, which means if it doesn’t know where a domain is, it has to forward your query to another server that does.  When you install Pi-hole, it knows where the ad-serving domains are (because you tell it), so it doesn’t forward those requests.</blockquote>



With a Rapsberry Pi 3 model b and a 64GB micro SD card, a set-up that is beefier than it needs to be, but who knows what the Pi will be used for in the future...

#1 Get Raspbian, and format micro SD card---  after much jiggling with the unlock tab on the adapter and <del>delicately</del> repeatedly inserting-half-inserting into 2012 Macbook Pro's gunked-up card reader port...

```bash
$ wget http://director.downloads.raspberrypi.org/raspbian/images/raspbian-2018-04-19/2018-04-18-raspbian-stretch.zip

$ unzip -a 2018-04-18-raspbian-stretch.zip

$ diskutil list
...
/dev/disk3 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *62.0 GB    disk3
   1:               Windows_NTFS                         62.0 GB    disk3s1

$ sudo diskutil eraseDisk FAT32 RASPBIAN MBRFormat /dev/disk3
...
Finished erase on disk3

$ df -h
/dev/disk3s1    62Gi  1.5Mi   62Gi     1%       0                   0  100%   /Volumes/RASPBIAN

$ sudo diskutil unmount /dev/disk3s1
Volume RASPBIAN on disk3s1 unmounted

$ sudo dd if=/Users/yearluk/Downloads/2018-04-18-raspbian-stretch.img of=/dev/disk3 bs=4m
```

#2 First boot on the Pi, change hostname, and run the installer...

```bash
$ sudo apt update
$ sudo apt upgrade
$ sudo nano /etc/hostname
pihole
...
$ curl -sSL https://install.pi-hole.net | bash
```

#3 Select eth0 as the interface, and 1.1.1.1 (Cloudflare) and 8.8.8.8 (Google) as the upstream DNS providers.

IP:                             192.168.2.23/24  

Default Gateway:  192.168.2.1

Log queries and select web-gui option.

admin password xxxxxxx

install log at /etc/pihole/install.log

web gui 192.168.2.23/admin

As easy as Pi :-)

Set up SSH and VNC access (just a couple of checkboxes in Raspberian's GUI), enable wi-fi (DCHP-- 192.168.0.104)

Expand blacklists...

```bash
curl -s https://tspprs.com/dl/fraud | pihole -g
curl -s https://tspprs.com/dl/ads | pihole -g
curl -s https://tspprs.com/dl/spam | pihole -g
curl -s https://tspprs.com/dl/scam | pihole -g
curl -s https://tspprs.com/dl/ransomware | pihole -g
curl -s https://tspprs.com/dl/phishing | pihole -g
curl -s https://tspprs.com/dl/tracking | pihole -g
```


## Unbound and setting up resolving/recursive DNS (rather than merely forwarding)



What's the difference? With **forwarding**, if a name has not been previously associated with an IP (ie. ached on the pi-hole), the request is sent upstream and the result cahed.

Aaand in **recursive**... request is sent to ROOT servers for resolving say, ".us", and thence to TLD name servers. Domain lookup will go to AUTHORATATIVE servers handling "yearl" (and subdomains), and all will be relayed and chached locally. So, a few more steps? Why do this? Neither Cloudflare nor Google (or whatever my upstream DNS would have been) will know where I am going. So, err privacy. Why not do this? It will take longer for the first resolution of a name.

Install the recursive DNS resolver:

```bash
sudo apt install unbound
```
Update list of primary root servers:

```bash
wget -O root.hints https://www.internic.net/domain/named.root 
sudo mv root.hints /var/lib/unbound/
```

Configure unbound:

```bash
sudo nano /etc/unbound/unbound.conf.d/pi-hole.conf
...
server:
    verbosity: 1
    port: 5353
    do-ip4: yes
    do-udp: yes
    do-tcp: yes



# May be set to yes if you have IPv6 connectivity




    
    <code>do-ip6: no
    
    # Use this only when you downloaded the list of primary root servers!
    root-hints: "/var/lib/unbound/root.hints"
    
    # Trust glue only if it is within the servers authority
    harden-glue: yes
    
    # Require DNSSEC data for trust-anchored zones, if such data is absent, the zone becomes BOGUS
    harden-dnssec-stripped: yes
    
    # Don't use Capitalization randomization as it known to cause DNSSEC issues sometimes
    # see https://discourse.pi-hole.net/t/unbound-stubby-or-dnscrypt-proxy/9378 for further details
    use-caps-for-id: no
    
    # Reduce EDNS reassembly buffer size.
    # Suggested by the unbound man page to reduce fragmentation reassembly problems
    edns-buffer-size: 1472
    
    # TTL bounds for cache
    cache-min-ttl: 3600
    cache-max-ttl: 86400
    
    # Perform prefetching of close to expired message cache entries
    # This only applies to domains that have been frequently queried
    prefetch: yes
    
    # One thread should be sufficient, can be increased on beefy machines
    num-threads: 1
    
    # Ensure kernel buffer is large enough to not loose messages in traffic spikes
    so-rcvbuf: 1m
    
    # Ensure privacy of local IP ranges
    private-address: 192.168.0.0/16
    private-address: 172.16.0.0/12
    private-address: 10.0.0.0/8
    </code>
```

And start unbound and validate:

```bash
sudo service unbound start
dig yearl.us @127.0.0.1 -p 5353
...
; <<>> DiG 9.10.3-P4-Raspbian <<>> yearl.us @127.0.0.1 -p 5353
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26331
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1472
;; QUESTION SECTION:
;yearl.us.          IN  A

;; ANSWER SECTION:
yearl.us.       3585    IN  A   104.28.19.121
yearl.us.       3585    IN  A   104.28.18.121

dig sigok.verteiltesysteme.net @127.0.0.1 -p 5353
...
NOERR
...
```

And then set custom upstram DNS in the pi-hole webgui to "127.0.0.1#5353"



## Some basic Pi (Debian Stretch base) stuff...



Basic Pi config:

```bash
$ sudo raspi-config
```

Move over, _ifconfig_!

```bash
$ hostname -I
192.168.2.23 192.168.0.104

$ ip -4 addr show | grep global
    inet 192.168.2.23/24 brd 192.168.2.255 scope global eth0
    inet 192.168.0.104/24 brd 192.168.0.255 scope global wlan0

$ cat /etc/resolv.conf
# Generated by resolvconf
nameserver 127.0.0.1
```

What're my interfaces default gateways?

```bash
$ ip route | grep default | awk '{print $3}'
192.168.2.1
192.168.0.1
```

Can configure a static IP via _/etc/network/interfaces_ or _/etc/dhcpcd.conf_ Might do this when moving the Pi from the 192.168.2.0 subnet to the router "guarding" 192.168.0.0

```bash
$ sudo route add default gw 192.168.0.1 eth0
$ sudo /etc/init.d/networking restart
```

EDIT (2018-06-19): Pi-hole was running quite nicely over wi-fi (assigned to 192.168.0.0), went to put it on the LAN and after removing SD card to placement of the Pi board inso some case the SD card decided to go fuck up. Anyhoo repeated above steps with a new (32GB) SD card, and all appears to be peachy-creamy.



* * *



[amazon_link asins='B01CD5VC92' template='ProductCarousel' store='yearlus-21' marketplace='UK' link_id='b8a58c15-a8f9-11e8-a3ad-890431147941']
[amazon_link asins='B0143RTCD6' template='ProductCarousel' store='yearlus-21' marketplace='UK' link_id='cc0d31e0-a8f9-11e8-9a2b-5b486ee34a3a']
