---
title: "Moral Networks"
author: "Cillian"
date: '2019-12-10'
image:
  caption: ''
  focal_point: ''
slug: moral-networks-shinyapp
summary: A Shiny App for Making Moral Networks
tags: []
categories: []
---

Following discussions with members of the [DAFINET](https://www.ul.ie/dafinet/) team, I have become increasingly interested in the idea that moral values might be strengthened by the way in which people might be connected by their values.  To investigate this, I started playing around with building networks in R.  I downloaded some existing data on Moral Foundations Theory from the OSF (see [here](https://osf.io/nh4ck/)).  In order to play with it more interactively, I built [this ShinyApp](https://cillianmacaodh.shinyapps.io/moral_networks/). 

## Instructions

1. Select the range of participants you want included in your network; there are 522 participants, numbered 1-522, you can select the range by inputting the first and last participants in the range.

2. Select the Moral Foundations, or the specific questions you want to look at.


### Notes

- When it first loads it will show an error because nothing is selected;
- If there is no network to be built (e.g., 2 participants who disagree on the only item selected) it will also show up an error 
- If too many participants and too many items are selected it will probably crash (I tried to create a full network of all participants and all items, and after 3 hours I gave up)
- Due to the amount of content in the App it doesn't fit too well embedded below, so it might going directly to [https://cillianmacaodh.shinyapps.io/moral_networks/](https://cillianmacaodh.shinyapps.io/moral_networks/) to play with it.

<iframe width="800" height="1500" scrolling="yes" frameborder="no"  src="https://cillianmacaodh.shinyapps.io/moral_networks/"> </iframe>

(see [https://cillianmacaodh.shinyapps.io/moral_networks/](https://cillianmacaodh.shinyapps.io/moral_networks/))
