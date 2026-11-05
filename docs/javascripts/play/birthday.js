/* theory/counting.md: the birthday problem. With 367 people two must share a birthday (pigeonholes); but the chance
   passes a half with only 23. P(no match among n) = 365/365 × 364/365 × … × (365 − n + 1)/365, ignoring 29 February. */
PLAY("birthday", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 280, st = k.stage(W, H), g = st.g, out = k.out(), n = 23;
  function p(m) { var q = 1; for (var i = 0; i < m; i++) q *= (365 - i) / 365; return 1 - q; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var X0 = 50, X1 = 570, Y0 = 240, Y1 = 50, x = function (m) { return X0 + m / 80 * (X1 - X0); }, y = function (v) { return Y0 - v * (Y0 - Y1); };
    g.strokeStyle = C.ink3; g.lineWidth = 1; g.beginPath(); g.moveTo(X0, Y1); g.lineTo(X0, Y0); g.lineTo(X1, Y0); g.stroke();
    g.strokeStyle = C.line; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(X0, y(0.5)); g.lineTo(X1, y(0.5)); g.stroke(); g.setLineDash([]);
    g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath(); for (var m = 0; m <= 80; m++) { if (m) g.lineTo(x(m), y(p(m))); else g.moveTo(x(0), y(0)); } g.stroke();
    g.fillStyle = C.ink; g.beginPath(); g.arc(x(Math.min(n, 80)), y(p(n)), 6, 0, 7); g.fill();
    g.font = F(13, 500); g.fillStyle = C.ink3; g.textAlign = "right"; g.fillText("100%", X0 - 6, Y1 + 4); g.fillText("50%", X0 - 6, y(0.5) + 4); g.fillText("0", X0 - 6, Y0 + 4);
    g.textAlign = "center"; [20, 40, 60, 80].forEach(function (m) { g.fillText(m, x(m), Y0 + 18); }); g.fillText("people in the room", 310, Y0 + 36);
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(18, 700); g.fillText(n + " people: " + (p(n) * 100).toFixed(1) + "% chance two share a birthday", 20, 30);
    out.textContent = n >= 367 ? "Certain, by the pigeonhole principle." : "With " + n + " people there are " + (n * (n - 1) / 2).toLocaleString("en") + " pairs, each a chance to match.";
  }
  st.draw = draw;
  k.slider("People", 2, 80, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
});
