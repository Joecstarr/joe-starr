---

title: "University of Iowa Fall23 Math Day"
date: "2023-08-22"
summary: "Talk given at the Fall23 University of Iowa Math Day"
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
---

{{< slides/theme >}}
{{< dracula_css >}}
{{< mathjax_preamble >}}

# The Tanglenomicon


<p style="font-size:.7em;text-align:center !important">
Zachary Bryhtan, Nicholas Connolly, Isabel Darcy, Ethan Rooke, Joseph Starr*
<p>

<p style="font-size:.6em; text-align:center !important">
Mathematics Department at The University of Iowa<p>

---

# Knots

---


> "A **knot** is a smooth embedding of a circle $S^1$ into Euclidean 3-dimensional space $\R^3$ (or the 3-dimensional sphere $S^3$ )."

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


{{% slides/citations  %}}
Jablan, S., & Sazdanović, R. (2007). Linknot. In Series on Knots and Everything. WORLD SCIENTIFIC. [https://doi.org/10.1142/6623](https://doi.org/10.1142/6623)

[https://www.knotplot.com/](https://www.knotplot.com/)
{{% /slides/citations %}}


---
# Knot Tables

---

{{< slides/row >}}
{{< slides/col >}}
{{< centerimg src="/presentations/mathday23/lord_kelvin.jpg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block markdownify="true" grow="1" >}}Lord Kelvin's vortex theory of the atom. Atoms are knotted vortices in the æther.
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}

---

* 1860's Tait computes knots up to 7 crossing
   * 15 knots
* 1870's Tait, Kirkman, and Little compute knots up to 10 crossing
   * Takes about 25 years
   * 250 knots
* 1960's Conway computes knots up to 11 crossings
   * "A few hours"
   * 802 knots

---

* 1980's Dowker and Thistlethwaite compute up to 13 crossings
    * First using a computer
    * 12,966
* 1990's Hoste, Thistlethwaite, and Weeks compute up to 16 crossings
    * Computer runtime on the order of weeks
    * 1,701,936
* 2020's Burton computes up to 19 crossings
    * 350 Million

---

{{% slides/uncenter %}}

### KnotInfo


{{< centerimg src="/presentations/mathday23/knotinfo_ss.png"  >}}

---

## Conway

{{< slides/center_block grow="1"  >}}
How did Conway compute 25 years of work in "a few hours"?
{{< /slides/center_block >}}

---

## Tangles

> "We define a **tangle** as a portion of a knot diagram from which there emerge just 4 arcs pointing in the compass directions NW, NE, SW, SE."

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

# Where we're going

---

## Montesinos

{{< centerimg src="/presentations/lightning/Mont.svg" width="30%">}}

---
{{< slides/row style="" >}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/lightning/annotated/Rational.svg"   >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$+$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:3;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/lightning/annotated/Rational.svg"   >}}
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
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/rat_plus_rat.svg"  >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:0;" >}}
{{< slides/center_block   >}}
$$\ =\ $$
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/general/rat_plus_rat_1.svg"  >}}
{{< /slides/center_block >}}
{{< /slides/col>}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/center_block grow="1"  >}}
$$=[3\  2\  2] + [3\  2\  2]$$
{{< /slides/center_block   >}}
{{< /slides/col >}}
{{< /slides/row >}}

---

## Generalized Montesinos


{{% slides/row %}}
{{% slides/col %}}
{{< centerimg src="/presentations/lightning/GenMont.svg" width="35rem">}}
{{% /slides/col%}}
{{% /slides/row %}}

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
$= \color{var(--r-Purple)}([1\ 2\  0] + [1\ 2\ 0] + [1\ 1\  0]) \color{var(--r-Foreground)}\circ \color{var(--r-Red)}[1\  2]$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/center_block >}}

---

# Into the future

---

## Algebraic


{{< centerimg src="/presentations/general/alg_containment.svg" width="35rem">}}

---

All possible tangles made from $+$ and $\vee$

{{<  admonition type="Example" title="Algebraic" >}}

{{< slides/row  >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/lightning/Alg.svg"  >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block >}}
A vertical sum of two Montesinos tangles.
{{< /slides/center_block  >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/lightning/annotated/Alg.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{<  /admonition >}}

---

## Non-algebraic/Polygonal

{{< centerimg src="/presentations/general/nonalg_containment.svg" width="35rem">}}

---

## 4-valent planar graphs



{{% slides/row %}}
{{% slides/col %}}
{{< centerimg src="/presentations/general/1star.svg" width="15rem">}}
{{% /slides/col%}}
{{% slides/col%}}
{{< centerimg src="/presentations/general/6star.svg" width="30rem">}}
{{% /slides/col%}}
{{% /slides/row %}}

---

### 4-valent planar graph insertions

{{< centerimg src="/presentations/lightning/Non-Alg.svg" width="37rem">}}


---

# Some useful links

---

### Personal Site

{{< centerimg src="/qr_codes/joe-starr.svg" width="30%">}}

<p style="text-align:center !important;">joe-starr.com</p>

---

### MGB

{{< centerimg src="/qr_codes/mgb.svg" width="30%">}}

<p style="text-align:center !important;">mathgradboard.com</p>

---

### KnotPlot

{{< centerimg src="/qr_codes/knotplot.svg" width="30%">}}

<p style="text-align:center !important;">knotplot.com</p>

---

### Knot Info

{{< centerimg src="/qr_codes/knotinfo.svg" width="30%">}}

<p style="text-align:center !important;">knotinfo.math.indiana.edu</p>

---

### Illustrating Mathematics Discord

{{< centerimg src="/qr_codes/discord.svg" width="30%">}}

<p style="text-align:center !important;">discord.gg/jedHjNgZn</p>

---

### Seminars

{{% slides/text_size_adj size="2rem" %}}
* Topology Reading Seminar
  * T 2pm-3pm
  * 221 MLH
* Knot, Tangles, and Computers
  * Th 11:30am - 12:30pm
* Topology Research Seminar
  * Th 2pm-3pm
  * 221 MLH
* Topological Data Visualization
  * F  3:30pm - 4:30pm
  * B13 MLH
{{% /slides/text_size_adj %}}

---

## Questions?

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
{{% /slides/citations %}}


{{% slides/footer %}}

{{% /slides/footer %}}




