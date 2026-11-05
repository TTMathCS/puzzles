# Eight queens

*Place eight queens on a chessboard so that no two attack each other*

A chess queen attacks along her row, her column and both diagonals, as far as the board goes. Can you place eight of
them on an ordinary 8 × 8 board so that no queen attacks another? The chess player Max Bezzel asked this in a Berlin
chess magazine in 1848. Carl Friedrich Gauss took an interest, and the puzzle has been a favourite of mathematicians,
and later of computer scientists, ever since.

## Try it

Tap a square to place a queen; tap again to remove her. Squares under attack are shaded, and queens that attack each
other turn red. Try smaller boards first: 4 × 4 is a good warm-up, and one size has no answer at all.

<div class="pz" data-pz="queens" data-n="8"></div>

## How to think about it

Eight queens, eight rows, and no two queens in one row: so there is **exactly one queen in each row**. The same goes
for columns. That already shrinks the puzzle enormously. Instead of choosing 8 squares out of 64, you choose, for each
row, which column its queen is in, and the columns must all be different.

Now work **row by row**. Put a queen in the first safe square of row 1. Move to row 2 and put a queen in its first
safe square. Carry on. Sooner or later you reach a row with no safe square. Don't start over: go **back** one row,
move that queen to its next safe square, and carry on from there. This is **backtracking**, and it always finds a
solution if there is one. The **Show a solution** button uses it.

## Why it works: counting the search

| Way of searching | Positions to check |
|---|---|
| Any 8 of the 64 squares | $\binom{64}{8} = 4{,}426{,}165{,}368$ |
| One queen per row | $8^8 = 16{,}777{,}216$ |
| One per row and per column | $8! = 40{,}320$ |
| Backtracking (rows, columns and diagonals checked as you go) | 2,056 queens placed, in all |

Each idea cuts the work by a large factor, and checking the diagonals **as you go**, rather than at the end, cuts it
again. This is the heart of backtracking: throw away a bad partial answer as early as possible, and you never look at
the millions of complete answers that would have started with it.

The search finds **92** solutions for the 8 × 8 board. Many are the same pattern turned or reflected: there are
**12** essentially different solutions. One of them, shown here column by column for rows 1 to 8, is
1, 5, 8, 6, 3, 7, 2, 4.

## How many for other boards?

| Board | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Solutions | 1 | 0 | 0 | 2 | 10 | 4 | 40 | 92 | 352 | 724 |

Every board from 4 × 4 up has at least one solution, and there are simple formulas that write one down for any size
directly, without searching. Counting *all* of them is another matter: the numbers have been computed only up to the
27 × 27 board, where there are about $2.3 \times 10^{17}$.

## Going deeper

??? info "How fast does the count grow?"
    In 2021 Michael Simkin proved that the number of solutions on an $n \times n$ board is roughly
    $(0.143\,n)^n$ for large $n$. For $n = 8$ the formula is far off, but it captures how explosively the count
    grows. The proof uses probability: it imagines queens placed at random and measures how likely a placement is to
    have no attacks.

??? info "A solution for every n, with no search"
    For an even $n$ that leaves remainder 0 or 4 when divided by 6, put queens at (row $i$, column $2i$) for
    $i = 1, \dots, n/2$ and at (row $n/2 + i$, column $2i - 1$) for the rest. For an odd $n$ one more than such a
    number, do that for $n - 1$ and add a queen in the corner (row $n$, column $n$). The remaining sizes need a small
    adjustment. Such explicit constructions go back to 1874 (Günther and
    Glaisher) and 1969 (Hoffman, Loessi and Moore).

??? info "Extending a partial placement is hard"
    Here is a twist: some queens are already on a large board, and you must add more to complete a solution. In 2017
    Ian Gent, Christopher Jefferson and Peter Nightingale proved this version **NP-complete**, so it is as hard as
    Sudoku in general. See [How hard is a puzzle?](../theory/complexity.md)

??? info "Other pieces"
    How many rooks fit with no attacks? $n$, in $n!$ ways. Bishops? $2n - 2$. Kings? One per 2 × 2 block, so 16 on a
    chessboard. Knights? 32, all on squares of one colour, since a knight always jumps to the other colour. And the
    smallest number of queens that together attack or occupy every square of a chessboard is 5.

**See also:** [Search and backtracking](../theory/search.md) · [The knight's tour](knights-tour.md) · [Counting](../theory/counting.md)

??? note "Sources"
    - Max Bezzel, *Schachzeitung* 3 (1848), 363 (the problem posed), and Franz Nauck, *Illustrirte Zeitung*, 1850
      (the 92 solutions).
    - Edsger W. Dijkstra, *A Short Introduction to the Art of Programming*, EWD316, 1971 (backtracking for the queens).
    - Jordan Bell, Brett Stevens, "A survey of known results and research areas for n-queens", *Discrete Mathematics*
      309 (2009), 1–31.
    - Michael Simkin, "The number of n-queens configurations", *Advances in Mathematics* 427 (2023), 109127.
    - Ian P. Gent, Christopher Jefferson, Peter Nightingale, "Complexity of n-Queens Completion", *Journal of
      Artificial Intelligence Research* 59 (2017), 815–848.
    - OEIS A000170, "Number of ways of placing n nonattacking queens on an n × n board".
