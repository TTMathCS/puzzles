/* theory/invariants.md: 13 red, 15 green and 17 blue chameleons meet at random; two of different colours both turn
   the third colour. Press Play: the counts wander, but green minus red always leaves the same remainder when divided
   by 3, so they can never all be one colour. */
PLAY("chameleons", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), hist = [], seed = 11;
  function run() { seed = 11; var c = [13, 15, 17]; hist = [c.slice()];
    for (var i = 0; i < 400; i++) { seed = (seed * 16807) % 2147483647; var a = seed % 3, b = (a + 1 + (seed >> 3) % 2) % 3; if (!c[a] || !c[b]) continue; var o = 3 - a - b; c[a]--; c[b]--; c[o] += 2; hist.push(c.slice()); } }
  function draw(t) {
    var n = Math.max(0, Math.floor(t * (hist.length - 1))), c = hist[n], cols = [C.red, C.green, C.earth], names = ["red", "green", "blue"];
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var x = function (i) { return 30 + i / (hist.length - 1) * 540; }, y = function (v) { return 220 - v / 45 * 180; };
    [0, 1, 2].forEach(function (j) { g.strokeStyle = cols[j]; g.lineWidth = 2; g.beginPath(); for (var i = 0; i <= n; i++) { if (i) g.lineTo(x(i), y(hist[i][j])); else g.moveTo(x(0), y(hist[0][j])); } g.stroke(); });
    g.textAlign = "left"; g.font = F(16, 600);
    names.forEach(function (nm, j) { g.fillStyle = cols[j]; g.fillText(nm + " " + c[j], 30 + j * 120, 26); });
    var d = ((c[1] - c[0]) % 3 + 3) % 3;
    g.fillStyle = C.gold; g.font = F(15, 600); g.fillText("(green − red) ÷ 3 leaves " + d + ", always", 30, 250);
    out.textContent = n + " meetings so far. To be all one colour, two counts would be 0 and their difference 0, which leaves 0: impossible.";
  }
  run();
  var film = k.loop(12, draw, { label: "Meetings" });
  st.draw = function () { draw(film.t()); };
});
