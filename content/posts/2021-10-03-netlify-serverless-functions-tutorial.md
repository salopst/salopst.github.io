---
title: "Netlify serverless functions"
slug: netlify-serverless-functions-E6-node-fetch
author: yearluk
origin: hugo
date: 2021-10-03T11:20:02+01:00
lastMod:
draft: true
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
- Webdev
tags:
- netlify
- mode
- javascript
- code
- jamstack
---


This blog is being hosted gratis by the nice people over at Netlify, and apparently they have some tutorials on servless functions, which I suppose I could use to learn something this morning. So here we go (what aelse are you going to d when the old doge gets you up at 02-Dark-15 in the AM of a wet and windy Sunday?)

## tutorial
- Imma following this:
https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/project-setup-with-serverless-functions

I'll try to remember to make frequent commits and open up a repo. I'll probably forget though. If by some chance you found your way here looking for a tutorial, well, this  ain't it. BUT, if there are any gotchas along the way (there usually are), I guarantee we'll figure them out.


### Are we NPMed:

```bash
npm --version
#==> 7.4.21
npm install -g netlify-cli
#==>netlify-cli/6.9.28 linux-x64 node-v12.21.0
```
Yes we are. This is easy.

### create the repo from template once logged in to github

```bash
cd ~/code
git clone git@github.com:salopst/first-netlify-serverless-thing.git
cd first-netlify-serverless-thing
ntl login
#==> redirected to bowser to authorize the netlify-cli app
#==> You are now logged into your Netlify account!
#==> Run netlify status for account details
#==> To see all available commands run: netlify help
ntl init
```

Then there's a bunch of CLI interaction stuffs...

```text
? What would you like to do? +  Create & configure a new site
? Team: LeRobinet's team
Choose a unique site name (e.g. the-great-salopst-site.netlify.app) or leave it blank for a random name. You can update the site name later.
? Site name (optional): undefined

Site Created

Admin URL: https://app.netlify.com/sites/gifted-haibt-a7f50c
URL:       https://gifted-haibt-a7f50c.netlify.app
Site ID:   d42a57d2-e228-4188-863a-67c63a0eb222

? Netlify CLI needs access to your GitHub account to configure Webhooks and Deploy Keys. What would you like to do? Authorize with GitHub through app.netlify
.com
? Your build command (hugo build/yarn run build/etc): # no build command
? Directory to deploy (blank for current dir): public
? Netlify functions folder: netlify/functions
? No netlify.toml detected. Would you like to create one with these build settings? Yes
Adding deploy key to repository...
Deploy key added!

Creating Netlify GitHub Notification Hooks...
Netlify Notification Hooks configured!

Success! Netlify CI/CD Configured!

This site is now configured to automatically deploy from github branches & pull requests

Next steps:

  git push       Push to your git repository to trigger new site builds
  netlify open   Open the Netlify admin URL of your site
```

#### This is important

```javascript
exports.handler = async function (){
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is a skeleton of a serverless function'
    })
  }
}
```
## running through the tuts.


And the following to-be-expected error `fetch is undefined`
![](2021-10-03-netlify-serverless-api-fetch-not-defined.png)
So we're back to the command line with `npm init`, accepting all the defaults:

```bash
../first-netlify-serverless-thing on  main [⇡]
 ❯❯  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
```
This creates an npm package for the project, encapsulated in a `package.json`. And from here we can install the Node.js fetch library:

```bash
../first-netlify-serverless-thing on  main [?⇡] is 📦 v1.0.0 via  v12.21.0
🧠 12GiB/23GiB avec λ=❯ ... 1m17s
 ❯❯  npm install --save-dev node-fetch
```

This adds the following to `package.json`

```json
"devDependencies": {
  "node-fetch": "^3.0.0"
}
```

Which we can now reference from `pokedex.js`

```javascript
const fetch require('node-fetch')
```

And still no dice. There were a few syntax errora that I'd made that were not flagged vy VSCodium: yet more proof that you can just blindly reply on your tooling!!

And now we diverge from the tutorial since apparently that being used was syntax relevant for the older E5 not the newer E6.

{{< image src="/img/uploads/2021-10-03-netlify-serverless-use-E6-import.png" alt="Use E6 error" position="center" style="border-radius: 50px;" >}}

Using `const fetch = require('node-fetch')`
We get the error
```
Error: Must use import to load ES Module: /home/yearluk/code/first-netlify-serverless-thing/node_modules/node-fetch/src/index.js
require() of ES modules is not supported.
```

BUT, using the suggested `import fetch from 'node-fetch'`
We get the error
```
SyntaxError: Cannot use import statement outside a module
```

** Much gnashing of teeth!!!**

OK. So let's update to the tip-top latest node version, from source:

```bash
cd ~/src
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
#==> v16.10.0
```
Aaaaand. NO DICE.

However, `const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));` from https://github.com/node-fetch/node-fetch#fetchurl-options explains pretty much everything, albeit opaquely for a noob. Basically changes have taken place recently in the structure of JS and there has been a large unification effort to pull together invocations of serverside (Node, essentially) and clientside JS.

And roll again...

### DICE!! 🎲🎲

{{< image src="/img/uploads/2021-10-03-netlify-serverless-api-fetch-success.png" alt="Results from Pokodex" position="center" style="border-radius: 50px;" >}}

## Deploying... (vid \#5) in the series @ https://explorers.netlify.com/learn/up-and-running-with-serverless-functions)

 They are going the push-to-github route, autotriggering the netlify build. This is basically the way https://stephen.yearl.us is deployed. Did this anyway: github.com:salopst/first-netlify-serverless-thing.git

## Customizing the request... (vid \#6)

### Passing a value from from the HTML to the function


so here from `index.html`:

```bash
// netlify Pokedex API-- with modified object Hoenn
fetchHoennBtn.addEventListener('click', async () => {
  const response = await fetch('/.netlify/functions/pokedex',{
    // passing a variable region=hoenn to the function/API
    method: "POST",
    body: JSON.stringify({
      region: 'hoenn'
    })
  }).then(
    response => response.json()
  )
  responseText.innerText = JSON.stringify(response)
})
```

 `pokedex.js` (`/.netlify/functions/pokedex`) is receiving:

 ```bash
 // but we also modify the object here rather than elsewhere...
 // async function takes event and context
 exports.handler = async function (event, context) {
   const eventBody = JSON.parse(event.body)
   // const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto'
   const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`

   const response = await fetch(POKE_API)
   console.log(`The value of event is: ${event}`);
  // console.log(`The value of context is: ${context}`);
   const data = await response.json()
   return {
     statusCode: 200,
     body: JSON.stringify({
       myObject: data.pokemon_entries
     })
   }
 }
 ```


## Atomic serverless functions (vid \#7)

... bacsically about branching and deploys.
