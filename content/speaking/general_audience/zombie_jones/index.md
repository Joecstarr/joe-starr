---
title: "Constructing the Jones polynomial to save the world"
date: "2023-11-17"
summary: "In this talk we give a construction of the Jones Polynomial via the Kauffman bracket. The concepts are introduced in a pseudo-application of fighting a zombie apocalypse."
tags: [
    "index",
    "General Audience"
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
    center: true
    transition: "none"
    backgroundTransition: "none"
    self-contained: true
---



{{< slides/theme is="zombie.css" >}}
{{< dracula_css >}}
{{< mathjax_preamble >}}



# Zombies and knots
## Constructing the Jones polynomial to save the world
$\ $

---

## Day 0: smalltowns-ville, IA:

A man picks up his daily slice of breakfast pizza from his local gas station. What he doesn't know is that it's his last. By mid-day he feels terrible, by the time he's ready to go home for dinner he's already feasting on brains.

---

# Day 4: CDC Headquarters

The Z-virus has spread midwest-wide. You're working at the CDC as an expert in microscopy. You're working frantically to get any information on the Z-virus you can. In furtherance of
that goal, you decide to image the DNA of the Z-Virus.


---

{{< centerimg src="/presentations/dna/dna_trefoil.png" height="40rem" >}}


{{% slides/citations %}}
DNA knot as seen under the electron microscope. - Image Credit: Javier Arsuaga, [CC BY-ND](https://creativecommons.org/licenses/by-nd/4.0/)
{{% /slides/citations %}}


---

## DNA

Deoxyribonucleic acid (abbreviated DNA) is the molecule that carries genetic information for the development and functioning of an organism.

DNA is made of two linked strands that wind around each other to resemble a twisted ladder — a shape known as a double helix.

{{% slides/citations %}}
Deoxyribonucleic acid (DNA). (n.d.). Genome.gov. [https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid.](https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid.) Accessed 3 October 2023
{{% /slides/citations %}}

---
{{< slides/zombie/hide_background  >}}

{{< slides/row style="height:calc(var(--slide-height)*.8);" >}}
{{< slides/col style="flex-grow:1;color:var(--r-Foreground);" >}}
{{< slides/center_block grow="1" >}}
{{< slides/centersvg src="/presentations/dna/DNA_chemical_structure.svg" width="auto" heigh="auto">}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow:1;text-align:left;"  >}}
{{< slides/center_block grow="2" >}}
Each strand has a backbone. Attached to each sugar is one of four bases: adenine (A), cytosine (C), guanine (G) or thymine (T). The two strands are connected by chemical bonds between the bases: adenine bonds with thymine, and cytosine bonds with guanine.
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}



{{% slides/citations %}}
Deoxyribonucleic acid (DNA). (n.d.). Genome.gov. [https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid.](https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid.) Accessed 3 October 2023
{{% /slides/citations %}}
{{% slides/citations %}}
Photo by Madprime (talk · contribs) - This vector image was created with Inkscape ., CC BY-SA 3.0, [https://commons.wikimedia.org/w/index.php?curid=1848174](https://commons.wikimedia.org/w/index.php?curid=1848174)
{{% /slides/citations %}}

---

# Macro Structure

---

# Circular DNA

Dulbecco and Vogt (1963) and Weil and Vinograd (1963) discovered that double-stranded DNA of the polyoma virus is circular.


{{< slides/center_block >}}
{{< slides/centersvg src="/presentations/dna/dna_circle.svg" width="20rem">}}
{{< /slides/center_block >}}

{{% slides/citations %}}
Vologodskii, A. V. (n.d.). Circular DNA. In Cyclic Polymers (pp. 47-83). Kluwer Academic Publishers. https://doi.org/10.1007/0-306-47117-5_2
{{% /slides/citations %}}

---


{{< slides/zombie/hide_background  >}}

# "Supercoiled" DNA

Vinograd, J., Lebowitz, J., Radloff, R., Watson, R., & Laipis, P. (1965) discover that double-stranded DNA can "supercoil".


{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/dna/dna_supercoil.svg" width="auto" heigh="auto"  >}}
{{< /slides/center_block >}}


{{% slides/citations %}}
Vinograd, J., Lebowitz, J., Radloff, R., Watson, R., & Laipis, P. (1965). The twisted circular form of polyoma viral DNA. In Proceedings of the National Academy of Sciences (Vol. 53, Issue 5, pp. 1104-1111). Proceedings of the National Academy of Sciences. https://doi.org/10.1073/pnas.53.5.1104
{{% /slides/citations %}}


---

{{< slides/zombie/hide_background  >}}


{{< slides/row style="height:calc(var(--slide-height)*.8);">}}
{{< slides/col   >}}
{{< slides/center_block grow="1" >}}
{{< slides/centersvg src="/presentations/dna/dna_supercoil_unknot.svg"   >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}

---

{{< slides/zombie/hide_background  >}}


{{< slides/row style="height:calc(var(--slide-height)*.8);">}}
{{< slides/col   >}}
{{< slides/center_block grow="1" >}}
{{< slides/centersvg src="/presentations/dna/dna_supercoil_knot.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}

---

# Day 7: CDC Headquarters

The spread is now nation wide but still under some control.

You've successfully imaged the DNA of the Z-virus and found DNA with a knot. Your CDC coworkers are using your findings to construct an anti-Z-virus. The anti-virus is the mirror of the DNA knot you've found. This will allow the human body to build anti-bodies for the Z-virus.

The CDC now needs you to verify that the DNA knot they've produced truly is the mirror of the Z-virus.

---

{{< slides/zombie/hide_background  >}}


# Anti-Knot


{{< slides/row >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/row style="margin-bottom:2rem;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/dna/dna_left.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/col >}}
{{< slides/col style="font-size: 2rem;text-align:left;flex-grow:0;"  >}}
$\ $
{{< /slides/col >}}
{{< slides/col style=""  >}}
{{< slides/row  style="margin-bottom:2rem;flex-grow:1;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/dna/dna_right.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/col >}}
{{< /slides/row >}}

---



# Mathematical Knots

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


## Diagrams for knotted dna


{{< slides/row style="">}}
{{< slides/col style="flex-grow: 3;" >}}
{{< centerimg src="/presentations/dna/dna_trefoil.png" >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow: 0;" >}}
{{< slides/center_block >}}
$\to$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow: 3;" >}}
{{< slides/centersvg src="/presentations/dna/dna_left.svg"  >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow: 0;" >}}
{{< slides/center_block >}}
$\to$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="flex-grow: 3;" >}}
{{< slides/centersvg src="/presentations/Alex_Poly/trefoil/left.svg" >}}
{{< /slides/col >}}
{{< /slides/row >}}

{{% slides/citations %}}
DNA knot as seen under the electron microscope. - Image Credit: Javier Arsuaga, [CC BY-ND](https://creativecommons.org/licenses/by-nd/4.0/)
{{% /slides/citations %}}

---

# Knot Equivalence

---

# Reidemeister moves

---
# Type I


{{< slides/row >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type1/1.svg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block >}}
$\leftrightarrow$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type1/2a.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}

---
# Type II


{{< slides/row >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type2/1.svg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block >}}
$\leftrightarrow$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type2/6b.svg" >}}
{{< /slides/col >}}
{{< /slides/row >}}

---
# Type III

{{< slides/row >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type3/1.svg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block >}}
$\leftrightarrow$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type3/6.svg" >}}
{{< /slides/col >}}
{{< /slides/row >}}

---
{{< slides/zombie/hide_background  >}}


# Equal?


{{< slides/row >}}
{{< slides/col style="flex-grow:1;" >}}
{{< slides/row style="margin-bottom:2rem;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/general/guessknot_trefoil.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/col >}}
{{< slides/col style="font-size: 2rem;text-align:left;flex-grow:0;"  >}}
$\ $
{{< /slides/col >}}
{{< slides/col style=""  >}}
{{< slides/row  style="margin-bottom:2rem;flex-grow:1;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/general/guessknot_unknot.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/col >}}
{{< /slides/row >}}


---

# Playing with diagrams

What's the important information inside a knot diagram?

---

{{< slides/row >}}
{{< slides/col >}}
$\,$
{{< /slides/col >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/crossing/crossing_un.svg" >}}
{{< /slides/col >}}
{{< slides/col >}}
$\ $
{{< /slides/col >}}
{{< /slides/row >}}

---

# Clockwise

{{< slides/row >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/crossing/crossing_un.svg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block >}}
$\to$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type2/6a.svg" >}}
{{< /slides/col >}}
{{< /slides/row >}}

---
# anti-clockwise

{{< slides/row >}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/crossing/crossing_un.svg" >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/center_block >}}
$\to$
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col >}}
{{< slides/centersvg src="/presentations/kauf_bkt/type2/6b.svg" >}}
{{< /slides/col >}}
{{< /slides/row >}}


---

# Pictures are hard lets leverage algebra

{{< slides/center_block style="font-size:16rem;" >}}
$\bkt{/presentations/kauf_bkt/crossing/crossing_un.svg}$
{{< /slides/center_block >}}


---

{{% slides/uncenter %}}

# Skein Relation

{{< slides/center_block style="font-size:3.5rem;" >}}
${\begin{matrix}
\ &\left.CW\right.&
&  \left.CCW\right.&\\
\ &\left.\img{/presentations/kauf_bkt/crossing/crossing_un.svg}\right.&
&\left.\img{/presentations/kauf_bkt/crossing/crossing_un.svg}\right.&\\
\ &\left.\downarrow \right.&
&\left.  \downarrow \right.&\\
\bkt{/presentations/kauf_bkt/crossing/crossing_un.svg}=\ A&\LA \img{/presentations/kauf_bkt/type2/6a.svg} \RA&+B&\LA \img{/presentations/kauf_bkt/type2/6b.svg}\RA&
\end{matrix}}$
{{< /slides/center_block >}}

---

# What are we looking for?

We want to use our bracket to build a polynomial that can tell two knots apart.
In particular, we want to differentiate a knot and its "anti-knot"(mirror).

---

# Putting pieces together

* How can we tell two knots apart?
* How can we use that and our bracket to build our polynomial?

---

#### Check what happens under Reidemeister moves

If our bracket "respects" Reidemeister moves it respects knot "equivalence".

---

# Type II

{{< slides/center_block style="font-size:10rem" >}}
${\LA\img{/presentations/kauf_bkt/type2/1.svg}\RA=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA}$
{{< /slides/center_block >}}


---

{{% slides/uncenter %}}


{{< slides/center_block style="font-size:4rem;color:var(--r-Orange);margin-bottom:10vh" >}}
$ \small{\LA \img{/presentations/kauf_bkt/crossing/crossing_un.svg}\RA=A\LA \img{/presentations/kauf_bkt/type2/6a.svg} \RA+B\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA}$
{{< /slides/center_block >}}

{{< slides/center_block style="font-size:4rem" >}}
$\begin{aligned}
\bkt{/presentations/kauf_bkt/type2/1.svg}
&=A\bkt{/presentations/kauf_bkt/type2/2a.svg}+B\bkt{/presentations/kauf_bkt/type2/2b.svg}\\
&=A
\LP A\bkt{/presentations/kauf_bkt/type2/3a.svg}+B\bkt{/presentations/kauf_bkt/type2/4.svg}\RP\\
&+B\LP A\bkt{/presentations/kauf_bkt/type2/6b.svg}+B\bkt{/presentations/kauf_bkt/type2/6a.svg}\RP\\
\end{aligned}$
{{< /slides/center_block >}}


---

{{% slides/uncenter %}}

# A problem

{{< slides/center_block style="font-size:15rem" >}}
${B\bkt{/presentations/kauf_bkt/type2/4.svg}}$
{{< /slides/center_block >}}

---

{{< slides/center_block style="font-size:4rem" >}}
$\begin{aligned}
1.\quad&{\LA \img{/presentations/kauf_bkt/unknot.svg} \RA=1}\\
2.\quad&{\LA P\sqcup \img{/presentations/kauf_bkt/unknot.svg} \RA=C\LA P\RA}
\end{aligned}$
{{< /slides/center_block >}}


---

# Back to computing

---


{{< slides/center_block style="font-size:2.5rem" >}}
$\begin{aligned}
A\LP A\bkt{/presentations/kauf_bkt/type2/3a.svg}+B\bkt{/presentations/kauf_bkt/type2/4.svg}\RP
&+B\LP A\bkt{/presentations/kauf_bkt/type2/6b.svg}+B\bkt{/presentations/kauf_bkt/type2/6a.svg}\RP\\
&=A\LP A\bkt{/presentations/kauf_bkt/type2/6a.svg}+BC\bkt{/presentations/kauf_bkt/type2/6a.svg}\RP\\
&+B\LP A\bkt{/presentations/kauf_bkt/type2/6b.svg}+B\bkt{/presentations/kauf_bkt/type2/6a.svg}\RP\\
\end{aligned}$
{{< /slides/center_block >}}

---

{{< slides/center_block style="font-size:3rem" >}}
$\begin{aligned}
&=A^2\bkt{/presentations/kauf_bkt/type2/6a.svg}+ABC\bkt{/presentations/kauf_bkt/type2/6a.svg}\\
&+BA\bkt{/presentations/kauf_bkt/type2/6b.svg}+B^2\bkt{/presentations/kauf_bkt/type2/6a.svg}\\
&=\LP A^2+ABC+B^2\RP\bkt{/presentations/kauf_bkt/type2/6a.svg}\\
&+BA\bkt{/presentations/kauf_bkt/type2/6b.svg}
\end{aligned}$
{{< /slides/center_block >}}

---

{{< slides/zombie/hide_background  >}}

### What we wanted

{{< slides/center_block style="font-size:3rem" >}}
${\LA\img{/presentations/kauf_bkt/type2/1.svg}\RA=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA}$
{{< /slides/center_block >}}

### What we have

{{< slides/center_block style="font-size:3rem" >}}
$\LA\img{/presentations/kauf_bkt/type2/1.svg}\RA=\LP A^2+ABC+B^2\RP\bkt{/presentations/kauf_bkt/type2/6a.svg}+BA\bkt{/presentations/kauf_bkt/type2/6b.svg}$
{{< /slides/center_block >}}

### So we need

{{< slides/center_block style="font-size:3rem" >}}
$\LP A^2+ABC+B^2\RP\bkt{/presentations/kauf_bkt/type2/6a.svg}+BA\bkt{/presentations/kauf_bkt/type2/6b.svg}=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA$
{{< /slides/center_block >}}

---

# Putting pieces together

How can we select $A,\ B$, and $C$ to get equality?

{{< slides/center_block style="font-size:3rem" >}}
$\LP A^2+ABC+B^2\RP\bkt{/presentations/kauf_bkt/type2/6a.svg}+BA\bkt{/presentations/kauf_bkt/type2/6b.svg}=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA$
{{< /slides/center_block >}}


---

{{< slides/center_block style="font-size:3rem;color:var(--r-Green);margin-bottom:10vh" >}}
$B=\inv{A}$
{{< /slides/center_block >}}

{{< slides/center_block style="font-size:3rem" >}}
$\begin{aligned}
\LP A^2+ABC+B^2\RP\bkt{/presentations/kauf_bkt/type2/6a.svg}+BA\bkt{/presentations/kauf_bkt/type2/6b.svg}&=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA\\
\LP A^2+C+A^{-2}\RP\bkt{/presentations/kauf_bkt/type2/6a.svg}+\bkt{/presentations/kauf_bkt/type2/6b.svg}&=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA\\
\end{aligned}$
{{< /slides/center_block >}}

---

{{< slides/center_block style="font-size:3rem;color:var(--r-Green);margin-bottom:10vh" >}}
$C=-A^{-2}-A^2$
{{< /slides/center_block >}}

{{< slides/center_block style="font-size:3rem" >}}
$\begin{aligned}
\LP A^2+C+A^{-2}\RP\bkt{/presentations/kauf_bkt/type2/6a.svg}+\bkt{/presentations/kauf_bkt/type2/6b.svg}&=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA\\
\bkt{/presentations/kauf_bkt/type2/6b.svg}&=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA\\
\end{aligned}$
{{< /slides/center_block >}}

---

# Type II


{{< slides/center_block style="font-size:3rem" >}}
${\LA\img{/presentations/kauf_bkt/type2/1.svg}\RA=\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA}$
{{< /slides/center_block >}}


{{< slides/center_block style="font-size:3rem" >}}
$
\begin{aligned}
1.\quad&\LA \img{/presentations/kauf_bkt/crossing/crossing_un.svg}\RA=A\LA \img{/presentations/kauf_bkt/type2/6a.svg} \RA+\inv{A}\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA\\
2.\quad&{\LA \img{/presentations/kauf_bkt/unknot.svg} \RA=1}\\
3.\quad&{\LA P\sqcup \img{/presentations/kauf_bkt/unknot.svg} \RA=\LP-A^{-2}-A^2\RP\LA P\RA}
\end{aligned}$
{{< /slides/center_block >}}


---
{{< slides/zombie/hide_background  >}}

{{< admonition type="Exercise" title="Exercise: Type III" >}}

{{< slides/center_block style="font-size:9rem;margin-top:1rem" >}}
$\LA\img{/presentations/kauf_bkt/type3/1.svg}\RA=\LA\img{/presentations/kauf_bkt/type3/6.svg}\RA$
{{< /slides/center_block >}}

{{< /admonition >}}



---
# Type I


{{< slides/row   >}}
{{< slides/col style="font-size: 10rem;"  >}}
$\LA\img{/presentations/kauf_bkt/type1/1.svg}\RA$
{{< /slides/col  >}}
{{< slides/col style="font-size: 10rem;"  >}}
$\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA$
{{< /slides/col  >}}
{{< /slides/row >}}

---


{{< slides/center_block style="font-size:4rem" >}}
$\begin{aligned}
\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA&=
A\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA+A^{-1}\LA\img{/presentations/kauf_bkt/type1/2b.svg}\RA\\
&=A\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
&+A^{-1}\LP -A^{-2}-A^2\RP\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
\end{aligned}$
{{< /slides/center_block >}}

---

{{< slides/center_block style="font-size:4rem" >}}
$\begin{aligned}
\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA&=A\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
&+A^{-1}\LP -A^{-2}-A^2\RP\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
&=\LP A-A^{-3}-A\RP\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
\end{aligned}$
{{< /slides/center_block >}}

---


{{< slides/center_block style="font-size:4rem" >}}
$${\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA=-A^{-3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA}$$
{{< /slides/center_block >}}

---
{{< slides/zombie/hide_background  >}}

{{< admonition type="Exercise" title="Exercise: Compute bracket for the other Type I" >}}

{{< slides/center_block style="font-size:6rem;margin-top:1rem" >}}
${\LA\img{/presentations/kauf_bkt/type1/1.svg}\RA=?\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA}$
{{< /slides/center_block >}}
{{< /admonition >}}

---


{{< slides/center_block style="font-size:7rem" >}}
${\LA\img{/presentations/kauf_bkt/type1/1.svg}\RA=-A^{3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA}$
{{< /slides/center_block >}}



---

# Why is this a problem?


{{< slides/center_block style="font-size:7rem" >}}
${\begin{aligned}
\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA&=-A^{-3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
\LA\img{/presentations/kauf_bkt/type1/1.svg}\RA&=-A^{3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA
\end{aligned} }  $
{{< /slides/center_block >}}

---

{{< slides/zombie/hide_background  >}}

# What do we have so far?

For Type II and III everything "works" with the rules:

{{< slides/center_block style="font-size:3rem" >}}
$
\begin{aligned}
1.\quad&{\LA \img{/presentations/kauf_bkt/unknot.svg} \RA=1}\\
2.\quad&\LA \img{/presentations/kauf_bkt/crossing/crossing_un.svg}\RA=A\LA \img{/presentations/kauf_bkt/type2/6a.svg} \RA+\inv{A}\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA\\
3.\quad&{\LA P\sqcup \img{/presentations/kauf_bkt/unknot.svg} \RA=\LP-A^{-2}-A^2\RP\LA P\RA}
\end{aligned}$
{{< /slides/center_block >}}
but Type I is "broken":


{{< slides/center_block style="font-size:3rem" >}}
${\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA=-A^{-3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\quad\LA\img{/presentations/kauf_bkt/type1/1.svg}\RA=-A^{3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA}$
{{< /slides/center_block >}}

---

# Day 53

Time is running out. With your preliminary results in hand the vaccine is being produced. The future of the world is now on your shoulders waiting for your results.

---

{{% slides/uncenter %}}

# How can we fix Type I

{{< slides/center_block style="font-size:7rem" >}}
$
\begin{aligned}
\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA&=-A^{-3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
\LA\img{/presentations/kauf_bkt/type1/1.svg}\RA&=-A^{3}\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA
\end{aligned}$
{{< /slides/center_block >}}

---



# Orientation of a crossing


{{< slides/row >}}
{{< slides/col style="font-size: 3rem;"  >}}
$1.$ Positive
{{< slides/center_block style="flex-grow:1">}}
{{< slides/centersvg src="/presentations/kauf_bkt/crossing/crossing_+.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< slides/col style="font-size: 5rem;"  >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="font-size: 3rem;"  >}}
$2.$ Negative
{{< slides/center_block style="flex-grow:1">}}
{{< slides/centersvg src="/presentations/kauf_bkt/crossing/crossing_-.svg" >}}
{{< /slides/center_block >}}
{{< /slides/col >}}
{{< /slides/row >}}


---

# Writhe of a knot


The writhe $w\LP P\RP$ of a diagram $P$ of an oriented link is the sum of the
signs of the crossings of $ P $.

{{< slides/center_block style="font-size:5rem" >}}
$${w\LP P\RP=\text{#}\LP\img{/presentations/kauf_bkt/crossing/crossing_+.svg}\RP-\text{#}\LP\img{/presentations/kauf_bkt/crossing/crossing_-.svg}\RP}$$
{{< /slides/center_block >}}

---
{{< slides/zombie/hide_background  >}}

{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/orientation/5.1_unor.svg" width="auto" heigh="auto"  >}}
{{< /slides/center_block >}}

---
{{< slides/zombie/hide_background  >}}

{{< slides/center_block grow="1"  >}}
{{< slides/centersvg src="/presentations/kauf_bkt/orientation/5.1.svg" width="auto" heigh="auto"  >}}
{{< /slides/center_block >}}

---

{{< slides/zombie/hide_background  >}}


{{< admonition type="Exercise" title="Exercise: Compute the writhe" >}}

{{< slides/center_block style="font-size:10rem;margin-top:1rem" >}}
$w\LP\img{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP$
{{< /slides/center_block >}}
{{< /admonition >}}


---


# Fixing Type I

{{< slides/center_block style="font-size:7rem" >}}
$
-A^{-3w\LP \img{/presentations/kauf_bkt/type1/1b.svg}\RP}\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA
$
{{< /slides/center_block >}}

---


{{< slides/center_block style="font-size:3rem" >}}
$
\begin{aligned}
     -A^{-3w\LP \img{/presentations/kauf_bkt/type1/1b.svg}\RP}\LA\img{/presentations/kauf_bkt/type1/1b.svg}\RA
     &= -A^{-3\LP-1\RP}\LP-A^{-3}\RP\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
     &= -A^{3}\LP-A^{-3}\RP\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA\\
     &=\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA
\end{aligned}
$
{{< /slides/center_block >}}

---

{{< slides/zombie/hide_background  >}}


{{< admonition type="Exercise" title="Exercise: Verify the other type I move" >}}
{{< slides/center_block style="font-size:7rem;margin-top:1rem" >}}

$-A^{-3w\LP \img{/presentations/kauf_bkt/type1/1.svg}\RP}=\LA\img{/presentations/kauf_bkt/type1/2a.svg}\RA$
{{< /slides/center_block  >}}
{{< /admonition >}}

---


# What do we have?

For Type I, II, and III everything "works" for  the polynomial $$V\LP P\RP=-A^{-3w\LP P\RP}\LA P\RA$$ with the rules:

{{< slides/center_block style="font-size:2.5rem" >}}
$
\begin{aligned}
1.\quad&{\LA \img{/presentations/kauf_bkt/unknot.svg} \RA=1}\\
2.\quad&\LA \img{/presentations/kauf_bkt/crossing/crossing_un.svg}\RA=A\LA \img{/presentations/kauf_bkt/type2/6a.svg} \RA+\inv{A}\LA\img{/presentations/kauf_bkt/type2/6b.svg}\RA\\
3.\quad&{\LA P\sqcup \img{/presentations/kauf_bkt/unknot.svg} \RA=\LP-A^{-2}-A^2\RP\LA P\RA}
\end{aligned}$
{{< /slides/center_block >}}



---

## We can now compute

{{< slides/center_block style="font-size:5rem" >}}
$V\LP\img{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP=-A^{-3w\LP \img{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP}\bkt{/presentations/kauf_bkt/trefoil/trefoil.svg}$
{{< /slides/center_block >}}

---

{{% slides/uncenter %}}

<br/>
{{< slides/center_block style="font-size:3rem;color:var(--r-Orange);" >}}
$-A^{-3w\LP \img{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP}\bkt{/presentations/kauf_bkt/trefoil/trefoil.svg}$
{{< /slides/center_block >}}
<br/>

{{< slides/center_block style="font-size:4rem" >}}
$
\begin{aligned}
&=-A^{-3\cdot -3}\LP A\bkt{/presentations/kauf_bkt/trefoil/trefoil_a.svg} +\inv{A}\bkt{/presentations/kauf_bkt/trefoil/trefoil_b.svg}\RP\\
&=-A^{9}\LP A\bkt{/presentations/kauf_bkt/trefoil/trefoil_a.svg}+\inv{A}\bkt{/presentations/kauf_bkt/trefoil/trefoil_b.svg}\RP\\
\end{aligned}
$
{{< /slides/center_block >}}


---


{{< slides/center_block style="font-size:4.5rem" >}}
$
\begin{aligned}
\bkt{/presentations/kauf_bkt/trefoil/trefoil_a.svg}
&=-A^{3}\bkt{/presentations/kauf_bkt/trefoil/trefoil_ab.svg}\\
&=-A^{3}\LP-A^{3}\RP\bkt{/presentations/kauf_bkt/unknot.svg}\\
&=A^{6}\\
\end{aligned}
$
{{< /slides/center_block >}}


---

{{% slides/uncenter %}}

<br/>
{{< slides/center_block style="font-size:3rem;color:var(--r-Orange);" >}}
$-A^{-3w\LP \img{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP}\bkt{/presentations/kauf_bkt/trefoil/trefoil.svg}$
{{< /slides/center_block >}}
<br/>

{{< slides/center_block style="font-size:3.5rem" >}}
$
\begin{aligned}
&-A^{9}\LP A\bkt{/presentations/kauf_bkt/trefoil/trefoil_a.svg}+\inv{A}\bkt{/presentations/kauf_bkt/trefoil/trefoil_b.svg}\RP\\
&= -A^{9}\LP A\LP A^6\RP+\inv{A}\bkt{/presentations/kauf_bkt/trefoil/trefoil_b.svg}\RP\\
\end{aligned}
$
{{< /slides/center_block >}}


---

{{< slides/center_block style="font-size:4rem" >}}
$
\begin{aligned}
\bkt{/presentations/kauf_bkt/trefoil/trefoil_b.svg}
&=A\bkt{/presentations/kauf_bkt/trefoil/trefoil_ba.svg}
+A^{-1}\bkt{/presentations/kauf_bkt/trefoil/trefoil_bb.svg}\\
&=A\LP -A^{3}\bkt{/presentations/kauf_bkt/unknot.svg}\RP\\
&+A^{-1}\LP -A^{-3}\bkt{/presentations/kauf_bkt/unknot.svg}\RP\\
&=-A^{4}-A^{-4}\\
\end{aligned}
$
{{< /slides/center_block >}}

---
{{< slides/zombie/hide_background  >}}

{{< slides/center_block style="font-size:3.4rem" >}}
$
\begin{aligned}

&-A^{-3w\LP \img{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP}\bkt{/presentations/kauf_bkt/trefoil/trefoil.svg}\\
&=-A^{9}\LP A\bkt{/presentations/kauf_bkt/trefoil/trefoil_a.svg}+\inv{A}\bkt{/presentations/kauf_bkt/trefoil/trefoil_b.svg}\RP\\
&= -A^{9}\LP A\LP A^6\RP+\inv{A}\bkt{/presentations/kauf_bkt/trefoil/trefoil_b.svg}\RP\\
&= -A^{9}\LP A\LP A^6\RP+\inv{A}\LP-A^{4}-A^{-4}\RP\RP\\
&= -A^{9}\LP A^7-A^{3}-A^{-5}\RP\\
&= -A^{16}+A^{12}+A^{4}\\
\end{aligned}
$
{{< /slides/center_block >}}

---



{{< slides/zombie/hide_background  >}}


{{< admonition type="Exercise" title="Exercise: Compute the bracket on the anti-knot" >}}
{{< slides/center_block style="font-size:7rem;margin-top:1rem" >}}

$-A^{-3w\LP \img{/presentations/dna/dna_right.svg}\RP}\LA\img{/presentations/dna/dna_right.svg}\RA$
{{< /slides/center_block  >}}
{{< /admonition >}}


---
{{< slides/zombie/hide_background  >}}


# Anti-Knot


{{< slides/row >}}
{{< slides/col style="width:40%;" >}}
{{< slides/row style="margin-bottom:2rem;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/dna/dna_left.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< slides/row >}}
{{< slides/col style="font-size: 3rem;"  >}}
${ -A^{16}+A^{12}+A^{4}}$
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/col >}}
{{< slides/col style="font-size: 2rem;text-align:left;width:20%;"  >}}
$\quad$
{{< /slides/col >}}
{{< slides/col style="width:40%;"  >}}
{{< slides/row  style="margin-bottom:2rem;">}}
{{< slides/col  >}}
{{< slides/centersvg src="/presentations/dna/dna_right.svg"  >}}
{{< /slides/col >}}
{{< /slides/row >}}
{{< slides/row >}}
{{< slides/col style="font-size: 3rem;"  >}}
${ -A^{-16}+A^{-12}+A^{-4}}$
{{< /slides/col >}}
{{< /slides/row >}}
{{< /slides/col >}}
{{< /slides/row >}}

---

# Day 121

With the successful completion of your work the vaccine is being administer world wide. The President congratulates you for your work and the world is optimistic.

---

# Day 300

The virus is completely controlled and you win every prize in every field imaginable!


---

{{< slides/zombie/hide_background  >}}

## The Jones Polynomial

The Jones Polynomial $V\LP \mathscr{K}\RP$ of an oriented knot $\mathscr{K}$
is the **Laurent polynomial**  with integer coefficients in $t^{1/2}$.

Defined by
$ V\LP \mathscr{K}\RP=\LP\LP-A\RP^{-3w(P)}\LA P\RA\RP _{t^{1/2}=A^{-2}} $
where $P$ is any oriented diagram for $\mathscr{K}$.

---
{{< slides/zombie/hide_background  >}}


{{< slides/center_block style="font-size:3.5rem" >}}
$
\begin{aligned}
 V\LP \mathscr{K}\RP&=
\LP-A^{-3 w\LP\img{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP} \bkt{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP _{t^{1/2}=A^{-2}}\\
&=\LP-A^{-3\cdot-3} \bkt{/presentations/kauf_bkt/trefoil/trefoil.svg}\RP _{t^{1/2}=A^{-2}}\\
&=\LP-A^{9}\LP A^7-A^3-A^{-5}\RP\RP _{t^{1/2}=A^{-2}}\\
&=\LP-A^{16}+A^{12}+A^{-4}\RP _{t^{1/2}=A^{-2}}\\
&=-t^{-4}+t^{-3}+t^{-1}\\
\end{aligned}
$
{{< /slides/center_block >}}


---


[Worksheet](/presentations/kauf_bkt/worksheet/worksheet.pdf)

---


{{% slides/citations %}}
1. Livingston, C. (1993). Knot Theory. Mathematical Association of America. [https://doi.org/10.5948/UPO9781614440239](https://doi.org/10.5948/UPO9781614440239)
2. Dale Rolfsen, Knots and links, Mathematics Lecture Series, vol. 7, Publish or Perish, Inc., Houston, TX, 1990, Corrected reprint of the 1976 original.
3. Robert Glenn Scharein. Interactive topological drawing. ProQuest LLC, Ann Arbor, MI, 1998. Thesis Ph.D. The University of British Columbia (Canada). URL: [https://www.knotplot.com/](https://www.knotplot.com/).
4. Jablan, S., & Sazdanović, R. (2007). Linknot. In Series on Knots and Everything. WORLD SCIENTIFIC. [https://doi.org/10.1142/6623](https://doi.org/10.1142/6623)
5. Vaughan Jones. The Jones polynomial for dummies. [https://math.berkeley.edu/~vfr/jonesakl.pdf](https://math.berkeley.edu/~vfr/jonesakl.pdf) [WebArchive](https://web.archive.org/web/20231012192337/https://math.berkeley.edu/~vfr/jonesakl.pdf)
6. Deoxyribonucleic acid (DNA). (n.d.). Genome.gov. [https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid.](https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid.) Accessed 3 October 2023
7. DNA knot as seen under the electron microscope. - Image Credit: Javier Arsuaga, [CC BY-ND](https://creativecommons.org/licenses/by-nd/4.0/)
8. Vinograd, J., Lebowitz, J., Radloff, R., Watson, R., & Laipis, P. (1965). The twisted circular form of polyoma viral DNA. In Proceedings of the National Academy of Sciences (Vol. 53, Issue 5, pp. 1104-1111). Proceedings of the National Academy of Sciences. [https://doi.org/10.1073/pnas.53.5.1104](https://doi.org/10.1073/pnas.53.5.1104)
9. Photo by Madprime (talk · contribs) - This vector image was created with Inkscape ., CC BY-SA 3.0, [https://commons.wikimedia.org/w/index.php?curid=1848174](https://commons.wikimedia.org/w/index.php?curid=1848174)
{{% /slides/citations %}}



{{% slides/footer %}}

{{% /slides/footer %}}

{{% slides/zombie/background %}}

