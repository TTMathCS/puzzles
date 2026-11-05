// The puzzles you can play on the pages of puzzles.akadian.ca.
// A page asks for one with an empty <div class="pz" data-pz="hanoi"></div> (options in data- attributes);
// this file fills it in. Everything runs in the browser: nothing is saved or sent.
(function () {
  "use strict";

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function button(label, fn, cls) {
    var b = el("button", "pz-btn" + (cls ? " " + cls : ""), label);
    b.type = "button";
    b.addEventListener("click", fn);
    return b;
  }
  function bar(root) { var b = el("div", "pz-bar"); root.appendChild(b); return b; }
  function status(root) { var s = el("p", "pz-status"); s.setAttribute("aria-live", "polite"); root.appendChild(s); return s; }
  function rand(n) { return Math.floor(Math.random() * n); }

  var W = {};

  // ---------- Tower of Hanoi: tap a peg to lift its top disc, tap another to put it down ----------
  W.hanoi = function (root) {
    var n = +root.dataset.discs || 4, pegs, held, moves, timer = null;
    var ctl = bar(root);
    var sel = el("select", "pz-select");
    for (var k = 3; k <= 8; k++) { var o = el("option", null, k + " discs"); o.value = k; if (k === n) o.selected = true; sel.appendChild(o); }
    sel.addEventListener("change", function () { n = +sel.value; reset(); });
    ctl.appendChild(sel);
    ctl.appendChild(button("Start again", reset));
    ctl.appendChild(button("Show me", solve));
    var board = el("div", "pz-hanoi");
    root.appendChild(board);
    var st = status(root);

    function reset() {
      if (timer) { clearInterval(timer); timer = null; }
      pegs = [[], [], []];
      for (var d = n; d >= 1; d--) pegs[0].push(d);
      held = -1; moves = 0; draw();
    }
    function draw() {
      board.innerHTML = "";
      pegs.forEach(function (p, i) {
        var peg = el("button", "pz-peg" + (held === i ? " is-held" : ""));
        peg.type = "button";
        peg.setAttribute("aria-label", "Peg " + "ABC"[i] + ", " + (p.length ? "top disc " + p[p.length - 1] : "empty"));
        peg.appendChild(el("span", "pz-rod"));
        p.forEach(function (d, j) {
          var disc = el("span", "pz-disc");
          disc.style.width = (24 + 66 * d / n) + "%";
          disc.style.bottom = (j * 14 + 4) + "%";
          disc.style.setProperty("--h", (d * 360 / (n + 1)) | 0);
          if (held === i && j === p.length - 1) disc.classList.add("is-up");
          peg.appendChild(disc);
        });
        peg.appendChild(el("span", "pz-peg-name", "ABC"[i]));
        peg.addEventListener("click", function () { tap(i); });
        board.appendChild(peg);
      });
      var best = Math.pow(2, n) - 1;
      if (pegs[2].length === n) st.textContent = "Solved in " + moves + " moves. The fewest possible is " + best + (moves === best ? ": perfect!" : ".");
      else st.textContent = "Moves: " + moves + " · Move all the discs to peg C. Never put a disc on a smaller one.";
    }
    function tap(i) {
      if (timer) return;
      if (held < 0) { if (pegs[i].length) held = i; }
      else if (held === i) held = -1;
      else {
        var d = pegs[held][pegs[held].length - 1], top = pegs[i][pegs[i].length - 1];
        if (top && top < d) { st.textContent = "A disc can't go on a smaller disc."; held = -1; return setTimeout(draw, 900); }
        pegs[i].push(pegs[held].pop()); moves++; held = -1;
      }
      draw();
    }
    function solve() {
      reset();
      var list = [];
      (function h(k, a, b, c) { if (!k) return; h(k - 1, a, c, b); list.push([a, c]); h(k - 1, b, a, c); })(n, 0, 1, 2);
      var s = 0;
      timer = setInterval(function () {
        if (s >= list.length) { clearInterval(timer); timer = null; return draw(); }
        pegs[list[s][1]].push(pegs[list[s][0]].pop()); moves++; s++; draw();
      }, Math.max(60, 4000 / list.length));
    }
    reset();
  };

  // ---------- The 15 puzzle ----------
  W.fifteen = function (root) {
    var size = +root.dataset.size || 4, cells, moves;
    var ctl = bar(root);
    ctl.appendChild(button("Shuffle", shuffle));
    ctl.appendChild(button("Impossible version", swapped));
    var grid = el("div", "pz-grid pz-fifteen");
    grid.style.setProperty("--n", size);
    root.appendChild(grid);
    var st = status(root);
    var impossible = false;

    function solved() { for (var i = 0; i < cells.length - 1; i++) if (cells[i] !== i + 1) return false; return true; }
    function draw() {
      grid.innerHTML = "";
      cells.forEach(function (v, i) {
        var b = el("button", "pz-cell" + (v ? "" : " is-blank"), v ? String(v) : "");
        b.type = "button";
        if (!v) b.setAttribute("aria-label", "empty");
        b.addEventListener("click", function () { slide(i); });
        grid.appendChild(b);
      });
      if (solved() && moves) st.textContent = "Solved in " + moves + " moves!";
      else st.textContent = "Moves: " + moves + (impossible ? " · This one has 14 and 15 swapped. Try as long as you like; the page below explains why it can never be solved." : " · Tap a tile next to the gap to slide it.");
    }
    function slide(i) {
      var g = cells.indexOf(0), r = Math.floor(i / size), c = i % size, gr = Math.floor(g / size), gc = g % size;
      if (Math.abs(r - gr) + Math.abs(c - gc) !== 1) return;
      cells[g] = cells[i]; cells[i] = 0; moves++; draw();
    }
    function start() { cells = []; for (var i = 1; i < size * size; i++) cells.push(i); cells.push(0); moves = 0; }
    function shuffle() {
      start(); impossible = false;
      // random slides from the solved position, so the puzzle is always solvable
      var g = cells.length - 1, last = -1;
      for (var s = 0; s < 400; s++) {
        var r = Math.floor(g / size), c = g % size, opts = [];
        if (r > 0) opts.push(g - size); if (r < size - 1) opts.push(g + size);
        if (c > 0) opts.push(g - 1); if (c < size - 1) opts.push(g + 1);
        opts = opts.filter(function (x) { return x !== last; });
        var t = opts[rand(opts.length)];
        cells[g] = cells[t]; cells[t] = 0; last = g; g = t;
      }
      moves = 0; draw();
    }
    function swapped() {
      start(); impossible = true;
      var a = cells.length - 3, b = cells.length - 2;
      var t = cells[a]; cells[a] = cells[b]; cells[b] = t;
      draw();
    }
    shuffle();
  };

  // ---------- Nim against the computer ----------
  W.nim = function (root) {
    var start = (root.dataset.heaps || "3,4,5").split(",").map(Number), heaps, busy;
    var showSum = root.dataset.sum === "yes";
    var ctl = bar(root);
    ctl.appendChild(button("New game, you first", function () { reset(false); }));
    ctl.appendChild(button("New game, computer first", function () { reset(true); }));
    var box = el("div", "pz-nim");
    root.appendChild(box);
    var sum = el("p", "pz-nimsum");
    if (showSum) root.appendChild(sum);
    var st = status(root);

    function nimSum() { return heaps.reduce(function (a, b) { return a ^ b; }, 0); }
    function draw() {
      box.innerHTML = "";
      heaps.forEach(function (h, i) {
        var row = el("div", "pz-heap");
        row.appendChild(el("span", "pz-heap-name", "Heap " + (i + 1) + " (" + h + ")"));
        for (var k = 0; k < h; k++) (function (k) {
          var s = el("button", "pz-stone");
          s.type = "button";
          s.setAttribute("aria-label", "Take " + (h - k) + " from heap " + (i + 1));
          s.title = "Take " + (h - k);
          s.addEventListener("click", function () { if (!busy) take(i, h - k, true); });
          s.addEventListener("mouseenter", function () { mark(row, k); });
          s.addEventListener("mouseleave", function () { mark(row, 99); });
          row.appendChild(s);
        })(k);
        box.appendChild(row);
      });
      if (showSum) {
        var w = Math.max(3, Math.max.apply(null, heaps.concat([1])).toString(2).length);
        var lines = heaps.map(function (h) { return ("0000000" + h.toString(2)).slice(-w) + "  (" + h + ")"; });
        sum.textContent = lines.join("\n") + "\n" + Array(w + 1).join("-") + "\n" + ("0000000" + nimSum().toString(2)).slice(-w) + "  nim-sum " + nimSum();
      }
    }
    function mark(row, k) { row.querySelectorAll(".pz-stone").forEach(function (s, j) { s.classList.toggle("is-marked", j >= k); }); }
    function over() { return heaps.every(function (h) { return h === 0; }); }
    function take(i, k, human) {
      heaps[i] -= k; draw();
      if (over()) { st.textContent = human ? "You took the last stone. You win!" : "The computer took the last stone. Try again: look at the nim-sum."; return; }
      if (human) { busy = true; st.textContent = "The computer is thinking..."; setTimeout(computer, 700); }
      else st.textContent = "Your turn: tap a stone to take it and every stone to its right.";
    }
    function computer() {
      busy = false;
      var x = nimSum(), i, k;
      if (x) {
        for (i = 0; i < heaps.length; i++) if ((heaps[i] ^ x) < heaps[i]) { k = heaps[i] - (heaps[i] ^ x); break; }
      } else {
        var live = []; heaps.forEach(function (h, j) { if (h) live.push(j); });
        i = live[rand(live.length)]; k = 1 + rand(Math.min(2, heaps[i]));
      }
      take(i, k, false);
    }
    function reset(compFirst) {
      heaps = start.slice(); busy = false; draw();
      st.textContent = "Take any number of stones from one heap. Whoever takes the last stone wins.";
      if (compFirst) { busy = true; setTimeout(computer, 600); }
    }
    reset(false);
  };

  // ---------- n queens ----------
  W.queens = function (root) {
    var n = +root.dataset.n || 8, q;
    var ctl = bar(root);
    var sel = el("select", "pz-select");
    for (var k = 4; k <= 10; k++) { var o = el("option", null, k + " × " + k); o.value = k; if (k === n) o.selected = true; sel.appendChild(o); }
    sel.addEventListener("change", function () { n = +sel.value; reset(); });
    ctl.appendChild(sel);
    ctl.appendChild(button("Clear", reset));
    ctl.appendChild(button("Show a solution", show));
    var grid = el("div", "pz-grid pz-board");
    root.appendChild(grid);
    var st = status(root);

    function attacks(r, c, r2, c2) { return r === r2 || c === c2 || Math.abs(r - r2) === Math.abs(c - c2); }
    function reset() { q = []; draw(); }
    function draw() {
      grid.style.setProperty("--n", n);
      grid.innerHTML = "";
      var bad = 0;
      for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) (function (r, c) {
        var has = q.some(function (p) { return p[0] === r && p[1] === c; });
        var hit = q.some(function (p) { return !(p[0] === r && p[1] === c) && attacks(r, c, p[0], p[1]); });
        var b = el("button", "pz-sq" + ((r + c) % 2 ? " is-dark" : "") + (hit ? " is-hit" : "") + (has ? " has-piece" : ""), has ? "♛" : "");
        b.type = "button";
        if (has && hit) { b.classList.add("is-bad"); bad++; }
        b.setAttribute("aria-label", "Row " + (r + 1) + " column " + (c + 1) + (has ? ", queen" : ""));
        b.addEventListener("click", function () {
          var at = q.findIndex(function (p) { return p[0] === r && p[1] === c; });
          if (at >= 0) q.splice(at, 1); else q.push([r, c]);
          draw();
        });
        grid.appendChild(b);
      })(r, c);
      if (q.length === n && !bad) st.textContent = n + " queens and none attacks another. Solved!";
      else st.textContent = "Queens: " + q.length + " of " + n + (bad ? " · the red ones attack each other" : "") + " · Shaded squares are attacked.";
    }
    function show() {
      var cols = [], sols = [];
      (function place(r) {
        if (sols.length > 40) return;
        if (r === n) { sols.push(cols.slice()); return; }
        for (var c = 0; c < n; c++) {
          if (cols.every(function (cc, rr) { return cc !== c && Math.abs(cc - c) !== r - rr; })) { cols.push(c); place(r + 1); cols.pop(); }
        }
      })(0);
      if (!sols.length) { q = []; draw(); st.textContent = "There is no solution for " + n + " × " + n + "."; return; }
      var s = sols[rand(sols.length)];
      q = s.map(function (c, r) { return [r, c]; });
      draw();
    }
    reset();
  };

  // ---------- the knight's tour ----------
  W.knight = function (root) {
    var n = +root.dataset.n || 5, path;
    var J = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
    var ctl = bar(root);
    var sel = el("select", "pz-select");
    for (var k = 5; k <= 8; k++) { var o = el("option", null, k + " × " + k); o.value = k; if (k === n) o.selected = true; sel.appendChild(o); }
    sel.addEventListener("change", function () { n = +sel.value; reset(); });
    ctl.appendChild(sel);
    ctl.appendChild(button("Undo", function () { path.pop(); draw(); }));
    ctl.appendChild(button("Start again", reset));
    ctl.appendChild(button("Hint (Warnsdorff)", hint));
    var grid = el("div", "pz-grid pz-board");
    root.appendChild(grid);
    var st = status(root);

    function visited(r, c) { return path.some(function (p) { return p[0] === r && p[1] === c; }); }
    function nexts(r, c) {
      return J.map(function (j) { return [r + j[0], c + j[1]]; })
        .filter(function (p) { return p[0] >= 0 && p[0] < n && p[1] >= 0 && p[1] < n && !visited(p[0], p[1]); });
    }
    function reset() { path = []; draw(); }
    function draw(hintSq) {
      grid.style.setProperty("--n", n);
      grid.innerHTML = "";
      var last = path[path.length - 1], opts = last ? nexts(last[0], last[1]) : [];
      for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) (function (r, c) {
        var idx = path.findIndex(function (p) { return p[0] === r && p[1] === c; });
        var can = !last || opts.some(function (p) { return p[0] === r && p[1] === c; });
        var b = el("button", "pz-sq" + ((r + c) % 2 ? " is-dark" : "") + (idx >= 0 ? " is-done" : "") + (can && idx < 0 ? " is-next" : ""),
          idx === path.length - 1 && idx >= 0 ? "♞" : idx >= 0 ? String(idx + 1) : "");
        b.type = "button";
        if (hintSq && hintSq[0] === r && hintSq[1] === c) b.classList.add("is-hint");
        if (idx >= 0 && idx === path.length - 1) b.classList.add("is-here");
        b.addEventListener("click", function () { if (idx < 0 && can) { path.push([r, c]); draw(); } });
        grid.appendChild(b);
      })(r, c);
      if (path.length === n * n) st.textContent = "Every square visited once. A knight's tour!";
      else if (last && !opts.length) st.textContent = "Stuck after " + path.length + " squares. Undo, or start again.";
      else st.textContent = path.length ? "Squares visited: " + path.length + " of " + n * n + ". The ringed squares are legal jumps." : "Tap any square to put the knight down.";
    }
    function hint() {
      var last = path[path.length - 1];
      if (!last) return;
      var opts = nexts(last[0], last[1]);
      if (!opts.length) return;
      opts.sort(function (a, b) { return nexts(a[0], a[1]).length - nexts(b[0], b[1]).length; });
      draw(opts[0]);
    }
    reset();
  };

  // ---------- Lights Out ----------
  W.lights = function (root) {
    var n = +root.dataset.n || 5, on, moves, showSol = false;
    var ctl = bar(root);
    ctl.appendChild(button("New puzzle", fresh));
    var solBtn = button("Show which to press", function () { showSol = !showSol; draw(); });
    ctl.appendChild(solBtn);
    var grid = el("div", "pz-grid pz-lights");
    grid.style.setProperty("--n", n);
    root.appendChild(grid);
    var st = status(root);

    function press(a, i) {
      var r = Math.floor(i / n), c = i % n;
      [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
        var rr = r + d[0], cc = c + d[1];
        if (rr >= 0 && rr < n && cc >= 0 && cc < n) a[rr * n + cc] ^= 1;
      });
    }
    // solve press-vector x with A x = b over the numbers mod 2 (Gaussian elimination)
    function solve() {
      var N = n * n, M = [];
      for (var i = 0; i < N; i++) { var t = new Array(N).fill(0); press(t, i); M.push(t); }
      // M[j][i] = effect of press i on light j; M is symmetric
      var A = M.map(function (r, j) { return r.slice().concat([on[j]]); });
      var where = new Array(N).fill(-1), row = 0;
      for (var col = 0; col < N && row < N; col++) {
        var p = -1; for (var k = row; k < N; k++) if (A[k][col]) { p = k; break; }
        if (p < 0) continue;
        var tmp = A[p]; A[p] = A[row]; A[row] = tmp;
        for (k = 0; k < N; k++) if (k !== row && A[k][col]) for (var m = col; m <= N; m++) A[k][m] ^= A[row][m];
        where[col] = row; row++;
      }
      for (k = row; k < N; k++) if (A[k][N]) return null;
      return where.map(function (w) { return w < 0 ? 0 : A[w][N]; });
    }
    function draw() {
      grid.innerHTML = "";
      var sol = showSol ? solve() : null;
      on.forEach(function (v, i) {
        var b = el("button", "pz-light" + (v ? " is-on" : "") + (sol && sol[i] ? " is-press" : ""));
        b.type = "button";
        b.setAttribute("aria-label", "Light " + (i + 1) + (v ? " on" : " off"));
        b.addEventListener("click", function () { press(on, i); moves++; draw(); });
        grid.appendChild(b);
      });
      solBtn.textContent = showSol ? "Hide the answer" : "Show which to press";
      var left = on.reduce(function (a, b) { return a + b; }, 0);
      st.textContent = left ? "Lights on: " + left + " · Presses: " + moves + (sol ? " · press each ringed light once, in any order" : "") : "All lights out in " + moves + " presses!";
    }
    function fresh() {
      on = new Array(n * n).fill(0);
      // pressing random lights from all-off always gives a solvable puzzle
      for (var k = 0; k < n * n; k++) if (Math.random() < 0.4) press(on, k);
      if (!on.some(Boolean)) press(on, rand(n * n));
      moves = 0; showSol = false; draw();
    }
    fresh();
  };

  // ---------- Monty Hall ----------
  W.monty = function (root) {
    var car, pick, opened, phase, tally = { stay: [0, 0], swap: [0, 0] };
    var doors = el("div", "pz-doors");
    root.appendChild(doors);
    var st = status(root);
    var ctl = bar(root);
    ctl.appendChild(button("Play again", reset));
    ctl.appendChild(button("Play 1000 games for me", sim));
    var table = el("p", "pz-tally");
    root.appendChild(table);

    function reset() { car = rand(3); pick = -1; opened = -1; phase = 0; draw(); st.textContent = "A car is behind one door and goats behind the other two. Pick a door."; }
    function draw() {
      doors.innerHTML = "";
      for (var i = 0; i < 3; i++) (function (i) {
        var show = phase === 2 || i === opened;
        var b = el("button", "pz-door" + (i === pick ? " is-picked" : "") + (show ? " is-open" : ""),
          show ? (i === car ? "🚗" : "🐐") : "Door " + (i + 1));
        b.type = "button";
        b.addEventListener("click", function () { choose(i); });
        doors.appendChild(b);
      })(i);
      var f = function (t) { return t[1] ? t[0] + " of " + t[1] + " (" + Math.round(100 * t[0] / t[1]) + "%)" : "none yet"; };
      table.textContent = "Cars won when staying: " + f(tally.stay) + " · when switching: " + f(tally.swap);
    }
    function choose(i) {
      if (phase === 0) {
        pick = i;
        var goats = [0, 1, 2].filter(function (d) { return d !== pick && d !== car; });
        opened = goats[rand(goats.length)];
        phase = 1; draw();
        st.textContent = "The host, who knows where the car is, opens door " + (opened + 1) + ": a goat. Tap your door to stay, or the other closed door to switch.";
      } else if (phase === 1 && i !== opened) {
        var swapped = i !== pick;
        pick = i; phase = 2;
        var t = swapped ? tally.swap : tally.stay; t[1]++; if (pick === car) t[0]++;
        draw();
        st.textContent = (pick === car ? "You win the car" : "A goat") + " (you " + (swapped ? "switched" : "stayed") + "). Play again, or let the page play many games.";
      }
    }
    function sim() {
      for (var g = 0; g < 1000; g++) {
        var c = rand(3), p = rand(3), sw = g % 2 === 1;
        var t = sw ? tally.swap : tally.stay; t[1]++;
        if (sw ? p !== c : p === c) t[0]++;     // switching wins exactly when the first pick was wrong
      }
      draw();
    }
    reset();
  };

  // ---------- Sudoku ----------
  var SUDOKU = [
    "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
    "000260701680070090190004500820100040004602900050003028009300074040050036703018000",
    "100489006730000040000001295007120600500703008006095700914600000020000037800512004"
  ];
  W.sudoku = function (root) {
    var k = +root.dataset.n || 0, given, val;
    var ctl = bar(root);
    ctl.appendChild(button("Check", check));
    ctl.appendChild(button("Next puzzle", function () { k = (k + 1) % SUDOKU.length; load(); }));
    ctl.appendChild(button("Solve it (backtracking)", solveIt));
    var grid = el("div", "pz-sudoku");
    root.appendChild(grid);
    var st = status(root);

    function load() {
      given = SUDOKU[k].split("").map(Number); val = given.slice(); draw();
      st.textContent = "Fill each row, column and 3 × 3 box with 1 to 9. Type a digit in a square; clashes turn red.";
    }
    function clash(i, v) {
      if (!v) return false;
      var r = Math.floor(i / 9), c = i % 9;
      for (var j = 0; j < 81; j++) {
        if (j === i || val[j] !== v) continue;
        var rr = Math.floor(j / 9), cc = j % 9;
        if (rr === r || cc === c || (Math.floor(rr / 3) === Math.floor(r / 3) && Math.floor(cc / 3) === Math.floor(c / 3))) return true;
      }
      return false;
    }
    function draw() {
      grid.innerHTML = "";
      val.forEach(function (v, i) {
        var inp = el("input", "pz-su" + (given[i] ? " is-given" : "") + (clash(i, v) ? " is-bad" : ""));
        inp.value = v || "";
        inp.inputMode = "numeric"; inp.maxLength = 1;
        inp.setAttribute("aria-label", "Row " + (Math.floor(i / 9) + 1) + " column " + (i % 9 + 1));
        if (given[i]) inp.readOnly = true;
        inp.addEventListener("input", function () {
          var d = parseInt(inp.value.slice(-1), 10);
          val[i] = d >= 1 && d <= 9 ? d : 0;
          var pos = i; draw(); var next = grid.children[pos]; if (next) next.focus();
        });
        grid.appendChild(inp);
      });
    }
    function check() {
      var empty = val.filter(function (v) { return !v; }).length, bad = val.some(function (v, i) { return clash(i, v); });
      st.textContent = bad ? "Something clashes: look for the red squares." : empty ? "No clashes so far. " + empty + " squares to go." : "Solved! Every row, column and box has 1 to 9.";
    }
    function solveIt() {
      val = given.slice();
      var steps = 0;
      (function go() {
        var i = val.indexOf(0);
        if (i < 0) return true;
        for (var d = 1; d <= 9; d++) { if (!clash(i, d)) { val[i] = d; steps++; if (go()) return true; } }
        val[i] = 0; return false;
      })();
      draw();
      st.textContent = "Solved by trying digits square by square and backing up at each dead end: " + steps + " digits written in all.";
    }
    load();
  };

  // ---------- Nonograms ----------
  var NONO = {
    rocket: ["00100", "01110", "01110", "11011", "10001"],
    heart:  ["0110110", "1111111", "1111111", "0111110", "0011100", "0001000"],
    dome:   ["0011100", "0111110", "1101011", "1111111", "1011101"]
  };
  W.nonogram = function (root) {
    var pic = (NONO[root.dataset.pic] || NONO.rocket).map(function (r) { return r.split("").map(Number); });
    var R = pic.length, C = pic[0].length, mark;
    var ctl = bar(root);
    ctl.appendChild(button("Clear", reset));
    var mode = 1;
    var modeBtn = button("Tapping fills", function () { mode = mode === 1 ? 2 : 1; modeBtn.textContent = mode === 1 ? "Tapping fills" : "Tapping marks ✕"; });
    ctl.appendChild(modeBtn);
    var table = el("div", "pz-nono");
    root.appendChild(table);
    var st = status(root);

    function runs(a) { var out = [], n = 0; a.forEach(function (v) { if (v) n++; else if (n) { out.push(n); n = 0; } }); if (n) out.push(n); return out.length ? out : [0]; }
    function reset() { mark = pic.map(function (r) { return r.map(function () { return 0; }); }); draw(); }
    function draw() {
      table.innerHTML = "";
      table.style.setProperty("--c", C);
      table.appendChild(el("span", "pz-nono-corner"));
      for (var c = 0; c < C; c++) table.appendChild(el("span", "pz-clue pz-clue--col", runs(pic.map(function (r) { return r[c]; })).join("\n")));
      for (var r = 0; r < R; r++) {
        table.appendChild(el("span", "pz-clue pz-clue--row", runs(pic[r]).join(" ")));
        for (c = 0; c < C; c++) (function (r, c) {
          var b = el("button", "pz-nc" + (mark[r][c] === 1 ? " is-fill" : "") + (mark[r][c] === 2 ? " is-x" : ""), mark[r][c] === 2 ? "✕" : "");
          b.type = "button";
          b.setAttribute("aria-label", "Row " + (r + 1) + " column " + (c + 1));
          b.addEventListener("click", function () { mark[r][c] = mark[r][c] === mode ? 0 : mode; draw(); });
          table.appendChild(b);
        })(r, c);
      }
      // solved when every row and column has the blocks its numbers ask for (any such picture counts)
      var filled = mark.map(function (row) { return row.map(function (m) { return m === 1 ? 1 : 0; }); });
      var done = filled.every(function (row, r) { return runs(row).join() === runs(pic[r]).join(); }) &&
        pic[0].every(function (_, c) { return runs(filled.map(function (r) { return r[c]; })).join() === runs(pic.map(function (r) { return r[c]; })).join(); });
      st.textContent = done ? "Solved: the picture is complete!" : "The numbers give the blocks of filled squares in each row and column, in order.";
    }
    reset();
  };

  // ---------- Knights and knaves: decide who is who, the page checks ----------
  W.kk = function (root) {
    // data-people="A,B" data-answer="knave,knight"
    var people = (root.dataset.people || "A,B").split(","), answer = (root.dataset.answer || "").split(",");
    var pick = people.map(function () { return ""; });
    var box = el("div", "pz-kk");
    root.appendChild(box);
    var st = status(root);
    function draw() {
      box.innerHTML = "";
      people.forEach(function (p, i) {
        var row = el("div", "pz-kk-row");
        row.appendChild(el("span", "pz-kk-name", p));
        ["knight", "knave"].forEach(function (k) {
          var b = button(k === "knight" ? "Knight (truthful)" : "Knave (lies)", function () { pick[i] = k; draw(); }, pick[i] === k ? "is-on" : "");
          b.setAttribute("aria-pressed", pick[i] === k ? "true" : "false");
          row.appendChild(b);
        });
        box.appendChild(row);
      });
      if (pick.some(function (x) { return !x; })) st.textContent = "Choose for each person.";
      else st.textContent = pick.join() === answer.join() ? "Right! Open the answer below to see the reasoning." : "Not quite: try assuming each choice and look for a contradiction.";
    }
    draw();
  };

  function init() {
    document.querySelectorAll(".pz[data-pz]:not([data-ready])").forEach(function (root) {
      var f = W[root.dataset.pz];
      if (!f) return;
      root.dataset.ready = "1";
      try { f(root); } catch (e) { root.textContent = "This puzzle could not start in this browser."; }
    });
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
