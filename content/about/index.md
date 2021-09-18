---
title: About this site
author: yearluk
origin: hugo
date: 2011-04-09'
lastmod: 2021-08-30
draft: false

weight: 1001
description: This site in its current incarnation is delivered via Hugo.
categories:
  - Blog
  - Webdev
  - Tech
tags:
  - emacs
  - hugo
  - about
  - websites
aliases:
  - about-us
  - about-hugo
  - contact
---


The current incarnation of whatever dross this is is implemented by [Hugo](https://gohugo.io), allegedly the **world’s fastest framework for building websites**. It is written in Go.

There are many websites like it, but this one is mine. At one point it was hosted on Tumbler (I think), then Blogger, and more recently Wordpress, but a snafu with the hosting provider-- to whom I had foolishly entrusted my Nextclouds-- led me to think about an alternative. Why, I don't rightly know since there's nothing much here anyway. And what is here is mostly odd and old notes of various things that may not all render consistently given their history.

The workflow, such that it is, is stuff is written locally, most likely in the one true ~~operating system~~ editor, [Emacs](https://www.gnu.org/software/emacs/), in orgmode. This is then converted using sorcery to markdown. 

The markdown is moved, usually manually, to a directory under git source control which is linked up to github. Phew. Sounds complicated. It's not. Netlify then grabs the git repository and displays the markdown as HTML using Hugo in a virtuous, continuous, virtuous, continuous development cycle. Sort of.

- DNSe🐍es are hissed by [Cloudflare](https://cloudflare.com). 
- Emails are under Swiss chocolate mountains @ [Protonmail](https://protonmail.ch).  
- Hosted by [Netlify](https://netlify.com)
- Analytics by [Goatcounter](https://goatcounter.com)
- Learn more about Hugo: [GitHub](https://github.com/gohugoio).
