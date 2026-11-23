import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

/**
 * The One-Line Laugh — one funny sentence, at most 200 characters.
 *
 * The line stands alone: a single sentence with a turn at the end that
 * recontextualizes the setup, an everyday truth, and no wasted words.
 */
const LINE =
  "My therapist says I have abandonment issues, so I ghosted her.";

const OUTPUT = "/output/entry.txt";

function writeEntry(path: string, text: string): void {
  if (Buffer.byteLength(text, "utf8") > 200 || text.trim().length === 0) {
    throw new Error("entry must be 1-200 UTF-8 characters of non-whitespace text");
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(OUTPUT, LINE);
