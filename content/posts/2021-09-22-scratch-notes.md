---
title: "Scratch notes"
slug: scratch-notes
date: 2021-09-22T05:30:00+01:00
layout: post
author: yearluk
origin: hugo
description: Scratch notes
filename: 2021-09-22-scratch-notes.md
draft: true
pin: true
categories:
- Uncategorised
tags:
- scratch
- notes
---

## Installing Docker on Pop!_OS (Ubuntu 21.04)
This is as simple as following the steps outlined by the good folks over at Docker:
[https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/), essentialy copied below for ease of installation and for reference for Future Me.

```bash
# remove old versions if any
sudo apt-get remove docker docker-engine docker.io containerd runc

sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io

# Establish usergroup and reboot
sudo groupadd docker
sudo usermod -aG docker ${USER}
sudo reboot
sudo systemctl restart docker
```

Now we can go play with something interesting. Like, for example, good, olde emayle using [Postal](https://docs.postalserver.io/)

> **Postal** is a complete and fully featured mail server for use by websites & web servers. Think Sendgrid, Mailgun or Postmark but open source and ready for you to run on your own servers
>
> [https://docs.postalserver.io/](https://docs.postalserver.io/)

## Simplest possible Docker container?

With a `Dockerfile` containing

```docker
FROM busybox:latest
CMD ["ls"]
```

And running

```bash
~/code/containers
docker build -it busybox:latest .
docker run busybox:latest
```

We have an interactive minimal install of busybox, a VERY slim kinda-Linux.



## Basic Docker commands

- List images.
`docker image ls`

- Delete an image.
`docker image rm [image name]`

- Delete all existing images.
`docker image rm $(docker images -a -q)`

- List all existing containers (running and not running).
`docker ps -a`

- Stop a container.
`docker stop [container name]`

- Stop all running containers.
`docker stop $(docker ps -a -q)`

- Delete a stopped container.
`docker rm [container name]`

- Delete all stopped containers.
`docker rm $(docker ps -a -q)`

- Display logs of a container.
`docker logs [container name]`

## Hugo Forms and reCAPTCHAs
Grabbed two keys from https://www.google.com/recaptcha/admin/site/478495144/settings and added them to a `yearlus.env` (`.gitignore`d, obviously) file in the root of this site as `yearlus.g-recaptcha.data-sitekey` and `yearlus.g-recaptcha.data-secretkey`.

{{/* getenv "yearlus.testenv" */}}

{{ getenv "yearlus.testenv" }}

https://developers.google.com/recaptcha/docs/display

This HTML has to be dropped somewhere...

```html
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <form action="?" method="POST">
      <div class="g-recaptcha" data-sitekey="6LeoQYUcAAAAADkkd9v9JNkBd_aiVj7m4_lsvHaf"></div>
      <br/>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

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

https://github.com/holehan/atom-hugo-snippets

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
[] Add "copy this code block" functionality

[] https://cli.github.com/

[] https://github.com/reactioncommerce/reaction

[] revisit GNU Stow

[] Hugo search -- client side JSON or some servery Docker solution? Why not both?

[] filter the emails: stephen+site@yearl.us for example.... and the .uk domain.

[] git branching and merging

[] complete site migration ... think about rebasing to yearlus.github.io. gitlab?

[] check out forrestry.io

[] kefir etc.

[] replace pop with rhel?

[] Do css for ```lyrics and ```poetry

[] Do forms and recapture

[] Do CSS for forms and recapture

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

**ἑκατόμβη** -- From ἑκατόν (hekatón, “hundred”) + βοῦς (boûs, “ox”). Mass animal sacrifice, made famour by Alexander B. Johnson, UK PM.


## To read:
"The Machine Stops" is a science fiction short story (12,300 words) by E. M. Forster. After initial publication in The Oxford and Cambridge Review (November 1909), the story was republished in Forster's The Eternal Moment and Other Stories in 1928.

./content/posts/2021-09-22-scratch-notes.md

## Rando language jokes
[https://www.reddit.com/r/linguistics/comments/ptasv1/phrases_in_one_language_that_sound_dirty_in/](https://www.reddit.com/r/linguistics/comments/ptasv1/phrases_in_one_language_that_sound_dirty_in/)
- Do you want to learn Spanish?
- Just spell S-O-C-K-S... "Eso sí que es"
- It is what it is

French: ouate de phoque -- cotton wool of a seal or the stuffing from a seal plush doll, it really is a nonsense phrase, but it sounds like the English "What the fuck", fast forward and know 'ouate de phoque' can be used as a humorous interjection, with the meaning of what the hell.

Esperanto "Homo longe penis farti bone" means "A person tried to be well/alright for a long time".





## Glorious!
PBKS vs RR (2021-09-21)

https://www.google.com/search?channel=fs&client=ubuntu&q=pbks+vs+rr+2021+scorecard#sie=m;/g/11nxskh4h5;5;/m/03b_lm1;sm;fp;1;;

Punjab Kings need [eight runs off the final two overs](https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-rajasthan-royals-32nd-match-1254111/full-scorecard). They have eight wickets in hand. [Aiden Markram](http://www.espncricinfo.com/player/aiden-markram-600498), signed as a late replacement because of his scintillating form in Sri Lanka, and [Nicholas Pooran](http://www.espncricinfo.com/player/nicholas-pooran-604302), widely touted to be one of the cleanest six-hitters, have put on a half-century stand off just 28 balls. A defeat looms large for Rajasthan Royals. Surely, they weren't thinking of a coup. Or maybe they were, because it's Kings who, not for the first time in recent memory, contrived to turn it into a game of nerves.

Three from one. Kumble is fuming now. Rahul is wiping sweat off his forehead. Tyagi, at the top of his mark, shows zen-like calm. He takes a deep breath, steams in and bowls a stunning wide yorker. Allen fails to make contact, and just like that Tyagi has delivered four successive dots. Under immense pressure, to steal two points from under the rug of the shell-shocked Kings.

~ credit: [ESPNcricinfo](https://www.espncricinfo.com/story/pbks-vs-rr-ipl-2021-mustafizur-rahman-kartik-tyagi-pull-off-a-coup-as-punjab-kings-suffer-yet-another-meltdown-1278968)

### [#HallBol](https://www.youtube.com/watch?v=0iWWmOlSrWM)
{{< yt-media id="0iWWmOlSrWM" yt_start="10" autoplay="true" >}}
