---
author: admin
origin: wordpress
comments: true
date: 2017-03-01T14:33:33+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: eek-codecolorer-wordpress-plugin-and-php-7-1
title: Eek! CodeColorer Wordpress plugin and PHP 7.1
wordpress_id: 1301
categories:
- Tech
- Blog
- Webdev
tags:
- wordpress
- blog
- sysadmin
- PHP
- hosting
---

Having used the most excellent [Hurricane Electric](http://he.net/) for the longest time I decided to relocate. In so doing I realised that I was moving from a PHP 5.2 to a PHP 7.1 environment. Gulp! Has it been that long. Expecting lots o' issues, but amazingly no. Just the tiniest of tiny issues:

```bash
PHP Warning:  preg_replace(): The /e modifier is no longer supported, use preg_replace_callback instead in /var/www/wp-content/plugins/codecolorer/codecolorer-core.php on line 50
```

### So, comment out:

```php
  function BeforeHighlightCodeBlock($content) {
    $content = preg_replace('#(\s*)\[cc([^\s\]_]*(?:_[^\s\]]*)?)([^\]]*)\](.*?)\[/cc\2\](\s*)#sie', '$this->PerformHighlightCodeBlock(\'\\4\', \'\\3\', $content, \'\\2\', \'\\1\', \'\\5\');', $content);
    $content = preg_replace('#(\s*)\(.*?)\(\s*)#sie', '$this->PerformHighlightCodeBlock(\'\\3\', \'\\2\', $content, \'\', \'\\1\', \'\\4\');', $content);
    return $content;
  }
```

### adding

```php
  function BeforeHighlightCodeBlock($content) {
    $content = preg_replace_callback('#(\s*)\[cc([^\s\]_]*(?:_[^\s\]]*)?)([^\]]*)\](.*?)\[/cc\2\](\s*)#si', function($matches){
      return $this->PerformHighlightCodeBlock($matches[4], $matches[3], $matches[2], $matches[1], $matches[5]);
    }, $content);
    $content = preg_replace_callback('#(\s*)\(.*?)\(\s*)#si', function($matches){
      return $this->PerformHighlightCodeBlock($matches[3], $matches[2], '', $matches[1], $matches[4]);
    }, $content);
    return $content;
  }
php
