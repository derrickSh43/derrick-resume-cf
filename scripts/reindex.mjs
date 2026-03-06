import fs from "node:fs";
import path from "node:path";

const sourcePath = path.join(process.cwd(), "lib", "site-data.ts");
const outDir = path.join(process.cwd(), "generated");
const outPath = path.join(outDir, "search-index.json");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const snapshot = {
  generatedAt: new Date().toISOString(),
  note: "The active site imports the local corpus directly. This snapshot exists for inspection and future indexing workflows.",
  sourceFile: sourcePath
};

fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2));
console.log(`Wrote ${outPath}`);
