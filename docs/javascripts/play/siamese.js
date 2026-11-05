/* math/magic-squares.md: the recipe for odd squares (Simon de la Loubère, after a visit to Siam in 1688): start in the middle of the top row, go up and
   right one step each time, wrapping round the edges, and drop down one square when the next one is taken. */
PLAY("siamese", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 330, st = k.stage(W, H), g = st.g, out = k.out(), n = 5;
  function build() { var m = [], r = 0, c = (n - 1) / 2, i; for (i = 0; i < n; i++) m.push(new Array(n).fill(0)); var order = [];
    for (var v = 1; v <= n * n; v++) { m[r][c] = v; order.push([r, c]); var nr = (r - 1 + n) % n, nc = (c + 1) % n; if (m[nr][nc]) { nr = (r + 1) % n; nc = c; } r = nr; c = nc; } return order; }
  function draw(t) {
    var order = build(), shown = Math.min(n * n, Math.floor(t * (n * n + 0.999))), sz = Math.min(280 / n, 52), x0 = 20, y0 = 30;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) { g.strokeStyle = C.line; g.strokeRect(x0 + c * sz, y0 + r * sz, sz, sz); }
    for (var i = 0; i < shown; i++) { var p = order[i]; g.fillStyle = i === shown - 1 ? C.gold : C.ink; g.font = F(Math.min(22, sz * 0.45), 700); g.textAlign = "center"; g.fillText(i + 1, x0 + p[1] * sz + sz / 2, y0 + p[0] * sz + sz * 0.62); }
    var M = n * (n * n + 1) / 2;
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(17, 700); g.fillText(n + " × " + n + ": rows, columns,", 330, 60); g.fillText("diagonals all add up to " + M, 330, 84);
    g.font = F(14, 500); g.fillStyle = C.ink3; g.fillText("n(n² + 1) ÷ 2", 330, 110);
    out.textContent = shown >= n * n ? "Done. Check any row." : shown ? "Placed " + shown + ": up and right, or down if taken." : "";
  }
  var film = k.loop(12, draw, { label: "Numbers" });
  st.draw = function () { draw(film.t()); };
  k.buttons([["3 × 3", function () { n = 3; film.set(0); }], ["5 × 5", function () { n = 5; film.set(0); }], ["7 × 7", function () { n = 7; film.set(0); }]], true);
  setTimeout(function () { var b = fig.querySelectorAll(".btns button"); b.forEach(function (x) { x.setAttribute("aria-pressed", x.textContent === "5 × 5"); }); }, 0);
});
