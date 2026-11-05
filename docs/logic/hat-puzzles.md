# Hat puzzles

*Everyone sees everyone's hat but their own. What can they work out?*

Hat puzzles are about knowledge: what you can see, what others can see, and what you learn when someone speaks, or
stays silent. They look like party tricks, but the best of them hide real mathematics, from parity to the
error-correcting codes that protect data in phones and spacecraft.

## Try it: a hundred hats in a line

A hundred prisoners stand in a line, all facing forward. Each wears a red or a blue hat, chosen at random. Each can
see every hat **in front of** them, but not their own or any behind them. Starting at the back, each in turn calls
out one word, "red" or "blue", which everyone hears. Anyone who names their own hat colour goes free.

They may agree on a plan beforehand. How many can they be sure to save?

??? success "Answer: 99, and the last one has a 50% chance"
    The person at the back counts the **red** hats they see in front of them. If the count is even, they say "red";
    if odd, "blue". Their own hat is a coin toss, so they are saved half the time.

    Now the next person knows whether the number of red hats among the 99 in front of the back person is even or
    odd. They can see 98 of those hats (all but their own), count the reds, and compare: if the parity has changed,
    their own hat is red; if not, blue. They call their colour correctly.

    Everyone after them does the same, also keeping track of the colours already called behind them. Every one of
    the 99 is certain to be right.

## How to think about it

The back person can't help themself: nothing they see tells them anything about their own hat. So they should spend
their one word on helping everyone else. One word is one **bit** of information, red or blue, and the clever choice
is to make that bit the **parity** (even or odd) of the hats in front. Parity is the one fact that, combined with
what each later person sees and hears, pins down their own hat exactly.

This is the same idea as a **parity check bit** in computing: a single extra bit, set so that the number of 1s is
even, lets a computer detect when one bit has been flipped. See [Invariants and parity](../theory/invariants.md).

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 390" role="img" aria-labelledby="sk-p-hats-t"><title id="sk-p-hats-t">A line of people in red and blue hats, each seeing every hat in front; the back person says red if the number of red hats in front is odd, and everyone else can then work out their own hat</title><defs><filter id="sk-p-hats-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-p-hats-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-p-hats-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-p-hats-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-p-hats-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="390" filter="url(#sk-p-hats-paper)"/><g filter="url(#sk-p-hats-pen)"><text x="30" y="44" class="h">One word, spent on parity</text><circle cx="560" cy="170" r="14" class="p room"/><path class="p" d="M540 230 Q560 190 580 230"/><path class="p rust" d="M544 160 L560 128 L576 160Z"/><circle cx="494" cy="170" r="14" class="p room"/><path class="p" d="M474 230 Q494 190 514 230"/><path class="p ice" d="M478 160 L494 128 L510 160Z"/><circle cx="428" cy="170" r="14" class="p room"/><path class="p" d="M408 230 Q428 190 448 230"/><path class="p rust" d="M412 160 L428 128 L444 160Z"/><circle cx="362" cy="170" r="14" class="p room"/><path class="p" d="M342 230 Q362 190 382 230"/><path class="p rust" d="M346 160 L362 128 L378 160Z"/><circle cx="296" cy="170" r="14" class="p room"/><path class="p" d="M276 230 Q296 190 316 230"/><path class="p ice" d="M280 160 L296 128 L312 160Z"/><circle cx="230" cy="170" r="14" class="p room"/><path class="p" d="M210 230 Q230 190 250 230"/><path class="p ice" d="M214 160 L230 128 L246 160Z"/><circle cx="164" cy="170" r="14" class="p room"/><path class="p" d="M144 230 Q164 190 184 230"/><path class="p rust" d="M148 160 L164 128 L180 160Z"/><circle cx="98" cy="170" r="14" class="p room"/><path class="p" d="M78 230 Q98 190 118 230"/><path class="p ice" d="M82 160 L98 128 L114 160Z"/><text x="560" y="262" text-anchor="middle" class="s">the back</text><text x="98" y="262" text-anchor="middle" class="s">the front</text><path class="p" d="M520 110 L120 110" marker-end="url(#sk-p-hats-ah)"/><text x="320" y="98" text-anchor="middle" class="s">each sees every hat in front</text><text x="40" y="314" class="l">The back person says "red" if the reds in front are odd.</text><text x="40" y="340" class="s">Everyone after counts the reds they see and hear, and knows their own hat:</text><text x="40" y="360" class="s">all but the first are saved. A parity bit, as in computers.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

<figure class="play" data-play="hats"><span class="ai-tag">AI-created</span><figcaption><b>Watch it.</b> Twenty in a line instead of a hundred. The one at the back calls “red” if he sees an odd number of red hats; then each person in turn counts the reds ahead, adds the reds already called behind, and knows their own hat. Press Play for a new line of hats.</figcaption></figure>

## Three wise men

A king has three white hats and two black ones. He blindfolds three wise men, puts a hat on each and hides the other
two. Each man can see the other two hats but not his own. The king asks them, together, to say the colour of their
own hat. For a long time nobody speaks. Then one says: "My hat is white." How does he know?

??? success "Answer"
    Call the men A, B and C, and suppose A is the one who speaks. A thinks: "Suppose my hat were black. Then B would
    see my black hat and C's hat. B would reason: *if my own hat were black too, C would see two black hats, and since
    there are only two, C would know at once that his hat is white and would have said so. C is silent, so my hat is
    white.* B would then have spoken. B hasn't, and neither has C by the same reasoning, so my hat is not black."

    In fact all three hats are white: with any black hat in play, someone would have known sooner. The silence itself
    is the clue. Logicians study puzzles like this as **common knowledge**: not just what each person knows, but what
    each knows the others know.

## Three players, one guess

Three players each get a red or blue hat at random and see the other two. At the same moment, each either guesses
their own colour or passes. The team **wins** if at least one person guesses right and **nobody** guesses wrong. With
no plan, the best is 50%: one player guesses, the others pass. Can they do better?

??? success "Answer: 75%"
    The plan: if you see two hats of the **same** colour, guess the **opposite** colour. If you see two different
    colours, pass.

    Of the 8 equally likely hat patterns, 6 have two hats of one colour and one of the other (such as red, red,
    blue). In each of those, only the odd-one-out sees two matching hats, guesses the opposite, and is right: a win.
    In the other 2 patterns (all red or all blue), everyone sees a matching pair, everyone guesses the opposite, and
    everyone is wrong. So the team wins in 6 of 8 cases, **75%**.

    The trick is not that anyone guesses better than 50%: each guess is still a coin toss. The plan arranges for the
    wrong guesses to **pile up together** in a few cases, and the right guesses to be **spread out** over many.

## Why it works: hats and codes

For three players the 75% plan comes from the **Hamming code**, invented by Richard Hamming in 1950 to correct errors
in computer memory. Write red as 0 and blue as 1. The "bad" patterns, where the team loses, are 000 and 111: the
**codewords** of the simplest Hamming code. Every other pattern differs from a codeword in exactly one place, and the
player at that place is the one who guesses.

The same works for $n = 2^k - 1$ players (7, 15, 31, ...): using the Hamming code of that length, the team wins with
probability

$$
1 - \frac{1}{n + 1},
$$

so 7 players win 7 times out of 8, and 15 players win 15 times out of 16. The game was invented by Todd Ebert in his
1998 PhD thesis, and its link to codes was explained by Elwyn Berlekamp and others; it made the *New York Times* in
2001.

## Going deeper

??? info "Why a Hamming code is perfect"
    With 7 players there are $2^7 = 128$ hat patterns. The Hamming code of length 7 has 16 codewords. Around each
    codeword are the 7 patterns that differ from it in one place, so each codeword "covers" itself and 7 neighbours,
    8 patterns in all, and $16 \times 8 = 128$: every pattern is covered exactly once. A code with no overlaps and no
    gaps is called **perfect**; Hamming codes are among the very few perfect codes that exist.

??? info "Infinitely many prisoners"
    With infinitely many prisoners in a line, each seeing all the hats in front, there is a strategy (using the axiom
    of choice) under which **only finitely many** guess wrong, even though no one hears anything. It sounds
    impossible, and it is one of the strangest consequences of that axiom. Hardin and Taylor's book *The Mathematics
    of Coordinated Inference* is about such puzzles.

**See also:** [Knights and knaves](knights-and-knaves.md) · [Invariants and parity](../theory/invariants.md) · [Counting](../theory/counting.md)

??? note "Sources"
    - Peter Winkler, *Mathematical Puzzles: A Connoisseur's Collection*, A K Peters, 2004 (hats in a line).
    - Todd Ebert, *Applications of Recursive Operators to Randomness and Complexity*, PhD thesis, UC Santa Barbara, 1998.
    - Sara Robinson, "Why mathematicians now care about their hat color", *The New York Times*, 10 April 2001.
    - Richard W. Hamming, "Error detecting and error correcting codes", *Bell System Technical Journal* 29 (1950), 147–160.
    - Christopher S. Hardin, Alan D. Taylor, *The Mathematics of Coordinated Inference*, Springer, 2013.
    - Ronald Fagin, Joseph Halpern, Yoram Moses, Moshe Vardi, *Reasoning About Knowledge*, MIT Press, 1995 (common knowledge).
