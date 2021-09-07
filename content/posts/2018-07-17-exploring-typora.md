---
title: Exploring Typora... and now Hugo
slug: exploring-the-typora-markdown-editor
author: yearluk@ehecatl
origin: scratch
date: 2018-07-17 
categories:
  - Tech
  - Apps
tags:
  - tech 
  - editors
  - markup
  - markdown
  - apps
  - OS X
  - MacOS
  - Linux
todo:
  - explore mermaid.js
  - explore flow.js
  - add border around images
---

This wee MD file was created back on `date: 2018-07-17 ` to explore a new x-platform markdown editor I had heard about called Typora, [https://typora.io/](https://typora.io/). I was using a Mac then, a mid-2012 MPB, that had at that point done sterling service for 6 years and 13 days.

The below is just a bunch of BS written back then to try out some of the splendid features it seemed to offer. Now the challenge is to see if some of the non-markdown features render under Hugo.

## French learning resources

* http://verbedujour.com/ (conjugate random verb)
* [https://www.lepointdufle.net](https://www.lepointdufle.net/)*



## \## Does it checklistz? "Check!".

- [x] du lait
- [x] du fromage
- [ ] du pâté

It's pretty out of the box with several default stylesheets... and if you don't like those one can write one's own. This is the modified "Newsprint" with [IAWriter](https://ia.net/writer)'s font, *iAWriterDuospace*.

It does simple YAML frontmatter... which my stylesheet shows. Should change that so that it is only viewable in "view source" (cmd+/ on me Mac). Source Mode, BTW looks like:

-- IMAGE

![](/wp-uploads/Typora-source-mode.png)

-- EOF IMAGE --



The path of the above has to be absolute... so no `~/Pictures/Screenshots/Typora-source-mode.png`

> BLOCKQUOTE
>
> And, naturally, I weirded myself by tring to edit some of that image, not realising that it is an image. It just blends so well with the background. **Perhaps modify stylesheet to show border around images?**

*Il faut du pain*. --- We need bread. (more like... "the bread is lacking"). It answers the question, "What is needed?" --- «*Qu'est-ce qu'il faut?*»

And no, my French is not great... hence the refresher.

C'est ce qu'il fait. --- I wrote: ç'est que il fait -- for "this is what he does"

"en" stands in for an object, which has usually been mentioned just before. Take this example: Avez-vous du vin? J'en veux.

Another example I've seen is: "J'en suis sur" (I am sure of it).



J'en veux -- I want some.

I know where it is -- je sais où il est || je sais où c'est

il faut boire -- we have to drink -- WHAT THE ACTUAL FUCK??!



## Un lavabo nouveau

Je vais installer un nouveau lavabo et armoire dans la salle du bain.

Le lavabo...![Le Lavabo](https://ws2.sinaimg.cn/large/006tNbRwgy1fugg6wuitoj31kw16okjl.jpg)



Et je suis en train d’installer un bain neuf.  Mais d'abord, j'ai besoin de faire des recherches.



| Nominal Bore (metric) | Nominal Bore (Imperial) | Pipe Outside Diamter (metric) |
| --------------------- | ----------------------- | ----------------------------- |
| **10 mm**             | 3/8 "                   | **17.2 mm**                   |
| **15 mm**             | 1/2 "                   | **21.3 mm**                   |
| **20 mm**             | 3/4 "                   | **26.9 mm**                   |
| **25 mm**             | 1 "                     | **33.7 mm**                   |

![](https://ws3.sinaimg.cn/large/006tNbRwgy1fugeqjwxdsj30bv0bvgmc.jpg) 





### ### italics *Nouveau* vs *neuf*

The opposite of *nouveau* is *ancien* (former). Think of *nouveau* as "novel".

*nouveau - nouvelle - nouveaux - nouvelles*

The opposite of *neuf* is *vieux* (old).

*neuf - neuve - neufs - neuves*

*Neuf* is also the number nine:

#### #### it does not do colours... shame!

Ah but it `<span style="color:blue">`does`</span>` = <span style="color:blue">does</span> with HTML, and I am guessing that any arbitray HTML can be added and parsed. ==Begs== the question, can one script/extend to add quick inserts err.. cmd+opt+c for "colour selection" or smth.

<span style="color:#a3c1ad">#a3c1ad (also known as Heroic Blue)</span>
<span style="color:#002147">#002147 (also known as Enemy Blue)</span>
<span style="color:#0f4d92">#0f4d92 (also known as Yale Blue)</span>
<span style="color:#c90016">#c90016 (also known as Other Enemy Crimson)</span>
<span style="color:#e94984">#e94984 (the lovely pink of Typora's "Souce Mode" markup (err *down*) </span>
<span style="color:#b4eaf2; background-color:#565656"> #b4eaf2 (my selected text colour) </span>, though obviously not the background. Here: Lorum Ipsum

That last is here: https://www.colorhexa.com/b4eaf2 

~~And, if I am honest, the enemy's blue is a much nicer colour~~. 

$ \LaTeX $ says that $\\e = \mathop {\lim }\limits_{n \to \infty } \left( {1 + \frac{1}{n}} \right)^n $  but is mute as to the beauty of the expression. Now can we add arbitrary $\LaTeX$? like `\textbf{graphic designers' hijacked and bastardised quote from Cicero's De finibus bonorum et malorum }` $ \textbf{graphic designers' hijacked and bastardised quote from Cicero's De finibus bonorum et malorum }$

Ooh. I came out as one long line.


$$
\textbf{}
$$
\begin{itemize}\item item1 \item item2 \end{itemize} $$


$$
\begin{itemize}
\item On-call archival consultant
\end{itemize}

\href{tel:447944683642}{ \large{\faMobilePhone} \normalsize \hspace{-2 pt} +44 7944.683.642}\\
$$


OMG! Ima like so :joy: `:joy:` smth.

Greek ==looks kinda nice== in this font too:

1. Ἐν ἀρχῇ ἦν ὁ λόγος, ==καὶ ὁ λόγος ἦν πρὸς τὸν θεόν==, καὶ θεὸς ἦν ὁ λόγος.

Inline $\LaTeX$ and highlighting? `$\LaTeX$` and ``==highlight me==`` needs be set up in **Typora>Preference...>Markdown**

#### Maths? or LaTeX
Pretty sure that Typora uses  KaTeX ... a LaTeX notation

$$
\LaTeX\\
\\42*42= 1764
$$

#### LIST of some present tenses

-1 Nous **faisons** le repas.   --- li:before "\f005";  color: #0f4d92; font-family: FontAwesome;
-2 Nous **achetons** des pommes vertes.
-3 Je **fais** des frites.
- Vous **faites** une soupe.
- Il **aide** son chien.
- Il **boivent** donc elle **boit**.
- Sa femme **attend** un enfant.

#### Another table

| s               | pl                  |
| --------------- | ------------------- |
| je sais         | nous savons         |
| tu sais         | vous savez          |
| il \| elle sait | ils \| elles savent |

*savoir* --- to know --- cf. en "savvy".



*Assimil French* p 54

Group 1 -- '-er' verbs

rentrer		to go back
acheter		to buy
monter 		to ascend
décrocher	to fall
allumer		to light / tp switch on
regarder	to look at
laver		to wash
se coucher	to go to bed
déranger	to disturbed
manger		tp eat
penser		to think
écouter		to listen (to)

choose 4...

je rentre	nous rentrons
tu rentres	vous rentrez
il rentre	ils rentrent

je pense	nous pensons
tu penses	vous pensez
elle pense	ils pensent

je allume	nous allumons
tu allumes	vous allumez
on allumen	ils allument

je mange	nous mangeons
tu manges	vous mangez
elle mange	ils mangent

Take the verb “parler” in the present tense.

1. “Je, tu, il, elle, on, ils, elles” verb forms are all pronounced exactly the same = “parl”. Just like the stem.
2. The “nous from” is pronounced “on” (nasal) = “parlon”
3. The “vous” form is pronounced “é”, just like the infinitive form of the verb “parler”. So “parlez = parler = parlé” in pronunciation.

And searching the left menu (though files), even for file names does not seem possible.

#### Il fait des tables

| en-GB  | fr         | notes                                        | DE         |
| ------ | ---------- | -------------------------------------------- | ---------- |
| jacket | la veste   | <span style="color:#E94984">FEMININE!</span> | Die Jacke  |
| coat   | le manteau | <span style="color:#0f4d92">Masc.</span>     | Der Mantel |



### Verbes français --- quelques notes

Most freq used (speech)

**le présente** indicative

**futur proche** --- aller (going) + infinitive

**passé proche** --- venir (coming) de + ininitive *Je viens de péter.* hehehe.


**Je commande de frites** -- I am ordering fries


| ----------- | ------- |
| Je          | bois    |
| tu          | bois    |
| il (elle)   | boit    |
| nous        | buvons  |
| vous        | buvez   |
| ils (elles) | boivent |



The singular demonstrative adjectives *ce*, *cet*, and *cette* can all mean "this" or "that." Your listener can usually tell by the context which you mean, but if you want to stress one or the other, you can use the suffixes *-ci* (here) and *-là* (there), as the following examples demonstrate:

| **Ce, Cet, Cette**           | **English Translation**      |
| ---------------------------- | ---------------------------- |
| *Ce prof-ci parle trop.*     | This teacher talks too much. |
| *Ce prof-là est sympa.*      | That teacher is nice.        |
| *Cet étudiant-ci comprend.*  | This student understands.    |
| *Cette fille-là est perdue.* | That girl is lost.           |

Likewise, **ces** can mean "these" or "those," and again you can use the suffixes to be more explicit:

| **Ces**                                             | **English Translation**                        |
| --------------------------------------------------- | ---------------------------------------------- |
| *Je veux regarder ces livres-là.*                   | I want to look at those books.                 |
| *Je préfère ces pommes-ci.*                         | I prefer these apples.                         |
| *Ces fleurs-ci sont plus jolies que ces fleurs-là.* | These flowers are prettier than those flowers. |



on veut des frites -- one (cough 'we') wants fries

ça se peut --- that can be

#### und Code, wenn CSS als "Code" sein betrachtet wird.

```css
html, body {
	background-color: #f3f2ee;
	font-family: "iAWriterDuospace", 'Niti';
	color: #1f0909;
	line-height: 1.5em;
}
```

## and  flowcharts?


Below is a code-block of ` ```flow \n\t q0=>condition: Does it move?...``` `

```flow
q0=>condition: Does it move?
q1=>condition: Should it?
q2=>condition: Should it?

np=>end: No problem!
dt=>end: Duct Tape! No Problem
wd=>end: Wd40 Rien de problem!

q0(yes)->q1
q0(no)->q2

q1(yes)->np
q1(no)->dt

q2(yes)->wd
q2(no)->np

```

## This is a mermaid example:
With the shortcode 

```merma1d
{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}
```

{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}




### DHCP leases

Currently active DHCP leases

| MAC address | IP address | Hostname |      |
| ----------- | ---------- | -------- | ---- |
|             |            |          |      |

|                   |              |                |      |
| ----------------- | ------------ | -------------- | ---- |
| 00:0A:CD:31:76:CF | 172.16.0.179 | omv            |      |
| 20:6E:9C:6A:96:B8 | 172.16.0.130 | android        |      |
| 44:85:00:F0:FC:80 | 172.16.0.105 | neon-T460      |      |
| 5C:F7:E6:C1:AE:9E | 172.16.0.114 | Xipetotec      |      |
| 68:54:FD:5B:72:BD | 172.16.0.102 | firestick0     |      |
| 74:DA:38:88:73:55 | 172.16.0.108 | x201           |      |
| 7C:D1:C3:7D:C8:92 | 172.16.0.110 | xolotl         |      |
| B0:C0:90:4F:83:2E | 172.16.0.106 | blackdell      |      |
| B8:27:EB:1D:BA:5C | 172.16.0.167 | *unknown*      |      |
| F0:9F:C2:2C:07:72 | 172.16.0.103 | unifi-ap-ac-lr |      |

Showing 1 to 10 of 10 entries

Search:

Static DHCP leases configuration

| MAC address | IP address | Hostname |      |
| ----------- | ---------- | -------- | ---- |
|             |            |          |      |

|                   |              |            |      |
| ----------------- | ------------ | ---------- | ---- |
|                   |              |            |      |
| 00:AA:CD:31:76:CF | 172.16.0.120 | omv        |      |
| 14:CC:20:BE:57:38 | 172.16.0.1   | Archer_C8  |      |
| 20:6E:9C:6A:96:B8 | 172.16.0.130 | android    |      |
| 68:54:FD:5B:72:BD | 172.16.0.102 | firestick0 |      |
| 7C:D1:C3:7D:C8:92 | 172.16.0.110 | xolotl     |      |
|                   |              |            |      |