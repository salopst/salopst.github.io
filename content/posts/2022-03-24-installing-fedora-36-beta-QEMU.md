---
title: "Installing Fedora 36 Beta (GNOME 42) in QEMU/KVM"
date: 2022-03-12T09:04:06+00:00
lastMod: 2022-03-18T10:17:19+00:00
slug: installing-fedora-36-gnome-42-qemu
layout: post
author: yearluk
origin: hugo
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Networking
- Linux
tags:
- techx
- "virtual machine"
- vm
- "KVM / QEMU"
- Fedora
- GNOME
---

{{< image src="/uploads/2022-03-24-fedora-36-beta.png" alt="Fedora 36 Beta and GNOME 42" position="center" style="border-radius: 30px;" >}}

Since we already have Fedoa 35 installed in a KVM let's just build off of this... superquick instructions here: [https://stephen.yearl.us/moving-from-virtualbox-to-qemu-kvm/](https://stephen.yearl.us/moving-from-virtualbox-to-qemu-kvm/#quickemu)

We can simply

```bash
sudo dnf update
sudo dnf upgrade --refresh
sudo dnf autoremove
sudo dnf install dnf-plugin-system-upgrade -y
sudo dnf system-upgrade download --releasever=36 --allowerasing
sudo dnf distro-sync
dnf system-upgrade reboot
dnf system-upgrade clean
```

## 🎲🎲 Dice
