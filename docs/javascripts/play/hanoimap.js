/* math/tower-of-hanoi.md: every position of n discs is a dot (3^n of them) and every legal move a line between two
   dots; the picture comes out as a Sierpiński triangle. Press Play to watch the fastest solution run down one side,
   2^n − 1 moves, each move numbered in binary: the zeros at its right-hand end say which disc moves. Each disc has
   its own note, from high (the smallest) to low. */
PLAY("hanoimap", function (fig, k) {
  var C = k.C, F = k.F, W = 640, H = 420, st = k.stage(W, H), g = st.g, out = k.out(), n = 4, sound = true;
  var V = [[320, 40], [70, 395], [570, 395]], NOTE = [880, 784, 659, 587, 523, 440, 392];
  var states, moves, path, edges, last = -1;
  function pos(s) {   // s[d] = peg of disc d (0 smallest); largest disc picks the corner, the rest swap the other two pegs
    var x = 0, y = 0, m = [0, 1, 2], top = Math.pow(2, n) - 1;
    for (var d = n - 1; d >= 0; d--) {
      var p = m[s[d]], w = Math.pow(2, d);
      x += w * V[p][0]; y += w * V[p][1];
      var a = (p + 1) % 3, b = (p + 2) % 3, m2 = m.map(function (q) { return q === a ? b : q === b ? a : q; }); m = m2;
    }
    return [x / top, y / top];
  }
  function key(s) { return s.join(""); }
  function setup() {
    states = []; edges = [];
    var total = Math.pow(3, n), i, d;
    for (i = 0; i < total; i++) { var s = [], v = i; for (d = 0; d < n; d++) { s.push(v % 3); v = Math.floor(v / 3); } states.push(s); }
    states.forEach(function (s) {   // legal moves: the top disc of one peg onto a peg whose top is bigger (or empty)
      var topOf = [n, n, n]; for (var e = n - 1; e >= 0; e--) topOf[s[e]] = e;
      for (var a = 0; a < 3; a++) for (var b = a + 1; b < 3; b++) {
        if (topOf[a] === n && topOf[b] === n) continue;
        var from = topOf[a] < topOf[b] ? a : b, to = from === a ? b : a, t2 = s.slice(); t2[topOf[from]] = to;
        edges.push([pos(s), pos(t2)]);
      }
    });
    moves = []; (function solve(m, a, b, c) { if (!m) return; solve(m - 1, a, c, b); moves.push([m - 1, a, c]); solve(m - 1, b, a, c); })(n, 0, 1, 2);
    path = [new Array(n).fill(0)]; moves.forEach(function (mv) { var s = path[path.length - 1].slice(); s[mv[0]] = mv[2]; path.push(s); });
  }
  function draw(t, live) {
    var step = Math.min(moves.length, Math.floor(t * (moves.length + 0.999)));
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = C.line; g.lineWidth = n > 5 ? 1 : 1.5; g.beginPath();
    edges.forEach(function (e) { g.moveTo(e[0][0], e[0][1]); g.lineTo(e[1][0], e[1][1]); }); g.stroke();
    var r = n > 5 ? 2 : n > 4 ? 3 : 4.5; g.fillStyle = C.ink3;
    states.forEach(function (s) { var p = pos(s); g.beginPath(); g.arc(p[0], p[1], r, 0, 7); g.fill(); });
    g.strokeStyle = C.gold; g.lineWidth = 3; g.beginPath();
    for (var i = 0; i <= step; i++) { var p = pos(path[i]); if (i) g.lineTo(p[0], p[1]); else g.moveTo(p[0], p[1]); }
    g.stroke();
    var q = pos(path[step]); g.fillStyle = C.gold; g.beginPath(); g.arc(q[0], q[1], 7, 0, 7); g.fill();
    g.font = F(15, 600); g.fillStyle = C.ink2; g.textAlign = "center";
    g.fillText("all on A", V[0][0], 24); g.textAlign = "left"; g.fillText("all on B", 20, 418); g.textAlign = "right"; g.fillText("all on C", 620, 418);
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(16, 600); g.fillText("move " + step + " of " + moves.length, 20, 30);
    if (step) {
      var bin = step.toString(2), d = moves[step - 1][0];
      g.font = F(18, 600, "m"); g.fillStyle = C.ink2; g.fillText(bin, 20, 58);
      g.fillStyle = C.gold; g.fillText(bin.slice(bin.length - d), 20 + g.measureText(bin.slice(0, bin.length - d)).width, 58);
      g.font = F(14, 500); g.fillStyle = C.ink3; g.fillText(d === 0 ? "no zeros: the smallest disc" : d + " zero" + (d > 1 ? "s" : "") + ": disc " + (d + 1), 20, 80);
      if (live && sound && step !== last) beep(NOTE[d]);
      out.textContent = "Move " + step + ": disc " + (d + 1) + " goes from " + "ABC"[moves[step - 1][1]] + " to " + "ABC"[moves[step - 1][2]] + ".";
    } else out.textContent = Math.pow(3, n) + " positions for " + n + " discs; the fastest solution needs " + moves.length + " moves.";
    last = step;
  }
  function beep(f) {
    var ac = k.audio(); if (!ac) return;
    var o = ac.createOscillator(), v = ac.createGain(), t0 = ac.currentTime; o.type = "triangle"; o.frequency.value = f;
    v.gain.setValueAtTime(0.0001, t0); v.gain.exponentialRampToValueAtTime(0.18, t0 + 0.01); v.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.35);
    o.connect(v); v.connect(ac.destination); o.start(t0); o.stop(t0 + 0.4);
  }
  setup();
  var film = k.loop(16, draw, { label: "Moves", start0: true, onPlay: function () { if (sound) k.audio(); } });
  st.draw = function () { draw(film.t(), false); };
  k.slider("Discs", 2, 6, 1, n, function (v) { return v; }, function (v) { if (v !== n) { n = v; setup(); film.set(0); } });
  k.buttons([["Sound on", function () { sound = true; }], ["Sound off", function () { sound = false; }]], true);
});
