# Puzzles

Logic puzzles, math puzzles and the ideas behind them: https://puzzles.akadian.ca/ (part of Mars – your new home,
www.akadian.ca). Built with MkDocs Material in the same look as cs.akadian.ca, math.akadian.ca and
cryptography.akadian.ca; GitHub Pages publishes it on every push to `main` (`.github/workflows/pages.yml`), so a push
here is a publish. Everything on the site is AI-created and every page says so.

## Layout

```
mkdocs.yml                the site and its menu
docs/index.md             the first page (banner in overrides/home.html)
docs/start/               six warm-up puzzles (Beginner)
docs/logic/               logic puzzles, one page each
docs/math/                math puzzles, one page each, most playable
docs/theory/              the ideas behind: counting, invariants, game theory, search, complexity
docs/javascripts/puzzles.js   every playable puzzle; a page asks for one with <div class="pz" data-pz="NAME"></div>
docs/javascripts/levels.js    which level badge each page gets
docs/javascripts/reader.js, docs/stylesheets/reader.css, overrides/main.html   shared with cs, math, cryptography: copy changes to all
docs/stylesheets/puzzles.css  the AI-created tag, cards and the puzzles' look
tools/hero/               make_svg.py draws the banner (the queens, Hanoi and magic square are computed), render.js makes the WebP
```

## Playable puzzles (data-pz)

`hanoi` (data-discs), `fifteen`, `nim` (data-heaps="3,4,5", data-sum="yes" shows the binary), `queens` (data-n),
`knight` (data-n), `lights` (data-n), `monty`, `sudoku` (data-n = which of the three puzzles), `nonogram`
(data-pic = rocket, heart, dome), `kk` (data-people="A,B" data-answer="knave,knight"). Nothing is saved or sent.

## Every page has the same parts

Title and a one-line summary in italics; Try it (the puzzle); How to think about it; Why it works; Going deeper
(closed boxes); See also; Sources (closed). Answers are always closed. Keep each page under about 1,300 words, a five
to six minute read.

## Build

```
pip install "mkdocs-material>=9.6,<9.7"
mkdocs build --strict
```
