---
title: "Legendrian Unknot Visualization"
date: "2022-11-29"
summary: "A tool to visualize the Legendrian unknot in the standard contact structure on Rn"
tags: [
    "visualizer",'tool'
]
draft: false

---

{{< dracula_css >}}

{{< mathjax_preamble >}}

# Summary

Below you will find a visualization of a [Legendrian unknot](https://en.wikipedia.org/wiki/Legendrian_knot) in $\R^3$. You can fly around the space filled with the tangent planes of the [standard contact structure](https://en.wikipedia.org/wiki/Contact_geometry). When you approach the unknot you will find the planes tangent to the curve to be colored by the knot.

The tooling used to generate this visualization was built as a one off for a topics course, as such I wouldn't call it alpha it's currently a toy proof of concept. That said, the tool is built to support any knot. Unfortunately, right now the knot needs to be defined at compile time (this can be changed in the future if needed/wanted). If you would like another knot or a published (polished FOSS) version of the software let me know.


---

# Instructions

1. Movement:
    * W - forward
    * A - left
    * S - backward
    * D - right
    * Space - up
    * Shift - down
8. Look around with mouse pointer
    * Note: for some reason the version here spawns the user looking away from the origin. Look around and you'll find the knot.

---

# The Visualization
<!-- # Legendrian knots -->


{{<game "/games/contact_with_unknot">}}


