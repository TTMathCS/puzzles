# Knights and knaves

*An island where everyone either always tells the truth or always lies*

On a certain island, every inhabitant is a **knight**, who only ever says true things, or a **knave**, who only ever
says false things. You can't tell them apart by looking. All you have is what they say. The logician Raymond
Smullyan made this island famous in 1978, and it is still the best place to practise reasoning by contradiction.

## Try it

You meet two islanders. **A** says: "B is a knave." **B** says: "A and I are the same kind."

<div class="pz" data-pz="kk" data-people="A,B" data-answer="knight,knave"></div>

??? success "Answer"
    A is a knight and B is a knave. Suppose B is a knight. Then B's sentence is true, so A is also a knight; but then
    A's sentence "B is a knave" is true, a contradiction. So B is a knave. Then A's sentence is true, so A is a
    knight. Check B's sentence: "same kind" is false (knight and knave), and B, a knave, has lied. Everything fits.

## How to think about it

Every islander's statement gives you a simple rule:

> *If the speaker is a knight, the statement is true. If the speaker is a knave, the statement is false.*

In other words, **the speaker is a knight exactly when the statement is true**. With two people there are only four
possibilities (knight-knight, knight-knave, knave-knight, knave-knave), so you can always check them all. With more
people a better way is to suppose one person's type and follow the consequences until either everything fits or
something breaks.

A few sentences are especially useful to recognise:

- **"I am a knave."** No islander can say this. A knight would be lying, and a knave would be telling the truth.
- **"I am a knight."** Anyone can say this, so it tells you nothing.
- **"At least one of us is a knave"**, said by A. If A were a knave, the sentence would be true, which a knave can't
  say. So A is a knight, the sentence is true, and the other person is a knave.

## Why it works

Write $A$ for the statement "A is a knight" and $S$ for what A says. The rule of the island is

$$
A \leftrightarrow S,
$$

"A is a knight if and only if S is true". Every puzzle on the island is a small system of these equivalences, and
solving it means finding truth values that make them all true at once. That is exactly the **satisfiability
problem** of propositional logic. For two or three islanders a truth table settles it; for hundreds, it is the same
problem that modern SAT solvers handle for chip design and scheduling (see [How hard is a puzzle?](../theory/complexity.md)).

## A harder one

Three islanders, A, B and C. **A** says: "All of us are knaves." **B** says: "Exactly one of us is a knight."
What is each?

??? success "Answer"
    A can't be a knight (then "all of us are knaves" would include A). So A is a knave, and not all three are
    knaves: at least one of B and C is a knight.

    If B were a knight, B's sentence would be true: exactly one knight, B. Then C is a knave. Check A: a knave,
    lying about "all knaves". Consistent!

    If B were a knave, B's sentence would be false. A is a knave, B is a knave, and at least one is a knight, so C
    is a knight: exactly one knight, which makes B's sentence true. Contradiction. So **A knave, B knight, C knave**.

## The question that always works

Here is the most famous trick. You stand at a fork in the road. One way leads to the village; you don't know which.
One islander stands there, and you may ask one yes-or-no question. Ask:

> "If I asked you whether the left road leads to the village, would you say yes?"

A knight answers truthfully. A knave would lie about the left road, but you have asked what he *would say*, so he
lies about his lie, and the two lies cancel. Either way, "yes" means the left road is right. The double question
turns a liar into a truth-teller, just as $\neg\neg p$ is the same as $p$.

## Going deeper

??? info "Normals, spies and the hardest logic puzzle ever"
    Smullyan added **normals**, who sometimes lie and sometimes tell the truth, which makes many puzzles have no
    answer at all. George Boolos (1996) went further with "the hardest logic puzzle ever": three gods, True, False
    and Random, answer in their own words *da* and *ja*, and you don't know which word means yes. Three questions are
    enough to find out who is who; the solution uses the same double-question idea as the fork in the road.

??? info "Gödel on the island"
    Smullyan used the island to explain Gödel's incompleteness theorem. Suppose an islander says: "You will never be
    able to prove that I am a knight." If he is a knave, the sentence is false, so you *can* prove he is a knight:
    proving something false. If your proofs are sound, he must be a knight whose knighthood you can never prove. In
    Gödel's theorem the islander is a sentence of arithmetic that says "I am not provable", and the conclusion is the
    same: a true statement no proof can reach.

??? info "Counting the possibilities"
    With $n$ islanders there are $2^n$ ways to assign knight or knave. Ten islanders give 1,024 cases, thirty give
    over a billion. Checking every case is always possible, but slow; reasoning (or a clever solver) cuts the cases
    down. This growth is why the [counting](../theory/counting.md) of possibilities matters so much in puzzles.

**See also:** [Hat puzzles](hat-puzzles.md) · [The zebra puzzle](zebra-puzzle.md) · [How hard is a puzzle?](../theory/complexity.md)

??? note "Sources"
    - Raymond Smullyan, *What Is the Name of This Book? The Riddle of Dracula and Other Logical Puzzles*,
      Prentice-Hall, 1978, chapter 3.
    - Raymond Smullyan, *Forever Undecided: A Puzzle Guide to Gödel*, Knopf, 1987.
    - George Boolos, "The Hardest Logic Puzzle Ever", *The Harvard Review of Philosophy* 6 (1996), 62–65.
    - Brian Rabern, Landon Rabern, "A simple solution to the hardest logic puzzle ever", *Analysis* 68 (2008), 105–112.
