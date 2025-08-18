---
title: "Defense Slides"
date: "2025-08-18"
summary: "Talk for my thesis defense on tangle tabulation."
tags:
   - "Talks"
   - "research talks"
draft: false

showHeadingAnchors: false

type: 'slides'
slides:
  highlight_style: dracula
  diagram: true
  diagram_options:
    theme: "dark"
    themeVariables:
            fontSize: 17
  reveal_options:
    theme: "none"
    center: true
    transition: "none"
    backgroundTransition: "none"
    self-contained: true
    progress: true
    hash: true

---

{{< slides/theme >}}
{{< dracula_css >}}
{{< mathjax_preamble >}}


<style>
svg{
    max-width: var(--slide-width);
    max-height: var(--slide-height);
}

.subtext > svg{
    height:2rem;
}

.mjx-n div svg{
    width:4.8 rem;
    height:auto;
    margin-left:-.5rem;
    margin-top:-1rem;
}

#qr {
    width:35rem;
    height:35rem;
    margin-left: auto !important;
    margin-right: auto !important;
}
#tech_img {
    width:40vw;
    height:auto;
    margin-left: auto !important;
    margin-right: auto !important;
}
a.lowercase {
  text-transform: lowercase;
}

</style>

#### Defense Slides (8/18/25)

# The Tanglenomicon:
## Tabulation of Arborescent Tangles


<p style="font-size:.7em;text-align:center !important">
Joseph Starr
<p>

<p style="font-size:.6em; text-align:center !important"> Mathematics Department at The University of Iowa<p>


<p style="font-size:.8em;   vertical-align: bottom; text-align:center !important">Partially supported by DMS-2038103<p>
<p style="font-size:.6em;   vertical-align: bottom; text-align:center !important">"The Tanglenomicon" name due to Dr. Nicholas Connolly<p>


---

# Knots

---

{{< slides/row style="">}}
{{< slides/col style="flex-grow:2;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/Alex_Poly/trefoil/left.svg">}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:2;">}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/Alex_Poly/alg/Alg_1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/mathday23/tknot_35.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:4;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/mathday23/star.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}

{{% slides/citations %}}
[https://www.knotplot.com/](https://www.knotplot.com/)
{{% /slides/citations %}}


---

# The natural question

## How many knots?

---
# Knot Tables

---

### Lord Kelvin's vortex theory of the atom

{{< slides/row >}}
{{< slides/col >}}
{{< centerimg src="/presentations/mathday23/lord_kelvin.jpg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block markdownify="true" grow="1" >}}
Atoms are knotted vortices in the æther.
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}

---

# By Hand

- 1860s Tait computes knots up to 7 crossings
   - 15 knots
- 1870s Tait, Kirkman, and Little compute knots up to 10 crossings
   - Takes about 25 years
   - 250 knots (+1 repeat in the Perko pair)
- 1960s Conway computes knots up to 11 crossings
   - "A few hours"
- 1980s Caudron verifies knots up to 11 crossings
   - Finding 4 omissions of Conway

---

# By Computer

- 1980s Dowker and Thistlethwaite compute up to 13 crossings
    - First using a computer
    - 12,966 knots
- 1990s Hoste, Thistlethwaite, and Weeks compute up to 16 crossings
    - Computer runtime on the order of weeks
    - 1,701,936 knots
- 2020s Burton computes up to 19 crossings
    - Computer runtime on the order of months
    - 350 million knots

---

## Conway

{{< slides/center_block grow="1"  >}}
How did Conway compute 25 years of work in "a few hours"?
{{< /slides/center_block >}}

---

## Tangles

> "We define a **tangle** as a portion of a knot diagram from which there emerge just 4 arcs pointing in the compass directions NW, NE, SW, SE." - Conway, J.H.

{{% slides/citations  %}}
Conway, J.H. "An Enumeration of Knots and Links, and Some of Their Algebraic Properties." In Computational Problems in Abstract Algebra, 329-58. Elsevier, 1970. [https://doi.org/10.1016/B978-0-08-012975-4.50034-5](https://doi.org/10.1016/B978-0-08-012975-4.50034-5)
{{% /slides/citations %}}

---

{{< slides/row style="" >}}
{{< slides/col style="flex-grow:2;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/mathday23/cc_1.svg"  >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:2;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/mathday23/cc_2.svg"  >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:2;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/cc_3.svg"  >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row  >}}

___



{{< slides/row style="" >}}
{{< slides/col  style="flex-grow:1;" >}}
{{< slides/centersvg src="/presentations/general/1.svg" >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/centersvg src="/presentations/general/m1.svg" >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/centersvg src="/presentations/general/0.svg" >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/centersvg src="/presentations/general/inf.svg" >}}
{{< /slides/col>}}
{{< /slides/row >}}

---

# Basic Operations

---

## Operation $+$


{{< slides/row style="" >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$+$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$=$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:7;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1_plus_1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$=$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1_plus_1_1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$=$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$2$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< /slides/row >}}


---

## Operation $\vee$



{{< slides/row style="" >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$\vee$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$=$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1_vee_1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$=$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1_vee_1_1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$=$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$\frac{1}{2}$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< /slides/row >}}

___

# Algebraic Tangles

All possible tangles made from $+$ and $\vee$ on basic tangles.

---

{{<  slides/admonition type="Example" title="Algebraic" >}}

{{< slides/row  style="align-items:baseline;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/lightning/Alg.svg"  >}}
{{< /slides/col >}}
{{< slides/col style="text-align:center;">}}
A tangle built from $\vee$ and $+$ on some basic tangles.
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/lightning/annotated/Alg.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}

{{< slides/row  >}}
{{< slides/col style="font-size:1rem;" >}}
$$\color{var(--r-foreground)}\LP\color{var(--r-Purple)} \LP\LP3\vee\\\frac{1}{2}\RP+3\RP+\LP\LP3\vee\frac{1}{2}\RP+3\RP\color{var(--r-foreground)}\RP \vee\color{var(--r-foreground)}\LP\color{var(--r-Purple)} \LP\LP3\vee\frac{1}{2}\RP+3\RP+\LP\LP3\vee\frac{1}{2}\RP+3\RP\color{var(--r-foreground)}\RP $$
$$\vee \color{var(--r-Purple)}++\vee3\frac{1}{2}3+\vee3\frac{1}{2}3 ++\vee3\frac{1}{2}3+\vee3\frac{1}{2}3 $$

{{< /slides/col >}}
{{< /slides/row >}}
{{<  /slides/admonition >}}

{{% slides/citations  %}}
Conway, J.H. "An Enumeration of Knots and Links, and Some of Their Algebraic Properties." In Computational Problems in Abstract Algebra, 329-58. Elsevier, 1970. [https://doi.org/10.1016/B978-0-08-012975-4.50034-5](https://doi.org/10.1016/B978-0-08-012975-4.50034-5)
{{% /slides/citations %}}

---


## Arborescent Tangles

---


*Arborescent knots (and tangles)* are constructed by taking a collection of twisted bands described by a weighted tree and connecting them with non-cyclic successive plumbing.

Algebraic and arborescent constructions describe the same class of objects.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{< slides/centersvg src="/presentations/bands/bnd_sum_1.svg" direct="true" class="quarterHeight">}}
{{< slides/centersvg src="/presentations/bands/bnd_sum_2.svg" direct="true" class="quarterHeight">}}


---

{{< slides/row  >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/bands/bnd_sum_sum.svg" direct="true" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/bands/bnd_sum_patch.svg" direct="true" >}}
{{< /slides/col >}}
{{< /slides/row  >}}

---

{{< slides/centersvg src="/presentations/bands/band_cycle.svg"  direct="true"  >}}

---


{{< slides/centersvg src="/presentations/bands/arbor_band_with_twist_full.svg"  direct="true"  >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_bands.svg"  direct="true"  id="arbor_bands">}}


---

{{< slides/centersvg src="/presentations/bands/arbor_bound.svg"  direct="true"  id="arbor_bound">}}

---

{{< slides/centersvg src="/presentations/bands/arbor_tangle.svg"  direct="true"  id="arbor_tangle">}}


---


{{< slides/row  style="align-items:baseline;">}}
{{< slides/col   style="flex-grow:3;">}}
{{< slides/centersvg src="/presentations/bands/arbor_tangle.svg"  direct="true"  id="arbor_tangle">}}
{{< /slides/col >}}
{{< slides/col   style="flex-grow:1;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col   style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/bands/example_tangle.svg" direct="true"  id="arbor_graph_tangle">}}
{{< /slides/col >}}
{{< /slides/row >}}

We can see here the correspondence between algebraic and arborescent constructions.

---

### How to encode? (Bonahon and Siebenmann)


1. Relationship between a band and the other bands plumbed to it (children).
2. Location of twists relative to the children.
2. Tangle boundary.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

### 1. Relationship between a band and the other bands attached to it (children)

1. Acyclic connections between items.
2. Relative positions of connections.

---

### Acyclic connections between items?
#### Solution: A tree (in the graph sense)

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_with_band_no_weight.svg"  direct="true" class="halfHeight"  >}}

---

### Relative positions of connections?
#### Solution: Rooted plane tree

{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}

A **rooted plane tree** is an abstract tree imbued with a strict total order on
the vertices (indexed by the non-negative integers). We call the least vertex
the **root** of the tree.
{{<  /slides/admonition >}}

{{<  slides/admonition type="Note" title="Convention:" markdownify="true" >}}
We will select the total order given by a depth first in order traversal of the
tree.
{{<  /slides/admonition >}}


---

### Cyclic Order of a Vertex


{{< slides/row  >}}
{{< slides/col  style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_inc.svg" direct="true" >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_dec.svg" direct="true" >}}
{{< /slides/col >}}
{{< /slides/row  >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_graph_no_weights.svg"  direct="true"  >}}

---

### How to encode? (Bonahon and Siebenmann)


1. ✓ Relationship between a band and the other bands attached to it (children).
2. Location of twists relative to the children.
2. Tangle boundary.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_with_band_no_weight.svg"  direct="true"  >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_with_band.svg"  direct="true"  >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_1.svg" direct="true" class="halfHeight" >}}

---




{{< slides/row  >}}
{{< slides/col  style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/bands/arbor_graph.svg" direct="true" >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/bands/arbor_bands.svg"  direct="true"  id="arbor_bands">}}
{{< /slides/col >}}
{{< /slides/row  >}}

---

### How to encode? (Bonahon and Siebenmann)


1. ✓ Relationship between a band and the other bands attached to it (children).
2. ✓ Location of twists relative to the children.
2. Tangle boundary.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

## Local view of a vertex
### Bonds

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_2.svg" direct="true" class="halfHeight" >}}

---

### Free Bonds

{{< slides/row  style="align-items:baseline;">}}
{{< slides/col   style="flex-grow:2;">}}
{{< slides/centersvg src="/presentations/bands/arbor_tangle.svg"  direct="true"  id="arbor_tangle">}}
{{< /slides/col >}}
{{< slides/col   style="flex-grow:1;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col   style="flex-grow:4;" >}}
{{< slides/centersvg src="/presentations/bands/arbor_graph_tangle.svg" direct="true"  id="arbor_graph_tangle">}}
{{< /slides/col >}}
{{< /slides/row >}}


---

## Rotations
### Elements of Klein four-group ($V_4$)

{{< slides/row  style="align-items:baseline;">}}
{{< slides/col   style="flex-grow:2;">}}
{{< slides/centersvg src="/presentations/thesis/v4_rotations_i.svg"  direct="true"  id="arbor_tangle">}}
{{< /slides/col >}}
{{< slides/col   style="flex-grow:1;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col   style="flex-grow:5;" >}}
{{< slides/centersvg src="/presentations/thesis/v4_rotations.svg" direct="true"  id="arbor_graph_tangle">}}
{{< /slides/col >}}
{{< /slides/row >}}

---

### How to encode? (Bonahon and Siebenmann)


1. ✓ Relationship between a band and the other bands attached to it (children).
2. ✓ Location of twists relative to the children.
2. ✓ Tangle boundary.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

## Weighted planar tangle tree

{{< slides/centersvg src="/presentations/bands/arbor_graph_tangle.svg" direct="true"  id="arbor_graph_tangle">}}

---

# Anatomy of a Weighted planar tangle tree

---

## Rings

{{< slides/center_block grow="1"  >}}
{{< slides/row  style="align-items:baseline;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/bands/arbor_graph_ring.svg"  direct="true" class="quarterHeight" >}}
{{< /slides/col >}}
{{< slides/col   >}}
{{< slides/centersvg src="/presentations/bands/arbor_ring.svg"  direct="true" class="quarterHeight" >}}
{{< /slides/col >}}
{{< /slides/row >}}

{{< slides/row  style="align-items:baseline;">}}
$\  $
{{< /slides/row >}}

{{< slides/row  style="align-items:baseline;">}}
{{< slides/col   >}}
{{< slides/centersvg src="/presentations/bands/arbor_ring_no_bnd.svg"  direct="true" class="quarterHeight" >}}
{{< /slides/col >}}
{{< slides/col   >}}
{{< slides/centersvg src="/presentations/bands/arbor_ring_tangle.svg"  direct="true" class="quarterHeight" >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/center_block  >}}


{{% slides/citations  %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}


---

{{< slides/row  >}}
{{< slides/col style="flex-grow:5;" >}}


{{< slides/centersvg src="/presentations/bands/arbor_ring_essential.svg"  direct="true" >}}



{{< /slides/col >}}
{{< /slides/row >}}
{{< slides/row >}}
{{< slides/col  style="flex-grow:4;"  >}}
{{< slides/center_block grow="1"  >}}

{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}

A vertex with valence $\geq 3$ is called an
*Essential Vertex*.

{{<  /slides/admonition >}}
{{< /slides/center_block   >}}
{{< /slides/col >}}
{{< /slides/row >}}


{{% slides/citations  %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{< slides/row  >}}
{{< slides/col style="flex-grow:5;" >}}


{{< slides/centersvg src="/presentations/bands/arbor_ring_essential.svg"  direct="true" class="quarterHeight" >}}



{{< /slides/col >}}
{{< /slides/row >}}



{{< slides/row >}}
{{< slides/col  style="flex-grow:4;"  >}}
{{< slides/center_block grow="1"  >}}

{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}

The subtrees remaining after excising all essential vertices and their bonds (half edges)
are called the *Sticks* of a tree.

{{<  /slides/admonition >}}
{{< /slides/center_block   >}}
{{< /slides/col >}}
{{< /slides/row >}}

{{< slides/row  >}}
{{< slides/col style="flex-grow:5;" >}}


{{< slides/centersvg src="/presentations/bands/arbor_ring_noessential.svg"  direct="true" class="quarterHeight"   >}}



{{< /slides/col >}}
{{< /slides/row >}}

{{% slides/citations  %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{< slides/centersvg src="/presentations/thesis/watt_rational.svg"  direct="true" >}}

---

# Moves on a Weighted Planar Tangle Tree

---

{{<  slides/admonition type="Definition" title="Definition: Part 1" markdownify="true"  >}}
The **$F_3^\prime$ move** on a weighted arborescent tree moves a weight $w$ as in
the image below and, if $w$ is odd, reverse the cyclic order of
weights and bonds at all vertices of the purple subtree lying at odd distance
(count of edges between two vertices) from the vertex shown.

{{<  /slides/admonition >}}
{{< slides/centersvg src="/presentations/bands/moves/f3/f3p_def.svg"  direct="true" class="sixteenthHeight" >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---
### The flype

{{< slides/centersvg src="/presentations/bands/moves/f3/bnd_f3.svg"  direct="true" >}}

---
"if $w$ is odd, reverse the cyclic order of
weights and bonds at all vertices of the purple subtree lying at odd distance
(count of edges between two vertices) from the vertex shown."

{{< slides/centersvg src="/presentations/bands/moves/f3/bnd_only_f3.svg"  direct="true" class="halfHeight" >}}

---
{{< slides/centersvg src="/presentations/bands/moves/f3/bnd_only_f3_even_2.svg"  direct="true" >}}


---

{{<  slides/admonition type="Definition" title="Definition: Part 2" markdownify="true"  >}}

Also, when $w$ is odd, apply $\xi$ ( $X$-axis rotation) to all free bonds
in the purple subtree that are attached to a vertex at even distance from the
vertex shown, and $\eta$ ($Y$-axis rotation) to those
at odd distance.  The rotations are relative to the local orientations of the
plumbing squares on the bands corresponding to vertices at even/odd distances
from the vertex with weight $w$.
{{<  /slides/admonition >}}
{{< slides/centersvg src="/presentations/bands/moves/f3/f3p_def.svg"  direct="true" class="sixteenthHeight" >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---
{{< slides/centersvg src="/presentations/bands/moves/f3/watt_rooted_odd.svg"  direct="true" >}}

---
{{< slides/centersvg src="/presentations/bands/moves/f3/watt_rooted_even.svg"  direct="true" >}}

---


{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}

The **$F_2$ move** on a weighted arborescent tangle tree reverses the cyclic order
of bonds and weights at one vertex on the tree and at every vertex at even distance from it; also
apply $\eta$ ($Y$-axis rotation) to every free bond of a vertex at even (or zero) distance, and
apply $\xi$ ($X$-axis rotation) to every free bond at odd distance.
{{<  /slides/admonition >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}


---



{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}

The **$F_1$ move** on a weighted arborescent tangle tree reverses the cyclic order
of bonds and weights at every vertex of the graph and applies $\zeta$ ($Z$-axis
rotation) to every free bond.
{{<  /slides/admonition >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---


{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}
The **$R^-$** replaces the left image below with the right, leaving the rest of the tree unchanged.
{{<  /slides/admonition >}}
{{< slides/centersvg src="/presentations/bands/moves/R/n/def.svg"  direct="true" class="quarterHeight" >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}


---

{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}
The **$R^+$** replaces the left image below with the right, leaving the rest of the tree unchanged.
{{<  /slides/admonition >}}
{{< slides/centersvg src="/presentations/bands/moves/R/p/def.svg"  direct="true" class="quarterHeight" >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---
{{< slides/centersvg src="/presentations/bands/moves/R/example_ring.svg"  direct="true"  >}}

---

## Canonical Trees

---

## Canonical Trees

For our purposes, a weighted planar tree $\Gamma$ is called a **canonical weighted planar
tangle tree (CWPTT)** if it has a single free bond with a label from
$V_4$ and satisfies the following conditions.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

## Weight Condition

At each vertex of $\Gamma$, at most one weight is non-zero.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---
## Stick Conditions

1. On any stick the weights of the vertices are non-zero except for end vertices that have a bond free in $\Gamma$ and for the case $\Gamma$ is:

{{< slides/row  style="align-items:baseline;">}}
{{< slides/col  style="flex-grow:4;" markdownify="true" >}}
{{< slides/centersvg src="/presentations/bands/conditions/stick/0.svg" direct="true" class="eighthHeight">}}
{{< /slides/col >}}
{{< slides/col  style="flex-grow:1;" >}}
or
{{< /slides/col >}}
{{< slides/col  style="flex-grow:4;" markdownify="true" >}}
{{< slides/centersvg src="/presentations/bands/conditions/stick/00.svg" direct="true" class="eighthHeight">}}
{{< /slides/col >}}
{{< /slides/row  >}}

2. The non-zero weights along any stick are of alternating sign.
3. No end vertex of a stick has weight $\pm 1$ unless it has a bond free in $\Gamma$.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}


---
##### One of
#### Positivity Condition $\LP+\RP$-CWPTT
Except for those with a free bond, there are no sticks in $\Gamma$ of the forms
{{< slides/row  style="align-items:baseline;">}}
{{< slides/col  style="flex-grow:4;" markdownify="true" >}}
{{< slides/centersvg src="/presentations/bands/conditions/positivity/am2.svg" direct="true" class="sixteenthHeight">}}
{{< /slides/col >}}
{{< slides/col  style="flex-grow:1;" >}}
or
{{< /slides/col >}}
{{< slides/col  style="flex-grow:3;" markdownify="true" >}}
{{< slides/centersvg src="/presentations/bands/conditions/positivity/am2a.svg" direct="true" class="eighthHeight">}}
{{< /slides/col >}}
{{< /slides/row  >}}
##### or
#### Negativity Condition $\LP-\RP$-CWPTT
Except for those with a free bond, there are no sticks in $\Gamma$ of the forms
{{< slides/row  style="align-items:baseline;">}}
{{< slides/col  style="flex-grow:4;" markdownify="true" >}}
{{< slides/centersvg src="/presentations/bands/conditions/negativity/a2.svg" direct="true" class="sixteenthHeight">}}
{{< /slides/col >}}
{{< slides/col  style="flex-grow:1;" >}}
or
{{< /slides/col >}}
{{< slides/col  style="flex-grow:3;" markdownify="true" >}}
{{< slides/centersvg src="/presentations/bands/conditions/negativity/a2a.svg" direct="true" class="eighthHeight">}}
{{< /slides/col >}}
{{< /slides/row  >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{<  slides/admonition type="Theorem" title="Theorem: Bonahon and Seibenmann" markdownify="true" >}}
There exists an effective algorithm which, for any weighted planar tree $\Gamma$
with free bonds labeled by elements of $V_4$, alters $\Gamma$ by a sequence of
moves of the calculus of arborescent tangles to produce a collection of
positively (or negatively) canonical weighted planar trees.
{{<  /slides/admonition >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{<  slides/admonition type="Theorem" title="Theorem: Bonahon and Seibenmann" markdownify="true" >}}
Consider two positive (or negative) CWPTT
$\Gamma$ and $\Gamma^\prime$, with free bonds labeled by
elements of $V_4$. Plumbing, according to $\Gamma$ and $\Gamma^\prime$
gives isomorphic arborescent tangles if and only if $\Gamma$ and
$\Gamma^\prime$ can be deduced from each other by a sequence of moves
($F_1$), ($F_2$), ($F_3^\prime$), and the modified ring moves $\LP\pm R\RP$.
{{<  /slides/admonition >}}

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}
For weighted planar tangle tree $\Gamma$, with weights $\LS w_i\RS$. We call
$$\text{TCN}=\sum |w_i|$$ the **Tree Crossing Number (TCN)**.
{{<  /slides/admonition >}}

---

### CWPTT are Not Minimal

{{< slides/row  >}}
{{< slides/col  style="flex-grow:5;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/non-minimal_minimalized.svg" direct="true">}}
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:1;text-align:center;" >}}
$$\to$$
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:5;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/non-minimal.svg" direct="true">}}
{{< /slides/col >}}
{{< /slides/row  >}}

---

## A Canonical Vertex [S]

---

A vertex $v_i$ of a weighted planar tangle tree $\Gamma$ with a single free
bond labeled from $V_4$ is said to be **$\LP+\RP$-canonical** if $v_i$ has at
most one non-zero weight $w_i$ and $i$ is:
- Zero ($v_0$ the root) with no further conditions.
- Non-zero with the following conditions satisfied:

---

I.   If the valence of $v_i$ is $1$ then all of:
-   (Stick Condition)
    1.   $w_i\neq 0$ unless $i=1$ and $w_0=0$ (the weight of the root)
    2.   $w_i\neq \pm 1$
    3.   If the valence of $v_{i-1}$ (the parent) is $2$ then
        $\text{sign}\LP w_i\RP\neq\text{sign}\LP w_{i-1}\RP$ unless $i=1$ and
        $w_0=0$
-   (Positivity Condition)
    1.   If the valence of $v_{i-1}$ (the parent) is greater than $2$ then
            $w_i\neq -2$


---

{{< slides/row  style="color:#ffb86c;text-align:left;" >}}
{{< slides/col  style="flex-grow:4;"  >}}
<b>Stick Condition</b><br/>
1. On any stick the weights of the vertices are non-zero except for end vertices
    that have a bond free in $\Gamma$ and for the case $\Gamma$ is:
    {{< slides/row  style="align-items:baseline;">}}
        {{< slides/col  style="flex-grow:4;text-align:center;" >}}
            {{< slides/centersvg src="/presentations/bands/conditions/stick/0.svg" direct="true" class="sixteenthHeight">}}
        {{< /slides/col >}}
        {{< slides/col  style="flex-grow:1;text-align:center;" >}}
            $$\text{or}$$
        {{< /slides/col >}}
        {{< slides/col  style="flex-grow:4;text-align:center;" >}}
            {{< slides/centersvg src="/presentations/bands/conditions/stick/00.svg"  direct="true" class="sixteenthHeight">}}
        {{< /slides/col >}}
    {{< /slides/row  >}}
2. The non-zero weights along any stick are of alternating sign.<br/>
3. No end vertex of a stick has weight $\pm 1$ unless it has a bond free in $\Gamma$.
{{< /slides/col >}}
{{< /slides/row >}}

I.   If the valence of $v_i$ is $1$ then all of:
-   (Stick Condition)
    1.   $w_i\neq 0$ unless $i=1$ and $w_0=0$ (the weight of the root)
    2.   $w_i\neq \pm 1$
    3.   If the valence of $v_{i-1}$ (the parent) is $2$ then
        $\text{sign}\LP w_i\RP\neq\text{sign}\LP w_{i-1}\RP$ unless $i=1$ and
        $w_0=0$

---

{{< slides/row  style="color:#ffb86c;text-align:left;" >}}
{{< slides/col  style="flex-grow:4;"  >}}
<b>Positivity Condition:</b><br/>
Except for those with a free bond, there are no sticks in $\Gamma$ of the forms
{{< slides/row  style="align-items:baseline;">}}
{{< slides/col  style="flex-grow:4;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/conditions/positivity/am2.svg" direct="true" class="sixteenthHeight">}}
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:1;text-align:center;" >}}
$$\text{or}$$
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:4;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/conditions/positivity/am2a.svg" direct="true" class="sixteenthHeight">}}
{{< /slides/col >}}
{{< /slides/row  >}}
{{< /slides/col >}}
{{< /slides/row  >}}

I.   If the valence of $v_i$ is $1$ then all of:
-   (Positivity Condition)
    1.   If the valence of $v_{i-1}$ (the parent) is greater than $2$ then
            $w_i\neq -2$

---

II.   If the valence of $v_i$ is $2$ then all of:
-   (Stick Condition)
    1.   $w_i\neq 0$
    1.   If valence of the parent or valence of the child is greater than $2$ (is
        essential) then $w_i\neq \pm1$
    1. $\ $
        1.   If valence of the parent is $2$ then
            $\text{sign}\LP w_i\RP\neq\text{sign}\LP w_{i-1}\RP$ (the parent)
        1.   If valence of the child is $2$ then
            $\text{sign}\LP w_i\RP\neq\text{sign}\LP w_{i+1}\RP$ (the child)
-   (Positivity Condition)
    1.   If valence of the parent and valence of the child is greater than $2$
        (both are essential) then $w_i\neq -2$

---

{{< slides/row  style="font-size:90%;color:#ffb86c;text-align:left;" >}}
{{< slides/col  style="flex-grow:4;"  >}}
<b>Stick Condition</b><br/>
1. On any stick the weights of the vertices are non-zero except for end vertices
    that have a bond free in $\Gamma$ and for the case $\Gamma$ is:
    {{< slides/row  style="align-items:baseline;">}}
        {{< slides/col  style="flex-grow:4;text-align:center;" >}}
            {{< slides/centersvg src="/presentations/bands/conditions/stick/0.svg" direct="true" class="sixteenthHeight">}}
        {{< /slides/col >}}
        {{< slides/col  style="flex-grow:1;text-align:center;" >}}
            $$\text{or}$$
        {{< /slides/col >}}
        {{< slides/col  style="flex-grow:4;text-align:center;" >}}
            {{< slides/centersvg src="/presentations/bands/conditions/stick/00.svg"  direct="true" class="sixteenthHeight">}}
        {{< /slides/col >}}
    {{< /slides/row  >}}
2. The non-zero weights along any stick are of alternating sign.
3. No end vertex of a stick has weight $\pm 1$ unless it has a bond free in $\Gamma$.
{{< /slides/col >}}
{{< /slides/row >}}

II.   If the valence of $v_i$ is $2$ then all of:
-   (Stick Condition)
    1.   $w_i\neq 0$
    1.   If valence of the parent or valence of the child is greater than $2$ (is
        essential) then $w_i\neq \pm1$
    1. $\ $
        1.   If valence of the parent is $2$ then
            $\text{sign}\LP w_i\RP\neq\text{sign}\LP w_{i-1}\RP$ (the parent)
        1.   If valence of the child is $2$ then
            $\text{sign}\LP w_i\RP\neq\text{sign}\LP w_{i+1}\RP$ (the child)



---

{{< slides/row  style="color:#ffb86c;text-align:left;" >}}
{{< slides/col  style="flex-grow:4;"  >}}
<b>Positivity Condition:</b>
Except for those with a free bond, there are no sticks in $\Gamma$ of the forms
    {{< slides/row  style="align-items:baseline;">}}
{{< slides/col  style="flex-grow:4;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/conditions/positivity/am2.svg" direct="true" class="sixteenthHeight">}}
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:1;text-align:center;" >}}
$$\text{or}$$
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:4;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/conditions/positivity/am2a.svg" direct="true" class="sixteenthHeight">}}
{{< /slides/col >}}
{{< /slides/row  >}}
{{< /slides/col >}}
{{< /slides/row  >}}


II.   If the valence of $v_i$ is $2$ then all of:
-   (Positivity Condition)
    1.   If valence of the parent and valence of the child is greater than $2$
        (both are essential) then $w_i\neq -2$

---

{{<  slides/admonition type="Theorem" title="Theorem [S]" markdownify="true" >}}
$\Gamma$ is a $\LP+\RP$-CWPTT if and only if all the vertices of $\Gamma$ are
$\LP+\RP$-canonical.
{{<  /slides/admonition >}}


---

## Tabulation of Arborescent Tangles

### What do we have?

---

1. A combinatorial structure

---

1. A combinatorial structure
1. A way to distinguish two arborescent tangles

---

## What we don't have?

---

1. A unique representative

---

1. A unique representative
3. An efficient storage strategy

---

1. A unique representative
3. An efficient storage strategy
2. An efficient generation strategy

---

## A unique representative

---


{{<  slides/admonition type="Definition" title="Definition [S]" markdownify="true" >}}
A CWPTT is called **right leaning** if all weights are in the highest indexed
region of each vertex. Additionally, any ring subtrees
that are children of a vertex are the highest indexed children of that vertex.
{{<  /slides/admonition >}}

{{<  slides/admonition type="Note" title="Note" markdownify="true" >}}
Not using "abbreviated trees" makes generation a bit less complex.
{{<  /slides/admonition >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_1.svg" direct="true" class="halfHeight" >}}

---


{{<  slides/admonition type="Theorem" title="Theorem [S]" markdownify="true" >}}
Every arborescent tangle has a right leaning CWPTT representative.
{{<  /slides/admonition >}}

---


{{<  slides/admonition type="Definition" title="Definition [S]" markdownify="true" >}}
A CWPTT is called an **identity tree** if its free bond is marked by
$\iota\in V_4$.
{{<  /slides/admonition >}}

---

{{<  slides/admonition type="Theorem" title="Theorem [S]" markdownify="true" >}}
Every arborescent tangle has an identity CWPTT representative.
{{<  /slides/admonition >}}

---


{{<  slides/admonition type="Definition" title="Definition [S]" markdownify="true" >}}
A CWPTT is called a **right leaning identity tangle tree (RLITT)** if it's a
right leaning and identity tree.
{{<  /slides/admonition >}}

---

{{<  slides/admonition type="Theorem" title="Theorem [S]" markdownify="true" >}}
Every $\LP+\RP$-CWPTT has a unique right leaning identity representative.
{{<  /slides/admonition >}}

---


1. ✓ A unique representative
3. An efficient storage strategy
2. An efficient generation strategy

---

## An efficient storage strategy

---

{{% slides/uncenter %}}
{{< slides/centersvg src="/presentations/bands/watt_walk_tangle.svg" direct="true" class="halfHeight" >}}

{{% slides/citations %}}
Cayley, A. (1857). ON THE THEORY OF THE ANALYTICAL FORMS CALLED TREES (The collected mathematical papers Vol. 3). Cambridge University Press. https://doi.org/10.1017/CBO9780511703690
{{% /slides/citations %}}

---

1. ✓ A unique representative
3. ✓ An efficient storage strategy
2. An efficient generation strategy

---

## An efficient generation strategy

---

{{<  slides/admonition type="Definition" title="Definition [S]" markdownify="true" >}}
For WPTT $\Gamma_r$ and $\Gamma_s$, define the **grafting operation**
$$
\begin{aligned}
\Gamma_r\times\Gamma_s&\mapsto\Gamma_r\star_i\Gamma_s
\end{aligned}
$$
as follows. At the vertex $v_i$ of a $\Gamma_r$, introduce a bond connecting to
the free bond at the root of $\Gamma_s$, reindexing as needed.
We also require that $\Gamma_s$ be grafted so that the rightmost weight of
$v_i$ and any ring subtrees of $v_i$ remain to the right of the scion after
grafting.

When grafting at the root $v_0$ we omit the index label in the grafting
operation, that is, $\star_0$ is written simply as $\star$. We call $\Gamma_r$
the **rootstock** and $\Gamma_s$ the **scion**.
{{<  /slides/admonition >}}

---
{{% slides/uncenter %}}

$$\Gamma_r\text{ and }\color{#ffb86c}\Gamma_s$$

{{< slides/centersvg src="/presentations/bands/awptt_graph_pregraft.svg" direct="true" class="halfHeight">}}

---
{{% slides/uncenter %}}

$$\Gamma_r\star_2\color{#ffb86c}\Gamma_s$$

{{< slides/centersvg src="/presentations/bands/awptt_graph_grafted.svg" direct="true" class="halfHeight">}}


---

{{<  slides/admonition type="Theorem" title="Theorem [S]" markdownify="true" >}}

Every $\Gamma$ $\LP+\RP$-RLITT of TCN $n$ is one of two forms:

1. $\Gamma$ is a single vertex with weight $\pm n$.
2. $\Gamma$ is the result of grafting at the root of some rootstock $\Gamma_r$
   and $\LP+\RP$-RLITT scion $\Gamma_s$ where:
    1. In $\Gamma_r$, $v_0$ is valence two, and $v_1$ is canonical
       except for violating the stick condition by
       $\text{Sign}\LP v_0\RP=\text{Sign}\LP v_1\RP$. Each vertex in
       $\LS v_i\RS_{i=2}^n$ of $\Gamma_r$ is $\LP +\RP$-canonical.
    1. $\Gamma_r$ is $\LP+\RP$-RLITT
{{<  /slides/admonition >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_grafting_flavor_1.svg" direct="true" class="halfHeight">}}

---

{{< slides/centersvg src="/presentations/bands/arbor_grafting_flavor_2.svg" direct="true" class="halfHeight">}}


---

{{<  slides/admonition type="Algorithm" title="Algorithm [S]" markdownify="true" style="font-size:1.5rem" >}}
**Input**

-   A collection of of RLITT scions $T_s$
-   A collection of RLITT rootstocks $T_r$

**Output**

-   A collection of weighted planar trees

**Routine**

1. for each combination of $\Gamma_r\in T_r$ and $\Gamma_s \in T_s$
    1. Compute $\Gamma = \Gamma_r\star \Gamma_s$
    1. Report $\Gamma$
    1. Continue to the iteration of the loop if $v_0$ in $\Gamma_r$ is valence other than two
        1. Set $v_0$ to $-v_0$ for $\Gamma$
        1. Report $\Gamma$
{{<  /slides/admonition >}}

---

## Guarantee RLITT

1. Weight Condition
1. Identity Condition
1. Right Leaning Condition
1. Stick Condition
1. Positivity/Negativity Condition

---

## Guarantee RLITT

1. ✓ Weight Condition
1. ✓ Identity Condition
1. ✓ Right Leaning Condition
1. Stick Condition
1. Positivity/Negativity Condition

---

### Stick Condition

---

{{<  slides/admonition type="Theorem" title="Theorem [S]" markdownify="true" >}}
For $\Gamma_r$ a $\LP+\RP-$RLITT and $\Gamma_s$ a $\LP+\RP-$RLITT scion,
the result of $\Gamma=\Gamma_r\star\Gamma_s$ is canonical, if all
$v_i$ at distance $1$ or less from the root are canonical.
{{<  /slides/admonition >}}

---

{{<  slides/admonition type="Definition" title="Definition [S]" markdownify="true" >}}
A $\LP+\RP-$RLITT (respectively $\LP-\RP-$RLITT) $\Gamma$ with root weight $w_0$
is called a **good scion** when either:

1. $w_0\neq0$
2. $w_0=0$ and the valence of $v_0$ is greater than $2$ (essential)
{{<  /slides/admonition >}}

---


{{<  slides/admonition type="Algorithm" title="Algorithm [S]" markdownify="true" style="font-size:1.1rem" >}}

**Input**

-   A collection of RLITT good scions $T_s$
-   A collection of RLITT rootstocks $T_r$

**Output**

-   A collection of weighted planar trees (still not guaranteed to be RLITT)

**Routine**

1. for each combination of $\Gamma_s\in T_s$ and $\Gamma_r \in T_r$
    1. Compute $\Gamma = \Gamma_r\star \Gamma_s$
    1. for each vertex $v_i$ at distance 1 from the root of $\Gamma$
        1. Continue to the next iteration of the outer loop if $v_i$ fails to satisfy the stick condition
    1. Report $\Gamma$
    1. Continue to the iteration of the loop if $v_0$ in $\Gamma_r$ is valence other than two
        1. Set $v_0$ to $-v_0$ for $\Gamma$
        1. Report $\Gamma$
{{<  /slides/admonition >}}


---

## Guarantee RLITT

1. ✓ Weight Condition
1. ✓ Identity Condition
1. ✓ Right Leaning Condition
1. ✓ Stick Condition
1. Positivity/Negativity Condition

---

### Positivity/Negativity Condition

---

{{<  slides/admonition type="Theorem" title="Theorem [S]" markdownify="true" >}}
For $\Gamma_r$ a non-negative $\LP+\RP-$RLITT, and $\Gamma_s$ a good
non-positive $\LP-\RP-$RLITT scion, the result of
$\Gamma=\Gamma_r\star\Gamma_s$ is non-canonical.
{{<  /slides/admonition >}}

---


{{<  slides/admonition type="Algorithm" title="Algorithm: Generate $\LP+\RP$-RLITT [S]" markdownify="true" style="font-size:1rem" >}}

**Input**

-   A collection of $\LP+\RP$-RLITT good scions $T_s$
-   A collection of $\LP+\RP$-RLITT rootstocks $T_r$

**Output**

-   A collection of weighted planar trees (still not guaranteed to be RLITT)

**Routine**

1. for each combination of $\Gamma_s\in T_s$ and $\Gamma_r \in T_r$
    1. Compute $\Gamma = \Gamma_r\star \Gamma_s$
    1. for each vertex $v_i$ at distance 1 from the root of $\Gamma$
        1. Continue to the next iteration of the outer loop if $v_i$ fails to satisfy the stick condition
        1. Continue to the next iteration of the outer loop if $v_i$ fails to satisfy the positivity condition
    1. Report $\Gamma$
    1. Continue to the iteration of the loop if $v_0$ in $\Gamma_r$ is valence other than two
        1. Set $v_0$ to $-v_0$ for $\Gamma$
        1. Report $\Gamma$
{{<  /slides/admonition >}}

---


{{<  slides/admonition type="Algorithm" title="Algorithm: Generate $\LP-\RP$-RLITT [S]" markdownify="true" style="font-size:1rem" >}}

**Input**

-   A collection of $\LP-\RP$-RLITT good scions $T_s$
-   A collection of $\LP-\RP$-RLITT rootstocks $T_r$

**Output**

-   A collection of weighted planar trees (still not guaranteed to be RLITT)

**Routine**

1. for each combination of $\Gamma_s\in T_s$ and $\Gamma_r \in T_r$
    1. Compute $\Gamma = \Gamma_r\star \Gamma_s$
    1. for each vertex $v_i$ at distance 1 from the root of $\Gamma$
        1. Continue to the next iteration of the outer loop if $v_i$ fails to satisfy the stick condition
        1. Continue to the next iteration of the outer loop if $v_i$ fails to satisfy the positivity condition
    1. Report $\Gamma$
    1. Continue to the iteration of the loop if $v_0$ in $\Gamma_r$ is valence other than two
        1. Set $v_0$ to $-v_0$ for $\Gamma$
        1. Report $\Gamma$
{{<  /slides/admonition >}}

---

## Guarantee RLITT

1. ✓ Weight Condition
1. ✓ Identity Condition
1. ✓ Right Leaning Condition
1. ✓ Stick Condition
1. ✓ Positivity/Negativity Condition

---

### Partitioning jobs

$$\begin{aligned}
(0&,\text{TCN})\\\\
( 1&,\text{TCN}-1)\\\\
&\vdots\\\\
(\text{TCN}-1&,1)\\\\
(\text{TCN}&,0)
\end{aligned}
$$

---


{{<  slides/admonition type="Algorithm" title="Algorithm [S]" markdownify="true" style="font-size:1rem" >}}

**Input**

-   A target TCN $n$

**Output**

-   A set $T$ of all RLITT up to TCN

**Routine**

1. Set $T$ to be the set $\LS \iota[0],\ \iota[0\ 0],\ \iota[1],\ \iota[-1],\ \iota[2],\ \iota[-2],\ \cdots,\ \iota[n],\ \iota[-n],\ \RS$
2. for i from 2 to TCN
    1. for j from i-2 to 1
        1. Set $T_{r+}$ to be the set of $(+)$-RLITT with TCN equal to $j$
        1. Set $T_{r-}$ to be the set of $(-)$-RLITT with TCN equal to $j$
        1. Set $T_{s+}$ to be the set of $(+)$-RLITT good scions with TCN equal to $n-j$
        1. Set $T_{s-}$ to be the set of $(-)$-RLITT good scions with TCN equal to $n-j$
        1. Execute "Generate $\LP+\RP$-RLITT" input $T_{r+}$ and $T_{s+}$
        1. Execute "Generate $\LP-\RP$-RLITT" input $T_{r-}$ and $T_{s-}$
    1. Set $T_{r+}$ to be the set of $(+)$-RLITT with TCN equal to $0$
    1. Set $T_{r-}$ to be the set of $(-)$-RLITT with TCN equal to $0$
    1. Set $T_{s+}$ to be the set of $(+)$-RLITT good scions with TCN equal to $i$
    1. Set $T_{s-}$ to be the set of $(-)$-RLITT good scions with TCN equal to $i$
    1. Execute "Generate $\LP+\RP$-RLITT" input $T_{r+}$ and $T_{s+}$
    1. Execute "Generate $\LP-\RP$-RLITT" input $T_{r-}$ and $T_{s-}$
    1. Add the results to $T$
{{<  /slides/admonition >}}

---

{{% slides/uncenter %}}

# Technologies

{{< slides/centersvg src="/presentations/comp/tech.svg" direct="true" class="halfHeight"  >}}

---

# Future work

---

## Minimalization
#### of Arborescent representatives

{{< slides/row  >}}
{{< slides/col  style="flex-grow:5;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/non-minimal_minimalized.svg" direct="true">}}
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:1;text-align:center;" >}}
$$\leftarrow$$
{{< /slides/col >}}
        {{< slides/col  style="flex-grow:5;text-align:center;" >}}
{{< slides/centersvg src="/presentations/bands/non-minimal.svg" direct="true">}}
{{< /slides/col >}}
{{< /slides/row  >}}

---
## Minimalization
#### general representatives
### Tabulation of Polygonal tangles

----
## Algebraic


{{< slides/centersvg src="/presentations/lightning/Alg.svg" direct="true" class="halfHeight">}}

---

$+$, $\vee$, and plumbing only form bigons between basic tangles in the "knot shadow".


{{< slides/centersvg src="/presentations/thesis/knot_shadow.svg" direct="true" class="halfHeight">}}

---

{{< slides/centersvg src="/presentations/thesis/fig-bigon_collapse.svg" direct="true">}}

---

## Polygonal tangles

#### How to form something other than bigons?

---

### $6^{\ast\ast}$
{{< slides/centersvg src="/presentations/thesis/fig-6starstar.svg" direct="true" class="halfHeight">}}

---
{{< slides/centersvg src="/presentations/thesis/fig-6starstar_const.svg" direct="true">}}

---

{{< slides/centersvg src="/presentations/thesis/fig-6starstar_insurtion.svg" direct="true">}}

---

#### Minimally polygonal arborescent tangles

{{< slides/centersvg src="/presentations/thesis/fig-6starstar_nonminimal.svg" direct="true">}}

{{% slides/citations  %}}
Conway, J.H. "An Enumeration of Knots and Links, and Some of Their Algebraic Properties." In Computational Problems in Abstract Algebra, 329-58. Elsevier, 1970. [https://doi.org/10.1016/B978-0-08-012975-4.50034-5](https://doi.org/10.1016/B978-0-08-012975-4.50034-5)
{{% /slides/citations %}}

---

{{< slides/centersvg src="/presentations/thesis/fig-other_nonminimal.svg" direct="true">}}

---

### Solution?

#### Tabulate the polygonal tangles.


---

# Thank you!

### Special thanks to the committee members:

- Dr. Isabel Darcy, Supervisor
- Dr. Francis Bonahon
- Dr. Keiko Kawamuro
- Dr. Colleen Mitchell
- Dr. Radmila Sazdanović


---

### Refernces

{{% slides/citations %}}

1. F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
1. Conway, J.H. "An Enumeration of Knots and Links, and Some of Their Algebraic Properties." In Computational Problems in Abstract Algebra, 329-58. Elsevier, 1970. [https://doi.org/10.1016/B978-0-08-012975-4.50034-5](https://doi.org/10.1016/B978-0-08-012975-4.50034-5).
1. Robert Glenn Scharein. Interactive topological drawing. ProQuest LLC, Ann Arbor, MI, 1998. Thesis (Ph.D. The University of British Columbia (Canada). URL: [https://www.knotplot.com/](https://www.knotplot.com/).
1. Jablan, S., & Sazdanović, R. (2007). Linknot. In Series on Knots and Everything. WORLD SCIENTIFIC. [https://doi.org/10.1142/6623](https://doi.org/10.1142/6623)
1. Dowker, C. H., & Thistlethwaite, M. B. (1983). Classification of knot projections. In Topology and its Applications (Vol. 16, Issue 1, pp. 19-31). Elsevier BV. [https://doi.org/10.1016/0166-8641(83)90004-4](https://doi.org/10.1016/0166-8641(83)90004-4)
1. Hoste, J., Thistlethwaite, M., & Weeks, J. (1998). The first 1,701,936 knots. In The Mathematical Intelligencer (Vol. 20, Issue 4, pp. 33-48). Springer Science and Business Media LLC. [https://doi.org/10.1007/bf03025227](https://doi.org/10.1007/bf03025227)
1. Burton, B. A. (2020). The Next 350 Million Knots. Schloss Dagstuhl - Leibniz-Zentrum Für Informatik. [https://doi.org/10.4230/LIPICS.SOCG.2020.25](https://doi.org/10.4230/LIPICS.SOCG.2020.25)
1. Connolly, Nicholas. Classification and Tabulation of 2-String Tangles: The Astronomy of Subtangle Decompositions. University of Iowa, 2021, https://doi.org/10.17077/etd.005978.
1. Cayley, A. (2009). The collected mathematical papers (Vol. 3). Cambridge University Press. https://doi.org/10.1017/CBO9780511703690
1. Nakano, S. (2002). Efficient generation of plane trees. In Information Processing Letters (Vol. 84, Issue 3, pp. 167-172). Elsevier BV. [https://doi.org/10.1016/s0020-0190(02)00240-5](https://doi.org/10.1016/s0020-0190(02)00240-5)
{{% /slides/citations %}}

---

### Refernces

{{% slides/citations %}}
1. <a href="https://commons.wikimedia.org/wiki/File:React-icon.svg">Facebook</a>, Public domain, via Wikimedia Commons
1. <a href="https://github.com/fastapi/fastapi">FastAPI</a> The MIT License (MIT)
1. <a href="https://commons.wikimedia.org/wiki/File:WebAssembly_Logo.svg">Carlos Baraza</a>, CC0, via Wikimedia Commons
1. <a href="https://commons.wikimedia.org/wiki/File:C_Logo.png">Qq1040058283</a>, Public domain, via Wikimedia Commons
1. <a href="https://commons.wikimedia.org/wiki/File:ISO_C%2B%2B_Logo.svg">Jeremy Kratz</a>, Public domain, via Wikimedia Commons
1. <a href="https://commons.wikimedia.org/wiki/File:Cython_logo.svg">Cython and Python</a>, <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>, via Wikimedia Commons
1. <a href="https://github.com/mermaid-js/mermaid">mermaidjs</a>
1. <a href="https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg">www.python.org</a>, <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>, via Wikimedia Commons
1. <a href="https://www.mongodb.com/company/newsroom/brand-resources">Mongodb</a>
1. <a href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg">Ryan Dahl</a>, <a href="http://opensource.org/licenses/mit-license.php">MIT</a>, via Wikimedia Commons
1. <a href="https://commons.wikimedia.org/wiki/File:Pytest_logo.svg">Holger Krekel</a>, <a href="https://creativecommons.org/licenses/by/2.5">CC BY 2.5</a>, via Wikimedia Commons
1. <a href="https://commons.wikimedia.org/wiki/File:Emscripten_logo.svg">Alon Zakai</a>, <a href="http://opensource.org/licenses/mit-license.php">MIT</a>, via Wikimedia Commons
1. <a href="https://commons.wikimedia.org/wiki/File:Cmake.svg">Cmake team. The original uploader was Francesco Betti Sorbelli at Italian Wikipedia.. Vectorized by Magasjukur2</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons
1. <a href="https://commons.wikimedia.org/wiki/File:Emojione_1F332.svg">Emoji One</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
{{% /slides/citations %}}


---
{{< slides/centersvg src="/presentations/bands/bnd_with_orientation.svg" direct="true" >}}

---
{{< slides/centersvg src="/presentations/bands/moves/f2/watt_rooted.svg"  direct="true" >}}

---
{{< slides/centersvg src="/presentations/bands/moves/f1/watt_rooted.svg"  direct="true" >}}