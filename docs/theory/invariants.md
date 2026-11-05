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

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 360" role="img" aria-labelledby="sk-p-board-t"><title id="sk-p-board-t">A chessboard with two opposite corners removed leaves 30 squares of one colour and 32 of the other; every domino covers one of each, so 31 dominoes cannot cover it</title><defs><filter id="sk-p-board-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-p-board-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-p-board-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-p-board-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-p-board-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="360" filter="url(#sk-p-board-paper)"/><g filter="url(#sk-p-board-pen)"><text x="30" y="44" class="h">Two corners gone</text><path class="p rust" d="M82 70 L114 70 L114 102 L82 102Z"/><path class="p room" d="M114 70 L146 70 L146 102 L114 102Z"/><path class="p rust" d="M146 70 L178 70 L178 102 L146 102Z"/><path class="p room" d="M178 70 L210 70 L210 102 L178 102Z"/><path class="p rust" d="M210 70 L242 70 L242 102 L210 102Z"/><path class="p room" d="M242 70 L274 70 L274 102 L242 102Z"/><path class="p rust" d="M274 70 L306 70 L306 102 L274 102Z"/><path class="p rust" d="M50 102 L82 102 L82 134 L50 134Z"/><path class="p room" d="M82 102 L114 102 L114 134 L82 134Z"/><path class="p rust" d="M114 102 L146 102 L146 134 L114 134Z"/><path class="p room" d="M146 102 L178 102 L178 134 L146 134Z"/><path class="p rust" d="M178 102 L210 102 L210 134 L178 134Z"/><path class="p room" d="M210 102 L242 102 L242 134 L210 134Z"/><path class="p rust" d="M242 102 L274 102 L274 134 L242 134Z"/><path class="p room" d="M274 102 L306 102 L306 134 L274 134Z"/><path class="p room" d="M50 134 L82 134 L82 166 L50 166Z"/><path class="p rust" d="M82 134 L114 134 L114 166 L82 166Z"/><path class="p room" d="M114 134 L146 134 L146 166 L114 166Z"/><path class="p rust" d="M146 134 L178 134 L178 166 L146 166Z"/><path class="p room" d="M178 134 L210 134 L210 166 L178 166Z"/><path class="p rust" d="M210 134 L242 134 L242 166 L210 166Z"/><path class="p room" d="M242 134 L274 134 L274 166 L242 166Z"/><path class="p rust" d="M274 134 L306 134 L306 166 L274 166Z"/><path class="p rust" d="M50 166 L82 166 L82 198 L50 198Z"/><path class="p room" d="M82 166 L114 166 L114 198 L82 198Z"/><path class="p rust" d="M114 166 L146 166 L146 198 L114 198Z"/><path class="p room" d="M146 166 L178 166 L178 198 L146 198Z"/><path class="p rust" d="M178 166 L210 166 L210 198 L178 198Z"/><path class="p room" d="M210 166 L242 166 L242 198 L210 198Z"/><path class="p rust" d="M242 166 L274 166 L274 198 L242 198Z"/><path class="p room" d="M274 166 L306 166 L306 198 L274 198Z"/><path class="p room" d="M50 198 L82 198 L82 230 L50 230Z"/><path class="p rust" d="M82 198 L114 198 L114 230 L82 230Z"/><path class="p room" d="M114 198 L146 198 L146 230 L114 230Z"/><path class="p rust" d="M146 198 L178 198 L178 230 L146 230Z"/><path class="p room" d="M178 198 L210 198 L210 230 L178 230Z"/><path class="p rust" d="M210 198 L242 198 L242 230 L210 230Z"/><path class="p room" d="M242 198 L274 198 L274 230 L242 230Z"/><path class="p rust" d="M274 198 L306 198 L306 230 L274 230Z"/><path class="p rust" d="M50 230 L82 230 L82 262 L50 262Z"/><path class="p room" d="M82 230 L114 230 L114 262 L82 262Z"/><path class="p rust" d="M114 230 L146 230 L146 262 L114 262Z"/><path class="p room" d="M146 230 L178 230 L178 262 L146 262Z"/><path class="p rust" d="M178 230 L210 230 L210 262 L178 262Z"/><path class="p room" d="M210 230 L242 230 L242 262 L210 262Z"/><path class="p rust" d="M242 230 L274 230 L274 262 L242 262Z"/><path class="p room" d="M274 230 L306 230 L306 262 L274 262Z"/><path class="p room" d="M50 262 L82 262 L82 294 L50 294Z"/><path class="p rust" d="M82 262 L114 262 L114 294 L82 294Z"/><path class="p room" d="M114 262 L146 262 L146 294 L114 294Z"/><path class="p rust" d="M146 262 L178 262 L178 294 L146 294Z"/><path class="p room" d="M178 262 L210 262 L210 294 L178 294Z"/><path class="p rust" d="M210 262 L242 262 L242 294 L210 294Z"/><path class="p room" d="M242 262 L274 262 L274 294 L242 294Z"/><path class="p rust" d="M274 262 L306 262 L306 294 L274 294Z"/><path class="p rust" d="M50 294 L82 294 L82 326 L50 326Z"/><path class="p room" d="M82 294 L114 294 L114 326 L82 326Z"/><path class="p rust" d="M114 294 L146 294 L146 326 L114 326Z"/><path class="p room" d="M146 294 L178 294 L178 326 L146 326Z"/><path class="p rust" d="M178 294 L210 294 L210 326 L178 326Z"/><path class="p room" d="M210 294 L242 294 L242 326 L210 326Z"/><path class="p rust" d="M242 294 L274 294 L274 326 L242 326Z"/><path class="p red" d="M50 70 L82 102 M82 70 L50 102"/><path class="p red" d="M274 294 L306 326 M306 294 L274 326"/><path class="p gold" d="M370 120 L434 120 L434 152 L370 152Z"/><path class="p f" d="M402 120 L402 152"/><text x="460" y="142" class="s">a domino always covers</text><text x="460" y="162" class="s">one light, one dark</text><text x="370" y="230" class="l">62 squares left:</text><text x="370" y="256" class="s">30 light, 32 dark</text><text x="370" y="276" class="s">(both cut corners were light)</text><text x="370" y="320" class="s">31 dominoes would need 31 of each.</text><text x="370" y="340" class="s">Impossible, without trying a single one.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

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

<figure class="play" data-play="chameleons"><span class="ai-tag">AI-created</span><figcaption><b>Watch it.</b> Press Play to let the chameleons meet at random. The three counts wander up and down, but the remainder of green minus red, divided by 3, never changes.</figcaption></figure>

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
