import { mkdirSync, writeFileSync } from "node:fs";

const CLAUSE =
  "12.4 By accepting these terms, you grant the Company the right to borrow your dreams on alternate Tuesdays, returning them slightly used and in no particular order.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLAUSE, "utf8");
