+++
title = "level 1 org heading"
author = ["yearluk"]
date = 2020-05-18T15:33:57+01:00
tags = ["emacs", "hugo", "test"]
categories = ["blog", "emacs", "tech"]
draft = false
weight = 1001
noLicense = "= true # Do not show license in this post"
summary = "This is from the \"\\:EXPORT_HUGO_CUSTOM_FRONT_MATTER \\:summary\""
description = "This is a manually added TOML description"
+++



{{< image src="/img/avatars/Leaping-baby-Brown-Trout.jpg" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}

Hugo's markdown flavour is blackfriday: https://github.com/russross/blackfriday


# Frontmatter metadata
Hugo supports 4 frontmatter formats:
Front Matter Formats

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
draft: true
summary: a sucking fummary of the most awesomest collection of science-based jokes on the Interwebz...
description: a ducking fescription
categories:
- Humour
- Random
tags:
- jokes
- science
- orgmode
image: "Leaping-baby-Brown-Trout.jpg"
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


The image above is not in the general template for a post file. It is added with

```
{{< image src="/img/avatars/Leaping-baby-Brown-Trout.jpg" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}
```

what does one do about the alignment and the height and width in markdown?

```
[caption id="attachment_1460" align="aligncenter" width="300"][![audacity-the-second-running](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06-300x116.png)](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06.png) audacity-the-second-running[/caption]
```
[caption id="attachment_1460" align="aligncenter" width="300"][![audacity-the-second-running](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06-300x116.png)](http://stephen.yearl.us/wp-content/uploads/2018/10/Screen-Shot-2018-10-06-at-16.25.06.png) audacity-the-second-running[/caption]

perhaps use (why is this code block not visible:)

```example
`{{`< figure
  src="/wp-uploads/Screen-Shot-2018-10-06-at-16.25.06.png"
  title="the figure title"
  caption="the figure caption"
  align="aligncenter"
  width="300"  
  attr="attribution: thanks, mom!"
  attrlink="https://mymom.com"
  >`}}`
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
