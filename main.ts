// One office joke, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I replied-all \"unsubscribe\" to the company newsletter and now I'm chairing the Culture Committee.";

const len = [...joke].length;
if (len < 1 || len > 200) throw new Error(`joke is ${len} characters`);

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(folder, { recursive: true });
writeFileSync(`${folder}/entry.txt`, joke, "utf8");
