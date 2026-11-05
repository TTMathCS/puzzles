/* logic/river-crossings.md: the bridge and the torch. Tap one or two people on the torch's side, then Cross. A pair
   walks at the slower one's pace. Four people take 1, 2, 5 and 10 minutes; can you do it in 17? */
PLAY("torch", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 250, st, out, T = [1, 2, 5, 10], side, torch, pick, mins, log;
  function reset() { side = [0, 0, 0, 0]; torch = 0; pick = []; mins = 0; log = []; }
  function pos(i) { var same = side.slice(0, i).filter(function (s) { return s === side[i]; }).length; return [side[i] ? 450 + (same % 2) * 70 : 80 + (same % 2) * 70, 90 + Math.floor(same / 2) * 80]; }
  function draw() {
    var g = st.g; g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(91,143,201,0.2)"; g.fillRect(250, 30, 100, 200); g.fillStyle = "#6b4a33"; g.fillRect(240, 120, 120, 14);
    T.forEach(function (t, i) {
      var p = pos(i), sel = pick.indexOf(i) >= 0;
      g.fillStyle = sel ? C.gold : C.ink2; g.beginPath(); g.arc(p[0], p[1], 24, 0, 7); g.fill();
      g.fillStyle = C.bg; g.font = F(17, 700); g.textAlign = "center"; g.fillText(t, p[0], p[1] + 6);
    });
    g.fillStyle = C.gold; g.font = F(15, 600); g.textAlign = "center"; g.fillText("🔦 torch", torch ? 485 : 115, 40);
    g.fillStyle = C.ink; g.font = F(18, 700); g.fillText(mins + " min", 300, 24);
    out.textContent = side.every(function (s) { return s; }) ? (mins <= 17 ? "All across in " + mins + " minutes. That is the best possible." : "All across in " + mins + " minutes. It can be done in 17.") : log.join(", ") || "Tap one or two people on the torch's side, then Cross.";
  }
  st = k.stage(W, H, function (x, y) {
    T.forEach(function (t, i) { var p = pos(i); if (Math.hypot(x - p[0], y - p[1]) < 30 && side[i] === torch) { var j = pick.indexOf(i); if (j >= 0) pick.splice(j, 1); else if (pick.length < 2) pick.push(i); } });
    draw();
  });
  out = k.out(); st.draw = draw;
  k.buttons([["Cross", function () { if (!pick.length) return; var t = Math.max.apply(null, pick.map(function (i) { return T[i]; })); mins += t; pick.forEach(function (i) { side[i] = 1 - side[i]; }); log.push(pick.map(function (i) { return T[i]; }).join("+") + (torch ? " back" : " over")); torch = 1 - torch; pick = []; draw(); }],
    ["Start again", function () { reset(); draw(); }]]);
  reset(); draw();
});
