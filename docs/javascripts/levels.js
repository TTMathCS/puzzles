// Where each page of puzzles.akadian.ca sits on the shared ladder Beginner, Intermediate, Expert.
// reader.js (the same on cs, math, cryptography and puzzles) draws the badge; only this file differs per site.
window.akadianLevel = function (path) {
  if (/\/start\//.test(path)) return "Beginner";                          // the warm-up puzzles
  if (/\/(logic|math)\/./.test(path)) return "Intermediate";              // one puzzle per page, its reasoning written out
  if (/\/theory\/complexity\//.test(path)) return "Expert";
  if (/\/theory\/./.test(path)) return "Intermediate";
  return null;
};
