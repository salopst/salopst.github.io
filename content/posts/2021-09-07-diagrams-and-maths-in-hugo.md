---
title: Diagrams and Maths in Hugo
slug: drawing diagrams and making math in hugo
author: yearluk
origin: hugo
date: 2021-09-07T20:13:00+01:00
lastMod: 2021-09-08T20:17:31+01:00
draft: false
noLicense: false
weight: 1001
description: Displaying diagrams and maths in Hugo using several of the many javascript libraries that are available. flowchart.js mermaid.js js-sequence
categories:
  - Tech
  - Blog
tags:
  - tech 
  - markup
  - markdown
  - javascript
  - linux
  - webdev
---


## Can we handle flowcharts using `flowchart.js` ?
- [flowchart.js](http://flowchart.js.org/)?


Given a code-block of 
```text
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
```

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

```text
{\{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{\{< /mermaid >}}
```

{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}


## Some plaine olde HTML directly in the Markdown

<span style="color:#a3c1ad">#a3c1ad (also known as Heroic Blue)</span>
<span style="color:#002147">#002147 (also known as Enemy Blue)</span>
<span style="color:#0f4d92">#0f4d92 (also known as Yale Blue)</span>
<span style="color:#c90016">#c90016 (also known as Other Enemy Crimson)</span>
<span style="color:#e94984">#e94984 (the lovely pink of Typora's "Souce Mode" markup (err *down*) </span>
<span style="color:#b4eaf2; background-color:#565656"> #b4eaf2 (my selected text colour) </span>, though obviously not the background. Here: Lorum Ipsum

That last is here: https://www.colorhexa.com/b4eaf2 

~~And, if I am honest, the enemy's blue is a much nicer colour~~. 


## What about $ \LaTeX $  ??????

`$\LaTeX$`

{{<latex align="center">}}

$ \LaTeX $ says that $\\e = \mathop {\lim }\limits_{n \to \infty } \left( {1 + \frac{1}{n}} \right)^n $  but is mute as to the beauty of the expression. Now can we add arbitrary 

{{</latex>}}


Does it do such $\LaTeX$? things like:
- `\textbf{graphic designers' hijacked and bastardised quote from Cicero's De finibus bonorum et malorum }`?

- Well, let's see.....   $ \textbf{graphic designers' hijacked and bastardised quote from Cicero's De finibus bonorum et malorum }$


## Emojis

- OMG! Ima like so :joy: `:joy:` smth.


## Greek

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

## and  




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