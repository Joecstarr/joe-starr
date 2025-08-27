---
title: Grid Diagram to Front Projection
date: 2023-05-30T17:09:26.037Z
featured: false
summary:
weight: 500
sitemap:
  priority: 0.8
  weight: 0.4
share: false
---

{{< mathjax_preamble >}}

---

# Instructions

1. Create a $n\times n$ table by setting the size and pressing the button.
2. Select the colors for your knot.
4. Select the scale, size of the strands, for your knot.
5. Select the eccentricity, how much the control points pull, for your knot.
6. Fill in the table with the grid diagram. For info on using grid diagrams to define Legendrian knots see [10.48550/arXiv.1903.12256](http://dx.doi.org/10.48550/arXiv.1903.12256) or [10.2140/agt.2010.10.293](http://dx.doi.org/10.2140/agt.2010.10.293).
   1. Note there is no error handling so if something goes wrong refresh the page and try again
7. Click generate to get the image.
    1. Click "Download" to download a copy of the image.

---

{{< tools/grid2fp_code >}}

---

## Sample images


|x|o| | | |
|-|-|-|-|-|
| |x|o| | |
| | |x|o| |
| | | |x|o|
|o| | | |x|


{{< slides/centersvg src="/tools/grid2fp/examples/squig_knot.svg" height="auto">}}


|x|o| | | |
|-|-|-|-|-|
| |x|o| | |
| | |x|o| |
| | | |x|o|
| | | | |x|



{{< slides/centersvg src="/tools/grid2fp/examples/squig.svg" height="auto">}}




| |o| | |x|
|-|-|-|-|-|
|x| |o| | |
| |x| |o| |
| | |x| |o|
|o| | |x| |



<img  style="width:400px;height:auto" src="https://raw.githubusercontent.com/Joecstarr/grid2fp/main/test/trefoil.svg"/>


|x| |o|
|-|-|-|
| | | |
|o| |x|

<img  style="width:400px;height:auto" src="https://raw.githubusercontent.com/Joecstarr/grid2fp/main/test/un.svg"/>


| |x| | |o| | |
|-|-|-|-|-|-|-|
|x| |o| | | | |
| |o| | | |x| |
| | | | |x| |o|
|o| | |x| | | |
| | |x| | |o| |
| | | |o| | |x|

<img  style="width:400px;height:auto" src="https://raw.githubusercontent.com/Joecstarr/grid2fp/main/test/fig1_from_paper.svg"/>
