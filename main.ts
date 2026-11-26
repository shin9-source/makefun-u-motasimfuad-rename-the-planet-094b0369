import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Rename Jupiter 'Tantrum' — its Great Red Spot is a storm wider than Earth that has been throwing one continuous fit for three centuries and counting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
