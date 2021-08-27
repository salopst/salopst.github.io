---
author: admin
comments: true
date: 2016-04-24 00:01:57+00:00
excerpt: '["<p>With the coming of the new <a href=\"http://stephen.yearl.us/rescue-doggie-diary/\">doggie
  into the house</a>, perhaps I will again add more content to the <a href=\"http://stephen.yearl.us\">bloggy
  thing</a> that I have kinda sorta not really been keeping over the last little while.</p>"]'
layout: post
link: http://stephen.yearl.us/blog-post-ia-writer-to-wordpress-with-ruby/
slug: blog-post-ia-writer-to-wordpress-with-ruby
title: Posting from IA Writer to Wordpress (Coleman)
wordpress_id: 1250
categories:
- Apple
- os x
- tech
tags:
- blog
- blogging
- code
- editors
- gem
- iA Writer
- ruby
- rubypress
- text
- text editor
- wordpress
- workflow
---







# IA Writer to Wordpress




## 0. Wha?


With the coming of the new [doggie into the house](http://stephen.yearl.us/rescue-doggie-diary/), perhaps I will again add more content to the [bloggy thing](http://stephen.yearl.us) that I have kinda sorta not really been keeping over the last little while.

Probably this has been done by someone else on the Intertubz, but ach, why not. I have some time on my hands, so here are running notes in [IA Writer](https://ia.net/writer) that will make its way to a [Wordpress](https://www.wordpress.com) post by some means or other. There’s nothing special about IA writer, by the way. Well, there **is**, but not for the purposes of the Wordpress posting. The same code should work with any plain-ish text file coming from any editor.

Why bother? Well, I think that the primary reason a lot of my notes have not made it to the blog is that it is just such a PITA to go out of my way to make a blog posting. If it all just sorta “works” from my usual workflows than that would perhaps be a very different situation. Not that I think I have anything particularly interesting or unique to say


## 1. This file


Is written in markdown, with [metadata](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide#metadata) at the head:

    
    <code>Title: IA Writer to Wordpress  
    Author: yearlus  
    Email: stephen@yearl.us  
    Date: 2016-04-26  
    Format: complete  
    post_status: draft  
    post_date: 2016-04-26 
    post_title: IA Writer to Wordpress  
    category: tech  
    post_tag: text, editors, Ruby, code, Wordpress, workflow  
    
    
    # [%Title]
    </code>




## 




## 2. Markdown processors


Four Ruby processors for playing with markdown are briefly alluded to here: [markdown-processing-ruby](http://www.sitepoint.com/markdown-processing-ruby/)

And I went ahead and played with two of these:

[Redcarpet](https://github.com/vmg/redcarpet)

    
    <code lang="Bash" class="Bash">$ gem install redcarpet -n /usr/local/bin
    </code>


[Kramdown](http://kramdown.gettalong.org/)

    
    <code lang="Bash" class="Bash">$ gem install kramdown -n /usr/local/bin
    </code>


But neither of these processors support (yet!) the metadata blocks of [MultiMarkdown](https://github.com/fletcher/MultiMarkdown-5). And kramdown does not recognise the back-tick code-fence (``` ```), only the tilda code-fence (~~~ ~~~)

So, install [Fletcher Penney’s MultiMarkdown](https://github.com/fletcher/MultiMarkdown-4/), and test:

    
    <code lang="Bash" class="Bash">$ brew install multimarkdown
    $ multimarkdown ~/_scratch/IA-Writer-to-WP-Coleman-Notes.txt > ~/_scratch/IA-Writer-to-WP-Coleman-Notes.html
    </code>


Gives some very nice HTML, including interpolation of the metadata (of this file), and writing of that metadata:

    
    <code lang="HTML" class="HTML">
    <head>
        <meta charset="utf-8"></meta>
        <title>IA Writer to Wordpress</title>
        <meta content="yearlus" name="author"></meta>
        <meta content="stephen@yearl.us" name="email"></meta>
        <meta content="2016-04-26" name="date"></meta>
        <meta content="complete" name="format"></meta>
        <meta content="draft" name="post_status"></meta>
        <meta content="2016-04-26" name="post_date"></meta>
        <meta content="IA Writer to Wordpress" name="post_title"></meta>
        <meta content="tech" name="category"></meta>
        <meta content="text, editors, Ruby, code, Wordpress, workflow" name="post_tag"></meta>
    </head>
    </code>


So the process for this exercise seems clear:
1. “~~shell out” to markdown and produce an html file~~
2. process that html with [nokogiri](https://github.com/sparklemotion/nokogiri)
3. post to Wordpress

No need to shell out, apparently. tillsc has already built a Ruby extension library around MultiMarkdown, [Ruby MultiMarkdown 4](https://github.com/tillsc/multi_markdown), so
I guess the awkward bit would be how best to execute the ruby script that pulls all this together… from a services menu item, maybe? And then how to deal with edits... something in the metadata at the head of the file? A call to getPost call to XML RPC to see if an existing post "matching" (on what criterion?) that about to be posted exists? But what to check on? Is the old post deleted? I suppose when one starts thinking about these things then one might just as well produce an actual interface to Wordpress, but why bother when there are so many such things anyway?




Maybe I will look into that... but I am reasonably happy with the fact that this post came from iA Writer, and without too much trouble either. Next up? A horror-show of a MultiMarkdown file in iA Writer to to see how much gets translated into a decent-ish looking post.





## 




## 3. Code


Posting to Wordpress is pretty straightforward. All the heavy lifting is done by the [rubypress gem](https://github.com/zachfeldman/rubypress), which makes this sort of thing doggone simple (see what I did there!). Here a block of code from that thing I wrote a while ago that scraped a Koine Greek “Word of the Day” from Ἡ Καινὴ Διαθήκη. [Last post here](http://stephen.yearl.us/koine-greek-word-of-the-day-%E1%BC%90%CF%80%CE%AF%CE%B8%CE%B5%CF%83%CE%B9%CF%82-%CE%B5%CF%89%CF%82-%E1%BC%A1/)

    
    <code lang="Ruby" class="Ruby"># ========== Post to Wordpress ==========
    if options[:wordpress_write] == 'yes'
      wp = Rubypress::Client.new(
        host:      "#{config['wp']['host']}",
        username:  "#{config['wp']['username']}",
        password:  "#{config['wp']['password']}",
        path:      "#{config['wp']['path']}")
    
      wp.newPost(
        blog_id:    '0',
        content:    {
          post_status:   'draft',
          post_date:     Time.now,
          post_title:    "#{html_title}",
          terms_names:  {
            post_tag:     ['greek', 'koine', 'κοινή', 'language'],
            category:     ['Greek']
          },
          post_content:  "#{wp_content}"
        }
      )
    end
    # ========== END WP Post ==========
    </code>









* * *





posted with wpiawriter v. 0.1



