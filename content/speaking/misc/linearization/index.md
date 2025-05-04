---

title: "Knots in Washington 50"
date: "2024-12-07"
summary: "Talk given at the Knots in Washington 50 conference"
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
<div hidden=true>
$\newcommand{mvspc}{\hspace{.125cm}}$
$\newcommand{mvtwt}{\frac{\mvspc}{\mvspc}\frac{\mvspc}{\mvspc}}$
$\newcommand{mvtht}{\frac{\mvspc}{\mvspc}\frac{\mvspc}{\mvspc}\frac{\mvspc}{\mvspc}}$
</div>

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
#tqr {
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
#local_1{
    width :30vw;
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

#title1 > svg{
    max-width:80% !important;
}
#title2 > svg{
    max-width:80% !important;
}
#title3 > svg{
    max-width:80% !important;
}

</style>




*Arborescent knots (and tangles)* are constructed by taking a collection of twisted bands described by a weighted tree and connecting them with successive plumbing.



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


{{< slides/centersvg src="/presentations/bands/arbor_band_with_twist_full.svg"  direct="true"  >}}

---


{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_with_band.svg"  direct="true"  >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_1.svg"  direct="true" id="local_1" >}}

---


{{< slides/centersvg src="/presentations/bands/arbor_graph.svg"  direct="true"  id="arbor_graph">}}

---

{{< slides/centersvg src="/presentations/bands/arbor_bands.svg"  direct="true"  id="arbor_bands">}}


---

{{< slides/centersvg src="/presentations/bands/arbor_bound.svg"  direct="true"  id="arbor_bound">}}

---

{{< slides/centersvg src="/presentations/bands/arbor_tangle.svg"  direct="true"  id="arbor_tangle">}}

---


{{< slides/centersvg src="/presentations/bands/arbor_graph_tangle.svg"  direct="true"  id="arbor_graph_tangle">}}

---

# Anatomy of a tree

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

{{< slides/centersvg src="/presentations/bands/arbor_ring_number.svg"  direct="true" class="threequarterHeight" >}}



{{< /slides/col >}}
{{< slides/col  style="flex-grow:1;" >}}
$\ $
{{< /slides/col >}}
{{< slides/col  style="flex-grow:4;"  >}}
{{< slides/center_block grow="1"  >}}

{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}

The count of rings attached to a vertex is the *Ring Number* of the vertex.
Ring numbers are noted as an augmentation of the vertex.

{{<  /slides/admonition >}}
{{<  slides/admonition type="Definition" title="Definition" markdownify="true" >}}

A vertex with ring number $\geq 1$ or valence $\geq 3$ is called an
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


{{< slides/centersvg src="/presentations/bands/arbor_ring_essential.svg"  direct="true" class="eighthHeight" >}}


{{< slides/centersvg src="/presentations/bands/arbor_ring_noessential.svg"  direct="true" class="eighthHeight"   >}}



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


{{% slides/citations  %}}
F. Bonahon and L. Siebenmann, New geometric splittings of classical knots, and the classification and symmetries of arborescent knots, [http://www-bcf.usc.edu/~fbonahon/Research/Publications.html](http://www-bcf.usc.edu/~fbonahon/Research/Publications.html)
{{% /slides/citations %}}

---

#### Linearization of Weighted Arborescent Tangle Trees


{{< slides/centersvg src="/presentations/bands/watt_walk_tangle.svg" style="max-width:40vw;margin:auto;"   >}}

---

{{< slides/centersvg src="/presentations/bands/arbor_graph_split_local_1.svg"  direct="true" id="local_1" >}}

---
### Linearizing a vertex locally

We imagine an arm sweeping out from the lowest index bond (parent) "picking up"
the data of each weight and child as it sweeps across the data.

---

{{< slides/centersvg src="/presentations/bands/f3_local_ccw_1.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
# Linearizing a tree

To linearize an entire tree, we start at the root and linearize each vertex.
However, when we sweep over a child, we descend to that child and linearize. When
we have completed linearizing a vertex we pop up the tree.

---

## Delimiting depth

As we move up and down the tree, we need to keep track how deep we are into the
tree. When we descend we add an open delimiter. When we ascend, we add a closing
delimiter. The delimiters we will use are:

- $\LB\ \ \RB$: Corresponds to a half open stick and is interpreted as a twist
  vector for a rational tangle. Note that, to align with the traditional
  notation, the twist vector is written in depth first post order.
- $\LP\ \ \RP$: Corresponds to a vertex not on a half open stick with no ring
  number.
- $\LA\ \ \RA$: Corresponds to a vertex not on a half open stick with ring number.


---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_01.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_02.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_03.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_04.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_04a.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_05.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_06.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_07.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_08.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_09.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_10.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_11.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_12.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_13.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_14.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_15.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_16.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_17.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_18.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_19.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_20.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_21.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_22.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_23.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_24.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_25.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_26.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

---
{{< slides/centersvg src="/presentations/bands/linear/watt_walk_tangle_27.svg"  direct="true" style="max-width:35vw;margin:auto;" >}}

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
17. Nakano, S. (2002). Efficient generation of plane trees. In Information Processing Letters (Vol. 84, Issue 3, pp. 167-172). Elsevier BV. [https://doi.org/10.1016/s0020-0190(02)00240-5](https://doi.org/10.1016/s0020-0190(02)00240-5)
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
19. <a href="https://commons.wikimedia.org/wiki/File:Emojione_1F332.svg">Emoji One</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
20. <a href="https://commons.wikimedia.org/wiki/File:Ornament_-_The_Noun_Project.svg">Matt Brooks</a>, CC0, via Wikimedia Commons
{{% /slides/citations %}}
