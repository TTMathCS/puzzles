# The bridges of Königsberg

*A Sunday walk over seven bridges, and the birth of graph theory*

The city of Königsberg in Prussia (today Kaliningrad, in Russia) was built on both banks of the river Pregel and on two
islands in it. Seven bridges joined the four parts of the city. The townspeople wondered: could you take a walk that
crosses every bridge **exactly once**? Nobody could find one. In 1736 Leonhard Euler proved that nobody ever would,
and the way he proved it started a new branch of mathematics.

## Try it

Draw it yourself. The four land areas are: the north bank, the south bank, the island in the middle (the Kneiphof) and
the land to the east between the two arms of the river. The bridges:

- two bridges from the island to the north bank;
- two bridges from the island to the south bank;
- one bridge from the island to the east;
- one from the north bank to the east;
- one from the south bank to the east.

Try to trace a route that uses each of the seven bridges once. You may start and end anywhere.

??? success "Answer"
    It can't be done. Count the bridges touching each land area: the island has 5, the north bank 3, the south bank
    3, the east 3. All four are **odd**. As the next section shows, a walk using every bridge once is possible only
    when at most two areas have an odd number of bridges.

## How to think about it: only the connections matter

Euler's key step was to throw away almost everything: the shapes of the land, the lengths of the bridges, the street
map. All that matters is **which land areas each bridge connects**. Draw each land area as a dot and each bridge as a
line between two dots. Today this picture is called a **graph**: dots are **vertices**, lines are **edges**, and the
number of edges at a vertex is its **degree**.

Now think about a walk passing **through** an area, neither starting nor ending there. Each time you arrive by one
bridge you must leave by another. So the bridges at that area are used up in pairs: **in, out, in, out**. If the walk
uses every bridge exactly once, every area you only pass through has an **even** degree.

Only the start and the end can be different: you leave the start once without arriving, and arrive at the end once
without leaving. So:

> A walk that uses every edge exactly once (an **Euler path**) is possible only if **zero or two** vertices have odd
> degree. With zero, the walk can end where it started (an **Euler circuit**). With two, it must start at one odd
> vertex and end at the other.

Königsberg has four odd vertices, so no walk exists. A puzzle that defeated a whole town for years falls to a single
counting argument.

## Why it works: the other direction

Euler showed the condition is **necessary**. Is it also **sufficient**: if a connected graph has zero or two odd
vertices, is there always such a walk? Yes, and this was proved by Carl Hierholzer, published in 1873. His method
also builds the walk:

1. Start anywhere (at an odd vertex, if there are two) and walk along unused edges until you get stuck. With even
   degrees you can only get stuck back at the start: you have a loop.
2. If some edges are still unused, find a vertex on your loop that has unused edges, walk a new loop from it, and
   splice the new loop into the old one at that vertex.
3. Repeat until every edge is used.

This is how the [envelope puzzle](../start/index.md#6-one-walk-every-path) on the start page works: two odd corners,
so start at one and finish at the other.

There is one more neat fact hiding here. Add up the degrees of all the vertices: each edge is counted twice, once at
each end, so the total is **twice the number of edges**, an even number. Therefore **the number of odd vertices is
always even**. You will never meet a graph with exactly one odd vertex, or three.

## Going deeper

??? info "Königsberg today"
    Two of the seven bridges were destroyed in bombing in 1944, and others were later demolished or rebuilt. Today
    five bridges of the old layout connect the four areas, and two areas have odd degree, so an Euler path finally
    exists, though not a closed circuit: you must start and end in different places.

??? info "Postmen and snowploughs"
    A postman must walk along every street at least once and return to the post office. If some corners have odd
    degree, some streets must be walked twice. Choosing which ones, to make the total walk as short as possible, is
    the **Chinese postman problem**, named after Meigu Guan, who posed it in 1960. It can be solved efficiently by
    pairing up the odd vertices as cheaply as possible. City councils use the same ideas to route snowploughs and
    rubbish trucks.

??? info "Euler versus Hamilton"
    An Euler path uses every **edge** once; a **Hamiltonian** path visits every **vertex** once, like the
    [knight's tour](knights-tour.md). They sound alike, but they are worlds apart: Euler's question is answered by
    counting degrees in a moment, while no fast method is known for Hamilton's, which is NP-complete. See
    [How hard is a puzzle?](../theory/complexity.md)

**See also:** [The knight's tour](knights-tour.md) · [Invariants and parity](../theory/invariants.md) · [River crossings](../logic/river-crossings.md)

??? note "Sources"
    - Leonhard Euler, "Solutio problematis ad geometriam situs pertinentis", *Commentarii Academiae Scientiarum
      Petropolitanae* 8 (1736, published 1741), 128–140.
    - Carl Hierholzer, "Ueber die Möglichkeit, einen Linienzug ohne Wiederholung und ohne Unterbrechung zu umfahren",
      *Mathematische Annalen* 6 (1873), 30–32.
    - Norman L. Biggs, E. Keith Lloyd, Robin J. Wilson, *Graph Theory 1736–1936*, Oxford University Press, 1976.
    - Mei-Ko Kwan (Guan Meigu), "Graphic programming using odd or even points", *Chinese Mathematics* 1 (1962), 273–277.
    - Brian Hopkins, Robin J. Wilson, "The truth about Königsberg", *The College Mathematics Journal* 35 (2004), 198–207.
