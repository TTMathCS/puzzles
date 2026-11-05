# Tower of Hanoi

*Move a tower of discs, one at a time, never a big disc on a small one*

In 1883 a toy went on sale in Paris: three pegs and a tower of eight wooden discs, sold as the puzzle of "Professor N.
Claus of Siam". The professor was an anagram: the inventor was the mathematician **Édouard Lucas** (N. Claus = Lucas;
Siam = Amiens, where he had taught). Lucas added a legend: in a temple, monks move a tower of 64 golden discs, and when
they finish, the world will end.

## Try it

Move the whole tower from peg A to peg C. Tap a peg to lift its top disc, then tap the peg to put it on. You may never
put a disc on top of a smaller one. **Show me** plays the fastest solution.

<div class="pz" data-pz="hanoi" data-discs="4"></div>

## How to think about it

Don't think about the first move; think about the **biggest disc**. At some point it has to move from A to C, and at
that moment every other disc must be out of the way, stacked on peg B. So the solution has three parts:

1. Move the top $n - 1$ discs from A to B (using C to help).
2. Move the biggest disc from A to C.
3. Move the $n - 1$ discs from B to C (using A to help).

Steps 1 and 3 are the same puzzle with one disc fewer, and you solve them the same way: that is **recursion**, a
solution described in terms of a smaller copy of itself. It unwinds until the puzzle has one disc, which takes one
move.

There is also a rule you can follow without any planning: **on odd-numbered moves, move the smallest disc one peg
around the circle** (A → B → C → A for an even number of discs, A → C → B → A for an odd number); **on even-numbered
moves, make the only legal move that doesn't touch the smallest disc**. Try it on the puzzle above.

## Why it works: counting the moves

Write $T_n$ for the fewest moves needed for $n$ discs. The three parts above give

$$
T_n = T_{n-1} + 1 + T_{n-1} = 2T_{n-1} + 1, \qquad T_1 = 1.
$$

So $T_2 = 3$, $T_3 = 7$, $T_4 = 15$, $T_5 = 31$: each is one less than a power of two, and

$$
T_n = 2^n - 1.
$$

You can check this: if $T_{n-1} = 2^{n-1} - 1$, then $2T_{n-1} + 1 = 2^n - 2 + 1 = 2^n - 1$. This is a proof by
**induction**. It also shows the plan can't be beaten: the biggest disc must move at least once, and before its first
move and after its last, the other $n - 1$ discs must be moved as a whole tower, so no solution can use fewer moves.

**The end of the world.** With 64 discs, $2^{64} - 1 = 18{,}446{,}744{,}073{,}709{,}551{,}615$ moves are needed. At
one move per second, without a mistake or a rest, the monks would need about 585 billion years, roughly forty times
the age of the universe. The legend is safe.

<figure class="play" data-play="hanoimap"><span class="ai-tag">AI-created</span><figcaption><b>The map of every position.</b> Each dot is one way the discs can sit (3<sup><i>n</i></sup> of them) and each line one legal move; together they make a Sierpiński triangle. Press Play to watch the fastest solution run down one side in 2<sup><i>n</i></sup> − 1 moves. Each move is counted in binary: the zeros at the end say which disc moves, and each disc plays its own note. Sound starts only after you press Play.</figcaption></figure>

## Going deeper

??? info "Binary numbers in disguise"
    Number the moves 1, 2, 3, ... and write each number in binary. The disc that moves at step $m$ is given by the
    number of zeros at the right-hand end of $m$: no zeros (odd $m$), the smallest disc; one zero, the second
    smallest; and so on. Step 8 = 1000 in binary moves the fourth disc. The whole solution counts in binary.

??? info "The map of all positions"
    Each disc can be on any of three pegs, so $n$ discs can be arranged legally in $3^n$ ways (on each peg the discs
    have only one possible order). Draw a dot for each arrangement and a line for each legal move, and you get a
    triangle made of three smaller triangles, each made of three smaller ones: a picture of the **Sierpiński
    triangle**. The fastest solution runs straight down one side, $2^n - 1$ steps. The longest possible journey
    between two positions is also $2^n - 1$.

??? info "Four pegs"
    With four pegs the problem becomes much harder. Frame and Stewart gave a method in 1941, and it was long believed
    to be the best, but this was proved only for small cases: Thierry Bousch proved it optimal for four pegs in 2014.
    For 5 or more pegs it is still not proved. The number of moves grows much more slowly than $2^n$, roughly like
    $2^{\sqrt{2n}}$.

??? info "Hanoi in programming classes"
    The Tower of Hanoi is the standard first example of recursion. The whole solver is three lines: move $n-1$ discs
    out of the way, move the big one, move the $n-1$ back on top. The **Show me** button above runs exactly that.
    See the recursion pages on [Algorithms](https://cs.akadian.ca/).

**See also:** [Counting](../theory/counting.md) · [River crossings](../logic/river-crossings.md) · [Search and backtracking](../theory/search.md)

??? note "Sources"
    - N. Claus de Siam (Édouard Lucas), *La Tour d'Hanoï, véritable casse-tête annamite*, Paris, 1883.
    - Édouard Lucas, *Récréations mathématiques*, vol. 3, Gauthier-Villars, 1893.
    - Andreas M. Hinz, Sandi Klavžar, Ciril Petr, *The Tower of Hanoi – Myths and Maths*, 2nd ed., Birkhäuser, 2018.
    - Thierry Bousch, "La quatrième tour de Hanoï", *Bulletin of the Belgian Mathematical Society* 21 (2014), 895–912.
    - Ronald L. Graham, Donald E. Knuth, Oren Patashnik, *Concrete Mathematics*, 2nd ed., 1994, §1.1.
