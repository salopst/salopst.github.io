---
author: admin
origin: wordpress
comments: true
date: 2015-06-24T05:13:58+00:00
layout: post
slug: npm-and-zsh-pure-prompt
title: NPM, antigen and ZSH pure prompt
wordpress_id: 886
categories:
- Apple
- Tech
tags:
- sysadmin
- os x
---

So somehow I managed to mess up my install of the [pure prompt](https://github.com/sindresorhus/pure) such that it was not loading async.

```bash
prompt_pure_setup:10: async: function definition file not found
prompt_pure_async_tasks:3: command not found: async_start_worker
prompt_pure_async_tasks:4: command not found: async_register_callback
```

How or why this happened I know not. Easy peasy to fix with npm, right?

```bash
❯ npm update && npm install --global pure-prompt
> pure-prompt@1.1.0 postinstall /Users/yearlus/node_modules/pure-prompt
> dest=/usr/local/share/zsh/site-functions/; mkdir -p $dest && ln -sf "$PWD/pure.zsh" $dest/prompt_pure_setup && ln -sf "$PWD/async.zsh" $dest/async || echo 'Could not automagically symlink the prompt. Check out the readme on how to do it manually: https://github.com/sindresorhus/pure#manually'
pure-prompt@1.1.0 node_modules/pure-prompt
```

No problem. As the doco reads 

> Symlink `pure.zsh` to somewhere in `$fpath` with the name `prompt_pure_setup`. 
> Symlink `async.zsh` in `$fpath` with the name a`sync`.

```bash
❯ echo $fpath
~/.zfunctions /usr/share/zsh/site-functions /usr/share/zsh/5.0.5/functions
❯ ls ~/node_modules/pure-prompt
total 72
-rw-r--r-- 1 yearlus staff 5.8K Jun 1 12:25 async.zsh
-rw-r--r-- 1 yearlus staff 1.1K Apr 6 2014 license
-rw-r--r-- 1 yearlus staff 1.8K Jul 1 05:38 package.json
-rw-r--r-- 1 yearlus staff 8.3K Jun 1 12:27 pure.zsh
-rw-r--r-- 1 yearlus staff 5.4K Jun 1 12:25 readme.md
❯ cd ~/node_modules/pure-prompt
❯ ln -sf "$PWD/pure.zsh" ~/.zfunctions/prompt_pure_setup
❯ ln -sf "$PWD/async.zsh" ~/.zfunctions/async
```


Restart Terminal and... well there's a pure prompt, but also a call from `prompt_pure_setup` claiming not to be able to find async. Messy. Uninstall and reinstall and the same issue remains. Grrr

Enter [antigen](https://github.com/zsh-users/antigen) which is to zsh what [vundle](https://github.com/gmarik/Vundle.vim) is to vim.

```bash
❯ curl -L https://raw.githubusercontent.com/zsh-users/antigen/master/antigen.zsh > antigen.zsh
source antigen.zsh
```

Install a couple of extra bundles whilst I am at it:

```bash
❯ antigen bundle zsh-users/zsh-syntax-highlighting
❯ antigen bundle git
❯ antigen bundle sindresorhus/pure
```

with the head of my .zshrc reading:

```bash
fpath=( "$HOME/.zfunctions" $fpath )
# antigen-- kinda a vundle/vim for zsh
source ~/antigen.zsh
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle sindresorhus/pure
antigen bundle git
# source ~/.zfunctions/async
# source ~/.zfunctions/prompt_pure_setup
# above 2 lines are symlinked from the .zsh files located in an antigen repo,
# but the links themselves are in ~/.zfunctions hence the commented-out antigen call
```

For "backup" I've

```bash
❯ ln -sf ~/.antigen/repos/https-COLON--SLASH--SLASH-github.com-SLASH-sindresorhus-SLASH-pure.git/async.zsh ~/.zfunctions/prompt_pure_setup
❯ ln -sf ln -sf ~/.antigen/repos/https-COLON--SLASH--SLASH-github.com-SLASH-sindresorhus-SLASH-pure.git/async.zsh ~/.zfunctions/prompt_pure_setup
```

### And now we are back to prompt loveliness.

![Screen Shot 2015-07-01 at 07.14.35](/wp-uploads/Screen-Shot-2015-07-01-at-07.14.35.png)

Coloration of the prompt: [http://stephen.yearl.us/terminal-colors/](http://stephen.yearl.us/terminal-colors/)
