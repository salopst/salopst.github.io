---
title: "Fixing a generic github pages build error"
slug: fixing-a-generic-github-pages-jekyll-build-error
author: yearluk
origin: hugo
date: 2021-09-18T06:24:19+01:00
lastMod: 2021-09-19T13:00:49+01:00
draft: false
noLicense: false
weight: 1001
description: 
categories:
  - Tech
  - Blog
  - Hugo
tags:
  - github
  - jekyll
  - linux
  - webdev
---
 
For the last little while I've been getting generic messages from github about jekyll build failures.  I've been ignoring these because I don't much care about jekyll, and things seem to be working well enough with the files as they are hoovered by by Netlify, and build largely without iss to produce this site.

I might have tried to fix this sooner, but the messages are pretty generic. How generic? *This generic*:

{{< image src="/img/uploads/2021-09-18-generic-github-build-error.png" alt="Generic jekyll build error" position="center" style="border-radius: 50px;" >}}

## Attempted solution #1
Poking around the doco a bit I see that files over 50MB can cause issues. Maybe it's this...

 ```bash
  ../salopst.github.io on  main [!?]
 🧠 17GiB/23GiB avec λ=❯ ...
 ❯❯ find . -type f -size +40M
 ./content/img/uploads/pietra-filosofale/assets/Audiolibro -  Harry Potter e la Pietra Filosofale Completo.m4a

 ❯❯ ls -lah "./content/img/uploads/pietra-filosofale/assets/Audiolibro -  Harry Potter e la Pietra Filosofale Completo.m4a"
   inode Permissions Size User    Date Modified Name
53482385 .rw-rw-r--  564M yearluk 30 Aug 11:59  ./content/img/uploads/pietra-filosofale/assets/Audiolibro -  Harry Potter e la Pietra Filosofale Completo.m4a
 ```

564MB ... err. Yeah. Sorry 'about that.

### To the {{< fa fab github 2x >}}gits!

{{< image src="https://octodex.github.com/images/homercat.png" alt="Homercat will know what the Duff to do!" position="center" style="border-radius: 50px;width: 50%;height: auto"  >}}

#### 1. Stage the offender (but leave it on disk)
```bash
  ../salopst.github.io on  main [!?]
 🧠 17GiB/23GiB avec λ=❯ ...
 ❯❯ git rm --cached "content/img/uploads/pietra-filosofale/assets/Audiolibro -  Harry Potter e la Pietra Filosofale Completo.m4a"

```

#### 2. Commit ammend this change and force the update (hey! It's just me.)
A simple new commit **will not work** because the file has also to be removed from the unpushed history.
```bash
  ../salopst.github.io on  main [!?]
 🧠 22GiB/23GiB avec λ=❯ ...
 ❯❯ git commit --amend -CHEAD && git push -f origin main
```

#### 3. Aaaand reboot the machine cause I ran out of RAM 😠
But this had something to do with the GNOME extension [Desktop Icons NG (DING)](https://www.rastersoft.com/programas/ding.html). Juuust leaving this here because.

Disabling the extension will have to do for now.

#### 4. Removing that file did nothing, but did show

> There was a YAML syntax error on line 2 column 1 in <unknown>): did not find expected key while parsing a block mapping at line 2 column 1 YAML Exception reading archetypes/posts.md: (<unknown>): did not find expected key while parsing a block mapping at line 2 column 1 YAML Exception reading themes/hello-friend-ng/archetypes/default.md: (<unknown>): did not find expected key while parsing a block mapping at line 2 column 1 YAML Exception reading themes/hello-friend-ng/archetypes/posts.md: (<unknown>: did not find expected key while parsing a block mapping.

The offending line is:

```yaml
title: "{{ replace .Name "-" " " | title }}"
```

Presumably because of the quotes within quotes. Could change the quotes, but the following seems neater anyway and does more. Should issue a pull request, I guess.

```yaml
title: "{{ .Name | humanize | title }}"
```

Well, bugger!

```bash
git add themes/hello-friend-ng/**
fatal: Pathspec 'themes/hello-friend-ng/archetypes' is in submodule 'themes/hello-friend-ng'
```

#### force a local update to the submodule hello-friend-ng 
```bash
git submodule update --rebase --remote --force
```

effectively overwrites my changes, so the submodule is "clean" and as the author intended. 💅

#### Now push up to my repo:
```
git add themes/hello-friend-ng/
git commit -m "Rebased themes/hello-friend-ng"
git push origin main && git push -u origin main
```

### None of which has fixed the error, 'cause we're back to square one
But for now we'll just [reach out to the author](https://github.com/rhazdon/hugo-theme-hello-friend-ng/issues/331).

-----
-----
-----

## The Majesty of Continuous Deployment

After what I though were a few unrelated changes (like throwing in support for fontawesome), I woke this morning to the following Jekyll build error

> The value '{}' was passed to a date-related filter that expects valid dates in /_layouts/default.html or one of its layouts.

Best initial guess is that somewhere in `content/posts` there is a dodgy timestamp. 

To troubleshoot this, Imma gonna need to ensure sure all dates are formatted as `YYYY-MM-DD HH:MM:SS` (UTC) **AND** chcek timezones because a good number of these were from US Eastern Standard (Z-5).

Timezone offsets from UTC, I think, are likely to differ depending on which system created the original post. Should be of the format `YYYY-MM-DD HH:MM:SS +/-TTTT`, like this post's `2021-09-18T06:24:19+01:00`.

Now, WTF amd I gonna find the errant file? To [🦆🦆Go](https://duckduckgo.com/) to see if anyone has already created a script to traverse a directory and validate a bunch of YAML.

Of course they have!

{{< gist salopst c6146e09f65db560a9b36ca9958ce290 >}}


```bash
../salopst.github.io on  main [!?]
 🧠 10GiB/23GiB avec λ=❯ ...
  ❯❯ruby ~/bin/validate-yaml.rb ./content/posts/*.md
  .
  .
  ./content/posts/2018-08-24-gluten-free-homemade-rustic-french-pate.md                        Error: mapping values are not allowed in this context at line 2 column 7
```

Anyhoo. This is just validating YAML, and not digging into the ISO 9601 date-time format.

## side-bar... Hugo's `gist.html`
Is here: https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/shortcodes/gist.html

And it works, but the default styling is a bit jarring to me, especially with a dark theme.

The rendered structure of the `gist.html` shortcode is:

{{< image src="/img/uploads/2021-19-09-gist-div-class-structure.png" alt="Gist div class structure" position="center" style="border-radius: 30px;" >}}

Make a `/js/gist.css` and add that to `config.toml` as 
```toml
customCSS = ["css/gist.css"]
```



## Attempted solution #3

No we didn't skip #**#2**... that's the suntax issue. While we are deep in the gits. How on earth do we clean up a messy repo?

Enter this chappie:
{{< image src="/img/uploads/2021-09-18-big-friendly-giant.png" alt="Hello Big Giant Friendo!" position="center" style="border-radius: 50px;" >}}

### BFG

> [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)
Removes large or troublesome blobs like git-filter-branch does, but faster. And written in Scala.

OK. Sounds cool. Let's install it

```bash
❯❯  wget -nc -o ~/bin/bfg-1.14.0.jar https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar

❯❯  ls ~/bin | rg bfg
52562600 .rw-rw-r--    58 yearluk 18 Sep 11:38  bfg-1.14.0.jar 

❯❯  java -jar bfg.jar

Command 'java' not found, but can be installed with:
sudo apt install default-jre              # version 2:1.11-72, or
sudo apt install openjdk-11-jre-headless  # version 11.0.11+9-0ubuntu2
sudo apt install openjdk-15-jre-headless  # version 15.0.3+3-1
sudo apt install openjdk-16-jre-headless  # version 16.0.1+9-1
sudo apt install openjdk-17-jre-headless  # version 17~19-1ubuntu1
sudo apt install openjdk-8-jre-headless   # version 8u292-b10-0ubuntu1

❯❯  sudo apt update && sudo apt install default-jre
.
.
.

❯❯  java -version
openjdk version "11.0.11" 2021-04-20
OpenJDK Runtime Environment (build 11.0.11+9-Ubuntu-0ubuntu2)
OpenJDK 64-Bit Server VM (build 11.0.11+9-Ubuntu-0ubuntu2, mixed mode, sharing)
```