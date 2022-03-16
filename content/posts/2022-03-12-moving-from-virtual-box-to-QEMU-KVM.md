---
title: "Moving from VirtualBox to QEMU/KVM"
date: 2022-03-12T09:04:06+00:00
lastMod:
slug: moving-from-virtualbox-to-qemu-kvm
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
- VirtualBox
---

Since the death of my 2012 Macbook Pro (very decent ROI there— $2400 amortized over 9 years!) last January, I've been running QEMU/KVM exclusively for virtualization needs. There are a couple of VirtalBox VDIs, however, hanging around on my system, having little Oracle parties. Now that I've determined never to buy another Macbook until Apple start to machine their machines to be a little more user-serviceable… vamos a convirtilos.

## Make sure all the Linux tools are installed (Debian host)

```bash
sudo apt install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager spice-client-gtk
```

## Make a folder to share files across VMs

```bash
mkdir ~/VM-share-files
```

##   #########################################

**VDI** (Virtual desktop infrastructure) is the drive image most widely supported by hypervisors. There are many other from other  hypervisor solutions, but VDI is VirtuxBox's default

**QCOW2** (QEMU (QuickEMUlation) Copy On Write) is the disc image file for VMs used by QEMU based hypervisors.

## Convert Virtualbox VMs to QEMU/KVM — VDI to QCOW2

VirtManager (the GUI) default location for installation of `*qcow` VMs: `/var/lib/libvirt/images`. We could use this directory, or instead pull from a directory under `$HOME`, a directory much more likely to be under backup control. Your decision.

```bash
if [ ! -d ~/VMs ]
then
 mkdir -p ~/VMs
fi
```

Power off the VMs, then:

```bash
cd '~/VirtualBox VMs'
qemu-img convert -f vdi -O qcow2 centos8-4-server1.vdi ~/VMs/centos8-4-server1.qcow2
```

{{< image src="/uploads/2022-03-12-convert-vdi-to-qcow2.png" alt="convert-vdi-to-qcow2" position="center" style="border-radius: 30px;" >}}

# Brilliant! We have a qcow2 HDD image. Now what?

The **bad** news is that launching a VM from a CLI making use of this qcow2 is, err, more than a little involved. For example, here's the command to launch a Fedora 35 qcow2 already on the system:

{{< image src="/uploads/2022-03-12-long-qemu-boot-qcow2-cmd.png" alt="a very long command" position="center" style="border-radius: 30px;" >}}

The **good** news is a quick:

```bash
virt-install --name centos8-4-server1 \
--memory 4096 \
--vcpus 4 \
--disk ~/VMs/centos8-4-server1.qcow2,bus=sata --import \
--os-variant centos8 \
--network default
virt-install --name win10-pro \
--memory 4096 \
--vcpus 4 \
--disk ~/VMs/win10-pro.qcow2,bus=sata --import \
--os-variant win10 \
--network default
--graphics spice --ram=2046
```

**NOTE** For the number of CPUs... just divide the number returned by `egrep -c '(vmx|svm)' /proc/cpuinfo` by so. 8 cores this is old laptop, so 4 virtual CPUs.

**NOTE** Available `os-variant`s can be found by running `osinfo-query os`

This will launch the image in Virt-viewer and register it with Virt-manager:

{{< image src="/uploads/2022-03-12-VirtManager.png" alt="VMs registered with Virt-anager" position="center" style="border-radius: 30px;" >}}

And in the dialog boxes here, further, more refined modifications may be made.

Or, modifications may be made from the CLI using `virsh`. Below `virsh list --all` and `virsh --connect` list and launch registered VMs:

{{< image src="/uploads/2022-03-12-virsh-list-virsh-connect.png" alt="virsh list --all and virsh --connect" position="center" style="border-radius: 30px;" >}}

## QuickEMU

- <https://github.com/wimpysworld/quickemu>

A pair of shell scripts for the quick downloading and running of QEMU KVMs via the command line.

```bash
cd ~/src
git clone --depth=1 https://github.com/wimpysworld/quickemu
cd quickemu
quickget fedora 35 workstation
quickemu --vm fedora-35-Workstation.conf --display-spice
```
