# Nonograms

*Numbers along the edges of a grid that, solved, draw a picture*

A nonogram is a grid of empty squares with numbers beside each row and above each column. The numbers say how long
the runs of filled squares are, in order. Fill the right squares and a picture appears. The puzzles were invented
around 1987, independently, by Non Ishida, a graphic designer in Tokyo, and Tetsuya Nishio, a puzzle maker. The name
*nonogram*, after Non Ishida, was coined by James Dalgety in Britain, where *The Sunday Telegraph* began printing them
in 1990. They are also called Griddlers, Paint by Numbers and Picross.

## Try it

The clue "1 3" beside a row means: somewhere in the row there is a run of 1 filled square, then, after at least one
gap, a run of 3. Tap a square to fill it. Switch the button to mark squares you are sure are **empty** with ✕.

<div class="pz" data-pz="nonogram" data-pic="rocket"></div>

Something a little bigger, a dome like the ones in the Mars city:

<div class="pz" data-pz="nonogram" data-pic="dome"></div>

## How to think about it

**Full rows first.** In a row of 5, the clue "5" fills the row; so does "2 2" (2 + 1 gap + 2 = 5). Any time the
runs and the single gaps between them add up to the row's length, there is only one way to place them.

**Overlap.** In a row of 10 with the clue "7", slide the run as far left as it goes (squares 1–7), then as far right
(squares 4–10). Squares 4 to 7 are filled in both positions, so they are filled in every position. In general a run
of length $k$ in a row of length $n$ has $2k - n$ certain squares when $2k > n$. This one trick starts almost every
nonogram.

**Edges and walls.** A filled square next to the edge, or next to a square you know is empty, starts a run: if the
row's first clue is 3 and its first square is filled, the next two are filled too, and the one after them is empty.

**Rows and columns take turns.** Every square you settle in a row is new information for its column, and the other
way round. Good nonograms are solved entirely by passing back and forth like this, never guessing.

## Why it works: a line is a small puzzle

Each line on its own is easy to solve completely: list every way to place its runs, and keep only the squares that
are the same in all of them. A row of 10 with clue "3 2" has 15 placements, so a computer checks them instantly. The
whole grid is harder, because rows and columns must agree. Solving one line after another, repeatedly, until nothing
changes is called **constraint propagation**, the same idea that solves the [zebra puzzle](zebra-puzzle.md) and
most [Sudoku](sudoku.md).

How many placements does a line have? A row of length $n$ with $r$ runs adding to $s$ squares has
$n - s - (r - 1)$ "spare" empty squares to share out among the $r + 1$ gaps (before, between and after the runs).
Counting the ways to share them is a classic [counting](../theory/counting.md) problem, and the answer is

$$
\binom{n - s + 1}{r}.
$$

For the row of 10 with clue "3 2": $\binom{10 - 5 + 1}{2} = \binom{6}{2} = 15$, as claimed.

## Going deeper

??? info "When propagation is not enough"
    Some nonograms can't be finished line by line: at some point every row and column, taken alone, has several
    possibilities. Then a solver must suppose ("if this square is filled...") and follow the consequences, which is
    [backtracking](../theory/search.md). Puzzle setters try hard to avoid this, and good puzzle apps check every
    published puzzle with a line-solver first.

??? info "Two pictures, one set of clues"
    The clues don't always pin down one picture. The simplest example is a 2 × 2 grid with clues "1" on both rows and
    both columns: the two diagonals both fit. Any picture containing this pattern, two squares filled on one diagonal
    of a rectangle and empty on the other, can be flipped without changing a single clue. A well-made nonogram has
    exactly one solution; this page accepts any picture that matches all the clues.

??? info "Hard in general"
    Deciding whether a nonogram has any solution at all is **NP-complete** (Nobuhisa Ueda and Tadaaki Nagao, 1996).
    So, as with Sudoku, there is no known method that is fast for every large puzzle. See
    [How hard is a puzzle?](../theory/complexity.md)

??? info "Tomography"
    A nonogram is a toy version of a real problem: recovering a picture from its **projections**, the counts of
    filled squares along lines. Medical CT scanners solve a continuous version of it, rebuilding a slice of the body
    from X-ray measurements taken from many angles. With only rows and columns, many different pictures share the
    same counts, which is why nonograms give the *runs*, not just the totals.

**See also:** [Sudoku](sudoku.md) · [Counting](../theory/counting.md) · [Search and backtracking](../theory/search.md)

??? note "Sources"
    - "Nonogram", *Wikipedia* (history: Non Ishida, Tetsuya Nishio, James Dalgety and *The Sunday Telegraph*).
    - Nobuhisa Ueda, Tadaaki Nagao, "NP-completeness results for NONOGRAM via parsimonious reductions",
      Tokyo Institute of Technology technical report TR96-0008, 1996.
    - K. Joost Batenburg, Walter A. Kosters, "Solving Nonograms by combining relaxations", *Pattern Recognition*
      42 (2009), 1672–1683.
    - Gabor T. Herman, Attila Kuba (eds.), *Discrete Tomography: Foundations, Algorithms and Applications*,
      Birkhäuser, 1999.
