

The images referenced from from the posts here currently live in three locations, based at hugo's root, ie. relative to `config.toml`:

```
├── archetypes
├── config.toml
├── static
|   └── wp-uploads
|     ├── whatever-historic-filename.png
|     ├── 2000-01-01-kinda-like-the-alt-text.png
├── content
|   └── img
|     ├── uploads
|     |  ├── 2000-01-01-kinda-like-the-alt-text.png
|   └── post
|     ├── 2000-01-01-the-filename-is-the-slug-kinda.md

```

```/static/wp-uploads` `/content/img/uploads/1

## I put images inside a folder called images under content/post/. This is the file structure for the Hugo project:
```
├── archetypes
├── config.toml
├── content
|   └── post
|     ├── your-post.md
|     ├── images
|     |  ├── your-image.png
```
-----
-----

## Everything you put on static folder will be served at the root of your webiste, ex:

/static
  /cover.jpg
  /img/
    /cover2.jpg
  /foo
    /cover3.png

Will be availabe on http://my.blog.url/cover.jpg, http://my.blog.url/img/cover2.jpg and http://my.blog.url/foo/cover3.png

-----
-----

## About your more (theoretical) question of differences between content and static:
Well actually both are there to store content. But the static one is for stuff that are static (sic!), generic and could be referenced anywhere, when the content will be used for the sections and will inherit of a type.

-----
-----
## https://vninja.net/2020/02/12/my-hugo-workflow/

As mentioned, I use Visual Studio Code as my editor, with a set of extensions:

    Hugo Snippets
    Markdown Preview Github Styling
    markdownlint
    Markdown Shortcuts
    Markdown All in One
    Better TOML
    Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets
    Paste Image

There is probably some overlap between a couple of these extentions, but it seems to work just fine.
Paste Image Config #

Out of that list I would like to highlight Paste Image as my absolute favorite. In short, it allows for pasting screenshots directly from clipboard, and into a MarkDown document. In addition to this, it also takes care of saving the image in the correct place, which saves a lot of manual work. All my images reside in /static/img on my local file system, which Hugo then renders as /img/<filename> in the generated URL. This setup also puts the screenshots in /img/name-of-the-markdown-file/ automatically, which makes everything just a bit easier to manage.

"pasteImage.path": "${projectRoot}/static/img/${currentFileNameWithoutExt}",
"pasteImage.namePrefix": "${currentFileNameWithoutExt}_",
"pasteImage.prefix": "/img/",
"pasteImage.basePath": "${projectRoot}/static/img"
