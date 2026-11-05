/* theory/search.md: backtracking on the six-queens puzzle. Put a queen in each row, left to right, as soon as a square
   is safe; when a row has no safe square, take the last queen back and move it on. Press Play to watch every try. */
PLAY("backtrack", function (fig, k) {
  var C = k.C, F = k.F, N = 6, W = 600, H = 330, st = k.stage(W, H), g = st.g, out = k.out(), steps = [];
  (function solve() {   // record every board state the search visits
    var q = [];
    function ok(r, c) { for (var i = 0; i < r; i++) if (q[i] === c || Math.abs(q[i] - c) === r - i) return false; return true; }
    function go(r) {
      if (r === N) { steps.push({ q: q.slice(), done: true }); return true; }
      for (var c = 0; c < N; c++) {
        if (ok(r, c)) { q[r] = c; steps.push({ q: q.slice(), back: false }); if (go(r + 1)) return true; q.length = r; steps.push({ q: q.slice(), back: true }); }
      }
      return false;
    }
    go(0);
  })();
  function draw(t) {
    var i = Math.min(steps.length - 1, Math.floor(t * steps.length)), s = steps[i], sz = 46, x0 = 20, y0 = 30;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var r = 0; r < N; r++) for (var c = 0; c < N; c++) { g.fillStyle = (r + c) % 2 ? "#3a2a22" : "#5a4334"; g.fillRect(x0 + c * sz, y0 + r * sz, sz, sz); }
    s.q.forEach(function (c, r) { g.fillStyle = s.done ? C.green : r === s.q.length - 1 && !s.back ? C.gold : C.ink; g.font = F(30, 600); g.textAlign = "center"; g.fillText("♛", x0 + c * sz + sz / 2, y0 + r * sz + 34); });
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(17, 700); g.fillText("Try " + (i + 1) + " of " + steps.length, 330, 60);
    g.font = F(15, 500); g.fillStyle = s.done ? C.green : s.back ? C.red : C.ink2;
    g.fillText(s.done ? "Solved: no two queens attack." : s.back ? "Dead end: take a queen back." : "Placed a queen in row " + s.q.length + ".", 330, 90);
    g.fillStyle = C.ink3; g.font = F(14, 500); g.fillText("Every arrangement: 6⁶ = 46,656", 330, 140); g.fillText("Backtracking looks at only " + steps.length, 330, 162);
    out.textContent = "";
  }
  var film = k.loop(16, draw, { label: "Tries" });
  st.draw = function () { draw(film.t()); };
});
