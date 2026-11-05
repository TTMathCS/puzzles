# Magic squares

*Numbers in a square where every row, column and diagonal has the same total*

A magic square of order $n$ holds the numbers $1, 2, \dots, n^2$ in an $n \times n$ grid so that every row, every
column and both main diagonals add up to the same number, the **magic constant**. They are among the oldest puzzles
in the world, and for centuries people believed they had special powers.

## Try it

Fill a 3 × 3 square with the numbers 1 to 9, each once, so that all three rows, all three columns and both diagonals
add up to the same total. First work out what the total must be. Then: which number has to go in the middle? Which
numbers can go in the corners?

??? success "Answer"
    The numbers add to $1 + 2 + \dots + 9 = 45$. The three rows share that equally, so each line adds to **15**.

    The middle square lies on four lines (one row, one column, two diagonals). Add up those four lines: you get
    $4 \times 15 = 60$, and you have counted every number once, except the middle, which you counted four times. So
    $45 + 3 \times \text{middle} = 60$, and the middle is **5**.

    The corners must be even. A corner lies on three lines. If it held 1, each of those lines would need two more
    numbers adding to 14, and only 9 + 5 and 8 + 6 do: two pairs for three lines. The same happens for 3, 7 and 9. Trying the cases leaves 2, 4, 6, 8 in the
    corners, and the odd numbers on the edges. Up to turning and flipping, there is only one 3 × 3 magic square:

    | | | |
    |:-:|:-:|:-:|
    | 4 | 9 | 2 |
    | 3 | 5 | 7 |
    | 8 | 1 | 6 |

## The Lo Shu

That square is the **Lo Shu**, from Chinese legend: a turtle climbed out of the Luo River with this pattern of dots
on its shell, in the time of the flood-taming emperor Yu. The written record is much later than the legend, but by
the first centuries CE the square was well known in China, and it travelled through India and the Islamic world to
Europe. Its pattern of odd and even numbers, and the pairs adding to 10 on opposite sides of the centre, appear in
Chinese cosmology and in feng shui.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 380" role="img" aria-labelledby="sk-p-loshu-t"><title id="sk-p-loshu-t">The Lo Shu magic square, 4 9 2, 3 5 7, 8 1 6: every row, column and diagonal adds to 15, because 1 to 9 add to 45 and three rows share it</title><defs><filter id="sk-p-loshu-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-p-loshu-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-p-loshu-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-p-loshu-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-p-loshu-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="380" filter="url(#sk-p-loshu-paper)"/><g filter="url(#sk-p-loshu-pen)"><text x="30" y="44" class="h">The Lo Shu: every line makes 15</text><path class="p room" d="M80 90 L160 90 L160 170 L80 170Z"/><text x="120" y="140" text-anchor="middle" class="h">4</text><path class="p room" d="M160 90 L240 90 L240 170 L160 170Z"/><text x="200" y="140" text-anchor="middle" class="h">9</text><path class="p room" d="M240 90 L320 90 L320 170 L240 170Z"/><text x="280" y="140" text-anchor="middle" class="h">2</text><path class="p room" d="M80 170 L160 170 L160 250 L80 250Z"/><text x="120" y="220" text-anchor="middle" class="h">3</text><path class="p gold" d="M160 170 L240 170 L240 250 L160 250Z"/><text x="200" y="220" text-anchor="middle" class="h">5</text><path class="p room" d="M240 170 L320 170 L320 250 L240 250Z"/><text x="280" y="220" text-anchor="middle" class="h">7</text><path class="p room" d="M80 250 L160 250 L160 330 L80 330Z"/><text x="120" y="300" text-anchor="middle" class="h">8</text><path class="p room" d="M160 250 L240 250 L240 330 L160 330Z"/><text x="200" y="300" text-anchor="middle" class="h">1</text><path class="p room" d="M240 250 L320 250 L320 330 L240 330Z"/><text x="280" y="300" text-anchor="middle" class="h">6</text><text x="330" y="140" class="s">→ 15</text><text x="330" y="220" class="s">→ 15</text><text x="330" y="300" class="s">→ 15</text><text x="120" y="350" text-anchor="middle" class="s">15</text><text x="200" y="350" text-anchor="middle" class="s">15</text><text x="280" y="350" text-anchor="middle" class="s">15</text><path class="p dash" d="M84 94 L316 326"/><path class="p dash" d="M316 94 L84 326"/><text x="400" y="140" class="l">1 to 9 add to 45;</text><text x="400" y="164" class="l">three rows share it:</text><text x="400" y="188" class="l">45 ÷ 3 = 15.</text><text x="400" y="240" class="s">The 5 sits in the middle,</text><text x="400" y="260" class="s">on four lines at once.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

## How to think about it: the magic constant

For any order $n$, the numbers $1$ to $n^2$ add up to $\frac{n^2(n^2+1)}{2}$, and the $n$ rows share this, so the
magic constant is

$$
M(n) = \frac{n(n^2 + 1)}{2}.
$$

That gives 15 for $n = 3$, 34 for $n = 4$, 65 for $n = 5$. There is no 2 × 2 magic square: with 1, 2, 3, 4, each
line would need to add to 5, but then the top row $a + b = 5$ and the left column $a + c = 5$ give $b = c$, and the
numbers must be different.

## A recipe for odd squares

For any odd $n$ there is a simple recipe, described by Simon de la Loubère after a visit to Siam in 1688:

1. Put 1 in the middle of the top row.
2. Put each next number **one up and one to the right**, wrapping around the edges: off the top you come in at the
   bottom, off the right you come in at the left.
3. If that square is already full, put the number **directly below** the last one instead.

For $n = 3$ this gives 8 1 6 / 3 5 7 / 4 9 2, the Lo Shu flipped upside down. Try it for $n = 5$ on paper; the
constant should be 65.

<figure class="play" data-play="siamese"><span class="ai-tag">AI-created</span><figcaption><b>Watch it.</b> De la Loubère’s recipe: start in the middle of the top row, step up and to the right, wrap round the edges, and drop down one square when the next is taken.</figcaption></figure>

## Dürer's square

In 1514 the artist Albrecht Dürer put a 4 × 4 magic square in his engraving *Melencolia I*:

| | | | |
|:-:|:-:|:-:|:-:|
| 16 | 3 | 2 | 13 |
| 5 | 10 | 11 | 8 |
| 9 | 6 | 7 | 12 |
| 4 | 15 | 14 | 1 |

Every row, column and diagonal adds to 34, and so do the four corners, the four centre squares and each 2 × 2
quarter. The middle of the bottom row reads **1514**, the year of the engraving.

## Going deeper

??? info "How many magic squares are there?"
    Counting squares that differ by more than a rotation or reflection: order 3 has 1, order 4 has 880 (found by
    Bernard Frénicle de Bessy in 1693), order 5 has 275,305,224 (computed by Richard Schroeppel in 1973). For order
    6 the number is not known exactly; estimates put it near $1.8 \times 10^{19}$. The numbers grow so fast that
    counting them is itself a hard research problem.

??? info "Squares of order 4n and 4n + 2"
    De la Loubère's recipe works only for odd orders. For orders divisible by 4 there is a neat trick: write the
    numbers in order, then replace the numbers on both diagonals of every 4 × 4 block by $n^2 + 1$ minus themselves.
    Try it on a 4 × 4 square. Orders 6, 10, 14, ... are the hardest, and need a method such as Ralph Strachey's
    (1918), which builds them from four odd squares.

??? info "Latin squares and Euler's 36 officers"
    Magic squares are cousins of **Latin squares**, where each row and column holds each symbol once. Euler asked
    in 1782 whether 36 officers of 6 ranks and 6 regiments could stand in a 6 × 6 square with each rank and regiment
    once in every row and column. He guessed not, and Gaston Tarry proved it in 1901. Euler also guessed it was
    impossible for 10, 14, 18, ...; in 1959 Bose, Shrikhande and Parker proved him wrong. See [Sudoku](../logic/sudoku.md).

??? info "Magic squares of squares"
    Is there a 3 × 3 magic square made of nine different **perfect squares** ($1, 4, 9, 16, \dots$)? Nobody knows.
    Martin Gardner and others popularised the question, and it is still open, though many near-misses are known.

**See also:** [Counting](../theory/counting.md) · [Sudoku](../logic/sudoku.md) · [Eight queens](eight-queens.md)

??? note "Sources"
    - Frank J. Swetz, *Legacy of the Luoshu: The 4,000 Year Search for the Meaning of the Magic Square of Order
      Three*, A K Peters, 2008.
    - Simon de la Loubère, *Du Royaume de Siam*, 1691 (English: *A New Historical Relation of the Kingdom of Siam*, 1693).
    - Martin Gardner, *Time Travel and Other Mathematical Bewilderments*, Freeman, 1988, chapter 17.
    - Gaston Tarry, "Le problème des 36 officiers", *Compte Rendu de l'Association Française pour l'Avancement des
      Sciences* 1 (1900), 122–123, and 2 (1901), 170–203.
    - R. C. Bose, S. S. Shrikhande, E. T. Parker, "Further results on the construction of mutually orthogonal Latin
      squares and the falsity of Euler's conjecture", *Canadian Journal of Mathematics* 12 (1960), 189–203.
    - OEIS A006052, "Number of magic squares of order n".
