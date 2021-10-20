---
author: admin
origin: wordpress
comments: true
draft: false
date: 2018-10-06T16:17:00+00:00
layout: post
slug: audacity-is-already-running-ps-ef-grep-aud-says-nada
title: "`Audacity is already running... ps -ef | grep aud` says nada"
wordpress_id: 1459
categories:
- Tech
- Apple
tags:
- apps
- audacity
- media
---

Machine crashed-- well, hung-- after [insert reason]. Age?
PS showed nothing, neither did "Activity Monitor", and my googlefu must have been for **/ʃaɪt/**, since I found nothing there either.

After some digging around the usual directories... a lock file. Kill that, and we're back in business.

![audacity-the-second-running](/uploads/2018-10-06-audacity-the-second-running.png)
