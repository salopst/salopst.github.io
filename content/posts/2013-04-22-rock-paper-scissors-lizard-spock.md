---
author: admin
origin: wordpress
comments: true
date: 2013-04-22T21:46:40+00:00
lastMod: 2021-09-21T02:22:00+01:00
layout: post
draft: false
slug: rock-paper-scissors-lizard-spock
title: Rock-Paper-Scissors-Lizard-Spock
wordpress_id: 274
categories:
- Uncategorized
tags:
- code
- course
- python
---

For an online [coursera.org](http://www.coursera.org) course on interactive python from Rice University. 1st project exercise.

```python
import math
import random

def name_to_number(name):
    name = name.lower()
    if name == "rock":
        return 0
    elif name == "spock":
        return 1
    elif name == "paper":
        return 2
    elif name == "lizard":
        return 3
    elif name == "scissors":
        return 4
    else:
        return "Invalid hand sign '" + name + "'!\nplease choose: 'rock', 'Spock', 'paper', 'lizard' or 'scissors'"

def number_to_name(number):
    if number == 0:
        return "rock"
    elif number == 1:
        return "Spock"
    elif number == 2:
        return "paper"
    elif number == 3:
        return "lizard"
    else:
        number == 4
        return "scissors"


def rpsls(name):
    player_val = name_to_number(name)
    computer_val = random.randrange(0,5)

    mod_val = (player_val - computer_val) % 5  
    if mod_val == 0:
        winner = "Player and computer tie!"
    elif mod_val > 0  and mod_val < 3:
        winner = "Player wins!"
    else:
        winner = "Computer wins!"

    print "Player choosses " + number_to_name(player_val) #+ " (" + str(player_val) + ")"
    print "Computer chooses " + number_to_name(computer_val) #+ " (" + str(computer_val) + ")"
    print winner
    #print mod_val
    print "\n"


### OUTPUT ###
rpsls("Rock")
rpsls("scissors")
rpsls("paper")
rpsls("lizard")
rpsls("spock")
```
