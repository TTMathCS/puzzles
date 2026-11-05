# Six warm-up puzzles

*About 5 minutes each · You need: a pencil, some paper, and maybe a friend*

Each puzzle below is short. Try it before you open the answer. If you get stuck, that is the good part: puzzles are
fun because the answer is hiding. When you finish one, the link under it takes you to the full page.

## 1. Two islanders

On an island, **knights** always tell the truth and **knaves** always lie. You meet two islanders, A and B.
A says: "We are both knaves."

What are A and B?

<div class="pz" data-pz="kk" data-people="A,B" data-answer="knave,knight"></div>

??? success "Answer"
    A is a knave and B is a knight. If A were a knight, A's words would be true, so A would be a knave: impossible.
    So A is a knave and the sentence is a lie: they are **not** both knaves. A is one, so B must be a knight.

More: [Knights and knaves](../logic/knights-and-knaves.md)

## 2. Wolf, goat and cabbage

A farmer must row a wolf, a goat and a cabbage across a river. The boat holds the farmer and one thing. Left alone,
the wolf eats the goat, and the goat eats the cabbage. How does everything get across?

??? success "Answer"
    Take the goat over. Come back. Take the wolf over, and **bring the goat back**. Take the cabbage over. Come back
    and take the goat. Seven crossings. The trick is the step backwards: carrying something home again.

More: [River crossings](../logic/river-crossings.md)

## 3. Three discs

Put three coins of different sizes in a pile on the left, the biggest at the bottom. Move the pile to the right,
one coin at a time, using a middle spot to help. A coin may never sit on a smaller coin. How few moves can you use?

??? success "Answer"
    Seven moves. Small to right, middle to centre, small to centre, big to right, small to left, middle to right,
    small to right. For 4 coins it takes 15, for 5 it takes 31: each extra coin doubles the work and adds one.

More: [Tower of Hanoi](../math/tower-of-hanoi.md), which you can play on the page

## 4. The last stone

Put 10 stones on a table. Two players take turns removing 1, 2 or 3 stones. Whoever takes the last stone wins.
Would you rather go first or second, and how do you play?

??? success "Answer"
    Go first and take 2, leaving 8. After that, whatever your friend takes (1, 2 or 3), you take enough to make 4
    (3, 2 or 1). You leave 4, then 0. The "safe" numbers to leave are the multiples of 4.

More: [Game theory and Nim](../theory/game-theory.md), where you can play the computer

## 5. A square of nine

Write the numbers 1 to 9 in a 3 × 3 square so that every row, every column and both diagonals add to the same
total. What must the total be, and which number goes in the middle?

??? success "Answer"
    1 + 2 + ... + 9 = 45, shared over three rows, so each line adds to **15**. The middle is **5**: it sits on four
    lines (a row, a column, two diagonals). One answer, the ancient Chinese Lo Shu square:

    | | | |
    |:-:|:-:|:-:|
    | 4 | 9 | 2 |
    | 3 | 5 | 7 |
    | 8 | 1 | 6 |

More: [Magic squares](../math/magic-squares.md)

## 6. One walk, every path

Draw an envelope shape: a square with an X across it and a triangle "roof" on top. Can you draw it without lifting
your pencil and without going over any line twice?

??? success "Answer"
    Yes, but only if you start at one of the two bottom corners. Count the lines at each corner: exactly two corners
    have an **odd** number of lines (3 each). A drawing like this is possible only when there are zero or two odd
    corners, and with two you must start at one and finish at the other.

More: [The bridges of Königsberg](../math/konigsberg.md)

## What next?

If you liked reasoning about who tells the truth, go to [Logic puzzles](../logic/index.md). If you liked moving
discs and stones, go to [Math puzzles](../math/index.md). If you want to know *why* the tricks work, read
[The ideas behind](../theory/index.md).

??? note "Sources"
    - Raymond Smullyan, *What Is the Name of This Book?*, Prentice-Hall, 1978 (knights and knaves).
    - Alcuin of York, *Propositiones ad acuendos iuvenes*, about 800 (the river crossing, problem 18).
    - Édouard Lucas, *Récréations mathématiques*, vol. 3, 1893 (Tower of Hanoi).
    - Leonhard Euler, "Solutio problematis ad geometriam situs pertinentis", 1736 (drawing figures in one stroke).
    - Elwyn Berlekamp, John Conway, Richard Guy, *Winning Ways for Your Mathematical Plays*, 2nd ed., 2001 (take-away games).
