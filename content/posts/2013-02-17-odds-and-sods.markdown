---
author: admin
comments: true
date: 2013-02-17 04:11:39+00:00
layout: post
link: http://stephen.yearl.us/odds-and-sods/
slug: odds-and-sods
title: Odds and sods
wordpress_id: 46
categories:
- tech
tags:
- OS X
- shortcuts
- snippets
---

Compile of KDE4 keeps failing on FreeBSD 9.1 whether by


```bash 
# cd /usr/ports/x11/kde4 # make install clean
```




or


```bash 
# pkg_add -r kde4
```


after `STOP`  tried


`# cd /usr/ports/x11/xorg # make install clean` --> OK. Then: `# cd /usr/ports/x11/kde4 # make install clean`




Works like a charm!




------------------------

⌘ – &#x2318; – &#8984; – Cmd  
⌥ – &#x2325; – &#8997; – Opt / Alt  
⇧ – &#x21E7; – &#8679; – Shift  
⎋ – &#x238B; – &#9099; – ESC  
⇪ – &#x21ea; – &#8682; – Capslock  
⏎ – &#x23ce; – &#9166; – Return  
⌤ –  Enter (⇧ + ⏎)  
⌫ – &#x232b; – &#9003; – the Delete / Backspace symbol  
⌦ – Forward-Delete (fn + ⌫)  
⌃ – Control⇥ – Tab 


To enter unicode char point, select "Unicode Hex Input" in Input sources then, for e.g. ⌥+2318 for the ⌘ symbol.  Or double-click the relevant icon in Character Viewer.


ctrl+shift+ tab == cycle chrome tabs


[space] selects the os x dialog button with blue surround… makes it blue


cmd + D  –  don’t save os x dialog  
⌘ + ` –  cycle through an apps windows  
⌘ + L  –  focus Chrome address bar  
⌘ + ⇧ + 4  –  screenshot  
Cmd + right / left arrow  –  go to end / beginning of line  
Control+Shift+Eject -- shutoff screen 




** VLC:**

E  – frame advance


shift+cmd+ left / right arrow – short jump back / forwards 


#opens finder at path:

```bash
$ open /path/to/files
```


Very nifty when combined with Alfred `opt+space > open /path/to/files`


-------------------------

Chrome's web history is a sqllite db:  
```bash
~/Library/Application\ Support/Google/Chrome/Default/Web\ Data
```


`select * from autofill where value like '%@%' order by value;`

-------------------------

Clear Terminal:  
```bash
$ rm ~/.bash_history  
$ sudo rm /var/log/asl/*.asl  
$ history -c  
$ clear
```

On 10.8.2, I sporadically get multiple listings for installed apps in the contextual menu. Following fixes that... for a while. 

```bash
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user
```




--------------------------




If ye have a Mac and you need batch processing, like say the images in this post try sips in Terminal.app:




```bash
$ sips -Z 800 *.JPG -i -s format png --out /Users/yearlus/Desktop/SR-71-rocket-imgs/png
```




Which basically says take every jpeg in the current directory, make the longest axis 800 pixels (preserving aspect ratio), also create a PNG version, and copy the results to a directory on my desktop.
