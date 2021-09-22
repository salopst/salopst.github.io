---
author: admin
origin: wordpress
comments: true
date: 2014-09-01T18:35:07+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: rubypress
title: rubypress
wordpress_id: 626
categories:
- Tech
- Code
tags:
- Ruby
- code
- sysadmin
---

Happy enough with the output of koiné word of the day for the time being. Maybe I'll make it into a wordpress plugin or something at some point in the future, but probably not. For now it makes sense to have the local script interface with Wordpress' APIs. One of the more commonly used and updated rubygem is [rubypress](https://github.com/zachfeldman/rubypress), so let's start there.

```bash
$gem install rubypress
```

==> write permission error

```bash
$sudo chown -R `whoami` /Library/Ruby/Gems/2.0.0
$gem install rubypress
$sudo gem update
$sudo gem install rubygems-update
$sudo update_rubygems
$sudo gem update --system
$gem -v
```
==> 2.4.1

Try connecting:

```ruby
require 'rubygems'
require 'rubypress'
wp = Rubypress::Client.new(:host => "stephen.yearl.us",
:username =>; "foo",
:password =>; "bar")

p wp.getOptions
```

==> 403!

Hmm. Tried connecting with a third-party blogging tool ([Pixelpumper](https://itunes.apple.com/us/app/pixelpumper/id595901917?mt=12)) and the same 403! This post is interesting, and the highest ranked answer ([http://stackoverflow.com/questions/9141497/wordpress-403-forbidden-error](http://stackoverflow.com/questions/9141497/wordpress-403-forbidden-error)) suggests trying the plugins. What fun.

I only uninstalled a few of the the most recently installed plugins back until I remember this not being an issue and still no dice, so it was back to Google, and it shortly became apparent that xmlrpc.php had been the target of a number of pingback DDOS attacks recently. I contacted my hosting provider, and sure enough they had disabled access to xmlrpc.php, but did offer the tantalising possible solution of obfuscating the name and location of xmlrpc, and installing a plugin, "Rename XMLRPC":[ https://apps.wordpress.org/support/#faq-ios-12](https://apps.wordpress.org/support/#faq-ios-12) Well, no dice here either!

It's something of a pain not to be able to use a third-party blog editor, but I am not at this often enough for that to be a real hassle. I guess the next thing to do is to dig into the structure of Ruby gems, and see if I cannot override the call to xmlrpc.php to some obfuscated version of it.

-----
-----
-----

```bash
$gem list
```

==> rubypress (1.0.8)

```bash
$gem contents rubypress
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/client.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/comments.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/media.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/options.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/posts.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/taxonomies.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/users.rb
/Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/rubypress/xml_rpc_retryable.rb
$cd /Library/Ruby/Gems/2.0.0/gems/rubypress-1.0.8/lib/
```

And looky what's inside `client.rb`!

```ruby
...
module Rubypress

  class Client

    attr_reader :connection
    attr_accessor :port, :host, :path, :username, :password, :use_ssl, :default_post_fields,
                  :debug, :http_user, :http_password, :retry_timeouts

    def initialize(options = {})
      {
        :port => 80,
        :use_ssl => false,
        :host => nil,
        :path => '/xmlrpc.php',
        :username => nil,
        :password => nil,
        :default_post_fields => %w(post terms custom_fields),
        :debug => false,
        :http_user => nil,
        :http_password => nil,
        :retry_timeouts => false
      }.merge(options).each{ |opt| self.send("#{opt[0]}=", opt[1]) }
      self
    end
...
```

## **Boomshacka!** Problem solved!
