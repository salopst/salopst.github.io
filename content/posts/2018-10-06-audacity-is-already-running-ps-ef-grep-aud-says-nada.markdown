---
author: admin
comments: true
date: 2018-10-06 16:17:00+00:00
layout: post
link: http://stephen.yearl.us/audacity-is-already-running-ps-ef-grep-aud-says-nada/
slug: audacity-is-already-running-ps-ef-grep-aud-says-nada
title: Audacity is already running... ps -ef | grep aud says nada
wordpress_id: 1459
categories:
- tech
- Apple
tags:
- apps
- audacity
- media
---

Machine crashed-- well, hung-- after [insert reason]. Age?
PS showed nothing, neither did "Activity Monitor", and my googlefu must have been for **/ʃaɪt/**, since I found nothing there either.

After some digging around the usual directories... a lock file. Kill that, and we're back in business.

[caption id="attachment_1460" align="aligncenter" width="300"][![audacity-the-second-running](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06-300x116.png)](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06.png) audacity-the-second-running[/caption]
