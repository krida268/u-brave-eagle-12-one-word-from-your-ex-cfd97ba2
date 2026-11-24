import { mkdirSync, writeFileSync } from "node:fs";

// The one word my ex would use to describe me: "Intern".
// I did all the work, got no commitment, and was easily replaced
// when the permanent position opened up.
const word = "Intern";

// Gate self-check, mirroring the sealed scorer: UTF-8 text of
// 1 to 24 characters, exactly one word, not only white space.
if (!/^\S{1,24}$/.test(word)) {
  throw new Error("entry must be a single word of 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
