---
title: "Vscodium Shortcuts, Debugging, and the Terminal"
slug: vs-code-vscodium-shortcuts-debugging-and-the-terminal
layout: post
author: yearluk
origin: hugo
date: 2021-09-30T09:13:11+01:00
lastMod: 2021-09-30T09:13:11+01:00
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
tags:
- editors
- vscode
- terminal
- ubuntu
- zsh
- fonts
---

After going ahead and updating Emacs, I thought I'd try the thing that all the kids are talking about-- VS Code. Or, if you are anything like me and remember the hoary days of the Browser Wars, [**VSCodium**](https://vscodium.com/), the telemtry-disabled version of the editor.

## Debugging

Since the primary objective is to learn some JSessy things, the first I need to be doing is figuring out debugging.

[The New Way To Debug JavaScript in VS Code - No Extension Required -- YT, July 2021](https://www.youtube.com/watch?v=tC91t9OvVHA)

So, install the "Live server" extension", hit the debug icon, and Vscodium will create a `launch.json` file:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:5500",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

The default port was **8080**. In the above this is changed to **5500** to match the port of the liveserver.

## Shortcuts

This video I found to be a very good introduction to VS Code, although it is maybe a little long at just over 90 minutes.

[Visual Studio Crash Course--YT](https://www.youtube.com/watch?v=WPqXP_kLzpo&t=783s)

Below are are of selction of commonly used shortcuts, snagged from the first twenty minutes ot so, and some individual poking around. Obviously it mostly uses [CUA](https://en.wikipedia.org/wiki/IBM_Common_User_Access) for editing, like (CTRL+C for copy) with additons nicked from the Textmate/Sublime era (CTRL+/ for toggle comments). I am tempted, as always, to Emacsify some of these bindings, but honestly, one always looks like a complete idiot when you don't find your usual bindings/shortcuts when on someone else's machine.

Anyhoo, in no real order...

### General / editor

- `ctrl+shift+p` ==> from here can search for *any* command ... eg. "toggle mini map", install extensions, whatever.

- `Ctrl+Shift+Tab` ==> switch between tabs does not interfer my my app/workspace swithcing bindings in GNOME

- `Ctrl+P` ==> something similar... file Picker

- `ctrl+B` ==> toggle side-bar
- `ctrl+shuft+E` ==> file Exlporer
- `ctrl+shuft+F` ==> file Finder
- `ctrl+shuft+G` ==> file Git (any VCS, actually,but ya know Git!)

- `alt+Z` ==> toggle word-wrap
- `Ctrl+/` ==> toggle comments
- `Ctrl+Shift+A` ==> Toggle block comment
- `Ctrl+] / Ctrl+[` ==> Indent/Outdent line/selection

- `Ctrl+Shift+K` ==> Delete line, but might just as well use `Ctrl+X` without selection

- Emmet, in HTML mode, type #foo-TAB get `<div id="foo"></div>`
- Emmet, built in extension for HTML, will expand `!` on TAB to create a basic HTML5 skeleton.

- "live server" extension for live preview of HTML-related projects

- list extensions, ready to import into a new system: `vscodium --list-extensions | xargs -L 1 echo vscodium  --install-extension`

### Moving around text

- `(Shift+)Home` / `(Shift+)End` ==> (select to) begining / end of line
- `PgUp` / `PgDown` ==> begining / end of file
- `Ctrl + L/R arrow` ==> move by word

- `Ctrl + X` ==> delete line if line is empty
- `Ctrl + C` ==> copy line if no selection

### Selections

- `Ctrl + D` ==> slecet the word curpor is on
- `alt + shift + r/l arrow` ==> expand/ contract selection, eg to line, to block etc.
- `alt + u/d arrow` ==> moves selection up/down
- `ctrl+l` ==> select whole line
- `Ctrl+K P` ==> copy path of the active file
- `Ctrl+K R` ==> show active file in file manager

` Ctrl+`` ==> launch terminal. This resolves to `$SHELL`. Additional shells and profiles can be managed: <https://code.visualstudio.com/docs/editor/integrated-terminal>

## Integrated Terminal

Well integrated terminal seems not to be offering-up ZSH options for me... `which zsh` is not even apparent, so let's dig into the settings... `ctrl+,` (that's a comma, yes) will open my user settings and `Ctrl+k p` will copy the path. I installed the Flatpak version of Vscodium, so settings are in the odd looking `$Home/.var`

`~/.var/app/com.vscodium.codium/config/VSCodium/User/settings.json`

It read before the below modifications:

```json
  {
    "editor.tabSize": 2,
    "editor.fontSize": 16,
    "redhat.telemetry.enabled": false,
    "security.workspace.trust.untrustedFiles": "open",
    "[html]": {
      "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "window.zoomLevel": 1,
    "workbench.colorTheme": "Tomorrow Night Eighties",
    "terminal.external.linuxExec": "alacritty",
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.defaultProfile.osx": ""

  }
```

### To the docoos

<https://code.visualstudio.com/docs/editor/integrated-terminal>

Seems like what I needed to add was the following. Other paths to other `zsh`s may differ.

```json
"terminal.integrated.fontFamily": "MesloLGM Nerd Font",
"terminal.integrated.profiles.linux": {
    "zsh (login)": {
      "path": "/usr/bin/zsh",
      "args": ["-l"]
    }
}
```

Aside from the `terminal.integrated.profiles.linux` block we apparently also needed a monospace font. [Nerd fonts](https://github.com/ryanoasis/nerd-fonts) are nice, so I cloned Meslo LGM.

```bash
git clone git@github.com:ryanoasis/nerd-fonts.git --depth 1
cd nerd-fonts
sudo ./install.sh
```

### Hey, Future Self... 
If you get that weird RSA error, just `chmod 600 ~/.ssh/id_rsa.github`, OK, Fella?
