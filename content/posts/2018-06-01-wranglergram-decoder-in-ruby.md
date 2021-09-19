---
author: admin
origin: wordpress
comments: true
date: 2018-06-01T17:35:03+00:00
layout: post
slug: wranglergram-decoder-in-ruby
title: Wranglergram decoder in ruby
wordpress_id: 1396
categories:
- Code
- Tech
tags:
- anagram
- words
- ruby
---

My local radio station has a quiz every once in a while. The questions are hardly "University Challenge", but there is one question that always is fiendishly tricksy and slippery: to identify a place in the county from an anagram of it.

Constantly getting all but one question correct, it is, of course time to ~~cheat~~ use lateral thinking.

- #1 get a list of place names. A [gazetteer](https://britishplacenames.uk/england/shropshire) should do.

- #2 Build an index (hash). First thoughts were to md5 the names, but there's an easier way: equalise case, remove spaces and punctuation, order the string...

```ruby
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
```

- #3 Simply pull out the entry that matches the key...

```ruby
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
```

And that's all she wrote... a basic anagram solver.

{{< image src="/wp-uploads/wrangler-solver-output.png" alt="ALL YOUR RADIO SHROPSHIRE PRIZES ARE MIIIIIINE!" position="center" style="border-radius: 10px;" >}}

