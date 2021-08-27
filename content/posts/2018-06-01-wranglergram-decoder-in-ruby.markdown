---
author: admin
comments: true
date: 2018-06-01 17:35:03+00:00
layout: post
link: http://stephen.yearl.us/wranglergram-decoder-in-ruby/
slug: wranglergram-decoder-in-ruby
title: Wranglergram decoder in ruby
wordpress_id: 1396
categories:
- ruby
- tech
tags:
- anagram
- words
---

My local radio station has a quiz every once in a while. The questions are hardly "University Challenge", but there is one question that always is fiendishly tricksy and slippery: to identify a place in the county from an anagram of it.

Constantly getting all but one question correct, it is, of course time to <del>cheat</del> use lateral thinking.

#1 get a list of place names. A [gazetteer](https://britishplacenames.uk/england/shropshire) should do.

#2 Build an index (hash). First thoughts were to md5 the names, but there's an easier way: equalise case, remove spaces and punctuation, order the string...

[cc lang="ruby"]
places = Hash.new([])

File.open("./places.txt", "r") do |file|
  while line = file.gets
    place = line.chomp
    # kill possesives!!
    places_hash = line.chomp.downcase.delete(' ').delete("'")
    places[places_hash.chars.sort.join]+= [place]
  end
end

File.open("places_hash", "w") do |file|
  Marshal.dump(places, file)
end

puts places.inspect
[/cc]

#3 Simply pull out the entry that matches the key...
[cc lang="ruby"]
places = nil

File.open("places_hash", "r") do |file|
  places = Marshal.load(file)
end

wrangler = "REPLACE_ME"

rewrangler = wrangler.downcase.delete(' ').delete("'")
sorted_wrangler = rewrangler.chars.sort.join
answer = places[sorted_wrangler]

answer = answer[0] ||= "nowhere to be found in Shropshire!"
puts "wrangler: #{wrangler} \n\nIt's probably... #{answer}"
[/cc]

And that's all she wrote... a basic anagram solver.

[caption id="attachment_1397" align="alignnone" width="300"][![program output](http://stephen.yearl.us/wp-content/uploads/2018/06/wrangler-solver-output-300x215.png)](http://stephen.yearl.us/wp-content/uploads/2018/06/wrangler-solver-output.png) program output[/caption]
