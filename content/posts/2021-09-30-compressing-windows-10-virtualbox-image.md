---
title: "Compressing a Windows 10 VirtualBox Image"
slug: compressing-windows-10-virtualbox-image
date: 2021-09-30T09:21:43Z
layout: post
author: yearluk
origin: hugo
description: "Compressing  Windows 10 VDI (VirtualBox) Virtual Machine image.)"
draft: false
categories:
- Tech
- Sysadmin
tags:
- webdev
- VM
- seo
- amazon
- ubuntu
- virtualBox
---

Apparently I purchased the blow 1TB SSD back on May 14 because the price was good, and my venerable T460 was otherwise running out of space, and I figured I was going to have to duplicate my old iTunes library for connection with my iPhone. I also had a hankering to play some cricket games on Steam.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=yearlus-21&language=en_GB&marketplace=amazon&region=GB&placement=B07YD579WM&asins=B07YD579WM&linkId=d122c37b66a68fd72dd55fabb33d23a2&show_border=true&link_opens_in_new_window=true"></iframe>

I therefore set up a Windows 10 VDI for us in VirtualBox with iTunes, Steam and a few other essentials: git, Powershell, VSCode. The games I had in mind would not work on so old a machine, and I found alternate arrangements for music management, BUT the initial 100GB allocated to the VM seems to have grown to over 140GB... a bit pans consideredin there's no data in the damned thing.

Let's compress it!

Actually, starting with the easy bit. The command is simply `VBoxManage modifymedium "~/VirtualBox\ VMs/win-10-pro/win-10-pro.vdi" --compact` but there was not much compression going on... something on the Windows end.

## 01 Disk Cleanup
Windows keeps a ton of old updates, temp files and general crud that  accumulating over time.
- Search for “Disk Clean-up”. Run it.

## 02 Compact.exe
Compress WIndows system binaries
- Run `Compact.exe /CompactOS:always` from cmd.exe/Powershell ("Run as Administrator")

## 03 Disable hibernate/suspend to disk
- Run `powercfg /h off` from cmd.exe/Powershell ("Run as Administrator").
VirtualBox has its own suspend functionality anyway.

## 04 Sdelete.exe

[https://docs.microsoft.com/en-gb/sysinternals/downloads/sdelete](https://docs.microsoft.com/en-gb/sysinternals/downloads/sdelete)

> SDelete (Secure Delete) is such an application. You can use SDelete both to securely delete existing files, as well as to securely erase any file data that exists in the unallocated portions of a disk (including files that you have already deleted or encrypted).

We're gonna use this to write in a wrote bunch of zeros, which can be easily compressed, as opposed the the

- Run `sdelete.exe c:\ -z` from cmd.exe/Powershell ("Run as Administrator").

## 05 Compress the VM

- Run `VBoxManage modifymedium "~/VirtualBox\ VMs/win-10-pro/win-10-pro.vdi" --compact`

And Lo!

{{< image src="/img/uloads/2021-10-09-compact-a-vdi.png" alt="Compact a VDI" position="center" style="border-radius: 50px;" >}}
