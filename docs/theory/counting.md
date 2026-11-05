# Counting

*How many ways? The question behind half of all puzzles*

"How many moves does it take?" "How many solutions are there?" "Is it worth trying them all?" Each is a counting
question, and **combinatorics**, the mathematics of counting, answers them. Its first tools fit on a postcard, and they
explain why some puzzles take a minute to try out by hand and others would outlast the universe.

## Try it

1. A combination lock has three wheels, each with the digits 0 to 9. How many combinations are there?
2. In how many different orders can you arrange 5 books on a shelf?
3. In a drawer are 10 red socks and 10 blue ones, all mixed up. In the dark, how many must you take out to be **sure**
   of a matching pair?

??? success "Answers"
    1. $10 \times 10 \times 10 = 1000$, from 000 to 999.
    2. $5 \times 4 \times 3 \times 2 \times 1 = 120$. Five choices for the first place, then four left for the
       second, and so on.
    3. **Three.** With only two colours, among any three socks two must be the same colour. (Two socks might differ.)

## Rule 1: multiply the choices

If you make one choice in $a$ ways and then, whatever you chose, a second in $b$ ways, together there are $a \times b$
ways. This **product rule** is behind almost every count on this site:

- A row of $n$ lights, each on or off: $2 \times 2 \times \dots \times 2 = 2^n$ patterns. [Lights Out](../math/lights-out.md)
  has $2^{25}$, over 33 million.
- $n$ knights or knaves: $2^n$ possibilities. [Knights and knaves](../logic/knights-and-knaves.md).
- One queen in each of 8 rows, each in any of 8 columns: $8^8$, about 16.8 million. [Eight queens](../math/eight-queens.md).

## Rule 2: arrangements and factorials

Arranging $n$ different things in a row: $n$ choices for the first place, $n - 1$ for the second, down to 1. This
number is **$n$ factorial**:

$$
n! = n \times (n - 1) \times \dots \times 2 \times 1.
$$

Factorials grow astonishingly fast: $5! = 120$, $10! = 3{,}628{,}800$, and $52! \approx 8 \times 10^{67}$. A
well-shuffled deck of cards is almost certainly in an order no deck has ever been in before. The [15 puzzle](../math/fifteen-puzzle.md)
has $16!$ arrangements of tiles and gap, about 21 trillion, and the [zebra puzzle](../logic/zebra-puzzle.md) has
$(5!)^5$ possible worlds, about 25 billion.

## Rule 3: choosing without order

How many ways can you choose $k$ things from $n$, when the order doesn't matter? Arrange them all ($n!$ ways), then
notice each choice was counted once for every order of the $k$ chosen things ($k!$) and of the $n - k$ left behind
($(n-k)!$). So the number is

$$
\binom{n}{k} = \frac{n!}{k!\,(n-k)!},
$$

read "$n$ choose $k$". Choosing 8 squares out of 64 for queens: $\binom{64}{8} \approx 4.4$ billion. Choosing 6
numbers from 49 in a lottery: $\binom{49}{6} = 13{,}983{,}816$, which is why you will not win. These numbers form
**Pascal's triangle**, where each entry is the sum of the two above it, a pattern known in India, Persia and China
centuries before Pascal.

## Rule 4: the pigeonhole principle

> If more than $n$ pigeons fly into $n$ holes, some hole gets at least two pigeons.

It sounds too obvious to be useful, but it proves things that are not obvious at all:

- Among any 367 people, two share a birthday (366 possible birthdays, counting 29 February).
- In any group of people, two have the same number of friends in the group. (With $n$ people, the counts run from 0
  to $n - 1$, but 0 and $n - 1$ can't both happen: if someone is friends with everyone, nobody has 0 friends. So
  there are only $n - 1$ possible counts for $n$ people.)
- Pick any 6 numbers from 1 to 10: two of them add up to 11. (The 5 holes are the pairs 1+10, 2+9, 3+8, 4+7, 5+6.)

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 390" role="img" aria-labelledby="sk-p-pigeons-t"><title id="sk-p-pigeons-t">Five pigeons in four holes: at least one hole must hold two</title><defs><filter id="sk-p-pigeons-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-p-pigeons-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-p-pigeons-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-p-pigeons-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-p-pigeons-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="390" filter="url(#sk-p-pigeons-paper)"/><g filter="url(#sk-p-pigeons-pen)"><text x="30" y="44" class="h">Five pigeons, four holes</text><path class="p room" d="M80 300 L80 200 Q130 170 180 200 L180 300Z"/><path class="p room" d="M210 300 L210 200 Q260 170 310 200 L310 300Z"/><path class="p room" d="M340 300 L340 200 Q390 170 440 200 L440 300Z"/><path class="p room" d="M470 300 L470 200 Q520 170 570 200 L570 300Z"/><ellipse cx="110" cy="270" rx="18" ry="11" class="p gold"/><circle cx="126" cy="261" r="7" class="p gold"/><path class="p" d="M132 261 L140 263"/><ellipse cx="240" cy="270" rx="18" ry="11" class="p gold"/><circle cx="256" cy="261" r="7" class="p gold"/><path class="p" d="M262 261 L270 263"/><ellipse cx="370" cy="270" rx="18" ry="11" class="p gold"/><circle cx="386" cy="261" r="7" class="p gold"/><path class="p" d="M392 261 L400 263"/><ellipse cx="500" cy="270" rx="18" ry="11" class="p gold"/><circle cx="516" cy="261" r="7" class="p gold"/><path class="p" d="M522 261 L530 263"/><ellipse cx="520" cy="240" rx="18" ry="11" class="p gold"/><circle cx="536" cy="231" r="7" class="p gold"/><path class="p" d="M542 231 L550 233"/><text x="40" y="350" class="l">More pigeons than holes: some hole holds two.</text><text x="40" y="374" class="s">It says a pair exists, not where. Simple, and surprisingly strong.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

## Going deeper

??? info "The birthday surprise"
    You need 367 people to be *certain* of a shared birthday, but only **23** for the chance to pass 50%. With 23
    people there are $\binom{23}{2} = 253$ pairs, and each pair has a small chance of matching; together the chances
    add up fast. The chance that $n$ people all have different birthdays is
    $\frac{365}{365} \cdot \frac{364}{365} \cdots \frac{365 - n + 1}{365}$, which drops below $\tfrac12$ at $n = 23$.
    The same effect, called a **birthday attack**, matters in cryptography.

??? info "Counting by recurrences"
    Some counts are easiest to find by relating a problem to a smaller copy of itself. The Tower of Hanoi count
    $T_n = 2T_{n-1} + 1$ is one. Another: in how many ways can you climb $n$ stairs taking 1 or 2 steps at a time?
    Your first step is 1 or 2, so $W_n = W_{n-1} + W_{n-2}$: the Fibonacci numbers 1, 2, 3, 5, 8, 13, ...

??? info "Ramsey theory: complete disorder is impossible"
    Among any **six** people, there are always three who all know each other or three who are all strangers. With
    five people that can fail. This is the smallest case of **Ramsey's theorem**, a far-reaching form of the
    pigeonhole principle: in any large enough structure, some orderly pattern must appear. The next case, the number
    of people that guarantees four mutual friends or four mutual strangers, is 18. For five, nobody knows: the answer
    is somewhere between 43 and 46.

**See also:** [Invariants and parity](invariants.md) · [Eight queens](../math/eight-queens.md) · [Nonograms](../logic/nonograms.md)

??? note "Sources"
    - Ronald L. Graham, Donald E. Knuth, Oren Patashnik, *Concrete Mathematics*, 2nd ed., Addison-Wesley, 1994.
    - Richard A. Brualdi, *Introductory Combinatorics*, 5th ed., Pearson, 2010 (chapters 2 and 3: counting and pigeonholes).
    - Martin Aigner, Günter M. Ziegler, *Proofs from THE BOOK*, 6th ed., Springer, 2018 (pigeonhole and double counting).
    - F. P. Ramsey, "On a problem of formal logic", *Proceedings of the London Mathematical Society* 30 (1930), 264–286.
    - Vigleik Angeltveit, Brendan McKay, "R(5,5) ≤ 46", arXiv:2409.15709, 2024.
