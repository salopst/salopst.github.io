---
author: admin
origin: wordpress
comments: true
date: 2019-05-13T17:05:55+00:00
lastMod: 2021-09-01T02:30:00.000Z
draft: false
noLicense: false
weight: 1001
layout: post
slug: openmediavault-4-server-psu-died
title: Openmediavault 4 server... PSU died
wordpress_id: 1480
categories:
- networking
- tech
tags:
- hardware
- homeserver
- media
- server
---

Oh, the sadness. Oh, the heartbreak. Never mind, stiff upper lip and all that, and remembering that I got the thing from the dump (sans disk and RAM) over a 18 months ago, it has not had a bad run.

Aaand just in case I come across a PSU and get her running again, she was:



### Old OMV4 box



DELL Inspiron 545
Serial: 839DK4J
Model: DCMF
Reg Type: 09040
Printed on mobo:
DG33M06
SE0709

So, on to something bigger and better:



### SUPERMICRO INFO



[https://www.supermicro.com/products/motherboard/QPI/5500/X8DTU-F.cfm](https://www.supermicro.com/products/motherboard/QPI/5500/X8DTU-F.cfm)

```bash
lshw -short

system SYS-6016T-NTRF-GI016 (To Be Filled By O.E.M.)
bus X8DTU-F
memory 64KiB BIOS
American Megatrends AMIBIOS v02.67 # <del>; on POST

2 x E5645 @ 2.40GHz
/0/4 processor Intel(R) Xeon(R) CPU
/0/4/5 memory 384KiB L1 cache
/0/4/6 memory 1536KiB L2 cache
/0/4/7 memory 12MiB L3 cache
6 cores, 12 threads
Max # of Memory Channels 3
```

[https://ark.intel.com/content/www/us/en/ark/products/48768/intel-xeon-processor-e5645-12m-cache-2-40-ghz-5-86-gt-s-intel-qpi.html](https://ark.intel.com/content/www/us/en/ark/products/48768/intel-xeon-processor-e5645-12m-cache-2-40-ghz-5-86-gt-s-intel-qpi.html)



#### RAM



Twelve 240-pin DIMM sockets support:
- up to 192 GB* of DDR3 Registered ECC
or
- up to 48 GB of Unbuffered ECC/Non-ECC DDR3 1333 MHz/1066 MHz/800 MHz
in
- 12 DIMM modules.

(*Refer to Supermicro's memory recommendation list posted on our website at [www.supermicro.com](http://www.supermicro.com). See Section 2-4 in Chapter 2 for DIMM Slot Population.)

```bash
lshw -c MEMORY

description: DIMM 1333 MHz (0.8 ns)
product: HMT151R7TFR4C-H9
vendor: Hyundai
physical id: 4
serial: 80B7B92B
slot: P0_DIMM3A
size: 4GiB
width: 64 bits
clock: 1333MHz (0.8ns)
```

And from memory sticker...

```
Hynix
4GB 2Rx4 PC3 - 10600R - 9 - 10 - E1
HMT151R7TFR4C-H9 T7 AE - C 1123
```

[https://blog.serverfault.com/2011/01/17/know-your-ram/](https://blog.serverfault.com/2011/01/17/know-your-ram/)
