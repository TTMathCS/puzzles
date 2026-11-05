# Lights Out

*Press a light and it flips, along with its neighbours. Turn them all off.*

Lights Out was an electronic handheld game sold by Tiger Electronics in 1995: a 5 × 5 grid of lit buttons. Pressing a
button switches it, and the buttons directly above, below, left and right of it, from on to off or off to on. The goal
is to switch every light off. It feels like a game of trial and error, but it is really a problem in algebra, and one
you can solve completely with nothing but 0s and 1s.

## Try it

Tap a light to press it. Every puzzle the page gives you can be solved. If you give up, **Show which to press** rings
the lights to press: press each ringed light once, in any order.

<div class="pz" data-pz="lights" data-n="5"></div>

## How to think about it: two facts about presses

**Order doesn't matter.** Pressing A then B has the same effect as B then A, because each light just flips once for
every press that touches it. Only *which* buttons you press matters, not when.

**Pressing twice does nothing.** Two presses of the same button flip the same five lights twice, back to where they
were. So in a best solution, each button is pressed **once or not at all**.

Together these say that a solution is simply a **set of buttons**. There are 25 buttons, so $2^{25} = 33{,}554{,}432$
possible sets: a lot to try by hand, but the algebra below finds the right one at once.

## A method you can use by hand: chase the lights

1. Look at the top row. For every light that is on, press the button **directly below it**, in row 2. That switches
   the top light off (and disturbs row 2 and 3, which is fine).
2. Now the top row is dark. Do the same for row 2, pressing in row 3. Then row 3, pressing in row 4; then row 4,
   pressing in row 5.
3. Now only the bottom row may have lights on. For the 5 × 5 game, look up its pattern in this table, press the
   **top-row** buttons it gives, and chase down again. The second chase finishes the puzzle.

| Bottom row still lit | Press in the top row |
|---|---|
| ● ● ● ○ ○ | ○ ● ○ ○ ○ |
| ● ● ○ ● ● | ○ ○ ● ○ ○ |
| ● ○ ● ● ○ | ○ ○ ○ ○ ● |
| ● ○ ○ ○ ● | ● ● ○ ○ ○ |
| ○ ● ○ ● ○ | ● ○ ○ ● ○ |
| ○ ● ● ○ ● | ● ○ ○ ○ ○ |
| ○ ○ ● ● ● | ○ ○ ○ ● ○ |

(● is lit; ○ is dark.) If the bottom row is in none of these patterns, the puzzle was one of the unsolvable ones.

## Why it works: algebra where 1 + 1 = 0

Write 1 for "on" and 0 for "off". Flipping a light is adding 1, with the rule that $1 + 1 = 0$: arithmetic **modulo
2**, the arithmetic of even and odd. Let $x_1, \dots, x_{25}$ be 1 if you press that button and 0 if not. Light number
$j$ ends up off exactly when

$$
b_j + \sum_{i \text{ touches } j} x_i = 0 \pmod 2,
$$

where $b_j$ is 1 if light $j$ starts on. That is 25 **linear equations** in 25 unknowns, the same kind of system you
solve in school, only with 0 and 1 instead of all numbers. Gaussian elimination, the school method of adding one
equation to another to cancel unknowns, works just as well modulo 2. The **Show which to press** button does exactly
this.

For the 5 × 5 board, elimination reveals something surprising: the 25 equations are **not independent**. Two of them
are consequences of the rest. As a result:

- Only one in four starting patterns can be solved: $2^{23}$ of the $2^{25}$.
- Every solvable pattern has **four** different solutions, and one of them uses at most 15 presses.

The page only gives you solvable puzzles, by starting with all lights off and pressing random buttons.

## Going deeper

??? info "Quiet patterns"
    The two "missing" equations correspond to **quiet patterns**: sets of presses that change nothing at all. For
    the 5 × 5 board, pressing every button in this pattern leaves the board unchanged:
    ● ○ ● ○ ● / ● ○ ● ○ ● / ○ ○ ○ ○ ○ / ● ○ ● ○ ● / ● ○ ● ○ ● (rows from the top). Add a quiet pattern to any
    solution and you get another solution, which is why there are four. A puzzle can be solved exactly when its
    lights "agree" with both quiet patterns: an even number of lit squares among the squares of each quiet pattern.

??? info "Other sizes"
    On some square boards every pattern can be solved (2 × 2, 3 × 3, 6 × 6, 7 × 7, 8 × 8, ...), and on others, like
    4 × 4 and 5 × 5, only some can. Which sizes work depends on a family of polynomials related to Chebyshev
    polynomials, studied by Klaus Sutner and others. Sutner also proved a surprise: whatever the board, pressing the
    right set of buttons always turns **all** the lights **on** from all-off.

??? info "Linear algebra over finite fields"
    Arithmetic modulo 2 is the smallest **finite field**, often written $\mathbb{F}_2$ or GF(2). Linear algebra over
    $\mathbb{F}_2$ is everywhere in computing: error-correcting codes (see [Hat puzzles](../logic/hat-puzzles.md)),
    checksums, and parts of modern cryptography. Lights Out is a friendly first meeting with it.

**See also:** [Invariants and parity](../theory/invariants.md) · [The 15 puzzle](fifteen-puzzle.md) · [Hat puzzles](../logic/hat-puzzles.md)

??? note "Sources"
    - Marlow Anderson, Todd Feil, "Turning Lights Out with linear algebra", *Mathematics Magazine* 71 (1998), 300–303.
    - Klaus Sutner, "Linear cellular automata and the Garden-of-Eden", *The Mathematical Intelligencer* 11 (1989), 49–53.
    - Jaap Scherphuis, "Lights Out", jaapsch.net/puzzles/lights.htm (the chase-the-lights method and its table).
    - Rudolf Fleischer, Jiajin Yu, "A survey of the game 'Lights Out!'", in *Space-Efficient Data Structures,
      Streams, and Algorithms*, Springer, 2013.
