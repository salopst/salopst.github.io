---
author: admin
origin: wordpress
comments: true
date: 2013-02-16T21:56:25+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
slug: hello-world
title: From Posterous to Wordpress
wordpress_id: 1
categories:
- Tech
tags:
- blog
- web
---

The not-very-much-used-by-me Posterous is [going offline](http://blog.posterous.com/thanks-from-posterous) on April 30th 2013, roughly 12 months after its acquisition by Twitter. I had a few on-and-off posts there, and I guess it would sort of be a shame to loose them, so this is an attempted replacement. The Posterous blog is copied here: [http://sjy.yearl.us/sjy/posterous/blog.yearl.us/](http://sjy.yearl.us/sjy/posterous/blog.yearl.us/) ... that was a simple `wget -r -l inf -k -E -p -nc blog.yearl.us`  but I thought I'd also try and group these pages into Wordpress itself a lá [http://en.support.wordpress.com/import/import-from-posterous/](http://en.support.wordpress.com/import/import-from-posterous/)

Of course setting up Wordpress was a breeze.

- Set up a blank MySQL database with an admin user

- Then on the server with the webserver (in my case Apacehe2)

```bash
mkdir sjy
cd sjy
wget http://wordpress.org/latest.tar.gz
tar xzf latest.tar.gz
cd wordpress
mv * ..
cd ..
rm -rf wordpress
mv wp-config-sample.php wp-config.php
vi wp-config
```

Setting the login details of the MySQL database. And that is that. Went on into install the Suffusion theme for Wordpress (because although I do not intend to style this, my wife's gluten-free cooking blog uses Suffusion) and the [CodeColorer](http://kpumuk.info/projects/wordpress-plugins/codecolorer/)  plugin.
