---
title: "Scratch notes"
slug: scratch-notes
date: 2021-09-22T05:30:00+01:00
layout: post
author: yearluk
origin: hugo
description: Scratch notes
filename: 2021-09-22-scratch-notes.md
draft: false
pin: true
categories:
- Uncategorised
tags:
- scratch
- notes
---

## Flatpaked apps
To ensure that applications have private storage space (and cannot snoop on each other), the various XDG dirs are changed from the user defaults. You can find them in `~/.var/app/$app_id/$xdg_dir`.\

Keep in mind that applications still might use an additional subdirectory such as gnome-builder in the above case. So `.config/gnome-builder/` is instead `~/.var/app/org.gnome.Builder/config/gnome-builder` in it's application private space.

## Atom editor
Thought I'd try out the [Atom](https://atom.io/) for the giggles. Why? Isn't it all Electonic anf JAvascript and everything Emacs isn't? Yes it is, and it is default Microsoft owned as well. I already Feel like a traitor using github anyway. Might as well hu hung for a sheep as a lamb, as they say.

Ain't no system thang, so I installed the flatpak: [https://flathub.org/apps/details/io.atom.Atom](https://flathub.org/apps/details/io.atom.Atom). AND the awesome [Flatseal](https://flathub.org/apps/search/flatseal), "a graphical utility to review and modify permissions from your Flatpak applications".

### Change autocomplete
First off, `<enter>` triggers autompletion options. That's a PITA for sure. Changing it was non-obvious as well, and required a trip to the DDGs. Here's how to change it:

##### "Edit → Preferences → Packages → autocomplete-plus → Settings → Keymap for confirming a suggestion"

{{< image src="/img/uploads/2021-09-22-atom-autocomplete-plus.png" alt="Change defauly autocomplete in atom editor" position="center" style="border-radius: 50px;" >}}


### snippets

If it's difficult to determine the package handling the file type in question (for example, for .md documents), you can also proceed as following. Put your cursor in a file in which you want the snippet to be available, open the Command Palette (`cmd-shift-p`), and run the `Editor: Log Cursor Scope` command. This will trigger a notification which will contain a list of scopes. The first scope that's listed is the scope for that language.

This file, for example, returns `text.html.hugo` AND NOT markdown, which is interesting.

#### Example snippet:
```hugo
'.text.html.hugo':
  'Markdown code block-- bash':
    'prefix': 'cba'
    'body': '```bash\n$1\n```'
  'Hugo Braces':
    'prefix': 'hbra'
    'body': '{{ $1 }}'
```

## Some handy rando Hugo links
- https://victoria.dev/blog/
- https://bart.degoe.de/use-hugo-output-formats-to-generate-lunr-index-files/
- https://wowchemy.com/docs/content/writing-markdown-latex/

## Some `git`s
### In order to update an existing Git submodule, execute...
```bash
git submodule update --remote --merge
```

### Made some changes to files that I don't want to commit...
But they are tracked (not in `.gitignore`). How to rationalise that and clean up `git status`?
```bash
git update-index --assume-unchanged content/posts/*.markdown
```

### Install githubcli
[https://cli.github.com/](https://cli.github.com/)
```bash
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

## GitHub Pages failed to build your site.
```text
There was a YAML syntax error on line 2 column 1 in <unknown>): did not find expected key while parsing a block mapping at line 2 column 1 YAML Exception reading themes/hello-friend-ng/archetypes/posts.md: (<unknown>: did not find expected key while parsing a block mapping.
```

## TODO

[] Do css for ```lyrics and ```poetry

[] Get back to the Dockers

[] Grab remote DOM and inject into current
```javascript
import request from 'request';
import cheerio from 'cheerio';

export default function getBody(url, callback) {
  request(url, (err, res, body) => {
    $ = cheerio.load(body);
    $('h2') // finds all of the `h2` tags within the `body` object.
  });
}
```

## Some words
**epicaricacy** -- schadenfreude From Ancient Greek ἐπιχαιρεκακία (epikhairekakía, “joy upon evil”).
IPA(key): /ˌɛpɪˈkæɹɪkəsi/

## Glorious!
Punjab Kings need [eight runs off the final two overs](https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-rajasthan-royals-32nd-match-1254111/full-scorecard). They have eight wickets in hand. [Aiden Markram](http://www.espncricinfo.com/player/aiden-markram-600498), signed as a late replacement because of his scintillating form in Sri Lanka, and [Nicholas Pooran](http://www.espncricinfo.com/player/nicholas-pooran-604302), widely touted to be one of the cleanest six-hitters, have put on a half-century stand off just 28 balls. A defeat looms large for Rajasthan Royals. Surely, they weren't thinking of a coup. Or maybe they were, because it's Kings who, not for the first time in recent memory, contrived to turn it into a game of nerves.

Three from one. Kumble is fuming now. Rahul is wiping sweat off his forehead. Tyagi, at the top of his mark, shows zen-like calm. He takes a deep breath, steams in and bowls a stunning wide yorker. Allen fails to make contact, and just like that Tyagi has delivered four successive dots. Under immense pressure, to steal two points from under the rug of the shell-shocked Kings.

~ credit: [ESPNcricinfo](https://www.espncricinfo.com/story/pbks-vs-rr-ipl-2021-mustafizur-rahman-kartik-tyagi-pull-off-a-coup-as-punjab-kings-suffer-yet-another-meltdown-1278968)

### [#HallBol](https://www.youtube.com/watch?v=0iWWmOlSrWM)
{{< yt-media id="0iWWmOlSrWM" yt_start="10" autoplay="true" >}}
