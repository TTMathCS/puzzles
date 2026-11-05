/* theory/complexity.md: checking against finding. Trying every subset of n items takes 2^n steps; a polynomial
   method like n² or n³ stays tame. At a billion steps a second, how long does each take? */
PLAY("blowup", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 260, st = k.stage(W, H), g = st.g, out = k.out(), n = 30;
  function sup(e) { return String(e).replace(/\d/g, function (c) { return "⁰¹²³⁴⁵⁶⁷⁸⁹"[c]; }); }
  function sci(v) { var e = Math.floor(Math.log10(v)); return (v / Math.pow(10, e)).toFixed(1) + " × 10" + sup(e); }
  function t(steps) { var s = steps / 1e9; return s < 1e-3 ? "under a millisecond" : s < 1 ? (s * 1000).toFixed(0) + " ms" : s < 3600 ? s.toFixed(0) + " s" : s < 86400 * 365 ? (s / 3600).toFixed(0) + " hours" : sci(s / 86400 / 365) + " years"; }
  function draw() {
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var rows = [["n²", n * n, C.green], ["n³", Math.pow(n, 3), C.gold], ["2ⁿ", Math.pow(2, n), C.red]];
    rows.forEach(function (r, i) {
      var y = 60 + i * 64, frac = Math.min(1, Math.log10(r[1] + 1) / 30);
      g.font = F(20, 700); g.fillStyle = r[2]; g.textAlign = "left"; g.fillText(r[0], 20, y + 18);
      g.fillStyle = C.bg2; g.fillRect(80, y, 340, 24); g.fillStyle = r[2]; g.fillRect(80, y, 340 * frac, 24);
      g.font = F(15, 600); g.fillStyle = C.ink; g.fillText(t(r[1]), 432, y + 18);
    });
    g.font = F(13, 500); g.fillStyle = C.ink3; g.fillText("bar: number of steps, on a scale where each tenth is 1,000 times more", 20, 250);
    out.textContent = "n = " + n + ": 2ⁿ is " + sci(Math.pow(2, n)) + " steps. The universe is about 1.4 × 10¹⁰ years old.";
  }
  st.draw = draw;
  k.slider("n", 5, 100, 1, n, function (v) { return v; }, function (v) { n = v; draw(); });
});
