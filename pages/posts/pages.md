---
title: unwilting 1.0 release and dev log
date: 2024/3/26
description: unwilting, a game jam game for LSDJAM23, is now available to play!
tag: game launch
author: cm
---

# "unwilting" is released!

developed for the LSDJAM 2023, we have completed our 1.0 version of "unwilting" - a first person gardening adventure game!! 

![](https://img.itch.zone/aW1nLzE1NTA2Mzk1LmdpZg==/original/y1nr6v.gif)

please let us know what you think <3

### development

#### inspiration 
![image.png](https://img.itch.zone/aW1nLzE1NTA2NjExLnBuZw==/original/Q3jblT.png)

i was inspired by the experience of wandering through unlocked community gardens during the COVID-19 pandemic in new york city. 

for some reason on walks, i kept finding unlocked, unattended community gardens. typically, a volunteer is required to tend to the garden at all times, and if there is no one present, the garden is supposed to be locked - but intentionally or not, some gardens were left available.

the simple scene of an empty community space with no one around was super resonant during that time, and i wanted to recreate that feeling of being alone in a strange place that is missing life.

#### concepting

in november 23, concepting started in this doc: https://docs.google.com/presentation/d/1d4TfO9vXOVNL-M8J3HrtVAjoN4vX7EN6pb1HJeaptXI/edit#slide=id.g29c59f8345d_1_74

and took many iterations to explore what the game would eventually become!

![image.png](https://img.itch.zone/aW1nLzE1NTA2NjU1LnBuZw==/original/mCtnHZ.png)

paul's art references were also invaluable during the concepting stage and provided mad inspiration vibes

![image.png](https://img.itch.zone/aW1nLzE1NTA2NzE4LnBuZw==/original/dSgQyc.png)

#### flower cubes

when designing, we were coming up on a problem - how can we create a lush 3d garden environment in scope?

3d modeling flowers, trees, and other custom geometry became quickly out of scope and due to our team's size and capacity and we wanted to include many 2d artists willing to work on this, so we needed another solution.

![image.png](https://img.itch.zone/aW1nLzE1NTA2NjI3LnBuZw==/original/MR%2BKrY.png)

paul pitched mapping 2d illustrations of flowers onto primitive geometry - like cubes, pyramids, spheres. it made for an instantly readable watering mechanic, and helped define the art style with really clear core objects. and with that, flower cube was born!

#### build and rebuild! 

in november of 2023, i prototyped some initial mechanics with some of william's music, focusing on exploring possible gameplay with a fluid simulation asset i purchased via the unity asset store. 

after playing with the mechanic and setting up some puzzles, while pouring water was fun and interesting, the mechanics were ultimately too complex in a first person game to be any more fun than what a particle effect could do, so fluid sim was scrapped.

![image.png](https://img.itch.zone/aW1nLzE1NTA2NzMzLnBuZw==/original/E5L6EB.png)

then, in january 2024, freshwater participated in the global game jam, which was our first 3d game in godot! the switch to godot enabled much higher collaboration speed, and we were able to to renable our ci/cd pipeline from github -> itch.io via butler, which unity broke by changing their licensing policies over summer of 2023.

after the jam and learning the godot workflow, i forked an "interactive sim" template still in development, to develop the "prototype" to submit for the LSDJAM which "officially" ended end of febuary 2024. [link to repository!](https://github.com/flower-water-games/garden-songs-godot4-prototype-cogito)

![image.png](https://img.itch.zone/aW1nLzE1NTA2NzM5LnBuZw==/original/SCVD2h.png)

after developing two prototypes, i removed the dependency to the COGITO interactive sim library, and rebuilt the project to create the current version, v1.0. 

this simplified the code base to only include a first person controller, watering mechanics, and an environment to explore, without additional puzzles or interactions.

after trying to design hand made levels, i generated a large terrain and walked around with the music, placing key points of interests and tried to create world scenes that included our art and framed the stem cubes properly. 

honestly, the world is probably too big and empty, but this iteration felt like the most exciting and interesting direction than the smaller, more authored approach.

ultimately, being willing to rework this game led to huge leaps in iterations through each phase - and the game and code base is super improved and refined. 

and of course, thanks to the whole team for everyone's beautiful contributions!! 

- cm

ps: if you made it this far, thanks for reading, and here's a cheat code! press 3, to activate the "end game" ;) (i accidentally left this debug tool in lol)

## unwilting

[play on itch.io now! ](https://carlos-michael.itch.io/unwilting)

### description
explore the unwilting gardens in this relaxing first person gardening adventure game!

### controls
[wasd] to move

[mouse] to look around

[click] to water

[space bar] to jump

### credits

- game development by cm
- art direction, environment, shader, visual style by pauljamesbarbato
- flowers by jenna, jesse, paul, and helen
- dome art and animation by chris
- birds by helen
- music and sound design by william lambert
- music and logo design by houis

+ thanks to many freshwater games friends

<3