---
title: "Fixing git oopsies"
slug: "fixing-git-oopsies"
author: "yearlus"
origin: "hugo"
date: 2021-09-08T10:43:08+01:00
lastMod: 2021-09-08T10:43:08+01:00
draft: false
toc: false
noLicense: false
weight: 1001
images:
categories:
  - Tech
  - Blog
tags:
  - webdev
  - hugo
  - git
  - tech
  - linux
description: "constantly ducking out to git is a PITA, but it can same your bacon. Here a gentle self-reminder to always MAKE SMALL, FREQUENT, ATOMIC commits."
---

I made an oopsies in `netlify.toml` that caused the build to fail, so review the commit history with `git log`:  

```bash
❯❯  git log | rg netlify
1481e97 Wed Sep 8 10:05:12 2021 +0100 C T     Added caching plugin; specified Hugo 0.80.0 to allow for easier tracking of errors and changes on netlify vs localhost; added content type headers
cb5842e Fri Aug 27 16:56:36 2021 +0100 C T     reset netlify base to root
188065b Fri Aug 27 16:20:53 2021 +0100 C T     First netlify.toml
```

And reset local head with 
- `git reset HEAD^ --hard` 

and push that back to github with 

- `git push origin main --force`

`--force` flag is necessary else git will bork about remote head being, well, 'ahead'.

And the lesson here, **especially when updating configs** is to make commits and pushes at atomic as possible. 

Here my error is making more than one-- apparently significant-- change at the same time. BUT at least it was only to one file. Goes without saying that this would be a WHOLE lot messier if I'd have had other changes in other files.

Having reverted the changes, all is well:


{{< image src="/img/uploads/netlify-build-fail-2021-09-08.png" alt="Netlify build failure" position="center" style="border-radius: 30px;" >}}

What is interesting is that I did not get a notification from the continuous deployment system. That's OK, though, the good people at Netlify are hosting this for the free. Since I am having so much grief currently with my existing hosting co., I am sorely tempted to throw a few shekels in Netlify's general direction.

