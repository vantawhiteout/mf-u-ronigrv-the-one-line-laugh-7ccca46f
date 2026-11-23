import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

/**
 * The One-Line Laugh — one funny sentence, at most 200 characters.
 *
 * The line stands alone: a single sentence whose last words turn the setup
 * into something the reader did not expect but instantly recognises.
 */
const LINE = "In our house, 'fine' is the first stage of grief.";

const OUTPUT = "/output/entry.txt";

function writeEntry(path: string, text: string): void {
  const characters = Array.from(text).length;
  if (characters < 1 || characters > 200 || text.trim().length === 0) {
    throw new Error("entry must be 1-200 UTF-8 characters of non-whitespace text");
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(OUTPUT, LINE);
