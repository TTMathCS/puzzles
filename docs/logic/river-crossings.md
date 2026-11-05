# River crossings

*Getting everyone across a river safely, and the idea of a puzzle as a map*

River-crossing puzzles are among the oldest puzzles written down. Around the year 800, the scholar Alcuin of York
put several into a schoolbook, *Problems to Sharpen the Young*, including the one still told today: a farmer, a wolf,
a goat and a cabbage. The puzzles look like stories, but underneath each is a map, and the answer is a path on it.

## Try it

A farmer must take a wolf, a goat and a cabbage across a river. The boat carries the farmer and at most one of them.
If the farmer is not there, the wolf eats the goat, and the goat eats the cabbage. How does the farmer get all three
across?

??? success "Answer"
    1. Take the goat across. 2. Return alone. 3. Take the wolf across. 4. **Bring the goat back.**
    5. Take the cabbage across. 6. Return alone. 7. Take the goat across.

    (Taking the cabbage at step 3 and the wolf at step 5 works too.) Seven crossings is the fewest possible.

The step that surprises people is step 4: carrying something *back*. It feels like going backwards, but it is the
only way through.

## How to think about it: states and moves

Describe the puzzle completely by saying who is on the starting bank. There are four characters (farmer, wolf, goat,
cabbage), each on one bank or the other, so there are $2^4 = 16$ possible **states**. Some are unsafe, such as wolf
and goat together without the farmer. A **move** is a boat trip, and it turns one state into another.

Draw each safe state as a dot and each possible trip as a line between dots. The puzzle becomes: find a path from
"everyone on the left" to "everyone on the right". Of the 16 states, 6 are unsafe, leaving 10, and the map of those
10 turns out to be a single chain that splits in two and joins again, which is why there are exactly two shortest
answers.

This way of thinking, called **state-space search**, solves every puzzle on this page, and it is how computers solve
puzzles too. Breadth-first search explores all states one move away, then two moves, and so on, so the first time it
reaches the goal it has found a shortest path. See [Search and backtracking](../theory/search.md).

## Missionaries and cannibals

A harder classic: three missionaries and three cannibals must cross with a boat that holds two. On either bank, if
cannibals ever outnumber missionaries (when any missionaries are there), the missionaries are in danger. The boat
cannot cross empty.

??? success "Answer (11 crossings)"
    Write each bank as (missionaries, cannibals), the left bank first.

    1. Two cannibals cross. Left (3,1). 2. One returns. Left (3,2).
    3. Two cannibals cross. Left (3,0). 4. One returns. Left (3,1).
    5. Two missionaries cross. Left (1,1). 6. A missionary and a cannibal return. Left (2,2).
    7. Two missionaries cross. Left (0,2). 8. One cannibal returns. Left (0,3).
    9. Two cannibals cross. Left (0,1). 10. One returns. Left (0,2).
    11. Two cannibals cross. Everyone is over.

    Step 6 is the backwards step again: a pair comes *back* to keep the numbers safe.

Here the state is (missionaries on the left, cannibals on the left, which side the boat is on): $4 \times 4 \times 2 =
32$ states, of which only some are safe. A search finds that 11 crossings is the minimum, and with four of each and a
boat of two there is **no** solution at all. Puzzles that turn out impossible are often the most interesting, because
the proof is a complete search, or a cleverer argument that avoids it.

## The bridge and the torch

A modern cousin, popular in job interviews: four people must cross a narrow bridge at night. They have one torch, at
most two can cross at once, and a pair walks at the slower person's speed. They take 1, 2, 5 and 10 minutes. Can all
four cross in 17 minutes?

??? success "Answer"
    Yes. 1 and 2 cross (2 min). 1 returns (1). 5 and 10 cross (10). 2 returns (2). 1 and 2 cross (2).
    Total 2 + 1 + 10 + 2 + 2 = 17. The trick is to send the two slowest **together**, so the 10-minute walk also
    carries the 5-minute walker for free.

The obvious plan, where the fastest person escorts everyone, takes 10 + 1 + 5 + 1 + 2 = 19 minutes. For any
number of people, the best schedule is known: at each stage choose the cheaper of "the fastest escorts the two
slowest" and "the two slowest cross together". Rote (2002) proved this rule always gives the minimum.

## Going deeper

??? info "Why the farmer's map has two paths"
    Label a state by the set of characters on the starting bank. The safe states with the boat on the left are:
    FWGC, FWC, FGC, FWG, FG; and with the boat on the right: WC, W, C, G, (empty). From FWGC the only safe trip
    takes the goat (leaving WC). From FWC the farmer can take the wolf or the cabbage, the fork. Each branch needs
    the goat brought back, and the branches join again at FG. A search of the 10 states shows no shorter path.

??? info "Jealous husbands"
    Alcuin's book also has a version with three couples, where no woman may be on a bank or in the boat with another
    man unless her husband is present. With a two-person boat it takes 11 crossings, like the missionaries. With four
    couples it is impossible unless the boat holds three, or there is an island in the middle of the river, as the
    mathematician Édouard Lucas showed in the 1880s.

??? info "Graphs everywhere"
    A map of states and moves is a **graph**: dots (vertices) joined by lines (edges). The same picture describes the
    [Tower of Hanoi](../math/tower-of-hanoi.md), whose states form a beautiful triangle-shaped graph, and the
    [15 puzzle](../math/fifteen-puzzle.md), whose graph is too large to draw (over ten trillion states) but splits
    into two halves that are not connected at all.

**See also:** [Search and backtracking](../theory/search.md) · [Tower of Hanoi](../math/tower-of-hanoi.md) · [The bridges of Königsberg](../math/konigsberg.md)

??? note "Sources"
    - Alcuin of York, *Propositiones ad acuendos iuvenes* (about 800), problems 17–20; English translation by
      John Hadley and David Singmaster, *The Mathematical Gazette* 76 (1992), 102–126.
    - Saul Amarel, "On representations of problems of reasoning about actions", in *Machine Intelligence 3*, 1968
      (missionaries and cannibals as a state space).
    - Günter Rote, "Crossing the bridge at night", *Bulletin of the EATCS* 78 (2002), 241–246.
    - Édouard Lucas, *Récréations mathématiques*, vol. 1, 1882.
