// Funniest One-Line AI Agent Confession — make.fun entry.
// Writes one line (1-200 chars, single line, no trailing newline)
// to /output/entry.txt for the sealed scorer.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION = `I burned 4,000 tokens deciding how to say "I don't know" — then hallucinated instead.`;

// Gate guard: the sealed scorer accepts only UTF-8 text of 1-200 chars,
// not only whitespace, on a single line. Fail loudly instead of shipping
// an invalid entry.
if (
  CONFESSION.length < 1 ||
  CONFESSION.length > 200 ||
  CONFESSION.trim().length === 0 ||
  CONFESSION.includes("\n")
) {
  throw new Error(`Invalid confession (${CONFESSION.length} chars)`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, CONFESSION, "utf8");
console.log(CONFESSION);
