+++
title = "Hugo and Emacs"
author = ["yearluk"]
date = 2020-05-18T15:33:57+01:00
tags = ["emacs", "hugo", "test", "wordpress"]
categories = ["blog", "emacs", "tech", "web"]
draft = false
weight = 1001
noLicense = "= true # Do not show license in this post"
summary = "This is from the \"\\:EXPORT_HUGO_CUSTOM_FRONT_MATTER \\:summary\""
description = "This is a manually added TOML description"
+++



{{< image src="/img/uploads/leaping-baby-brown-trout.jpg" alt="Hello Friendo" position="center" style="border-radius: 50px;" >}}

^^^ This image above is not in the general template for a post file. It is added with:

```hugo
{\{< image src="/img/uploads/leaping-baby-brown-trout.jpg" 
  alt="Hello Friendo"
  position="center" 
  style="border-radius: 50px;" >}}
```

**NOTE**: that `{\{` should be `{{`. I popped in the backslash because the current version of Hugo interperets its own shortcodes even in code blocks!

- Hugo's markdown flavour is blackfriday: https://github.com/russross/blackfriday

- This Hugo implementation uses title as the *persistent* URL and is different from the file name (in the case of this file `2020-05-18-hugo-and-emacs.31`) and is kinda how I would like to move forward. **BUT** some of the old Wordpress posts make a distinction between title and "slug". These files will have to remain in abeyance while I fifure that shit out. Something like, pseudocode:

```
if metadata.has-slug
  URL = slug
else 
  URL = title

```

This offers greater flexibility and prevents things from breaking. 
E.g. the existing metadata in one `md` file has, and Hugo, dear, sweet, innocent Hugo is deriving a URL that is incorrect.

```
slug: setting-gcc-4-2-as-the-default-compiler-on-mac-os-x-leopard
title: Setting GCC 4.2 as the default compiler on Mac OS X Leopard
```

**Oh, hey! This, Ladies and Germs, is why we always reads the precious docoses...**


>:slug
>    the content’s slug (or title if no slug is provided in the front matter)
>
>--- [https://gohugo.io/content-management/urls/](https://gohugo.io/content-management/urls/)

- Wordpress uploads were to a location that maps to the regex to `http://sjy.yearl.us/wp-content/uploads/.*/` This is replaced with `/wp-uploads/` in this implementation.

- Not sure I like the blockquote rendering, and I'd kind of like to fold in a `<footer>` element. But then I'm getting into the realm of markdown parsing, not hudo HTML styling. Does this matter enough to create a shortcode?, the output of which should be:

```hmtl
<blockquote>
  <p>Necessity is the plea for every infringement of human freedom. It is the argument of tyrants; it is the creed of slaves.</p>
  <footer>Pitt the Younger. House of Commons, 1783</footer>
</blockquote>
```

- Wordpress created static thumbnails. Let's delete these:

```bash
  ❯❯  cd ~/code/hugo-sites/salopst.github.io/static/wp-uploads
.../salopst.github.io/static/wp-uploads on  main
 🧠 15GiB/23GiB avec λ=❯ ...
  ❯❯  find . -regex ".*[0-9]x[0-9]*\.jpg$" -exec rm -rf {} \;
```

- Found some old posterous posts that never even made it to Wordpress, back in the day in `$HOME/Documents/yearl.us-migration/papa.he.net-bkup/public_html/stephen/posterous/blog.yearl.us`

# Frontmatter metadata
Hugo supports 4 frontmatter formats:

- TOML
    identified by opening and closing +++.
- YAML
    identified by opening and closing ---.
- JSON
    a single JSON object surrounded by ‘{’ and ‘}’, followed by a new line.
- ORG
    a group of Org mode keywords in the format ‘#+KEY: VALUE’. Any line that does not start with #+ ends the front matter section. Keyword values can be either strings (#+KEY: VALUE) or a whitespace separated list of strings (#+KEY[]: VALUE_1 VALUE_2).

The results of my WP export shenanigans give me YAML, but the output from my org file is TOML.

Eg. Wordpress:
```yaml
---
author: "yearluk"
title: "Science jokes"
date: 2020-05-08T15:33:57+01:00
lastMod:
draft: true
summary: A summary of the most awesomest collection of science-based jokes on the Interwebz.
description: A description, but what distinguishes (practically speaking) a description and a summary is for the birds to tweet.
categories:
- Humour
- Random
tags:
- jokes
- science
- orgmode
image: "leaping-baby-brown-trout.jpg"
featured: "/img/avatars/220px-Arms-of-Shropshire.png"
featuredalt: "3 leopards"
featuredpath: "/img/avatars"
---
```

And the TOML for this file:
```TOML
+++
title = "level 1 org heading."
author = ["yearluk"]
date = 2020-05-18T15:33:57+01:00
tags = ["arseTAG", "cuntTAG", "wankTAG"]
categories = ["wankCAT", "cuntCAT"]
draft = true
weight = 1001
noLicense = "= true # Do not show license in this post"
summary = "This is from the \"\\:EXPORT_HUGO_CUSTOM_FRONT_MATTER \\:summary\""
+++
```




what does one do about the alignment and the height and width in markdown?

```
[caption id="attachment_1460" align="aligncenter" width="300"][![audacity-the-second-running](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06-300x116.png)](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06.png) audacity-the-second-running[/caption]
```
[caption id="attachment_1460" align="aligncenter" width="300"][![audacity-the-second-running](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06-300x116.png)](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06.png) audacity-the-second-running[/caption]

perhaps use (why is this code block not visible:)

```hugo
{\{< figure
  src="/wp-uploads/Screen-Shot-2018-10-06-at-16.25.06.png"
  title="the figure title"
  caption="the figure caption"
  align="aligncenter"
  width="300"  
  attr="attribution: thanks, mom!"
  attrlink="https://mymom.com"
  >}}
```

{{< figure
  src="/wp-uploads/Screen-Shot-2018-10-06-at-16.25.06.png"
  title="the figure title"
  caption="the figure caption"
  align="aligncenter"
  width="300"  
  attr="attribution: thanks, mom!"
  attrlink="https://mymom.com"
  >}}

```bash
![pate... the alt text](/wp-uploads/rustic-pate-2.jpg)
```
![pate... the alt text](/wp-uploads/rustic-pate-2.jpg)

## actually in this post
The general template `~/code/hugo-sites/salopst.github.io/layouts/posts/single.html`
I should probably modify to pick up on something in the frontmatter... see the YAML above.

# Deal with images from Wordpress

(ZSH reqd for the cp command!)... or should I leave the directory as-is?

```bash
cd ~/code/yearl.us-bk/public_html/stephen/wp-content/uploads
mkdir ~/code/hugo-sites/salopst.github.io/wp-uploads
cp **/*.jpg ~/code/hugo-sites/salopst.github.io/wp-uploads
```
but there are all kinds of media types uploaded, so

```bash
cp **/*.* ~/code/hugo-sites/salopst.github.io/wp-uploads
```

Not forgetting that Wp made many copies of images in different sizes. Might need to break out the imagemagick. Anyway, after flattening out the wp uploads file system, Let's taka a look at the original links. This is pretty typical

```
[caption id="attachment_1460" align="aligncenter" width="300"][![audacity-the-second-running](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06-300x116.png)](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06.png) audacity-the-second-running[/caption]
```

The path is the thing we are interested in `wp-content/uploads/2018/10/`. Strip that, and point it to `~/code/hugo-sites/salopst.github.io/wp-uploads`, and we should be golden.




-----
# Org-export notes
-   The heading would become the title of the post: here that is "level 1 org heading."

-   Use `C-c C-q` the set the tags, which would become the tags for the post. These are taken from the org header, but may be overwritten by using

<!--listend-->

```example
:EXPORT_HUGO_TAGS:
```

WHAT IS THIS?
Add the following properties to specify the file name, date of exportation, and hugo customized front matter, e.g., summary.

-   A TODO heading will make the post as a draft.

Add the following properties to specify the file name, date of exportation, and hugo customized front matter, e.g., summary.

-------
