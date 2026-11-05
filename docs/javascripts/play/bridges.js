/* math/konigsberg.md: the seven bridges as Euler drew the problem. Tap a bridge next to where you stand to cross it;
   each can be used once. The numbers show how many bridges touch each land: all four are odd, so no walk works. */
PLAY("bridges", function (fig, k) {
  var C = k.C, F = k.F, W = 600, H = 340, out;
  var L = { N: [300, 50, "north bank"], S: [300, 300, "south bank"], I: [220, 175, "island"], E: [500, 175, "east"] };
  var B = [["I", "N", -40], ["I", "N", 40], ["I", "S", -40], ["I", "S", 40], ["I", "E", 0], ["N", "E", 0], ["S", "E", 0]];
  var at = null, used = [], st;
  function mid(b) { var a = L[b[0]], c = L[b[1]], mx = (a[0] + c[0]) / 2, my = (a[1] + c[1]) / 2, dx = c[0] - a[0], dy = c[1] - a[1], n = Math.hypot(dx, dy); return [mx - dy / n * b[2], my + dx / n * b[2]]; }
  function draw() {
    var g = st.g; g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(91,143,201,0.25)"; g.fillRect(0, 95, W, 50); g.fillRect(0, 205, W, 50);
    B.forEach(function (b, i) {
      var a = L[b[0]], c = L[b[1]], m = mid(b);
      g.strokeStyle = used.indexOf(i) >= 0 ? C.ink3 : C.gold; g.lineWidth = used.indexOf(i) >= 0 ? 2 : 6; g.setLineDash(used.indexOf(i) >= 0 ? [4, 4] : []);
      g.beginPath(); g.moveTo(a[0], a[1]); g.quadraticCurveTo(2 * m[0] - (a[0] + c[0]) / 2, 2 * m[1] - (a[1] + c[1]) / 2, c[0], c[1]); g.stroke(); g.setLineDash([]);
    });
    Object.keys(L).forEach(function (key) {
      var p = L[key], deg = B.filter(function (b) { return b[0] === key || b[1] === key; }).length;
      g.fillStyle = key === at ? C.gold : C.mars; g.beginPath(); g.arc(p[0], p[1], 24, 0, 7); g.fill();
      g.fillStyle = C.bg; g.font = F(17, 700); g.textAlign = "center"; g.fillText(deg, p[0], p[1] + 6);
      g.fillStyle = C.ink2; g.font = F(13, 500); g.fillText(p[2], p[0], p[1] + (key === "S" ? 40 : key === "N" ? -32 : 42));
    });
    var left = B.length - used.length;
    if (!at) out.textContent = "Tap a land to start.";
    else if (!left) out.textContent = "All seven crossed!";
    else if (!B.some(function (b, i) { return used.indexOf(i) < 0 && (b[0] === at || b[1] === at); })) out.textContent = "Stuck with " + left + " bridge" + (left > 1 ? "s" : "") + " left. Odd counts everywhere mean it can't be done.";
    else out.textContent = used.length + " crossed, " + left + " to go.";
  }
  st = k.stage(W, H, function (x, y) {
    if (!at) { Object.keys(L).forEach(function (key) { if (Math.hypot(x - L[key][0], y - L[key][1]) < 34) at = key; }); return draw(); }
    var best = -1, bd = 40;
    B.forEach(function (b, i) { if (used.indexOf(i) >= 0 || (b[0] !== at && b[1] !== at)) return; var m = mid(b), d = Math.hypot(x - m[0], y - m[1]); if (d < bd) { bd = d; best = i; } });
    if (best >= 0) { used.push(best); at = B[best][0] === at ? B[best][1] : B[best][0]; }
    draw();
  });
  out = k.out();
  st.draw = draw;
  k.buttons([["Start again", function () { at = null; used = []; draw(); }]]);
});
