# The Monty Hall problem

*Three doors, one car, and the question that made thousands of experts write in angry letters*

On the American game show *Let's Make a Deal*, hosted by Monty Hall from 1963, contestants chose between doors with
prizes behind them. A puzzle based on it became famous in 1990, when Marilyn vos Savant answered it in her magazine
column *Ask Marilyn*. She said you should switch doors. Around ten thousand readers wrote in, nearly a thousand of
them with PhDs, and most of them told her she was wrong. She was right.

## Try it

A car is behind one of three doors, and a goat behind each of the other two. You pick a door. The host, **who knows
where the car is**, opens one of the other doors and shows you a goat. He then offers you the chance to switch to the
last closed door. Should you?

Play a few rounds, sometimes staying and sometimes switching. Then let the page play a thousand games, half staying
and half switching, and compare.

<div class="pz" data-pz="monty"></div>

## How to think about it

Most people reason: "Two doors are left, one has the car, so it's 50–50, and switching makes no difference." The
mistake is in "so it's 50–50". The two remaining doors are not alike: you chose one of them at random, but the host
chose the *other* one with care.

Think about your first pick. It is right **1 time in 3**. Nothing the host does can change that, because he will
always be able to open a goat door, whatever you picked. So staying wins 1 time in 3.

Now think about switching. If your first pick was a **goat** (2 times in 3), the host must open the *other* goat door,
and the remaining door is the car. Switching wins every time your first pick was wrong: **2 times in 3**.

**A hundred doors.** If it still feels wrong, imagine 100 doors. You pick one. The host, who knows, opens 98 of the
others, every one a goat, leaving your door and one other. Would you stay with your 1-in-100 first guess, or take the
one door the host so carefully avoided opening?

## Why it works: counting the cases

Suppose you always pick door 1. The car is equally likely to be behind any door:

| Car behind | Host opens | Staying gives | Switching gives |
|---|---|---|---|
| Door 1 | door 2 or 3 | car | goat |
| Door 2 | door 3 | goat | car |
| Door 3 | door 2 | goat | car |

Staying wins in one row of three; switching in two. In the language of probability, with $C_i$ the event "the car is
behind door $i$" and $H_3$ "the host opens door 3", **Bayes' rule** gives

$$
P(C_2 \mid H_3) = \frac{P(H_3 \mid C_2)\,P(C_2)}{P(H_3)} = \frac{1 \cdot \tfrac13}{\tfrac12} = \frac23,
$$

because if the car is behind door 2 the host *must* open door 3, while overall (by symmetry) he opens door 3 half the
time. The host's choice carries information, and Bayes' rule measures exactly how much.

<figure class="play" data-play="montysim"><span class="ai-tag">AI-created</span><figcaption><b>Play it a thousand times.</b> Press Play: two players face the same 1,000 games, one always staying with the first pick, one always switching. The lines show the share each has won so far; they settle near 1/3 and 2/3, as the table says. With 10 doors, where the host opens all but one, switching wins about 9 times in 10. Each run deals new games.</figcaption></figure>

## When the answer changes

The answer depends on the rules the host follows, which is part of why people argued so fiercely.

- **The host doesn't know**, and opens a door at random, which happens to show a goat. Then staying and switching
  really are 50–50. The goat was luck, not information.
- **The host only offers a switch when you picked the car** (a tricky host). Then switching always loses.
- **The host always opens a goat door, but prefers the lower-numbered one.** If you picked door 1 and he opens door 3,
  you learn he *had* to (door 2 has the car), and switching wins for certain.

The standard puzzle assumes the host always opens a goat door you didn't pick, always offers the switch, and chooses
at random when he has a choice. Under those rules, switching wins 2 times in 3.

## Going deeper

??? info "Paul Erdős and the simulation"
    The great mathematician Paul Erdős refused to believe the answer until a colleague, Andrew Vázsonyi, showed him a
    computer simulation of many games. Even then, the story goes, he wanted to know *why*. The thousand-games button
    above is the same kind of experiment: a simulation can convince you, but only the reasoning explains.

??? info "Bertrand's box"
    A puzzle from 1889 has the same structure. Three boxes hold two gold coins, two silver coins, and one of each. You
    pick a box at random and take out a coin without looking inside: it is gold. What is the chance the other coin in
    that box is gold too? Not 1/2, but **2/3**: of the three gold coins you might have drawn, two are in the gold-gold
    box. Joseph Bertrand used it to warn that intuition about probability is easily fooled.

??? info "Three prisoners"
    Martin Gardner published an equivalent puzzle in 1959. Three prisoners, one of whom will be pardoned. Prisoner A
    asks the guard to name one of the *others* who will be executed; the guard says "B". A thinks his chance has risen
    from 1/3 to 1/2. In fact A's chance is still 1/3, and C's has risen to 2/3, exactly as in Monty Hall.

**See also:** [Counting](../theory/counting.md) · [Game theory and Nim](../theory/game-theory.md) · [Hat puzzles](../logic/hat-puzzles.md)

??? note "Sources"
    - Steve Selvin, "A problem in probability" (letter), *The American Statistician* 29 (1975), 67, and "On the Monty
      Hall problem", 29 (1975), 134.
    - Marilyn vos Savant, "Ask Marilyn", *Parade*, 9 September 1990, 2 December 1990 and 17 February 1991.
    - Jason Rosenhouse, *The Monty Hall Problem: The Remarkable Story of Math's Most Contentious Brain Teaser*,
      Oxford University Press, 2009.
    - Paul Hoffman, *The Man Who Loved Only Numbers*, Hyperion, 1998, chapter 6 (Erdős and the simulation).
    - Martin Gardner, "Mathematical Games", *Scientific American*, October and November 1959 (the three prisoners).
    - Joseph Bertrand, *Calcul des probabilités*, Gauthier-Villars, 1889.
