---
title: why we switched to godot
date: 2024/3/28
description: unity vs godot retrospective
tag: game tools
author: cm
---

## overview




while unity has received plenty of criticism of their runtime policies // TODO add links, i wanted to write a perspective on why our entirely unity team was willing to jump into godot for our game jam projects

![alt text](https://godotengine.org/assets/home/features/language.webp)

## the context: game jams

game jams are special cases for game development - they are often made with extreme time constraints, and in our case, with beginners who wanted to contribute as a learning experience.


this presents a couple key problems already - you need a frictionless, battle tested solution, that easily allows for modular concepts to be added as brainstorming and new ideas come at a rapid pace. 

## unity successes

for many reasons, unity is really a good choice for this - the prefab workflow is intuitive and allows for rapid scene prototyping, scripting is simple and online solutions are plentiful, and it is relatively beginner friendly (although more on that later). 

also, the unity asset store contains enough game tools to prototype or at least give examples for most types of gameplay you can achieve in a game jam setting, to build off of.

![alt text](/images/gamelibrary.png/)

we built 5 or so jam submissions in unity, with a widespread collaboration and a variety of 3rd party plugins enabling certain features, and the overall workflow wasn't 

## unity problems

much has already been said about unity's breach of trust with its users by changing its runtime fees// TODO, but this behavior is consistent from unity regarding platforms, tools, and projects they have committed to maintaining and 

in our case, unity's changes // TODO to the unity personal license disabled our ability to generate builds and push them for easy playtesting in itch.io. local manual builds are inefficient, prone to human error, and frustrates the entire workflow. 



### unity bloat

to enable a simple 2d scene with a dynamic camera, you're already looking at a larger than needed project size, and likely 20-45 minute cloud build time.

however, in summer of 2023, unity changed their policies related to cloud builds which broke the game-ci library that our pipeline relied on.

git 

## godot solutions

![alt text](/images/musiccube.png)

## godot best practices

## 

