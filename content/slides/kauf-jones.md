---
title: "Jones Polynomial"
date: "2022-02-06"
summary: "Defintion of the Jones Polynomial"
tags: [
    "index",
]
draft: false
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming

  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: dracula
  reveal_options: [
    "RevealMarkdown", "RevealSearch", "RevealNotes", "RevealZoom"
  ]
---

{{<dracula_css>}}
{{<mathjax_support>}}
{{<canvas_head>}}


# Jones Polynomial
1. $\LA \img[]{/presentations/kauf_bkt/unknot.png} \RA=1$

---
## Definition Of Jones Polynomial

The Jones polynomial $V\LP L\RP$ of an oriented link $L$
is the Laurent Polynomial in $t^{1/2}$, with integer coefficients, defined by
$$ V\LP L\RP=\LP\LP-A\RP^{-3w(D)}\LA D\RA\RP _{t^{1/2}=A^{-2}} $$
where $D$ is any oriented diagram for $L$.

---

Definition is in terms of some odd looking stuff

The Kauffman bracket of $D$
$$\LA D\RA$$

and

The writhe of $D$
$$w(D)$$

---

## Kauffman Bracket

The Kauffman Bracket is a function from unoriented link diagrams in the oriented plane to Laurent polynomials with integer coefficients in an indeterminate $A$. It maps a diagram $D$ to $\LA D\RA\in \Z\LB A^{-1},\ A\RB$
and is characterized by

---

1. $\LA \img{/presentations/kauf_bkt/unknot.png} \RA=1$
2. $\LA D \sqcup \img{/presentations/kauf_bkt/unknot.png} \RA=\LP-A^{-2}-A^2\RP \LA D\RA\$
3. $\LA \img{/presentations/kauf_bkt/bracket_plus.png}\RA=A\LA \img{/presentations/kauf_bkt/bracket_vert.png} \RA+A^{-1}\LA\img{/presentations/kauf_bkt/bracket_hor.png}\RA$








<!-- <img style="max-width:1000px !important; height:auto !important" src="/bracket_1.png"/>

<br/>

<img style="max-width:1000px !important; height:auto !important" src="/bracket_2.png"/> -->

---

Natural now to ask, "Is the Kauffman Bracket a knot invariant?"
How to tell?

Check Reidemeister moves.

---

### Type 2 and 3

If a diagram $D$ is changed by Type II or Type III Reidemeister move, then
$\LA D\RA$ does not change. That is,

1. $\LA\img{/presentations/kauf_bkt/bracket_type2.png}\RA=\LA\img{/presentations/kauf_bkt/bracket_hor.png}\RA$
2. $\LA\img{/presentations/kauf_bkt/bracket_type3.png}\RA=\LA\img{/presentations/kauf_bkt/bracket_type3_out.png}\RA$

Hence $\LA D\RA$ is invariant under regular isotopy of $D$.

---



### Type 1

If a diagram is changed by a Type I Reidemeister move, its bracket polynomial
changes in the following way:

1. $\LA\img{/presentations/kauf_bkt/bracket_type1_1.png}\RA=-A^{3}\LA\img{/presentations/kauf_bkt/bracket_type1_out.png}\RA$
2. $\LA\img{/presentations/kauf_bkt/bracket_type1_2.png}\RA=-A^{-3}\LA\img{/presentations/kauf_bkt/bracket_type1_out.png}\RA$





---



This is a problem... How to resolve?



---
## Writhe

---

### Orientation of a crossing

A crossing can be either:

1. Positive $+1$ <br/> ![+1](/presentations/kauf_bkt/plus.png) <br/>
2. Negative $-1$ <br/> ![-1](/presentations/kauf_bkt/minus.png) <br/>

---

### Writhe of a knot

The write $w\LP D\RP$ of a diagram $D$ of an oriented link is the sum of the
signs of the crossings of D.



---

### Writhe + Bracket

Let $D$ be a diagram of an oriented link $L$. Then the expression
$$\LP -A\RP^{-3w\LP D\RP}\LA D\RA$$
is an invariant of the oriented link $L$.



---

## Definition of the Jones Polynomial

The Jones polynomial $V\LP L\RP$ of an oriented link $L$
is the Laurent Polynomial in $t^{1/2}$, with integer coefficients, defined by
$$ V\LP L\RP=\LP\LP-A\RP^{-3w(D)}\LA D\RA\RP _{t^{1/2}=A^{-2}} $$
where $D$ is any oriented diagram for $L$.

---

## Jones Polynomial is a function

The Jones polynomial invariant is a function
$$V:\LS \text{Oriented links in }S^3\to \Z\LB t^{-\frac{1}{2}},\ t^{-\frac{1}{2}}\RB\RS$$
such that

1. $V\LP\text{unknot}\RP=1$
2. Whenever three oriented links $L_+$, $L_-$, and $L_0$ are the same, except in the neighborhood of a point as follows  <br/> ![+1](/presentations/kauf_bkt/plus.png )   ![-1](/presentations/kauf_bkt/minus.png) ![-1](/presentations/kauf_bkt/skein_vert.png) <br/> Then $$t^{-1}V\LP L_+\RP-t^V\LP L_-\RP+\LP t^{-\frac{1}{2}}-t^{\frac{1}{2}}\RP V\LP L_0\RP=0$$



