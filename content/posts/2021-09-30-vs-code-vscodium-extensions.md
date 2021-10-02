---
title: "VS Code / VSCodium Extensions"
slug: vs-code-vscodium-extensions
author: yearluk
origin: hugo
date: 2021-09-30T15:20:32+01:00
lastMod:
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
- vscodium
- code
- ubuntu
- snippets
- html
---

Some extensions for VS Code are not available when you search for them from within VSCodium. I have no idea why this is the case. Licensing issues?

quokka.js https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode is one of those. Fortunately you can download the `*.visx` file listed under "Rescouces", and install that from VsCodium.

- Listed (with a flatpak install) for me at:
`~/.var/app/com.vscodium.codium/data/codium/extensions`

### my installed extensions:

```bash
ls ~/.var/app/com.vscodium.codium/data/codium/extensions  | awk '{print $8}';

abusaidm.html-snippets-0.2.1
arcticicestudio.nord-visual-studio-code-0.15.0
artisanbytecrafter.poptheme-1.0.3
bierner.markdown-mermaid-1.12.1
budparr.language-hugo-vscode-1.2.0
coenraads.bracket-pair-colorizer-2-0.1.4
davidanson.vscode-markdownlint-0.44.0
dbaeumer.vscode-eslint-2.1.20
donjayamanne.githistory-0.6.18
dracula-theme.theme-dracula-2.24.0
esbenp.prettier-vscode-8.1.0
firefox-devtools.vscode-firefox-debug-2.9.1
goodbaikin.org-preview-1.1.0
josee9988.minifyall-2.9.3
mhutchie.git-graph-1.30.0
ms-azuretools.vscode-docker-1.16.1
ms-python.python-2021.9.1246542782
ms-toolsai.jupyter-2021.8.12
ms-vscode.theme-tomorrowkit-0.1.4
msjsdiag.debugger-for-chrome-4.12.6
mushan.vscode-paste-image-1.0.4
patbenatar.advanced-new-file-1.2.2
redhat.vscode-xml-0.18.0
ritwickdey.liveserver-5.6.1
robole.marky-edit-0.5.1
wallabyjs.quokka-vscode-1.0.402
wesbos.theme-cobalt2-2.1.6
```
Or `vscodium --list-extensions | xargs -L 1 echo vscodium  --install-extension` will do the same thing.
