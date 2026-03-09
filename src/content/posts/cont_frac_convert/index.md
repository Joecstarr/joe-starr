---
title: Continued Fraction and Twist Vector Converter
published: 2023-07-15
tags: ["Resources"]
description: ""
draft: false
toc: true
bibliography: ./bib.json
lang: en-US
csl: apa
---

## Rational Tangles

A rational tangle is given by alternating NE,SE and SE,
SW twisting of the $0$ tangle [@conwayEnumerationKnotsLinks1970].
Discussion of canonically of this construction of twist vector can be found in
[@goldmanRationalTangles1997].
A twist vector encodes these alternating twists as a list of integers.
This induces a unique map from the rational tangles onto the rational numbers
[@conwayEnumerationKnotsLinks1970 @goldmanRationalTangles1997 @kauffmanClassificationRationalKnots2002].
We accomplish this by interpreting a twist vector as a sequence for a continued fraction as:

    \left[ a\ b\ c\right]=c+\frac{1}{b+\frac{1}{a}}

## Instructions

Twist vectors here are space separated lists of integers.

A rational number here is "/" separating two integers.

---

<style>

    .text {
        padding: 5px;
        font-size: 16px;
        background: #44475a;
        border-radius: 5px;
        border: 2px solid #44475a;
    }

    .btn {
        border: 2px solid #44475a;
        background-color: #44475a;
        color: #f8f8f2;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
        margin: auto;
    }

    /* Create three equal columns that floats next to each other */
    .column {
        flex-shrink: 3;
        flex-grow: 3;
        padding: 1rem;
    }

    /* Clear floats after the columns */
    .row {
        margin-right: 0px !important;
        margin-left: 0px !important;
        justify-content: space-evenly;
    }
</style>

<section class="controls">
    <div class="row">
        <div class="column">
            <label>
                Twist Vector:
            </label><br/>
            <input class="text" id="twist_vector_input" type="text">
        </div>
        <div class="column">
            <input class="btn" type="button" value="&#8594;" onclick="tv_2_rn()"><br/>
            <input class="btn" type="button" value="&#8592;" onclick="rn_2_tv()">
        </div>
        <div class="column">
            <label>
                Rational Number:
            </label><br/>
            <input class="text" id="rational_number_input" type="text">
        </div>
    </div>
</section>

<script type="text/javascript">
    function tv_2_rn() {
        var tv = document.getElementById('twist_vector_input').value;
        tv = tv.split(" ").map(function (item) {
            return parseInt(item, 10);
        }).reverse();

        var hm1 = 0;
        var h = 1;
        var km1 = 1;
        var k = 0;
        tv.forEach(item => {
            var ht = h;
            var kt = k;

            h = item*h+hm1
            k = item*k+km1

            km1 = kt
            hm1 = ht

        });

        document.getElementById('rational_number_input').value = h+"/"+k;
    }
</script>
<script type="text/javascript">

    function rn_2_tv() {
        var rn = document.getElementById('rational_number_input').value;
        rn = rn.split("/").map(function (item) {
            return parseInt(item, 10);
        });

        var p = rn[0];
        var q = rn[1];
        var t = 0;
        var tv = [];

        while(p%q!=0)
        {
            var d = (p/q);
            tv.push(Math.trunc(p/q));
            t = q;
            q = p % q;
            p = t;

        }
        tv.push(Math.trunc(p/q));

        tv == tv.reverse();
        document.getElementById('twist_vector_input').value = tv.join(" ");

    }
</script>
<script type="text/javascript">

</script>

---
