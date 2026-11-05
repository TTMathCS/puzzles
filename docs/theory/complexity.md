# How hard is a puzzle?

*P, NP, and why some puzzles are hard in a precise, provable sense*

Some puzzles feel hard and are easy once you know the trick: the [bridges of Königsberg](../math/konigsberg.md) need
only a count. Others stay hard however clever you are. Computer science can make this difference exact. It asks not
"how hard is this particular puzzle?" but "**how fast does the work grow as the puzzle gets bigger?**", and the answer
leads to the most famous open question in mathematics and computing, P versus NP, with a million-dollar prize on it.

## Try it: checking versus finding

Here are two jobs.

1. Someone hands you a filled-in Sudoku and says it's correct. Check it.
2. Someone hands you an empty-ish Sudoku. Solve it.

The first takes a minute: look along each row, column and box. The second can take an hour. Now imagine the grid were
$100 \times 100$ instead of $9 \times 9$. Checking grows gently: there are more rows to look along, that's all.
Solving might grow out of all proportion. That gap, between **checking** an answer and **finding** one, is what this
page is about.

## How to think about it: fast means polynomial

Measure a puzzle by its size $n$: the number of squares, discs or islanders. An algorithm is called **fast**, or
**polynomial-time**, if its work grows like $n$, $n^2$, $n^3$, or some fixed power of $n$. It is **exponential** if
the work grows like $2^n$, doubling with each step up in size.

| $n$ | $n^2$ | $n^3$ | $2^n$ |
|---|---|---|---|
| 10 | 100 | 1,000 | 1,024 |
| 50 | 2,500 | 125,000 | about $10^{15}$ |
| 100 | 10,000 | 1,000,000 | about $10^{30}$ |

A computer doing a billion steps a second finishes $n^3$ for $n = 100$ in a thousandth of a second. $2^{100}$ steps
would take about 40 trillion years. Exponential growth is why "just try everything" fails, and why the clever ideas on
[Search and backtracking](search.md) matter so much, though they can't always rescue us.

## P and NP

- **P** is the class of yes-or-no problems that can be **solved** in polynomial time. Examples: "does this graph have
  an Euler path?" (count the odd vertices), "is this Lights Out pattern solvable?" (Gaussian elimination), "can this
  15-puzzle position be solved?" (count inversions).
- **NP** is the class of yes-or-no problems where a "yes" answer can be **checked** in polynomial time, if someone
  hands you the solution. "Does this Sudoku have a solution?" is in NP: given a filled grid, checking is easy.

Every problem in P is in NP. The great open question is whether **P = NP**: is every problem whose answers are easy
to check also easy to solve? Almost every expert believes **no**, but nobody has a proof. It is one of the seven
Millennium Prize Problems of the Clay Mathematics Institute, with a prize of one million US dollars.

## NP-complete: the hardest problems in NP

In 1971 Stephen Cook (in Toronto) and, independently, Leonid Levin showed that one problem, **SAT** (can these
true-or-false conditions all be satisfied at once?), is the hardest in NP: every NP problem can be translated into
SAT efficiently. A year later Richard Karp showed 21 more problems are just as hard. Such problems are called
**NP-complete**. If any one of them has a fast algorithm, they all do, and P = NP.

Many puzzles have been proved NP-complete, in versions where the board can be as large as you like:

| Puzzle | NP-complete since |
|---|---|
| [Sudoku](../logic/sudoku.md) on an $n^2 \times n^2$ grid | Yato and Seta, 2003 |
| [Nonograms](../logic/nonograms.md) | Ueda and Nagao, 1996 |
| Minesweeper (is this board consistent?) | Richard Kaye, 2000 |
| Tetris (can you clear the board, knowing the pieces?) | Demaine, Hohenberger and Liben-Nowell, 2003 |
| [n-queens completion](../math/eight-queens.md) | Gent, Jefferson and Nightingale, 2017 |
| Knights and knaves with many islanders (it is SAT) | Cook, 1971 |
| Shortest solution to the $n \times n$ [sliding puzzle](../math/fifteen-puzzle.md) | Ratner and Warmuth, 1990 (NP-hard) |

The proofs are themselves puzzles: you show, for example, how to build a Minesweeper board that works like an
electrical circuit, with wires and logic gates made of mines, so that solving the board would solve any SAT problem.

## Going deeper

??? info "Even harder: PSPACE and beyond"
    Some puzzles are harder than NP. Sliding-block puzzles like *Rush Hour*, where solutions can need exponentially
    many moves, are **PSPACE-complete** (Gary Flake and Eric Baum, 2002; Robert Hearn and Erik Demaine, 2005).
    Generalised chess and Go on an $n \times n$ board are **EXPTIME-complete**: provably not solvable in polynomial
    time, P = NP or not.

??? info "Why hard puzzles are still fun"
    NP-completeness is about the *worst* case on *huge* boards. A 9 × 9 Sudoku is tiny, and puzzles printed in
    newspapers are designed to be solvable by logic. Even for large industrial problems, SAT solvers routinely handle
    millions of variables, because real instances have structure that the worst case lacks. Hardness tells you not to
    expect a magic formula, not that you will fail.

??? info "Hardness keeps secrets"
    Modern cryptography depends on problems believed to be hard: factoring large numbers, or finding discrete
    logarithms. These are not known to be NP-complete, but no fast method is known either, and a proof that P = NP
    would put much of today's cryptography in doubt. See [Cryptography](https://cryptography.akadian.ca/).

**See also:** [Search and backtracking](search.md) · [Sudoku](../logic/sudoku.md) · [Knights and knaves](../logic/knights-and-knaves.md)

??? note "Sources"
    - Stephen A. Cook, "The complexity of theorem-proving procedures", *Proceedings of the 3rd ACM Symposium on
      Theory of Computing*, 1971, 151–158.
    - Richard M. Karp, "Reducibility among combinatorial problems", in *Complexity of Computer Computations*, Plenum, 1972.
    - Michael R. Garey, David S. Johnson, *Computers and Intractability: A Guide to the Theory of NP-Completeness*,
      Freeman, 1979.
    - Richard Kaye, "Minesweeper is NP-complete", *The Mathematical Intelligencer* 22 (2000), 9–15.
    - Erik D. Demaine, Susan Hohenberger, David Liben-Nowell, "Tetris is hard, even to approximate", *COCOON* 2003.
    - Robert A. Hearn, Erik D. Demaine, *Games, Puzzles, and Computation*, A K Peters, 2009.
    - Clay Mathematics Institute, "P vs NP", claymath.org/millennium-problems.
