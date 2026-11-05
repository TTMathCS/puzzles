#!/usr/bin/env python3
"""Writes docs/images/puzzles-hero.svg (1600x900), the banner on the home page.

A Mars evening: a dusty sky, two moons (Phobos and Deimos), dunes. On the ground stand three puzzles from the site,
each drawn as a correct answer worked out in this script, not by hand:
  - a chessboard with eight queens, none attacking another (the first solution found by backtracking);
  - a Tower of Hanoi with six discs, frozen at move 39 of the 63-move solution;
  - the 3 x 3 magic square (the Lo Shu), every line adding to 15, checked below.
Render to WebP with tools/hero/render.js (Playwright).
"""
import pathlib

W, H = 1600, 900
out = []
a = out.append


def queens(n=8):
    cols = []

    def place(r):
        if r == n:
            return True
        for c in range(n):
            if all(c != cc and abs(c - cc) != r - rr for rr, cc in enumerate(cols)):
                cols.append(c)
                if place(r + 1):
                    return True
                cols.pop()
        return False
    place(0)
    return cols


def hanoi_state(n, stop):
    pegs = [list(range(n, 0, -1)), [], []]
    moves = []

    def h(k, x, y, z):
        if k:
            h(k - 1, x, z, y); moves.append((x, z)); h(k - 1, y, x, z)
    h(n, 0, 1, 2)
    for x, z in moves[:stop]:
        pegs[z].append(pegs[x].pop())
    return pegs


LO_SHU = [[4, 9, 2], [3, 5, 7], [8, 1, 6]]
lines = LO_SHU + [list(c) for c in zip(*LO_SHU)] + [[LO_SHU[i][i] for i in range(3)], [LO_SHU[i][2 - i] for i in range(3)]]
assert all(sum(l) == 15 for l in lines)

a(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
a('<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">'
  '<stop offset="0" stop-color="#1b1220"/><stop offset=".55" stop-color="#7a3b2a"/><stop offset=".8" stop-color="#d98a55"/></linearGradient>'
  '<linearGradient id="ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8f4426"/><stop offset="1" stop-color="#3b1a10"/></linearGradient>'
  '<radialGradient id="sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#cfe3ff"/><stop offset=".3" stop-color="#9cc0e8" stop-opacity=".7"/><stop offset="1" stop-color="#9cc0e8" stop-opacity="0"/></radialGradient>'
  '<filter id="glow"><feGaussianBlur stdDeviation="6"/></filter></defs>')
a(f'<rect width="{W}" height="{H}" fill="url(#sky)"/>')
# a blue Martian sunset near the horizon, two moons
a('<circle cx="1240" cy="560" r="160" fill="url(#sun)"/>')
a('<circle cx="1240" cy="560" r="16" fill="#eef5ff"/>')
a('<ellipse cx="300" cy="150" rx="16" ry="11" fill="#d8c3b0" opacity=".9"/>')
a('<circle cx="560" cy="95" r="5" fill="#e6d6c6" opacity=".9"/>')
import random
random.seed(7)
for _ in range(120):
    x, y = random.uniform(0, W), random.uniform(0, 380)
    a(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{random.uniform(.6, 1.7):.1f}" fill="#fff" opacity="{random.uniform(.2, .8):.2f}"/>')
# dunes
a('<path d="M0 600 C 250 540 420 590 640 570 S 1050 520 1300 575 S 1520 560 1600 570 L1600 900 L0 900Z" fill="#6e321d"/>')
a('<path d="M0 660 C 300 620 520 680 820 650 S 1300 610 1600 650 L1600 900 L0 900Z" fill="url(#ground)"/>')

# eight queens, a board lying in perspective-free view on the left
q = queens()
bx, by, s = 120, 395, 42
a(f'<rect x="{bx-8}" y="{by-8}" width="{8*s+16}" height="{8*s+16}" rx="8" fill="#2b1a12" opacity=".85"/>')
for r in range(8):
    for c in range(8):
        a(f'<rect x="{bx+c*s}" y="{by+r*s}" width="{s}" height="{s}" fill="{"#b9805a" if (r+c)%2 else "#ead2b6"}"/>')
    a(f'<text x="{bx+q[r]*s+s/2}" y="{by+r*s+s*0.78}" font-size="{s*0.82:.0f}" text-anchor="middle" fill="#2b1a12" font-family="DejaVu Sans, sans-serif">&#9819;</text>')

# Tower of Hanoi, centre
pegs = hanoi_state(6, 39)
base_y, px = 760, [620, 800, 980]
a(f'<rect x="540" y="{base_y}" width="520" height="22" rx="6" fill="#2b1a12"/>')
for i, p in enumerate(pegs):
    a(f'<rect x="{px[i]-6}" y="{base_y-250}" width="12" height="250" rx="6" fill="#d9b48f"/>')
    for j, d in enumerate(p):
        w = 40 + d * 22
        hue = int(d * 360 / 7)
        a(f'<rect x="{px[i]-w/2}" y="{base_y-30*(j+1)}" width="{w}" height="27" rx="9" fill="hsl({hue},62%,60%)" stroke="#2b1a12" stroke-opacity=".35"/>')

# Lo Shu magic square, glowing, right
mx, my, ms = 1230, 230, 70
a(f'<rect x="{mx-10}" y="{my-10}" width="{3*ms+20}" height="{3*ms+20}" rx="12" fill="#ffcf6e" opacity=".25" filter="url(#glow)"/>')
for r in range(3):
    for c in range(3):
        a(f'<rect x="{mx+c*ms}" y="{my+r*ms}" width="{ms}" height="{ms}" fill="#1b1220" fill-opacity=".55" stroke="#ffcf6e" stroke-opacity=".8"/>')
        a(f'<text x="{mx+c*ms+ms/2}" y="{my+r*ms+ms*0.68}" font-size="38" text-anchor="middle" fill="#ffe2a8" font-family="DejaVu Sans, sans-serif">{LO_SHU[r][c]}</text>')
a(f'<text x="{mx+1.5*ms}" y="{my+3*ms+44}" font-size="22" text-anchor="middle" fill="#ffe2a8" opacity=".8" font-family="DejaVu Sans, sans-serif">every line = 15</text>')
a('</svg>')

p = pathlib.Path(__file__).resolve().parents[2] / "docs/images/puzzles-hero.svg"
p.write_text("\n".join(out))
print("wrote", p, "queens", q, "hanoi", pegs)
