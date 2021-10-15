---
title: "Managing dotfiles -- git bare repository"
slug: manage-dotfiles-stow-to-git-bare-repo
author: yearluk
origin: hugo
date: 2021-10-15T03:25:18+01:00
lastMod:
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
- Sysadmin
tags:
- dotfiles
- sysadmin
- Linux
- Git
- Stow
---

So, you got yourself into a bit of a pickle with your configuration files again, did you? Well, fortunately you had the good sense to document what you did all those [time-units] ago.

You may not remember, but I do... past-past you thought it would be swell to manage files with GNU Stow. And things were good and didn't really break or anything, and we moved across serveral distros and a pretty major shift from MacOS to our foreverOS, but here I am telling you that the symlinks were causing some unnecessary complexity.

Ergo we `git` all the things.

## What did we/I/he stow exactly?
TBH, I can't remember myself. Let's take a look...

{{< image src="/img/uploads/2021-10-15-rg-i-stow.png" alt="rg-i-stow" position="center" style="border-radius: 50px;" >}}

Hmmm. Not very helpful. Unless you're heading to Mid Ulster.

Commandline history tho...

` cd ~/.dotfiles && stow --verbose=3 -S -n -d ~/.config/test-stow -t ~/.dotfiles`

Yeah. No notes. Good job. /s

Just nuke that dir and do the startovers. By "nuke" I mean `mv ~/.dotfiles .dotfiles--DELETEME` cause, ya know, safety first.


## Make repository remotely
Do the usuals at the your remote.

For most peeps, and for me, this is github. And a private repository in this case. Sorry. I've not audited what maybe should and should not be "in the wild". Anyway, this is for future me.


## clone remote to local
```bash
git clone --bare git@github.com:salopst/dotfiles.git $HOME/dotfiles
```

## OK. Cool. What have we just done?
This creates a directory, `~/dotfiles`, which, looking at it, has the same layout of ANY `.git` directory you will find in a regular, non-bare, repo.

The practical magic of the bare-repository approach to dotfile management (first, famously, posted here: https://www.atlassian.com/git/tutorials/dotfiles, and repeated on countless personal blogs ever since) now comes with referencing all subsequent git commands relative to this "pseudo-`.git`". That is `dotfiles` is, effectively the `.git` for `$HOME`.

Yeah, that sounds confusing. Basically one uses one's usual git commands, but they are prefixed with `--git-dir=$HOME/dotfiles/ --work-tree=$HOME`

So, for example, a `git status` is now a `git --git-dir=$HOME/dotfiles/ --work-tree=$HOME status`

Which is obvs a PITA, so we set up aliases/functions in the usual places... shell rc files and their inclusions.

Imma gonna use:

```bash
gitdot () {
  git --git-dir="$HOME/dotfiles" --work-tree="$HOME" "$@"
}
```

But then I also pushed this onto the end of my rarely used `.bashrc`:

```bash
echo "\n# 2021-10-15\nalias gitdot='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'" >> $HOME/.bashrc
```

**Or** One could add a git alias to global git config

```bash
git config --global alias.gitdot 'git --git-dir=$HOME/.dotfiles --work-tree=$HOME'
```

Which is probably neater. But then I have mixed aliases across various configs anyway, so not gonna do that just yet. Perhaps AFTER these unruly things are brought under control... they very point of doing all this anyway!


## Don't show untracked files
After sourcing, this means that the following commands are equivalent:
- `git --git-dir=$HOME/dotfiles/ --work-tree=$HOME status`
- `gitdot status`

Running either of these will show a bunch of untracked files... a LOT of them because, well, essentially the whole of $HOME is a repository (`--work-tree=$HOME`, remember?).

Since our dotfiles is our `.git`, let's supress output of these untrack files and directories by simple adding:

```toml
[status]
	showUntrackedFiles = no
```

to `$HOME/dotfiles/config`

I've seen people suggesting the equivalent of using `git config --local` to set `status.showUntrackedFiles no` but that is opaque, doesn't drill home what a bare repository is, and can lead to coflicts with other git configs elsewhere in the config chain.


## add and commit and push away to the intertubes...
The full commands, not using the alias for clarity:

```bash
git --git-dir=$HOME/dotfiles/ --work-tree=$HOME add ~/.gemrc
git --git-dir=$HOME/dotfiles/ --work-tree=$HOME commit -m "initial commit"
git --git-dir=$HOME/dotfiles/ push -u origin main
```

## Errm. Naming conventions
It was probably a mistake to use `dotfiles`. `.gitdotfiles` may have been clearer, but this is why we keep notes, right? All I have to do is remember (Oh, brother!) that `dotfiles` is not a regular directory.

## Oh noes. I've done some horrible things locally...
 If they are not commited:
 ` git --git-dir=$HOME/dotfiles/ --work-tree=$HOME checkout -f HEAD`

 If they are committed, then checkout the whatever-hash

 If they are committed and pushed. Same as above, and be wary, cause git is not a backup, OK?

-----
-----
-----

## 'main' is not descriptive enough:
git --git-dir=$HOME/dotfiles/ --work-tree=$HOME switch -c base
