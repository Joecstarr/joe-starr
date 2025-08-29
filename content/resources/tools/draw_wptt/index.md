---
title: Draw Weighted Planar Tangle Trees
date: 2025-08-16
featured: false
summary:
weight: 500
sitemap:
    priority: 0.8
    weight: 0.4
share: false
---

{{< mathjax_preamble >}}

Below is a tool designed to draw the tangle represented by a weighted planar
tangle tree {{< cite "bonahonNewGeometricSplittings2016" >}}.

{{< admonition icon="circle-info" >}}
The rendered image is an `svg`, a vector format. This means it can be scaled
infinitely. If you need to view it at a larger scale or would like to
postprocess the image, you can download it and use a tool such as Inkscape to
edit it.
{{< /admonition >}}
<br/>
<br/>
{{< admonition icon="bomb" type="exercise" title="Alert" >}}
I have done very little testing with this tool. I'm reasonably
confident that valid input generates valid output. I have no idea what happens
when invalid input is fed to the tool. If you find a bug, please report it.
<br/>
{{% btn_report %}}

{{< /admonition >}}



## Instructions

{{< admonition icon="circle-info" >}}
I've given a good number of dials here to mess with. I've set some defaults that
seem to work well.
{{< /admonition >}}

1. In the "Tangle" field, input a linearized weighted planar tangle tree
   (information found in my thesis link to come).
1. Configure the tool:
    1. In the "Strand Color" field, set the color of the strands of the tangle.
       For print you almost certainly want `#000000`.
    1. In the "Crossing Color" field, set the color of the crossing for the
       tangle. When an overstrand is drawn, a $2\times$-sized copy is placed
       underneath it. This gives the appearance of the understrand being broken.
       For print you almost certainly want `#ffffff`.
    1. In the "Eccentricity" field, select a number from 0 to 100. This will tell
       the tool how far away from a path vertex to place control points. Play
       around until you find a setting you like.
    1. In the "String Size" field, select a positive integer. This will be, in
       pixels, how large to make the strands of the tangle. A crossing will
       always have a height and width of $\text{"String Size"}\cdot 11$.
    1. In the "Gap Size" field, select a positive integer. This dictates how far
       apart units of a tangle should be placed. Play around until you find
       something you like.
1. Press the "Draw" button to render the tangle as an `svg`.
1. If you're happy with the picture, you can download it by pressing the
   "Download" button.

---

{{< tools/draw_wptt >}}

---

{{< references >}}
