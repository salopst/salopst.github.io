---
author: admin
origin: wordpress
comments: true
date: 2013-02-17T13:12:07+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: online-latex-editing-tools
title: Online LaTeX editing tools
wordpress_id: 20
categories:
- Tech
- Blog
tags:
- editors
- latex
- wordpress
---

For whatever reason, I've bumped into a number of in-browser `\LaTeX` editing tools recently. I guess these are mostly useful for collaborative efforts, and I can see a reason why one would not want to use Subversion or Git. I mean Eldest is just coming of an age where he's seeing computers as tools for his own use rather than just vectors of games/educational materials/movies. Because I am a benevolent father-dictator, he's already familiar with `\LaTeX` (and actually loves Computer Modern), and has decided to set all his writings in `\LaTeX` prior to submission. Good for him. I love the fact that he was complaining about fonts on the MacBook Airs at school, and the pain of writing in MS Word. Good boy!

So, rather than having him use my tool chain, which is very much tied to my laptop and [TeXstudio](http://texstudio.sourceforge.net/), we could use one of these. I might even be able to persuade his Grade IV teacher that `\LaTeX` is something worth introducing to the kids in its own right. She was, after all, blown away by 74111101's Christmas writing piece that we set in `\LaTeX`. I guess I'll make notes as I evaluate each below and add them here.

`\LaTeX` can, apparently, be embedded in WP using shortcodes <[http://en.support.wordpress.com/latex/](http://en.support.wordpress.com/latex/)>, but neither of the below "codes", for example appear to work out-of-the-box on self-hosted WP sites:

```
[cci_latex theme="default"]`\LaTeX`
$latex \LaTeX$[/cc]
```

So I installed two WP LaTex plugins: [Easy WP LaTeX](http://wordpress.org/extend/plugins/easy-wp-latex-lite/) and [QuickLaTeX](http://www.holoborodko.com/pavel/quicklatex/) (also [http://quicklatex.com/](http://quicklatex.com/)).

QuickLaTeX is *by far* the crisper of the two, and is what is used for the LaTeX symbol on this page.

```
\LaTeX` rendered w/ QuickLaTeX
[math]\LaTeX[/math] rendered w/ Easy WP LaTeX
```

## The online editors
[http://SpanDeX.io/](http://SpanDeX.io/)
[https://www.sharelatex.com/](https://www.sharelatex.com/)
[http://www.scribtex.com/](http://www.scribtex.com/)
[https://www.writelatex.com/](https://www.writelatex.com/)
[http://code.google.com/p/latex-lab/](http://code.google.com/p/latex-lab/)
