# Search and backtracking

*How a computer solves a puzzle: trying things, cleverly*

A computer has no flashes of insight. It solves puzzles by **search**: trying possibilities in an organised way until
one works. Done naively, search is hopeless, because the number of possibilities explodes (see [Counting](counting.md)).
Done well, it solves Sudoku in a blink and finds the fewest moves for the 15 puzzle. The difference is a handful of
ideas, and every one of them is something a good human solver does too.

## Try it

Solve a small puzzle the way a computer would. Place **four queens** on a 4 × 4 board so that none attacks another.
Go row by row: in each row put the queen in the leftmost safe square. When a row has no safe square, go back to the
row before and move its queen to the next safe square. Count how many times you have to go back.

??? success "Answer"
    Row 1: column 1. Row 2: column 3 (columns 1 and 2 are attacked). Row 3: no safe square. **Back** to row 2:
    column 4. Row 3: column 2. Row 4: no safe square. **Back** to row 3: no more squares. **Back** to row 2: no more.
    **Back** to row 1: column 2. Row 2: column 4. Row 3: column 1. Row 4: column 3. Solved: columns 2, 4, 1, 3, after
    going back four times.

You can watch a computer do the same, much faster, with **Show a solution** on [Eight queens](../math/eight-queens.md)
and **Solve it** on [Sudoku](../logic/sudoku.md).

## Backtracking: build, check, undo

Many puzzles ask you to make a series of choices: a column for each queen, a digit for each square, a colour for each
house. **Backtracking** makes the choices one at a time, and after each one asks: *could this still lead to a
solution?* If not, it undoes the last choice and tries the next option.

The power is in checking **early**. A partial placement of three queens that already attack each other is thrown
away, and with it every one of the thousands of complete placements that would have started with it. Picture all the
possibilities as a tree: each choice is a branch. Backtracking walks the tree but **prunes** dead branches as soon as
they are found, so it only ever sees a tiny part of it. For eight queens, the full tree of "one queen per row" has
over 16 million leaves; backtracking places only about two thousand queens.

Two refinements make it much faster still:

- **Most constrained first.** Choose next the square, house or row with the *fewest* options left. In Sudoku, fill
  the square that can only hold one or two digits before the one that could hold six. Fewer options means fewer
  wrong turns. Warnsdorff's rule for the [knight's tour](../math/knights-tour.md) is this idea.
- **Propagate.** After each choice, cross out the options it rules out elsewhere, and fill in anything now forced.
  This is what human solvers of [Sudoku](../logic/sudoku.md) and the [zebra puzzle](../logic/zebra-puzzle.md) do, and
  it often removes the need to guess at all.

## Breadth-first search: the fewest moves

For puzzles that ask for the **shortest** solution, like the [river crossings](../logic/river-crossings.md) or the
fewest moves in a sliding puzzle, the positions form a map (a **graph**), and a different search is best.

**Breadth-first search** explores in rings: first every position one move from the start, then every position two
moves away, and so on, never visiting a position twice. The first time it reaches the goal, it has found a shortest
route, because every shorter route would have been found in an earlier ring. It needs memory for every position it
has seen, which is fine for the farmer's 10 states and impossible for the 15 puzzle's ten trillion.

## Heuristic search: knowing which way is warm

For huge puzzles, the search needs a sense of direction: an estimate of how far each position is from the goal, called
a **heuristic**. For the 15 puzzle a good one is the **Manhattan distance**: for each tile, count the rows plus columns
it is from its home square, and add them up. Every move shifts one tile one square, so the true number of moves left
is never less than this estimate.

The **A\*** algorithm (Peter Hart, Nils Nilsson and Bertram Raphael, 1968) always expands the position with the
smallest

$$
f = g + h,
$$

where $g$ is the number of moves taken so far and $h$ the estimate of moves left. If $h$ never overestimates, A* is
guaranteed to find a shortest solution, and it looks at far fewer positions than breadth-first search. A memory-saving
version, IDA* (Richard Korf, 1985), was the first program to find shortest solutions to random 15 puzzles. Route
planners in maps and characters in video games find their way with the same idea.

## Going deeper

??? info "Depth-first versus breadth-first"
    Backtracking is a **depth-first** search: it follows one line of choices as deep as it can before turning back.
    It needs very little memory (just the current line) but doesn't find the shortest solution first. Breadth-first
    finds the shortest but needs memory for a whole ring of positions. **Iterative deepening** gets both: run
    depth-first with a depth limit of 1, then 2, then 3, ... It repeats some work, but in a branching tree most of
    the work is in the last ring anyway.

??? info "Meeting in the middle"
    To find a route between two known positions, search forwards from the start **and** backwards from the goal at the
    same time, and stop when the two searches meet. If each position has $b$ moves and the answer is $d$ moves long,
    one search looks at about $b^d$ positions but two half-searches look at about $2b^{d/2}$, an enormous saving.
    The same trick breaks some weak ciphers: see [Cryptography](https://cryptography.akadian.ca/).

??? info "God's number for the Rubik's cube"
    In 2010 Tomas Rokicki, Herbert Kociemba, Morley Davidson and John Dethridge proved that every position of the
    Rubik's cube (about $4.3 \times 10^{19}$ of them) can be solved in **20 moves or fewer**. They used symmetry to
    cut the positions into 2.2 billion groups, clever search to solve each group, and about 35 years of computer time
    donated by Google.

**See also:** [Eight queens](../math/eight-queens.md) · [Sudoku](../logic/sudoku.md) · [How hard is a puzzle?](complexity.md)

??? note "Sources"
    - Stuart Russell, Peter Norvig, *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020, chapters 3 and 6.
    - Peter E. Hart, Nils J. Nilsson, Bertram Raphael, "A formal basis for the heuristic determination of minimum
      cost paths", *IEEE Transactions on Systems Science and Cybernetics* 4 (1968), 100–107.
    - Richard E. Korf, "Depth-first iterative-deepening: an optimal admissible tree search", *Artificial
      Intelligence* 27 (1985), 97–109.
    - Donald E. Knuth, *The Art of Computer Programming*, vol. 4B, Addison-Wesley, 2022 (backtracking, dancing links).
    - Tomas Rokicki, Herbert Kociemba, Morley Davidson, John Dethridge, "The diameter of the Rubik's cube group is
      twenty", *SIAM Journal on Discrete Mathematics* 27 (2013), 1082–1105; cube20.org.
