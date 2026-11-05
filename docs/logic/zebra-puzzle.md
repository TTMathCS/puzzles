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

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 400" role="img" aria-labelledby="sk-p-grid-t"><title id="sk-p-grid-t">A logic grid of house colours against house numbers: a tick for blue in house 2 crosses out every other box in its row and column</title><defs><filter id="sk-p-grid-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-p-grid-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-p-grid-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-p-grid-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-p-grid-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="400" filter="url(#sk-p-grid-paper)"/><g filter="url(#sk-p-grid-pen)"><text x="30" y="44" class="h">A grid of yes and no</text><text x="215" y="96" text-anchor="middle" class="s">house 1</text><text x="265" y="96" text-anchor="middle" class="s">house 2</text><text x="315" y="96" text-anchor="middle" class="s">house 3</text><text x="365" y="96" text-anchor="middle" class="s">house 4</text><text x="415" y="96" text-anchor="middle" class="s">house 5</text><text x="176" y="138" text-anchor="end" class="l">red</text><path class="p room" d="M190 106 L240 106 L240 156 L190 156Z"/><text x="215" y="139" text-anchor="middle" class="b"></text><path class="p room" d="M240 106 L290 106 L290 156 L240 156Z"/><text x="265" y="139" text-anchor="middle" class="b">✗</text><path class="p room" d="M290 106 L340 106 L340 156 L290 156Z"/><text x="315" y="139" text-anchor="middle" class="b"></text><path class="p room" d="M340 106 L390 106 L390 156 L340 156Z"/><text x="365" y="139" text-anchor="middle" class="b"></text><path class="p room" d="M390 106 L440 106 L440 156 L390 156Z"/><text x="415" y="139" text-anchor="middle" class="b"></text><text x="176" y="188" text-anchor="end" class="l">green</text><path class="p room" d="M190 156 L240 156 L240 206 L190 206Z"/><text x="215" y="189" text-anchor="middle" class="b"></text><path class="p room" d="M240 156 L290 156 L290 206 L240 206Z"/><text x="265" y="189" text-anchor="middle" class="b">✗</text><path class="p room" d="M290 156 L340 156 L340 206 L290 206Z"/><text x="315" y="189" text-anchor="middle" class="b"></text><path class="p room" d="M340 156 L390 156 L390 206 L340 206Z"/><text x="365" y="189" text-anchor="middle" class="b"></text><path class="p room" d="M390 156 L440 156 L440 206 L390 206Z"/><text x="415" y="189" text-anchor="middle" class="b"></text><text x="176" y="238" text-anchor="end" class="l">ivory</text><path class="p room" d="M190 206 L240 206 L240 256 L190 256Z"/><text x="215" y="239" text-anchor="middle" class="b"></text><path class="p room" d="M240 206 L290 206 L290 256 L240 256Z"/><text x="265" y="239" text-anchor="middle" class="b">✗</text><path class="p room" d="M290 206 L340 206 L340 256 L290 256Z"/><text x="315" y="239" text-anchor="middle" class="b"></text><path class="p room" d="M340 206 L390 206 L390 256 L340 256Z"/><text x="365" y="239" text-anchor="middle" class="b"></text><path class="p room" d="M390 206 L440 206 L440 256 L390 256Z"/><text x="415" y="239" text-anchor="middle" class="b"></text><text x="176" y="288" text-anchor="end" class="l">yellow</text><path class="p room" d="M190 256 L240 256 L240 306 L190 306Z"/><text x="215" y="289" text-anchor="middle" class="b"></text><path class="p room" d="M240 256 L290 256 L290 306 L240 306Z"/><text x="265" y="289" text-anchor="middle" class="b">✗</text><path class="p room" d="M290 256 L340 256 L340 306 L290 306Z"/><text x="315" y="289" text-anchor="middle" class="b"></text><path class="p room" d="M340 256 L390 256 L390 306 L340 306Z"/><text x="365" y="289" text-anchor="middle" class="b"></text><path class="p room" d="M390 256 L440 256 L440 306 L390 306Z"/><text x="415" y="289" text-anchor="middle" class="b"></text><text x="176" y="338" text-anchor="end" class="l">blue</text><path class="p room" d="M190 306 L240 306 L240 356 L190 356Z"/><text x="215" y="339" text-anchor="middle" class="b">✗</text><path class="p gold" d="M240 306 L290 306 L290 356 L240 356Z"/><text x="265" y="339" text-anchor="middle" class="b">✓</text><path class="p room" d="M290 306 L340 306 L340 356 L290 356Z"/><text x="315" y="339" text-anchor="middle" class="b">✗</text><path class="p room" d="M340 306 L390 306 L390 356 L340 356Z"/><text x="365" y="339" text-anchor="middle" class="b">✗</text><path class="p room" d="M390 306 L440 306 L440 356 L390 356Z"/><text x="415" y="339" text-anchor="middle" class="b">✗</text><text x="460" y="150" class="s">One ✓ in a row or</text><text x="460" y="170" class="s">column: every other box</text><text x="460" y="190" class="s">there is ✗.</text><text x="460" y="240" class="s">Clues fill boxes; filled</text><text x="460" y="260" class="s">boxes force more boxes.</text><text x="40" y="380" class="s">"The Norwegian lives next to the blue house", with the Norwegian in house 1: blue is house 2.</text></g></svg><figcaption>Sketched for this page. One step of the grid, not the whole solution.</figcaption></figure>

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
