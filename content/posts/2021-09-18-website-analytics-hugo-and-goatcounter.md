---
title: "Website Analytics Hugo and Goatcounter: Ditching Google"
slug: website-analytics-hugo-shortcodes-and-goatcounter
author: yearluk
origin: hugo
date: 2021-09-18T05:43:09
lastMod:
draft: false
noLicense: false
weight: 1001
description: 
categories:
  - Tech
  - Blog
  - Hugo
tags:
  - shortcodes 
  - analytics
  - google
  - javascript
  - linux
  - webdev
---
 
 ## Goatcounter

So, the Googles are everywhere. Their website analytics have been free to use for some time-- almost as long as I can remember-- and they are, frankly pretty amazing. But surely, surely there is something that grates less on the conscience?

Why yes! [Goatcounter](https://countcounter.com) is Free, Libre Open-Source Software (you do FLOSS, right?) that attempts pretty much the same kind of analytics. It's a lightweight, privacy-conscious website analytics platform, free of cookies and all that intrusive jazz.

It provides simple user tallys of site vistors without all the bells and whistles and unnecessary features of Google Analytics, and without the use of cookies or intrusive trackers.

## Instauration 

That's as simple as heading over to [https://goatcounter.com](https://goatcounter.com) and signing up to get a "code" for your site. The code is of your own determination, not a pseudo-random string. Logically I chose *yearlus* for this locus of rambling... and goat stats are at [https://yearlus.goatcounter.com](https://yearlus.goatcounter.com).

Jam the supplied script anywhere on your site, and you are ready to cook.


## The Hugo bit

### 0. Create a `partials/goatcounter.html` template

```html
<script id="partials/goatcounter.html" 
  data-goatcounter="https://{{ .Site.Params.goatcounter }}.goatcounter.com/count"
  async src="//gc.zgo.at/count.js"></script>
```

### 1. Add the 'code' to your `config.toml` under params

```toml
[params]
   goatCounter = "yearlus"
```

You will, of course have other params. Don't repeat the `params` table, just copy your goatcounter code under it.

### 2. Call the goatcounter.html template from wherever you like

I call it from two places, from a Javascript template and from the template for the footer of this site, *comme ça*: 

```html
{{- if .Site.Params.goatcounter }}
   <span>Analytics by <a href="https://{{ .Site.Params.goatcounter }}.goatcounter.com">Goatcounter</a>
{{- end}}
```

## And that is pretty much that. Except, naturally for the real GOAT...

{{< rawhtml >}}
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/RecklessHideousBaiji' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p> <a href="https://gfycat.com/recklesshideousbaiji">via Gfycat</a></p>
{{< /rawhtml >}}