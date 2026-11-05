# Sudoku

*Nine rows, nine columns, nine boxes, and the digits 1 to 9 in each*

Sudoku needs no arithmetic at all: the digits could just as well be nine colours or nine letters. It is pure logic
about where things can and cannot go. The modern puzzle was invented by Howard Garns, a retired architect in
Indiana, and published in 1979 as *Number Place*. It became *Sudoku* in Japan in the 1980s and swept the world's
newspapers in 2004–2005.

## Try it

Fill every empty square so that each row, each column and each 3 × 3 box contains the digits 1 to 9 exactly once.
Type a digit into a square; any digit that clashes with another in its row, column or box turns red.

<div class="pz" data-pz="sudoku"></div>

The first puzzle is a famous one: it has appeared in the Wikipedia article on Sudoku for many years. All three have
exactly one solution; the page checked them with the same solver the **Solve it** button runs.

## How to think about it: two questions

Almost every step in an ordinary Sudoku answers one of two questions.

**Which digits can go in this square?** Look along the square's row, column and box, and cross out every digit you
see. If only one digit is left, it must go there. This is called a **naked single**.

**Where can this digit go in this row (or column, or box)?** Take the digit 7 and a box that doesn't have one yet.
Look at the rows and columns passing through the box: any square whose row or column already holds a 7 is ruled out.
If only one square in the box is left, the 7 goes there. This is a **hidden single**, and it is the move most solvers
use first.

Each digit you place rules out more possibilities, and new singles appear. Newspaper puzzles marked "easy" can be
finished with these two moves alone. Harder ones need patterns such as **pairs**: if two squares in a row can only
hold 3 or 8, between them they use up the 3 and the 8, so no other square in that row can.

## How a computer does it

A computer can solve any Sudoku in a blink with a much blunter method, **backtracking**:

1. Find the first empty square.
2. Try the digit 1. If it clashes, try 2, and so on.
3. When a digit fits, move to the next empty square and repeat.
4. If no digit fits a square, the mistake was earlier: go **back** to the previous square and try its next digit.

That is what the **Solve it** button does, and it tells you how many digits it wrote along the way, including all the
ones it later rubbed out. For the first puzzle it writes a few thousand, which takes a computer well under a second.
Smarter solvers first fill in all the forced singles, then choose the square with the *fewest* options to guess on.
Peter Norvig's well-known solver combines these two ideas and solves even the hardest known puzzles almost at once.
See [Search and backtracking](../theory/search.md).

## Why it works: Sudoku as a puzzle about Latin squares

A grid where each row and each column contains every symbol once is called a **Latin square**, studied by Leonhard
Euler in the 1780s. A Sudoku solution is a 9 × 9 Latin square with an extra rule for the boxes. How many are there?

$$
6{,}670{,}903{,}752{,}021{,}072{,}936{,}960 \approx 6.67 \times 10^{21}
$$

Bertram Felgenhauer and Frazer Jarvis counted them in 2005, with a computer and a lot of clever symmetry. If you
treat two grids as the same when one can be turned into the other by relabelling digits, rotating, reflecting, or
swapping rows and columns within bands, there are only 5,472,730,538 essentially different grids.

## Going deeper

??? info "Seventeen clues is the minimum"
    The fewer digits given, the harder a puzzle tends to be. Many puzzles with 17 givens and a unique solution are
    known, and none with 16. In 2012 Gary McGuire, Bastian Tugemann and Gilles Civario proved that **no** 16-clue
    puzzle has a unique solution, by a computer search of every grid that took about seven million CPU hours.

??? info "Uniqueness and the 'deadly pattern'"
    A proper Sudoku has exactly one solution. Experienced solvers use that fact as a clue. Suppose four squares at
    the corners of a rectangle, lying in two boxes, could each be only 3 or 8. Then the 3s and 8s could be swapped
    and both versions would work, giving two solutions. Since the puzzle has one, at least one of those squares must
    hold something else. This trick, the **unique rectangle**, is logic about the puzzle-maker, not about the grid.

??? info "Bigger Sudoku is hard in a precise sense"
    On an $n^2 \times n^2$ grid with $n \times n$ boxes, deciding whether a partly filled grid can be completed is
    **NP-complete** (Takayuki Yato and Takahiro Seta, 2003). That means a fast method for every big Sudoku would also
    give fast methods for thousands of other hard problems, which most experts believe is impossible. See
    [How hard is a puzzle?](../theory/complexity.md)

??? info "Exact cover"
    Sudoku is an **exact cover** problem: there are 324 conditions (each square filled once, each digit once per row,
    once per column, once per box), and each of the 729 possible "digit $d$ in square $s$" choices satisfies exactly
    four of them. A solution picks choices covering every condition exactly once. Donald Knuth's *Dancing Links*
    algorithm solves exact cover problems very efficiently and is a favourite way to program a Sudoku solver.

**See also:** [The zebra puzzle](zebra-puzzle.md) · [Nonograms](nonograms.md) · [Eight queens](../math/eight-queens.md)

??? note "Sources"
    - Howard Garns, "Number Place", *Dell Pencil Puzzles and Word Games*, May 1979.
    - Bertram Felgenhauer, Frazer Jarvis, "Mathematics of Sudoku I", 2006 (the count of grids), and Ed Russell,
      Frazer Jarvis, "Mathematics of Sudoku II", 2006 (5,472,730,538 essentially different grids).
    - Gary McGuire, Bastian Tugemann, Gilles Civario, "There is no 16-clue Sudoku", *Experimental Mathematics* 23
      (2014), 190–217.
    - Takayuki Yato, Takahiro Seta, "Complexity and completeness of finding another solution and its application to
      puzzles", *IEICE Transactions* E86-A (2003), 1052–1060.
    - Donald E. Knuth, "Dancing Links", in *Millennial Perspectives in Computer Science*, 2000.
    - Peter Norvig, "Solving Every Sudoku Puzzle", norvig.com/sudoku.html.
