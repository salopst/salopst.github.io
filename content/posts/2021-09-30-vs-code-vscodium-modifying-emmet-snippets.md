---
title: "Vscodium modifying Emmet snippets"
slug: vs-code-vscodium-modifying-emmet-snippets
author: yearluk
origin: hugo
date: 2021-09-30T13:20:32+01:00
lastMod: 2021-09-30T13:20:32+01:00
draft: true
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
tags:
- editors
- vscode
- code
- ubuntu
- snippets
- html
---

[Emmet](https://emmet.io/) is an HTML/CSS code completion extension to VS Code (or the more libre version, Vscodium) editor/ half-an-IDE. Snippets of code are stored locally in a `snippets.json` file, and these snippets are called into being after being triggered by a certain sequence of key-strokes.

By default, in a blank HTML document, upon using the trigger `!+TAB`, Emmet will insert the following boilerplate/skeleton HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

Which is cool and all, but might lack a couple of things you commonly use on all you pages. So let's modify this default template, the snippet code of which looks like:

```json
"!!!": "{<!DOCTYPE html>}",
"doc": "html[lang=${lang}]>(head>meta[charset=${charset}]+meta[http-equiv='X-UA-Compatible'][content='IE=edge']+meta:vp+title{${1:Document}})+body",
"!|html:5": "!!!+doc",
```

The documentation, again, is invaluable here: https://code.visualstudio.com/docs/editor/emmet. We'll be needing that because the snippet syntax looks like PERL line noise. Probably because everythin in VSCode is shoehorned into JSON. A format so fsked that it does not even permit coments. Yay "literate programming"!

Hit either `CTRL+,` (yes, a comma) or navigate to Preferences >> Settings and search for "emmet extension path"

{{< image src="/img/uploads/2021-09-30-vscodium-emmet-snippet.png" alt="vscodium>>preferences>>settings>>Emmet Extension Path" position="center" style="border-radius: 50px;" >}}

This I'll set to `~/.config/emmet/`, **NB this is the *path* to `snippets.json` and NOT the file itself.

```bash
mkdir -p $XDG_CONFIG_HOME/emmet/ && cd "$_"
touch snippets.json
```

And edit that with whatever editor you fancy. For example:

```json
{
  "html": {
    "snippets": {
      "cdncss": "link[href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css']+link"

    }
  },
  "css": {
    "snippets": {
    }
  }
}
```

These custom, user defined, snippets will override the defaults. Obviously I've not got anything to add because I don't deal with HTML on the daily on the daily. but back when XML was cool, I'd have been all over this.

## Enough waffle. Where is Emmet's internal snippets file so I can learn from example and modify it to suit my needs?

It's here: https://github.com/emmetio/emmet/blob/master/snippets/html.json

Go forth and snip!
