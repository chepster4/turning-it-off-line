// Have You Tried Turning It Off? — make.fun bounty entry.
// Writes one funny tech-support line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I know you've already tried turning it off and on again. Let's try it once more, but this time with feeling.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
