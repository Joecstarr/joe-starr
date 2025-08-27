---
title: Tool Chain
date: 2023-06-20
featured: false
summary:
weight: 500
sitemap:
  priority: 0.8
  weight: 0.4
share: false
---


# PC

## Typesetting

Core tool is [vscode](https://code.visualstudio.com/) here are my settings

### plugins

- [LaTeX Utilities](https://marketplace.visualstudio.com/items?itemName=tecosaur.latex-utilities)
- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
  - This is the main plugin: Here's [install guide](https://github.com/James-Yu/LaTeX-Workshop/wiki/Install)
- [Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - free for students
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
- [macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros)


### Settings

{{% collapseable %}}

```json
    "macros": {
      "mathField": [
        {
          "command": "type",
          "args": {
            "text": "\\(\\)"
          }
        },
        "cursorLeft",
        "cursorLeft"
      ],
      "mathcField": [
        {
          "command": "type",
          "args": {
            "text": "\\[\\]"
          }
        },
        "cursorLeft",
        "cursorLeft"
      ],
      "mathField_jy": [
        {
          "command": "type",
          "args": {
            "text": "$$"
          }
        },
        "cursorLeft"
      ],
      "mathcField_jy": [
        {
          "command": "type",
          "args": {
            "text": "$$$$"
          }
        },
        "cursorLeft",
        "cursorLeft"
      ],
      "mathField_md": [
        {
          "command": "type",
          "args": {
            "text": "\\\\(\\\\)"
          }
        },
        "cursorLeft",
        "cursorLeft",
        "cursorLeft"
      ],
      "mathcField_md": [
        {
          "command": "type",
          "args": {
            "text": "\\\\[\\\\]"
          }
        },
        "cursorLeft",
        "cursorLeft",
        "cursorLeft"
      ]
    },
    "cSpell.userWords": [
      "amsfonts",
      "amssymb",
      "amsthm",
      "bijectivity",
      "diffeomorphic",
      "diffeomorphism",
      "draculabg",
      "draculafg",
      "homeo",
      "homotopy",
      "htpc",
      "injective",
      "injectivity",
      "Kauffman",
      "Lipschitz",
      "mathbb",
      "mathjax",
      "MCAL",
      "MISRA",
      "OEM",
      "QAC",
      "Reidemeister",
      "reindexing",
      "Simplicial",
      "simplicially",
      "surjective",
      "surjectivity",
      "unoriented",
      "WLOG"
    ],
    "cSpell.checkLimit": 1000,
    "cSpell.minWordLength": 3,
    "cSpell.diagnosticLevel": "Warning",
    "cSpell.checkOnlyEnabledFileTypes": false,
    "cSpell.autoFormatConfigFile": true,
    "cSpell.maxNumberOfProblems": 1000,
    "cSpell.showAutocompleteSuggestions": true,
    "cSpell.suggestionMenuType": "quickFix",
    "cSpell.allowCompoundWords": true,
    "cSpell.patterns": [

    ],
    "cSpell.languageSettings": [
      {
          "languageId": "latex",
          "patterns": [
              {
                  "name": "LaTexMacrosMultiLine",
                  "pattern": "",
                  "description": "Match against all LaTex Macros"
              }
          ]
      }
  ],
    "editor.renderWhitespace": "all",
    "files.trimTrailingWhitespace": true,
    "latex-workshop.intellisense.unimathsymbols.enabled": true,
    "latex-workshop.message.warning.show": false,
    "latex-workshop.latexindent.args": [
      "-c",
      "%DIR%/",
      "%TMPFILE%"
    ],
    "latex-workshop.view.pdf.hand": true,
    "latex-workshop.latex.autoBuild.run": "onSave",
    "latex-workshop.latex.recipe.default": "latexmk (lualatex)",
    "latex-workshop.latex.autoClean.run": "onFailed",
    "latex-workshop.view.pdf.viewer": "tab",
    "latex-workshop.bind.enter.key": false,
    "latex-workshop.hover.preview.scale": 0.5,
    "latex-workshop.intellisense.update.aggressive.enabled": true,
    "latex-workshop.synctex.afterBuild.enabled": true,
    "latex-workshop.latex.recipes": [

    {
      "name": "latexmk 🔃",
      "tools": [
        "latexmk"
      ]
    },
    {
      "name": "latexmk (latexmkrc)",
      "tools": [
        "latexmk_rconly"
      ]
    },
    {
      "name": "latexmk (lualatex)",
      "tools": [
        "lualatexmk"
      ]
    },
    {
      "name": "pdflatex ➞ bibtex ➞ pdflatex × 2",
      "tools": [
        "pdflatex",
        "bibtex",
        "pdflatex",
        "pdflatex"
      ]
    },
    {
      "name": "Compile Rnw files",
      "tools": [
        "rnw2tex",
        "latexmk"
      ]
    },
    {
      "name": "Compile Jnw files",
      "tools": [
        "jnw2tex",
        "latexmk"
      ]
    },
    {
      "name": "tectonic",
      "tools": [
        "tectonic"
      ]
    }
  ],
  "latex-workshop.latex.tools": [

    {
      "name": "latexmk",
      "command": "latexmk",
      "args": [
        "-synctex=1",
        "-shell-escape",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-pdf",
        "-outdir=%OUTDIR%",
        "%DOC%"
      ],
      "env": {}
    },
    {
      "name": "lualatexmk",
      "command": "latexmk",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-lualatex",
        "-outdir=%OUTDIR%",
        "%DOC%"
      ],
      "env": {}
    },
    {
      "name": "latexmk_rconly",
      "command": "latexmk",
      "args": [
        "%DOC%"
      ],
      "env": {}
    },
    {
      "name": "pdflatex",
      "command": "pdflatex",
      "args": [
        "-synctex=1",
        "-shell-escape",
        "-interaction=nonstopmode",
        "-file-line-error",
        "%DOC%"
      ],
      "env": {}
    },
    {
      "name": "bibtex",
      "command": "bibtex",
      "args": [
        "%DOCFILE%"
      ],
      "env": {}
    },
    {
      "name": "rnw2tex",
      "command": "Rscript",
      "args": [
        "-e",
        "knitr::opts_knit$set(concordance = TRUE); knitr::knit('%DOCFILE_EXT%')"
      ],
      "env": {}
    },
    {
      "name": "jnw2tex",
      "command": "julia",
      "args": [
        "-e",
        "using Weave; weave(\"%DOC_EXT%\", doctype=\"tex\")"
      ],
      "env": {}
    },
    {
      "name": "jnw2texmintex",
      "command": "julia",
      "args": [
        "-e",
        "using Weave; weave(\"%DOC_EXT%\", doctype=\"texminted\")"
      ],
      "env": {}
    },
    {
      "name": "tectonic",
      "command": "tectonic",
      "args": [
        "--synctex",
        "--keep-logs",
        "%DOC%.tex"
      ],
      "env": {}
    }
  ],

```

{{% /collapseable %}}

### (Optional) Autobuild on push to trunk github action

{{% collapseable %}}

```yaml
name: publish pdf

on:
  push:
    branches:
      - main  # Set a branch to deploy

jobs:
  deploy:
      runs-on: ubuntu-latest
      steps:
        - name: Set up Git repository
          uses: actions/checkout@v2

        - name: Compile LaTeX document
          uses: xu-cheng/latex-action@v2
          with:
            latexmk_use_lualatex: true
            root_file: "*.tex"
            glob_root_file: true

        - name: Bump version and push tag
          id: tag_version
          uses: mathieudutour/github-tag-action@v6.0
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}

        - name: Create a GitHub release
          uses: ncipollo/release-action@v1
          with:
            tag: ${{ steps.tag_version.outputs.new_tag }}
            name: Release ${{ steps.tag_version.outputs.new_tag }}
            body: ${{ steps.tag_version.outputs.changelog }}

        - name: Release
          uses: softprops/action-gh-release@v1
          with:
            tag_name: ${{ steps.tag_version.outputs.new_tag }}
            files: |
              *.pdf
              *.tex
```

{{% /collapseable %}}

## Development

### Package manager

Using a package manager makes life a little easier here's what I use on windows [Choco](https://chocolatey.org/).

### Version Control

```sh
choco install git.install -y
```

For personal and academic work I use [git](https://git-scm.com/) with [github](https://github.com/) for a production environment. I also maintain a local [gogs](https://gogs.io/) server for local mirrors.

I interact with local repositories with the vscode vs plugin. Rarely I use the comand line if vscode can't do what I need. I've found [gitkraken](https://www.gitkraken.com/) is a very accessable tool for new git users.

For professional work I use [SVN](https://tortoisesvn.net/).

### C/C++

#### Code editor

I use [vscode](https://code.visualstudio.com/) for editing code.

#### Debugger

I use [visual studio 2022](https://visualstudio.microsoft.com/vs/) for debugging.

#### Compiler and build

```sh
choco  install ninja -y
choco  install cmake -y
choco  install llvm -y
```

Set the following:

```sh
CC="C:\Program Files\LLVM\bin\clang.exe"
CXX="C:\Program Files\LLVM\bin\clang++.exe"
```

#### Documentation engine/s

Doxygen is basically the only option but I present the results with [sphinx](https://www.sphinx-doc.org/en/master/) and [breathe](https://breathe.readthedocs.io/en/latest/) info [here](https://devblogs.microsoft.com/cppblog/clear-functional-c-documentation-with-sphinx-breathe-doxygen-cmake/)

```sh
choco  install doxygen.install -y
choco install sphinx -y
pip install sphinx_rtd_theme
pip install breathe
```

#### Testing

I use [pytest](https://docs.pytest.org/en/7.3.x/) tests run by cmake as [ctest](https://cmake.org/cmake/help/book/mastering-cmake/chapter/Testing%20With%20CMake%20and%20CTest.html).

```sh
pip install pytest
```

### Python

I use the latest lts python version. I use vscode as an editor and debugger. I use black for code formatting and flake8 for style checking.

```sh
choco install python -y
pip install flake8 flake8-black scipy numpy pytest pytest-flake8 pytest-html pytest-metadata pytest-pylint pytest-reportlog flake8-docstrings flake8-html

```

# Academic Stuff

## Citations

I use [zotero](https://www.zotero.org/) for citation and pdf management between my ipad and windows pc.

## Notes

I take notes with [obsidian](https://obsidian.md/).

## Presentations

### Reveal.js

[Site](https://revealjs.com/)

### Decktape

[Github](https://github.com/astefanutti/decktape)

```sh
decktape -s 1920x1080 <url for presentation> presentation.pdf
```


# Ipad

## Zotero

[Site](https://www.zotero.org/)

## Obsidian

[Site](https://obsidian.md/)

## Goodnotes

[Site](https://www.goodnotes.com/)

## Vectornator

[Site](https://www.vectornator.io/)

## Concepts

[Site](https://concepts.app/en/)

## Anki

[Site](https://ankiweb.net/about)


# Quick Install List

* [vscode](https://code.visualstudio.com/)
* [Choco](https://chocolatey.org/)
* [python](https://www.python.org/)
* [zotero](https://www.zotero.org/)
* [visual studio 2022](https://visualstudio.microsoft.com/vs/)
* [gitkraken](https://www.gitkraken.com/)
* [obsidian](https://obsidian.md/)

```sh
choco  install ninja -y
choco  install cmake -y
choco  install llvm -y
choco  install doxygen.install -y
choco  install sphinx -y

pip install sphinx_rtd_theme
pip install breathe
pip install pytest
pip install flake8 flake8-black scipy numpy pytest pytest-flake8 pytest-html pytest-metadata pytest-pylint pytest-reportlog flake8-docstrings flake8-html
```

## For Tanglenomicon

We're still in a design phase here's a list of DB options we're considering:

* [mongodb](https://www.mongodb.com/)
* [Apache cassandra](https://cassandra.apache.org/_/index.html)

```sh
choco install mongodb
```
