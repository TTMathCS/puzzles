# The zebra puzzle

*Five houses, fifteen clues, and the question nobody seems to have an answer for*

In December 1962 the magazine *Life International* printed a puzzle with fifteen clues about five houses in a row. It
is often called **Einstein's puzzle**, with the claim that only 2% of people can solve it, but there is no evidence
Einstein had anything to do with it. It is the model for every "logic grid" puzzle in puzzle books today.

## Try it

Five houses stand in a row, each painted a different colour. In each lives a person of a different nationality, with
a different pet, a different drink and a different brand of cigarette (it was 1962).

1. The Englishman lives in the red house.
2. The Spaniard owns the dog.
3. Coffee is drunk in the green house.
4. The Ukrainian drinks tea.
5. The green house is immediately to the right of the ivory house.
6. The Old Gold smoker owns snails.
7. Kools are smoked in the yellow house.
8. Milk is drunk in the middle house.
9. The Norwegian lives in the first house.
10. The man who smokes Chesterfields lives in the house next to the man with the fox.
11. Kools are smoked in the house next to the house where the horse is kept.
12. The Lucky Strike smoker drinks orange juice.
13. The Japanese smokes Parliaments.
14. The Norwegian lives next to the blue house.

**Who drinks water? Who owns the zebra?** (Neither water nor the zebra appears in any clue: they are whatever is
left over. The original listed fifteen clues; its first only said that there are five houses.)

??? success "Answer"
    The **Norwegian** drinks water and the **Japanese** owns the zebra. The full solution, from left to right:

    | House | 1 | 2 | 3 | 4 | 5 |
    |---|---|---|---|---|---|
    | Colour | yellow | blue | red | ivory | green |
    | Nationality | Norwegian | Ukrainian | Englishman | Spaniard | Japanese |
    | Drink | water | tea | milk | orange juice | coffee |
    | Smoke | Kools | Chesterfield | Old Gold | Lucky Strike | Parliament |
    | Pet | fox | horse | snails | dog | zebra |

## How to think about it

Start with the clues that pin something to a **place**, then use the "next to" clues to spread out from them.

1. **House 1 is the Norwegian's** (clue 9) and **house 3 drinks milk** (clue 8).
2. The Norwegian is next to the blue house (14), and house 1 has only one neighbour: **house 2 is blue**.
3. Green is immediately right of ivory (5). The pair can't be houses 1–2 or 2–3 (house 2 is blue), so it is 3–4 or
   4–5. If green were house 3, house 3 would drink coffee (3), but it drinks milk. So **ivory is 4, green is 5**, and
   **house 5 drinks coffee**.
4. Red is the Englishman's (1), and the Norwegian's house 1 can't be red, so red is house 3, and **house 1 is
   yellow**, the only colour left. Then **house 1 smokes Kools** (7), and **house 2 keeps the horse** (11).
5. Drinks left: tea, orange juice, water, for houses 1, 2, 4. The Norwegian (house 1) doesn't drink tea (that's the
   Ukrainian, 4), and doesn't drink orange juice (that goes with Lucky Strike, 12, but house 1 smokes Kools). So **the
   Norwegian drinks water**. That is the first answer.
6. Houses 2 and 4 drink tea and orange juice in some order. If house 2 drank orange juice, it would smoke Lucky
   Strike (12), so its owner could be neither the Ukrainian (tea) nor the Japanese (Parliaments): only the Spaniard,
   whose dog clashes with house 2's horse. So **house 2 drinks tea and is the Ukrainian's**, and house 4 drinks orange
   juice and smokes Lucky Strike.
7. House 4's owner isn't the Japanese (Parliaments), so he is the **Spaniard, with the dog**, and the **Japanese lives
   in house 5** and smokes Parliaments.
8. Old Gold and Chesterfield are left for houses 2 and 3. Old Gold goes with snails (6), and house 2 has the horse,
   so house 3 smokes Old Gold and keeps snails, and house 2 smokes Chesterfield. Its neighbour has the fox (10):
   not house 3, so **house 1**. The only pet left is the zebra, in house 5: **the Japanese owns the zebra**.

At every step there was exactly one possibility. Good grid puzzles are built that way: the solver never needs to
guess, only to notice what is forced.

## Why it works: a grid of yes and no

The standard tool is the **logic grid**: for each pair of categories (nationality and colour, nationality and drink,
and so on) a table of crosses and ticks. A tick means "these go together", a cross means "they don't". Two rules then
do almost all the work:

- In each row and column of a table there is exactly one tick, so **one tick crosses out the rest of its row and
  column**, and **four crosses force the fifth square to be a tick**.
- Ticks **chain** between tables: if the Englishman is in red and red is house 3, the Englishman is in house 3.

A computer does the same thing more systematically. The puzzle has five categories, each a way of ordering five
things, so there are $(5!)^5 = 120^5 \approx 2.5 \times 10^{10}$ possible worlds, twenty-five billion. Checking each
one would take a while even for a computer. But a program that applies the clues as it builds, throwing away a
partial world as soon as one clue fails, finds the answer almost instantly: this is
[backtracking](../theory/search.md), and adding "propagate what is forced" makes it a **constraint solver**.

## Going deeper

??? info "Was it Einstein?"
    No. The puzzle appeared in *Life International* on 17 December 1962, with no author named. The stories that
    Einstein wrote it as a boy, or Lewis Carroll, have no source. Mentioning Kools and Chesterfields, brands from the
    1950s and 60s, also rules out a young Einstein (born 1879). The "only 2% can solve it" line has no source either.

??? info "Constraint satisfaction"
    The zebra puzzle is a textbook example of a **constraint satisfaction problem**: variables (which house each item
    is in), domains (houses 1 to 5) and constraints (the clues). The same framework schedules exams, colours maps,
    routes delivery vans and fits parts into factories. Sudoku is one too, see [Sudoku](sudoku.md). In general such
    problems are NP-complete, so no known method is fast on every instance, yet solvers succeed on huge real ones.

??? info "Make your own"
    To write a grid puzzle, choose the hidden solution first, then add clues one at a time, each time running a
    solver to see how many solutions remain. Stop when there is exactly one. Then try removing each clue: if the
    answer is still unique without it, the clue was not needed. Puzzle setters for magazines work this way.

**See also:** [Knights and knaves](knights-and-knaves.md) · [Sudoku](sudoku.md) · [Search and backtracking](../theory/search.md)

??? note "Sources"
    - "Who owns the zebra?", *Life International*, 17 December 1962, p. 95 (the puzzle), and the answer in the
      issue of 25 March 1963.
    - Stuart Russell, Peter Norvig, *Artificial Intelligence: A Modern Approach*, 4th ed., 2020, chapter 6
      (constraint satisfaction problems).
    - Francesca Rossi, Peter van Beek, Toby Walsh (eds.), *Handbook of Constraint Programming*, Elsevier, 2006.
