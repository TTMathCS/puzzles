# The knight's tour

*Can a knight visit every square of the board exactly once?*

A chess knight moves in an L: two squares one way and one square sideways. A **knight's tour** is a journey in which
the knight lands on every square of the board exactly once. People have been finding tours for more than a thousand
years: they appear in Arabic chess manuscripts and in a 9th-century Sanskrit poem by Rudrata, whose verses spell out a
tour on half a board. Leonhard Euler wrote the first mathematical study of them in 1759.

## Try it

Tap any square to put the knight down, then tap a ringed square to jump. Numbers show the order of your visits. On the
5 × 5 board a tour is possible from some squares and not others. Stuck? **Hint** suggests a move by Warnsdorff's
rule, explained below.

<div class="pz" data-pz="knight" data-n="5"></div>

## How to think about it: go where it's hardest first

The squares that cause trouble are the ones with few ways in and out: corners have only two knight moves, and edge
squares three or four. If you leave a corner for later, by the time you come back both of its neighbours may be used
up, and the corner can never be reached.

In 1823 H. C. von Warnsdorff gave a simple rule built on this idea:

> **Always jump to the square that has the fewest onward moves still available.**

Visit the awkward squares while you still can, and save the well-connected middle squares for later, when you will
need their flexibility. The rule needs no look-ahead and no undoing, and on an 8 × 8 board it almost always produces a
complete tour on the first try, from any starting square. (When two squares tie, the choice can matter; with an
unlucky tie-break it occasionally gets stuck.) The **Hint** button uses this rule. Try following it on the 8 × 8 board.

## Why it works: colours and counting

**Colours.** A knight's jump always lands on the other colour: from white to black or black to white. So a tour
alternates colours. On a 5 × 5 board there are 13 squares of one colour (the corners' colour) and 12 of the other.
A path of 25 squares alternating colours must start and end on the colour with 13. So on a 5 × 5 board, **a tour
can start only on a corner-coloured square**. Try starting next to a corner: you can't finish.

**Closed tours.** A tour is **closed** if the last square is a knight's move from the first, so the knight could jump
home and go round again. On a board with an odd number of squares, a closed tour is impossible, for the same colour
reason: a closed loop alternates colours, so it needs as many white squares as black. Allen Schwenk proved in 1991
exactly which rectangular boards have closed tours. An $m \times n$ board with $m \le n$ has one **unless**

- $m$ and $n$ are both odd, or
- $m$ is 1, 2 or 4, or
- $m = 3$ and $n$ is 4, 6 or 8.

So the ordinary 8 × 8 board has closed tours, and so do 6 × 6 and 10 × 3 boards, but no 4 × $n$ board does.

**How many?** The 8 × 8 board has exactly **26,534,728,821,064** closed tours (counting each loop once in each
direction), found by Brendan McKay in 1997 and, independently, by Wegener and Löbbing. The number of open tours is
much larger and has only been estimated.

## Going deeper

??? info "Tours as Hamiltonian paths"
    Draw a dot for each square and a line between two dots when a knight can jump between them. A knight's tour is a
    path through this **graph** visiting every dot once: a **Hamiltonian path**. A closed tour is a **Hamiltonian
    cycle**. For general graphs, deciding whether such a path exists is NP-complete, one of the classic hard
    problems. The knight's graph is special: it is regular enough that Warnsdorff's rule and divide-and-conquer
    methods find tours on huge boards in a time proportional to the number of squares. See
    [How hard is a puzzle?](../theory/complexity.md)

??? info "Joining small tours into big ones"
    Euler's 1759 paper showed how to join tours of smaller pieces into a tour of a bigger board, and how to make
    tours with symmetry. Modern methods (Parberry, 1997) split a big board into blocks of about 6 × 6 to 8 × 8, put
    a prepared tour in each, and stitch neighbouring blocks together by swapping two jumps where they meet.

??? info "Magic knight's tours"
    Number the squares in the order the knight visits them. Can the numbers form a **magic square**, every row and
    column adding to 260? On 8 × 8 the rows and columns can all add to 260, but the diagonals can't both: in 2003 a
    complete computer search found that there are exactly 140 such "semi-magic" tours, and no fully magic one. See
    [Magic squares](magic-squares.md).

??? info "Rudrata's poem"
    The Sanskrit poet Rudrata, in his *Kavyalankara* (9th century), wrote a verse in which the syllables, read in the
    order a knight would visit the squares of half a chessboard, give the same verse again. It is the oldest known
    knight's tour, and an early example of mathematics written as poetry.

**See also:** [Eight queens](eight-queens.md) · [The bridges of Königsberg](konigsberg.md) · [Search and backtracking](../theory/search.md)

??? note "Sources"
    - Leonhard Euler, "Solution d'une question curieuse qui ne paroit soumise à aucune analyse", *Mémoires de
      l'Académie Royale des Sciences et Belles Lettres de Berlin* 15 (1759, published 1766), 310–337.
    - H. C. von Warnsdorff, *Des Rösselsprunges einfachste und allgemeinste Lösung*, Schmalkalden, 1823.
    - Allen J. Schwenk, "Which rectangular chessboards have a knight's tour?", *Mathematics Magazine* 64 (1991), 325–332.
    - Brendan D. McKay, "Knight's tours of an 8 × 8 chessboard", Technical Report TR-CS-97-03, Australian National
      University, 1997.
    - Ian Parberry, "An efficient algorithm for the Knight's tour problem", *Discrete Applied Mathematics* 73 (1997), 251–260.
    - Jean-Charles Meyrignac, Guenter Stertenbrink, "Computing magic knight tours", 2003 (the 140 semi-magic tours).
    - George Jelliss, *Knight's Tour Notes*, mayhematics.com (history, including Rudrata).
