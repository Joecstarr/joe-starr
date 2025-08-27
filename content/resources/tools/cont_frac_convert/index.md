---
title: Continued Fraction and Twist Vector Converter
date: 2023-07-15
featured: false
summary: A tool that computes continued fractions from twist vectors.
weight: 500
sitemap:
    priority: 0.8
    weight: 0.4
share: false
---

{{< mathjax_preamble >}}

# Rational Tangles

A rational tangle is given by alternating NE,SE and SE,SW twisting of the $0$
tangle {{< cite conwayEnumerationKnotsLinks1970>}}. Discussion of canonicality
of this construction of twist vector can be found in
{{< cite goldmanRationalTangles1997>}}. A twist vector encodes these alternating
twists as a list of integers. This induces a unique map from the rational
tangles onto the rational numbers
{{< cite "conwayEnumerationKnotsLinks1970">}}{{< cite "goldmanRationalTangles1997">}}{{< cite "kauffmanClassificationRationalKnots2002">}}. We
accomplish this by interpreting a twist vector as a sequence for a continued
fraction as: $$\LB a\ b\ c\RB=c+\frac{1}{b+\frac{1}{a}}$$

# Instructions

Twist vectors here are space separated lists of integers.

A rational number here is "/" separating two integers.

---

{{< tools/cont_frac_convert >}}

---

{{< references >}}

