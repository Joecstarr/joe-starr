---

title: "University of Iowa Fall 2024 Math Day"
date: "2024-09-07"
summary: "Talk given at the Fall 2024 University of Iowa Math Day"
tags: [
    "Talks",'research talks'
]
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
    # center: false
    transition: "none"

qr:
    src: "https://raw.githubusercontent.com/Joecstarr/posters/master/qr_httpsjoe-starr.svg"
---

{{< slides/theme >}}
{{< dracula_css >}}
{{< mathjax_preamble >}}


<style>

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
    width:30vw;
    height:auto;
    margin-left: auto !important;
    margin-right: auto !important;
}
#parity_1,#parity_2,#parity_3,#parity_4,#parity_5,#parity_6{
    width:18rem;
    height:18rem;
    margin-left: auto !important;
    margin-right: auto !important;
}
#parity_calc_1,#parity_calc_2{
    width :12rem;
    height:12rem;
    margin-left: auto !important;
    margin-right: auto !important;
}
#non_alg{
    width :35rem;
    height:35rem;
    margin-left: auto !important;
    margin-right: auto !important;
}
#alg_trees_nonunique{
    width :40vw;
    margin-left: auto !important;
    margin-right: auto !important;
}
#band_sum_1,#band_sum_2{
    width:40vw;
    margin-bottom: 5vh;
    margin-left: auto !important;
    margin-right: auto !important;
}
#mermaid-0{
    width:auto !important;
    height:auto !important;
    max-width:80vw !important;
    max-height:60vh !important;
}
#mermaid-0 svg{
    max-width:80vw !important;
    max-height:60vh !important;
}
#mermaid-1 svg{
    width:30vw;
}
#mermaid-2 {
    max-width:none !important;
    max-height:none !important;
    margin-left:-8rem;
}
#mermaid-2 svg{
    width:65vw !important;
    height:65vh !important;
    max-width:none !important;
    max-height:none !important;
}
#mermaid-3 svg{
    width:90vw;
}
#mermaid-4 svg{
    width:30vw;
}
a.lowercase {
  text-transform: lowercase;
}

</style>

# The Tanglenomicon


<p style="font-size:.7em;text-align:center !important">
Zachary Bryhtan, Nicholas Connolly, Isabel Darcy, Ethan Rooke, Joseph Starr*
<p>

<p style="font-size:.6em; text-align:center !important">
Mathematics Department at The University of Iowa<p>

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

* 1860's Tait computes knots up to 7 crossings
   * 15 knots
* 1870's Tait, Kirkman, and Little compute knots up to 10 crossings
   * Takes about 25 years
   * 250 knots
* 1960's Conway computes knots up to 11 crossings
   * "A few hours"
   * 802 knots

---

# By Computer

* 1980's Dowker and Thistlethwaite compute up to 13 crossings
    * First using a computer
    * 12,966 knots
* 1990's Hoste, Thistlethwaite, and Weeks compute up to 16 crossings
    * Computer runtime on the order of weeks
    * 1,701,936 knots
* 2020's Burton computes up to 19 crossings
    * 350 Million knots

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

---

# The Tanglenomicon
## A table of two string tangles
### (up to fixed boundary)


---

{{% slides/uncenter %}}

## Building up

{{< slides/center_block grow="1"  >}}
{{< slides/row >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/1.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/lightning/Rational.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/lightning/Mont.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< /slides/row >}}
{{< /slides/center_block >}}
{{< slides/center_block grow="1"  >}}
{{< slides/row >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/lightning/GenMont.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/lightning/Alg.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;color:var(--r-Orange);" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/lightning/Non-Alg.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< /slides/row >}}

{{< /slides/center_block >}}


---

# Where we are

---



# Rational Tangles
## 8,388,608 up to 23 crossings

---

{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/lightning/Rational.svg" height="auto">}}


---

{{% slides/uncenter %}}

{{< slides/center_block grow="1" >}}
{{< slides/row  style=" ">}}
{{< slides/col  style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/lightning/annotated/Rational.svg"   >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col  style="flex-grow:1;" >}}
{{< slides/center_block grow="1" >}}
$\begin{aligned}\to&\ \LP 3 \vee \frac{1}{2}\RP + 2\\&\\
\to&\ [3\ 2\ 2]\end{aligned}$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/center_block >}}

---


# Montesinos
## 120,344,744 up to 23 crossings
### with non-fixed boundary

---
{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/general/mont_containment.svg" height="auto">}}

---


{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/lightning/Mont.svg" height="auto">}}


---

{{< slides/row style="" >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/rat_plus.svg"   >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$+$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/rat_plus.svg"   >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$=$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:7;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/rat_plus_rat.svg"  >}}
{{< /slides/center_block   >}}
{{< /slides/col >}}
{{< /slides/row >}}

---


{{< slides/row style="" >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/rat_plus_rat.svg"  >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
{{< slides/center_block   >}}
$$\ =\ $$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:2;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/rat_plus_rat_1.svg"  >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$$=[3\  2\ 0] + [3\  2\  0]$$
{{< /slides/center_block   >}}
{{< /slides/col >}}
{{< /slides/row >}}



---
# Generalized Montesinos

---
{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/general/genmont_containment.svg" height="auto">}}

---
{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/lightning/GenMont.svg" height="auto">}}


---

### Operation $\circ$

{{< slides/center_block grow="1" >}}
{{< slides/row  style=" ">}}
{{< slides/col  style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/lightning/annotated/GenMont.svg" >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col  style="flex-grow:1;" >}}
{{< slides/center_block grow="1" >}}
$= \color{var(--r-Purple)}([1\ 2\  0] + [1\ 2\ 0] + [1\ 1\  0]) \color{var(--r-Foreground)}\circ \color{var(--r-Red)}[2\  2]$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/center_block >}}


{{% slides/citations %}}
Moon, Hyeyoung, and Isabel K. Darcy. "Tangle Equations Involving Montesinos Links." Journal of Knot Theory and Its Ramifications 30, no. 08 (July 2021): 2150060. [https://doi.org/10.1142/S0218216521500607](https://doi.org/10.1142/S0218216521500607).
{{% /slides/citations %}}


---

# Where we're going
---

## Algebraic (Arborescent)

---

{{% slides/uncenter %}}
{{< slides/centersvg src="/presentations/general/alg_containment.svg" height="auto" >}}

---
{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/lightning/Alg.svg" height="auto" >}}

---

All possible tangles made from $+$ and $\vee$ on basic tangles

{{<  admonition type="Example" title="Algebraic" >}}

{{< slides/row  style="align-items:baseline;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/lightning/Alg.svg"  >}}
{{< /slides/col >}}
{{< slides/col style="text-align:center;">}}
A tangle build from $\vee$ and $+$ on some rational tangles.
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/lightning/annotated/Alg.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}

{{< slides/row  >}}
{{< slides/col >}}
$$\LP\color{var(--r-Purple)}\LB3\ 2\ 3\RB+\LB3\ 2\ 3\RB\color{var(--r-Foreground)}\RP\vee\LP\color{var(--r-Purple)}\LB3\ 2\ 3\RB+\LB3\ 2\ 3\RB\color{var(--r-Foreground)}\RP$$
{{< /slides/col >}}
{{< /slides/row >}}
{{<  /admonition >}}

---

*Arborescent Tangles* are constructed by taking a collection of twisted bands described by a weighted tree and connecting them with successive plumbing.

{{% slides/citations %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

{{< slides/centersvg src="/presentations/bands/bnd_sum_1.svg" direct="true" id="band_sum_1">}}
{{< slides/centersvg src="/presentations/bands/bnd_sum_2.svg" direct="true" id="band_sum_2">}}

---

{{< slides/centersvg src="/presentations/bands/bnd_sum_flip.svg" direct="true"  id="band_sum_flip">}}


---

{{< slides/row  >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/bands/bnd_sum_sum.svg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/bands/bnd_sum_patch.svg" >}}
{{< /slides/col >}}
{{< /slides/row  >}}

---

{{< slides/hide_qr  >}}
{{< slides/centersvg src="/presentations/bands/arbor_graph.svg"  direct="true"  id="arbor_graph">}}


---

{{< slides/centersvg src="/presentations/bands/arbor_bands.svg"  direct="true"  id="arbor_bands">}}


---

{{< slides/centersvg src="/presentations/bands/arbor_bound.svg"  direct="true"  id="arbor_bound">}}

---

{{< slides/centersvg src="/presentations/bands/arbor_tangle.svg"  direct="true"  id="arbor_tangle">}}


---

# Into the future
---

# Non-algebraic/Polygonal

---

{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/general/nonalg_containment.svg" height="auto" >}}

---

{{% slides/uncenter %}}

{{< slides/centersvg src="/presentations/lightning/Non-Alg.svg" >}}

---

## 4-valent planar graphs



{{< slides/row  >}}
{{< slides/col  style="flex-grow:1;" >}}
{{< slides/centersvg src="/presentations/general/1star.svg" block="true" >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:0;" >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/centersvg src="/presentations/general/6star.svg"  block="true" >}}
{{< /slides/col >}}
{{< /slides/row  >}}

---

# 4-valent planar graph insertions

---


{{< slides/center_block grow="1" >}}
{{< slides/row  style=" ">}}
{{< slides/col  style="flex-grow:1;" >}}
{{< slides/centersvg src="/presentations/lightning/Non-Alg.svg" direct="true" id="non_alg" >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< slides/row  style=" ">}}
{{< slides/col  style="flex-grow:1;" >}}
{{< slides/center_block grow="1" >}}
$6^*\ *.[1\ 2\ 2\ 3\ 1].[1\ 2\ 2\ 3\ 1].[1\ 2\ 2\ 3\ 1].[1\ 2\ 2\ 3\ 1].[1\ 2\ 2\ 3\ 1]$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/center_block >}}

---

{{% slides/uncenter %}}

# Technologies

{{< slides/centersvg src="/presentations/comp/tech.svg" direct="true" id="tech_img"  >}}

---
{{< slides/hide_qr  >}}
{{% slides/uncenter %}}

# joe-starr.com

{{< slides/centersvg src="https://raw.githubusercontent.com/Joecstarr/posters/master/qr_httpsjoe-starr.svg" external="true" id="qr" >}}


---

### Sources

{{% slides/citations %}}

1. Dror Bar-Natan [The Most Important Missing Infrastructure Project in Knot Theory](http://drorbn.net/AcademicPensieve/2012-01/one/The_Most_Important_Missing_Infrastructure_Project_in_Knot_Theory.pdf)
2. Kauffman, L. H., and S. Lambropoulou. "From Tangle Fractions to DNA." In Topology in Molecular Biology, edited by Michail Ilych Monastyrsky, 69-110. Biological and Medical Physics, Biomedical Engineering. Berlin, Heidelberg: Springer Berlin Heidelberg, 2007. [https://doi.org/10.1007/978-3-540-49858-2_5](https://doi.org/10.1007/978-3-540-49858-2_5).
3. Moon, Hyeyoung, and Isabel K. Darcy. "Tangle Equations Involving Montesinos Links." Journal of Knot Theory and Its Ramifications 30, no. 08 (July 2021): 2150060. [https://doi.org/10.1142/S0218216521500607](https://doi.org/10.1142/S0218216521500607).
4. Conway, J.H. "An Enumeration of Knots and Links, and Some of Their Algebraic Properties." In Computational Problems in Abstract Algebra, 329-58. Elsevier, 1970. [https://doi.org/10.1016/B978-0-08-012975-4.50034-5](https://doi.org/10.1016/B978-0-08-012975-4.50034-5).
5. Louis H. Kauffman and Sofia Lambropoulou. Classifying and applying rational knots and rational tangles. In DeTurck, editor, Contemporary Mathematics, volume 304, pages 223-259, 2001
6. Alain Caudron. Classification des nœuds et des enlacements, volume 4 of Publications Math ́ematiques d'Orsay 82 [Mathematical Publications of Orsay 82]. Universit ́e de ParisSud, D ́epartement de Mathe  ́matique, Orsay, 1982.
7. Robert Glenn Scharein. Interactive topological drawing. ProQuest LLC, Ann Arbor, MI, 1998. Thesis (Ph.D. The University of British Columbia (Canada). URL: [https://www.knotplot.com/](https://www.knotplot.com/).
8. Jablan, S., & Sazdanović, R. (2007). Linknot. In Series on Knots and Everything. WORLD SCIENTIFIC. [https://doi.org/10.1142/6623](https://doi.org/10.1142/6623)
9. Dowker, C. H., & Thistlethwaite, M. B. (1983). Classification of knot projections. In Topology and its Applications (Vol. 16, Issue 1, pp. 19-31). Elsevier BV. [https://doi.org/10.1016/0166-8641(83)90004-4](https://doi.org/10.1016/0166-8641(83)90004-4)
10. Hoste, J., Thistlethwaite, M., & Weeks, J. (1998). The first 1,701,936 knots. In The Mathematical Intelligencer (Vol. 20, Issue 4, pp. 33-48). Springer Science and Business Media LLC. [https://doi.org/10.1007/bf03025227](https://doi.org/10.1007/bf03025227)
11. Burton, B. A. (2020). The Next 350 Million Knots. Schloss Dagstuhl - Leibniz-Zentrum Für Informatik. [https://doi.org/10.4230/LIPICS.SOCG.2020.25](https://doi.org/10.4230/LIPICS.SOCG.2020.25)
12.  C. Livingston and A. H. Moore, KnotInfo: Table of Knot Invariants, knotinfo.math.indiana.edu, today's date (eg. August 24, 2023).
13.  Schubert, Horst. "Knoten mit zwei Brücken.." Mathematische Zeitschrift 65 (1956): 133-170. [http://eudml.org/doc/169591](http://eudml.org/doc/169591).
14. Jos ́e M. Montesinos. Seifert manifolds that are ramified two-sheeted cyclic coverings. Bol. Soc. Mat. Mexicana (2), 18:1-32, 1973.
15. F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
16. Connolly, Nicholas. Classification and Tabulation of 2-String Tangles: The Astronomy of Subtangle Decompositions. University of Iowa, 2021, https://doi.org/10.17077/etd.005978.
{{% /slides/citations %}}

---

### Sources

{{% slides/citations %}}
17. <a href="https://commons.wikimedia.org/wiki/File:React-icon.svg">Facebook</a>, Public domain, via Wikimedia Commons
18. <a href="https://github.com/fastapi/fastapi">FastAPI</a> The MIT License (MIT)
18. <a href="https://commons.wikimedia.org/wiki/File:WebAssembly_Logo.svg">Carlos Baraza</a>, CC0, via Wikimedia Commons
18. <a href="https://commons.wikimedia.org/wiki/File:C_Logo.png">Qq1040058283</a>, Public domain, via Wikimedia Commons
18. <a href="https://commons.wikimedia.org/wiki/File:ISO_C%2B%2B_Logo.svg">Jeremy Kratz</a>, Public domain, via Wikimedia Commons
18. <a href="https://commons.wikimedia.org/wiki/File:Cython_logo.svg">Cython and Python</a>, <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>, via Wikimedia Commons
18. <a href="https://github.com/mermaid-js/mermaid">mermaidjs</a>
18. <a href="https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg">www.python.org</a>, <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>, via Wikimedia Commons
18. <a href="https://www.mongodb.com/company/newsroom/brand-resources">Mongodb</a>
18. <a href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg">Ryan Dahl</a>, <a href="http://opensource.org/licenses/mit-license.php">MIT</a>, via Wikimedia Commons
18. <a href="https://commons.wikimedia.org/wiki/File:Pytest_logo.svg">Holger Krekel</a>, <a href="https://creativecommons.org/licenses/by/2.5">CC BY 2.5</a>, via Wikimedia Commons
18. <a href="https://commons.wikimedia.org/wiki/File:Emscripten_logo.svg">Alon Zakai</a>, <a href="http://opensource.org/licenses/mit-license.php">MIT</a>, via Wikimedia Commons
18. <a href="https://commons.wikimedia.org/wiki/File:Cmake.svg">Cmake team. The original uploader was Francesco Betti Sorbelli at Italian Wikipedia.. Vectorized by Magasjukur2</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons
{{% /slides/citations %}}
