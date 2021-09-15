---
author: admin
comments: true
date: 2015-04-23 08:46:06+00:00
layout: post
slug: confusing-iphotoaperture-and-photo-libraries
title: Confusing iPhoto/Aperture and Photo libraries
wordpress_id: 830
categories:
- tech
tags:
- OS X
- photos
---

So, with Apple's release of OS X 10.10.3 on Monday came the new Photo's "app". In their misguided wisdom our cousins in Cupertino have continued along the path of dumbing-down Mac programs that are inching ever closer to their iOS equivalents.

Their consumer editing program was iPhoto, the "pro" version, Aperture. Both are to be replaced with the very iOS/iCloud looking Photos, and whilst iPhoto and Aperture could happily share the same photo library, Photos will not.

Once Photos is launched for the first time it will offer up a very nice, very slick import facility from you old libraries. 
[![Photos_import](http://stephen.yearl.us/wp-content/uploads/2015/04/Screen-Shot-2015-04-23-at-08.37.28.png)](http://stephen.yearl.us/wp-content/uploads/2015/04/Screen-Shot-2015-04-23-at-08.37.28.png)

But what do we find when then opening Aperture, for example? This image dialogue of seeming impending doom and woe when you realise-- as you already have, since you would not have launched Aperture so early in your review of Photos-- that Photos is not quite the app you really wanted to manage you lovingly assembled photo library:

[![Screen Shot 2015-04-23 at 07.45.09](http://stephen.yearl.us/wp-content/uploads/2015/04/Screen-Shot-2015-04-23-at-07.45.09.png)](http://stephen.yearl.us/wp-content/uploads/2015/04/Screen-Shot-2015-04-23-at-07.45.09.png)

Ignore the Aperture Library. It was established the first time I launched Aperture. In actual fact I had Aperture and iPhoto happily using the iPhoto Library which scarily can no longer be found!

And the iPhoto equivalent, for reference:
[![Screen Shot 2015-04-23 at 08.02.01](http://stephen.yearl.us/wp-content/uploads/2015/04/Screen-Shot-2015-04-23-at-08.02.01.png)](http://stephen.yearl.us/wp-content/uploads/2015/04/Screen-Shot-2015-04-23-at-08.02.01.png)

Oh woes! I guess I will be restoring from backup!!

Except that I could not restore from backup as the size of my laptop's SSD in relation to the size of the backup drive means that I can only keep one “most recent” backup. So I did some playing around.

After the import of the "iPhoto Library.photolibrary" Photos makes a new library called "Photos Library.photoslibrary”, but these are not really different in many ways. There are “hard” links (you can Google that yourself) between the contents of each library, they are not copies _per se_. Any changes one makes in iPhoto will to "iPhoto Library.photolibrary". Any changes in Photos will be to "Photos Library.photoslibrary"

The upshot of this is one can still work in Aperture or iPhoto, and make edits. These will not be seen Photos, but if you want to see the changes made in Aperture/iPhoto reflected in Photos, you will have to delete, yes DELETE "Photos Library.photoslibrary".

On next launch of Photos, it will think this is a new installation and ask again if you want to import.

It should go without saying that any changes you have made in Photos will be lost, so at some point you are going to have to make a choice. That choice may be an non-Apple product.... and [](https://lightroom.adobe.com/). I would not be in the least bit surprised if at some point Adobe realises that it is really on to a winner here. Especially if it manages to sync its own library, your iPhoto/Aperture library, or libraries, Photo's library, say certain web stores (Facebook, Instagram, Flikr, whatever), AND random directories on disk. Now how utterly awesome would that be?

**I do not know if this process will work in reverse. I doubt it as iPhoto and Aperture are considered obsolete by Apple.**
