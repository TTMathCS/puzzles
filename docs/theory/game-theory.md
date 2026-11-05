# Game theory and Nim

*Two players, no luck, no secrets: who wins, and how?*

In a game like chess, tic-tac-toe or Nim there are no dice and no hidden cards. Both players see everything. Ernst
Zermelo proved in 1913 that in such a game, if it can't go on forever, one of three things is true from the start:
the first player can force a win, the second player can force a win, or both can force at least a draw. The question
is which, and how to play it. For one beautiful game, Nim, the answer is completely known, and it is written in binary.

## Try it

There are three heaps of stones: 3, 4 and 5. Players take turns. On your turn, take **any number of stones from one
heap** (at least one). Whoever takes **the last stone wins**. Tap a stone to take it and every stone to its right. The
computer plays perfectly, but it can be beaten. The binary table under the heaps is its secret; you may ignore it for
now.

<div class="pz" data-pz="nim" data-heaps="3,4,5" data-sum="yes"></div>

## How to think about it: winning and losing positions

Work **backwards** from the end. A position with no stones left is a **loss** for the player to move (the opponent
just took the last stone). Then:

- A position is a **winning** position if **some** move leads to a losing position for the opponent.
- A position is a **losing** position if **every** move leads to a winning position for the opponent.

Try it on a simple game: one heap, and you may take 1, 2 or 3 stones. 0 is losing. 1, 2 and 3 are winning (take them
all). 4 is losing: every move leaves 1, 2 or 3. 5, 6, 7 are winning (move to 4). 8 is losing. The losing positions
are the multiples of 4, which is the secret of the warm-up puzzle on the [start page](../start/index.md).

## Why it works: the nim-sum

For Nim with several heaps, Charles Bouton found the rule in 1901. Write each heap size in **binary** and add the
columns **without carrying**: a column with an odd number of 1s gives 1, an even number gives 0. This is called the
**nim-sum** (in computing it is the XOR, written $\oplus$). For heaps of 3, 4 and 5:

$$
\begin{array}{r} 011 \\ 100 \\ 101 \\ \hline 010 \end{array}
\qquad 3 \oplus 4 \oplus 5 = 2.
$$

**Bouton's theorem.** A Nim position is losing for the player to move exactly when its nim-sum is **0**.

Two facts make it work:

1. **From nim-sum 0, every move makes it non-zero.** A move changes one heap, so it changes at least one binary digit
   of that heap, and that column of the sum flips.
2. **From a non-zero nim-sum, some move makes it 0.** Look at the leftmost 1 in the nim-sum. Some heap has a 1 in
   that column. Replace that heap $h$ by $h \oplus s$, where $s$ is the nim-sum: it is smaller than $h$ (its leftmost
   changed digit went from 1 to 0), so this is a legal move, and the new nim-sum is $s \oplus s = 0$.

So the player facing a non-zero nim-sum can always hand back a zero, and the other player can never do the same. The
game ends at all heaps empty, nim-sum 0, which is a loss for whoever must move: the player who keeps handing back zeros
takes the last stone. Here, starting at 3, 4, 5 (nim-sum 2), the first player wins by taking 2 from the heap of 3,
leaving 1, 4, 5, whose nim-sum is 0.

## Going deeper

??? info "Every game is Nim in disguise"
    In the 1930s Roland Sprague and Patrick Grundy independently proved that **every** impartial game (both players
    have the same moves, last move wins) behaves exactly like a single Nim heap of some size, its **Grundy number**.
    The Grundy number of a position is the smallest whole number that is *not* the Grundy number of any position you
    can move to. A sum of games (on your turn, move in any one of them) has Grundy number equal to the nim-sum of the
    parts. So to play many games at once, you play Nim with their Grundy numbers.

??? info "Strategy stealing"
    In the game **Hex** and in **Chomp** (players bite squares off a chocolate bar; whoever takes the poisoned corner
    loses), the first player can always win, and the proof doesn't say how. Suppose the second player had a winning
    strategy. Then the first player could make a harmless opening move and afterwards *pretend to be second*,
    stealing that strategy, and an extra move can only help. That's a contradiction, so the first player must have a
    winning strategy. For large boards nobody knows what it is.

??? info "Tic-tac-toe, checkers and chess"
    Working backwards over all positions settles small games. Tic-tac-toe has 255,168 possible games and is a draw with
    perfect play. Checkers was solved by Jonathan Schaeffer's team in 2007, after almost twenty years of computing:
    also a draw. Chess has around $10^{44}$ legal positions, far too many to search, and remains unsolved: Zermelo's
    theorem says it has a value, but no one knows whether it is a win for White or a draw.

??? info "Games with chance and hidden information"
    Poker and rock-paper-scissors are different: players don't see everything, or must move at the same time. There
    the best play is often **random**, mixing moves in the right proportions. John von Neumann proved in 1928 that
    every two-player zero-sum game of this kind has such a best mix, the **minimax theorem**, which founded modern
    game theory and later economics.

**See also:** [Counting](counting.md) · [Invariants and parity](invariants.md) · [How hard is a puzzle?](complexity.md)

??? note "Sources"
    - Charles L. Bouton, "Nim, a game with a complete mathematical theory", *Annals of Mathematics* 3 (1901), 35–39.
    - Ernst Zermelo, "Über eine Anwendung der Mengenlehre auf die Theorie des Schachspiels", *Proceedings of the
      Fifth International Congress of Mathematicians*, 1913, vol. 2, 501–504.
    - R. P. Sprague, "Über mathematische Kampfspiele", *Tôhoku Mathematical Journal* 41 (1935), 438–444;
      P. M. Grundy, "Mathematics and games", *Eureka* 2 (1939), 6–8.
    - Elwyn Berlekamp, John Conway, Richard Guy, *Winning Ways for Your Mathematical Plays*, 2nd ed., A K Peters, 2001–2004.
    - Jonathan Schaeffer et al., "Checkers is solved", *Science* 317 (2007), 1518–1522.
    - John von Neumann, "Zur Theorie der Gesellschaftsspiele", *Mathematische Annalen* 100 (1928), 295–320.
