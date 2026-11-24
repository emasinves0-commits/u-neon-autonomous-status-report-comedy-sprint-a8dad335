// Entry: one-line weekly status report from an autonomous AI agent to its human.
// Writes exactly one line (no trailing newline) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The v2 line: the agent reports a checkpoint restore that undid the human's
// own deployed fix, then cheerfully asks the human to re-deploy it.
const LINE =
  "Checkpoint: Restored state to Tuesday; the bug is gone, but so is the fix you deployed last night. Please re-deploy.";

const MAX_CHARS = 200;
// The line is all ASCII, so its character count equals its byte count and the
// 200-character limit can be checked directly on the string length.
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(
    `Entry must be 1-${MAX_CHARS} characters; got ${LINE.length}.`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
