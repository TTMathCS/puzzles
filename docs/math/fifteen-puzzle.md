# The 15 puzzle

*Fifteen sliding tiles, one gap, and a prize nobody could ever win*

Fifteen numbered tiles sit in a 4 × 4 frame with one empty space. You slide a tile next to the gap into it, and the
goal is to put the tiles in order. In early 1880 the puzzle became a craze across the United States and Europe. It
was made by Noyes Chapman, a postmaster in New York State, though the puzzle-writer Sam Loyd later claimed it as his
own, and famously offered $1,000 for a solution to a version that, as we will see, can't be solved.

## Try it

Tap a tile next to the gap to slide it. **Shuffle** gives a new puzzle, always solvable. **Impossible version** gives
the tiles in order except that 14 and 15 are swapped: Loyd's prize puzzle.

<div class="pz" data-pz="fifteen"></div>

## How to think about it

People who solve the puzzle quickly don't think about all fifteen tiles at once. They solve it in layers:

1. Put tiles 1, 2, 3, 4 in the top row. The last two of a row are the tricky part: park 4 under where 3 belongs,
   bring 3 next to it, then turn them both into place together.
2. Do the same for the second row (5–8). Now the top half is finished and never needs to move again.
3. The bottom two rows are a 2 × 4 puzzle. Solve them **a column at a time**, from the left: tiles 9 and 13, then 10
   and 14, then the last 2 × 2, where you just cycle the three tiles round until they fit.

If at the very end two tiles are swapped and everything else is right, no amount of cycling will fix it. That is not
bad luck: it is the subject of the next section.

## Why it works: the impossible half

Read the tiles in order, row by row, ignoring the gap. Count the **inversions**: pairs of tiles where the bigger
number comes first. The solved puzzle has 0. Loyd's version, with 14 and 15 swapped, has exactly 1.

Now see what a move does.

- Sliding a tile **left or right** doesn't change the reading order at all. The inversions don't change.
- Sliding a tile **up or down** moves it past exactly three other tiles in the reading order (the rest of its row and
  the start of the next). Each of those three pairs flips between "in order" and "inverted", so the number of
  inversions changes by an **odd** amount: $\pm1$ or $\pm3$.

So the parity of the inversion count (even or odd) changes exactly when the gap changes row. Combine the two:

$$
\text{(inversions)} + \text{(row of the gap, counted from the bottom)}
$$

Every move changes this total by an even amount, so whether it is **even or odd never changes**. Such a quantity is
called an **invariant**. In the solved puzzle the total is $0 + 1 = 1$, odd. In Loyd's puzzle it is $1 + 1 = 2$,
even. No sequence of moves can turn even into odd, so Loyd's puzzle can never be solved, and his $1,000 was perfectly
safe.

The other half of the story is that **every** position with the right parity can be solved. That was proved in 1879
by William Johnson and William Story in the *American Journal of Mathematics*. So of the $16!$ ways to place the
tiles and gap, exactly half, $16!/2 = 10{,}461{,}394{,}944{,}000$ positions, can be reached.

## How many moves?

Every solvable position can be solved in at most **80** moves, and some positions need all 80. This was proved in
1999 by a large computer search (Adrian Brüngger and colleagues in Zurich), and confirmed in 2005 when Richard Korf
and Peter Schultze searched every one of the ten trillion positions. A computer
finds a shortest solution with a search guided by an estimate of how far each tile is from home, the **Manhattan
distance**: the number of rows plus columns each tile must travel. See [Search and backtracking](../theory/search.md).

## Going deeper

??? info "Parity of a permutation"
    Any rearrangement (permutation) of objects can be done by swapping pairs. A given rearrangement can be done in
    many ways, but either every way uses an even number of swaps, or every way uses an odd number: each permutation is
    **even** or **odd**, and its parity is the parity of its inversion count. The legal positions of the 15 puzzle,
    with the gap in its home corner, are exactly the even permutations of the 15 tiles. See
    [Invariants and parity](../theory/invariants.md).

??? info "Other sizes"
    On a $3 \times 3$ board (the 8 puzzle) there are $9!/2 = 181{,}440$ reachable positions, and the hardest need 31
    moves. On boards with an odd width the rule is simpler: a position is solvable exactly when its inversion count is
    even, because a vertical move then passes an even number of tiles.

??? info "Is it hard?"
    Finding *some* solution is quick, using the layer method above. Finding the *shortest* solution on an
    $n \times n$ board is NP-hard (Daniel Ratner and Manfred Warmuth, 1990), so no known method is fast for every
    large board. See [How hard is a puzzle?](../theory/complexity.md)

**See also:** [Invariants and parity](../theory/invariants.md) · [Lights Out](lights-out.md) · [Tower of Hanoi](tower-of-hanoi.md)

??? note "Sources"
    - Jerry Slocum, Dic Sonneveld, *The 15 Puzzle: How It Drove the World Crazy*, Slocum Puzzle Foundation, 2006
      (the history, and Noyes Chapman's role).
    - Wm. Woolsey Johnson, William E. Story, "Notes on the '15' puzzle", *American Journal of Mathematics* 2 (1879), 397–404.
    - Adrian Brüngger, Ambros Marzetta, Komei Fukuda, Jürg Nievergelt, "The parallel search bench ZRAM and its
      applications", *Annals of Operations Research* 90 (1999), 45–63 (the 80-move bound for the 15 puzzle).
    - Richard E. Korf, Peter Schultze, "Large-scale parallel breadth-first search", *AAAI* 2005.
    - Daniel Ratner, Manfred Warmuth, "The (n²−1)-puzzle and related relocation problems", *Journal of Symbolic
      Computation* 10 (1990), 111–137.
