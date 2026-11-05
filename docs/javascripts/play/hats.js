/* logic/hat-puzzles.md: a hundred prisoners in a line, each seeing the hats in front. The last one says "red" if he
   sees an odd number of red hats, "blue" if even. Everyone in front can then work out their own hat from what they see
   and what they have heard: all are saved but the first speaker, who has an even chance. Here with 20 people. */
PLAY("hats", function (fig, k) {
  var C = k.C, F = k.F, N = 20, W = 600, H = 245, st = k.stage(W, H), g = st.g, out = k.out(), hats = [], seed = 3;
  function deal() { hats = []; for (var i = 0; i < N; i++) { seed = (seed * 16807) % 2147483647; hats.push(seed % 2); } }   // 1 = red
  function draw(t) {
    var spoke = Math.min(N, Math.floor(t * (N + 0.999))), x = function (i) { return 30 + i * 28; };
    g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
    var said = [], right = 0;
    // person N−1 (the back) speaks first and announces the parity of reds in front
    var parity = 0; for (var i = 0; i < N - 1; i++) parity ^= hats[i];
    for (var s = 0; s < spoke; s++) {
      var who = N - 1 - s, guess;
      if (s === 0) guess = parity;
      else { var seen = 0, heard = 0; for (var a = 0; a < who; a++) seen ^= hats[a]; for (var b = who + 1; b < N - 1; b++) heard ^= hats[b]; guess = parity ^ seen ^ heard; }
      said[who] = guess; if (guess === hats[who]) right++;
    }
    for (i = 0; i < N; i++) {
      g.fillStyle = C.ink3; g.beginPath(); g.arc(x(i) + 10, 120, 9, 0, 7); g.fill(); g.fillRect(x(i) + 4, 132, 12, 34);
      g.fillStyle = hats[i] ? C.red : C.earth; g.beginPath(); g.moveTo(x(i), 112); g.lineTo(x(i) + 20, 112); g.lineTo(x(i) + 10, 92); g.fill();
      if (said[i] !== undefined) { g.fillStyle = said[i] ? C.red : C.earth; g.beginPath(); g.arc(x(i) + 10, 184, 7, 0, 7); g.fill(); g.strokeStyle = said[i] === hats[i] ? C.green : C.gold; g.lineWidth = 2.5; g.stroke(); }
    }
    g.fillStyle = C.ink3; g.font = F(13, 500); g.textAlign = "left"; g.fillText("← front", 20, 70); g.textAlign = "right"; g.fillText("back, speaks first →", 580, 70);
    g.textAlign = "left"; g.fillStyle = C.ink; g.font = F(16, 600); g.fillText(spoke + " have spoken, " + right + " right (dots: what each called)", 20, 30);
    out.textContent = spoke >= N ? (right >= N - 1 ? "Everyone after the first speaker is right, every time." : "") : "Each one counts the reds ahead, adds what was said behind, and compares with the first call.";
  }
  deal();
  var film = k.loop(12, draw, { label: "Speakers", onPlay: function (t) { if (t === 0) deal(); } });
  st.draw = function () { draw(film.t()); };
});
