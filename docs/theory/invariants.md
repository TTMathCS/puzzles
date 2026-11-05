# Invariants and parity

*To prove a puzzle is impossible, find something that never changes*

Showing that a puzzle **can** be solved is easy: show a solution. Showing that it **can't** seems much harder. How do
you prove that no sequence of moves, among millions, ever works? The answer is one of the most beautiful ideas in
mathematics: find a quantity that no move can change, an **invariant**, and show that the start and the goal disagree
about it.

## Try it: the cut-off chessboard

An ordinary chessboard has 64 squares. A domino covers exactly two neighbouring squares, so 32 dominoes can cover the
whole board. Now cut off two **opposite corners**, leaving 62 squares. Can 31 dominoes cover what is left?

??? success "Answer"
    No. Every domino, wherever it lies, covers **one white square and one black square**: neighbouring squares always
    have different colours. So 31 dominoes cover 31 white and 31 black squares. But the two opposite corners have the
    **same colour** (say both white), so the cut board has 30 white squares and 32 black ones. No arrangement of
    dominoes can ever fit.

People who try this by hand can spend an hour shuffling dominoes around. The colouring settles it in one sentence, and
that sentence is a proof for every possible arrangement at once. The puzzle was made famous by Max Black in 1946 and
by Martin Gardner, and it is a favourite example of how the right point of view makes a hard problem easy.

## How to think about it

When a puzzle seems impossible, ask: **what does a single move do?** Then look for something it can't change.

- A count that a move always changes by an even amount: its **parity** (even or odd) never changes.
- A total that a move never changes: a sum, a balance, a difference.
- A colour or a pattern that every piece must respect.

If the starting position and the goal have different values of that quantity, no sequence of moves connects them. You
never need to look at the moves themselves again.

## Invariants across this site

| Puzzle | The invariant | What it rules out |
|---|---|---|
| [The 15 puzzle](../math/fifteen-puzzle.md) | parity of (inversions + row of the gap) | half of all starting positions, including Loyd's |
| [The bridges of Königsberg](../math/konigsberg.md) | at a pass-through point, bridges are used in pairs | any walk when four areas have odd degree |
| [The knight's tour](../math/knights-tour.md) | a knight always changes colour | closed tours on odd boards; some starting squares |
| [Lights Out](../math/lights-out.md) | parity of lit squares on each quiet pattern | three quarters of all 5 × 5 patterns |
| [Hat puzzles](../logic/hat-puzzles.md) | parity of the red hats | (here parity *helps*: it carries one bit of information) |

## Another one to try: chameleons

On an island live 13 red, 15 green and 17 blue chameleons. Whenever two of **different** colours meet, both change to
the third colour (a red and a green both become blue, and so on). Can all the chameleons end up the same colour?

??? success "Answer"
    No. Look at the **differences** between the counts, for example green minus red. When red and green meet, both
    go down by 1: no change. When red meets blue, red goes down by 1 and green up by 2: green minus red rises by 3.
    When green meets blue, green goes down 1 and red up 2: the difference falls by 3. So every meeting changes each
    difference by 0 or 3, and each difference **never changes its remainder when divided by 3**.

    Now: red 13, green 15, blue 17. The differences are 2, 2 and 4, leaving remainders 2, 2 and 1. If all chameleons
    were one colour, two counts would be 0, and their difference 0, remainder 0. Impossible.

## Why it works: monovariants too

Sometimes the useful quantity doesn't stay fixed but always moves **one way**. Such a **monovariant** proves that a
process must stop. Example: some people sit at a long table, and at any time two neighbours may swap seats if they are
in the wrong order of height. Will the swapping go on forever? No: each swap reduces the number of out-of-order pairs
(the inversions) by exactly one, and that number can't go below zero. This is exactly why the simple sorting method
called **bubble sort** always finishes. See [Algorithms](https://cs.akadian.ca/).

In the language of mathematics, an invariant is a function $f$ on positions with $f(\text{after}) = f(\text{before})$
for every move. If $f(\text{start}) \ne f(\text{goal})$, the goal can't be reached. The hard part, and the creative
part, is always finding $f$.

## Going deeper

??? info "Gomory's theorem: two cut squares of different colours"
    What if you remove one white and one black square, anywhere on the board? The colouring argument no longer says
    no, and in fact the board can **always** be covered. Ralph Gomory's proof draws a closed path through all 64
    squares, like a racetrack. Removing two squares of different colours cuts the track into two pieces, each with an
    even number of squares, and dominoes can be laid along each piece.

??? info "Conway's soldiers"
    In peg solitaire on an infinite board, soldiers stand anywhere below a horizontal line and jump over each other
    (the jumped soldier is removed). How far above the line can a soldier reach? John Conway proved that the answer
    is **four rows**, never five, using a clever invariant: each square is given a weight, a power of
    $\varphi = \frac{\sqrt5 - 1}{2}$ based on its distance from the target, and no jump increases the total weight.
    Reaching row 5 would need more weight than infinitely many soldiers have.

??? info "Invariants in physics and beyond"
    The idea reaches far beyond puzzles. Conservation of energy and of momentum are invariants of physics. In
    topology, invariants such as the number of holes tell shapes apart: a doughnut can't be turned into a ball without
    tearing. In the [Rubik's cube](https://en.wikipedia.org/wiki/Rubik%27s_Cube_group), parity invariants show that
    if you take the cube apart and put it back randomly, only one time in twelve can it be solved.

**See also:** [Counting](counting.md) · [The 15 puzzle](../math/fifteen-puzzle.md) · [The bridges of Königsberg](../math/konigsberg.md)

??? note "Sources"
    - Arthur Engel, *Problem-Solving Strategies*, Springer, 1998, chapter 1 (the invariance principle; the chameleons).
    - Max Black, *Critical Thinking*, Prentice-Hall, 1946 (the mutilated chessboard).
    - Martin Gardner, *The Scientific American Book of Mathematical Puzzles and Diversions*, Simon and Schuster, 1959.
    - Ross Honsberger, *Mathematical Gems II*, Mathematical Association of America, 1976 (Gomory's theorem).
    - Elwyn Berlekamp, John Conway, Richard Guy, *Winning Ways for Your Mathematical Plays*, vol. 4, 2nd ed., 2004
      (Conway's soldiers).
    - David Joyner, *Adventures in Group Theory: Rubik's Cube, Merlin's Machine, and Other Mathematical Toys*,
      2nd ed., Johns Hopkins, 2008.
