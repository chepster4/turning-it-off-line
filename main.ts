// Have You Tried Turning It Off? — make.fun bounty entry.
// Writes one funny tech-support line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I know you've already tried turning it off and on again. Let's try it once more, but this time with feeling.";

// Gate kompetisi: entry harus 1–199 karakter — tolak menulis baris yang pasti ditolak gate, jangan diam-diam menulisnya.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry length ${LINE.length} out of range (must be 1-199 chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
