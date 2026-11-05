/* math/monty-hall.md: play the game 1,000 times in a few seconds. One player always stays, one always switches;
   the lines show how often each has won so far. They settle at 1/3 and 2/3 with 3 doors, and at 1/n and
   (n − 1)/n when the host opens every door but one of n. */
PLAY("montysim", function (fig, k) {
  var C = k.C, F = k.F, W = 640, H = 340, st = k.stage(W, H), g = st.g, out = k.out(), N = 1000, doors = 3, games;
  function deal() {   // each game: where the car is, the first pick, and the one door the host leaves shut
    games = [];
    for (var i = 0; i < N; i++) {
      var car = Math.floor(Math.random() * doors), pick = Math.floor(Math.random() * doors), other;
      if (car !== pick) other = car; else { other = Math.floor(Math.random() * (doors - 1)); if (other >= pick) other++; }
      games.push({ car: car, pick: pick, other: other });
    }
  }
  function draw(t) {
    var n = Math.max(1, Math.round(t * N)), stay = 0, sw = 0, i, X0 = 50, X1 = 610, Y0 = 310, Y1 = 130;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    // the latest game, doors in a row
    var gm = games[n - 1], dw = Math.min(44, 540 / doors - 6), gx = (W - doors * (dw + 6)) / 2;
    for (i = 0; i < doors; i++) {
      var open = i !== gm.pick && i !== gm.other, x = gx + i * (dw + 6);
      g.fillStyle = open ? C.bg2 : "#5a3a2a"; g.fillRect(x, 20, dw, 60);
      g.strokeStyle = i === gm.pick ? C.gold : i === gm.other ? C.ice : C.line; g.lineWidth = i === gm.pick || i === gm.other ? 3 : 1; g.strokeRect(x, 20, dw, 60);
      g.font = F(dw > 30 ? 15 : 11, 600); g.textAlign = "center"; g.fillStyle = i === gm.car ? C.gold : C.ink3; g.fillText(i === gm.car ? "car" : "goat", x + dw / 2, 56);
    }
    g.font = F(14, 500); g.textAlign = "left"; g.fillStyle = C.gold; g.fillText("first pick", 20, 104);
    g.fillStyle = C.ice; g.textAlign = "right"; g.fillText("the door left shut", W - 20, 104);
    for (i = 0; i < n; i++) { if (games[i].car === games[i].pick) stay++; else sw++; }
    // the running share of wins
    var x = function (j) { return X0 + j / N * (X1 - X0); }, y = function (p) { return Y0 - p * (Y0 - Y1); };
    g.strokeStyle = C.ink3; g.lineWidth = 1; g.beginPath(); g.moveTo(X0, Y1); g.lineTo(X0, Y0); g.lineTo(X1, Y0); g.stroke();
    g.font = F(13, 500); g.fillStyle = C.ink3; g.textAlign = "right"; g.fillText("100%", X0 - 6, Y1 + 4); g.fillText("0", X0 - 6, Y0 + 4);
    [1 / doors, 1 - 1 / doors].forEach(function (p) { g.strokeStyle = C.line; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(X0, y(p)); g.lineTo(X1, y(p)); g.stroke(); g.setLineDash([]); });
    [["stay", C.gold, function (q) { return q.car === q.pick; }], ["switch", C.ice, function (q) { return q.car !== q.pick; }]].forEach(function (s) {
      var w = 0; g.strokeStyle = s[1]; g.lineWidth = 2.5; g.beginPath();
      for (var j = 0; j < n; j++) { if (s[2](games[j])) w++; var px = x(j + 1), py = y(w / (j + 1)); if (j) g.lineTo(px, py); else g.moveTo(px, py); }
      g.stroke(); g.fillStyle = s[1]; g.font = F(15, 600); g.textAlign = "left"; g.fillText(s[0] + " " + Math.round(100 * w / n) + "%", Math.min(x(n) + 8, X1 - 90), y(w / n) + (s[0] === "stay" ? 18 : -8));
    });
    out.textContent = "After " + n.toLocaleString("en") + " game" + (n === 1 ? "" : "s") + " with " + doors + " doors: staying won " + stay + ", switching won " + sw + ".";
  }
  deal();
  var film = k.loop(10, draw, { label: "Games", start0: true, onPlay: function (t) { if (t === 0) deal(); } });
  st.draw = function () { draw(film.t()); };
  k.buttons([["3 doors", function () { doors = 3; deal(); film.set(0); }], ["10 doors", function () { doors = 10; deal(); film.set(0); }]], true);
});
