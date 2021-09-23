---
author: admin
origin: wordpress
comments: true
date: 2015-05-05T06:52:08+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: from-bibex-to-biblatex-and-biber
title: From BibTeX to biblatex and biber
wordpress_id: 858
categories:
- Tech
tags:
- latex
- university
- file formats
---

I had occasion to look over some old dissertation-related files from twenty-years ago to this month... The directory was an odd mix of half-baked `$\LaTeX$` and `$\textsc{Bib}\TeX $`, readable but clearly incomplete *.RTF, *.DOC, and, of course *.SAM. *.SAM files were created by Ami Pro word processor from Lotus that I had running under windows 3.1 on my almost state-of-the-art **Dell i486DX2-S**. The *.SAM files were what were printed for submission, the `$\LaTeX$` stuff was just for giggles, but I *did* maintain my bibliographies in `$\textsc{Bib}\TeX $` format.

More on those *.SAM files in another post, when I have time to look at the content of this ancient work; for now some bib. stuff.

*New* `essay3.tex` file has in the preamble:

```latex
\usepackage[backend=biber,style=apa,citestyle=authoryear]{biblatex}
\addbibresource{essay3.bib} %no .bib extension if backend=bibtex
```

and the last six lines of essay3.tex read:

```latex
\nocite{*}
\printbibliography
\begin{center}
Typeset in \href{http://www.latex-project.org/}{\LaTeX}
\end{center}
\end{document}
```

So, there are no great shakes to get this file to start using [biber](http://biblatex-biber.sourceforge.net/) under `$\textsc{Bib}\LaTeX $`. And biber is the way to go forward... Unicode support, ease of style editing, and so forth. (The student of things archival will wonder if I am now messing with the *record* here. Err, sure, but then I was doing that as soon as the files were moved from those 3.5" floppies. And, anyway, is not *every* representation different?)

BUT... `essay3.te`x would not compile! Now I expected *not* to be able to read the olde Ami Pro files after twenty years, but I expected more from these arcane plain text files. I bashed (pun intended) around for a couple of hours, tearing hair, wondering if anyone _really_ understands $*\TeX$ anyway, went for a bike ride, and thought about the last twenty years. What had changed? Blair, obviously. Married to a decent, smart, sometimes funny woman. Two lovely boys. Unicode! Unicode happened. Nope. All files UTF-8.

I start going over the *.bib file (which validates using all the usual tools) entry by entry until:

```latex
@pamphlet{lstm_1920,
	Author = {---},
	Location = {Liverpool},
	Title = {Liverpool School of Tropical Medicine: Historic Record, 1898-1920},
	Year = {1920}}
```

Here I have an "--", an m-dash (three hyphens), and I suddenly recall that biber is written in Perl. In PCREs the hyphen "-" is a non-letter character, and in the bowels of biber somewhere there is prolly a regexp checking the contents of the "author" field. Quickfix?

```latex
Author = {\textemdash},
```

### 🎲🎲 Dice!

### So there you go.... looking stupid so you don't have to!
