---
author: admin
origin: wordpress
comments: true
date: 2014-08-02T17:45:01+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: removing-google-auto-software-update
title: Removing Google auto-software-update
wordpress_id: 1012
Categories:
- Uncategorized
tags:
- nogoogle
- sysadmin
---

Not really that insidious ([googles-secret-update-software)](http://applehelpwriter.com/2014/07/13/how-to-remove-googles-secret-update-software-from-your-mac/), IMHO, but, just in case:

```/Library/Google/GoogleSoftwareUpdate/GoogleSoftwareUpdate.bundle/Contents/Resources/GoogleSoftwareUpdateAgent.app/Contents/Resources/ksinstall –nuke```
