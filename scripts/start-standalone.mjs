// Standalone prod runner: copies public/ + .next/static into .next/standalone/
// (Next.js doesn't do this itself) then starts the self-contained server.
// This mirrors how the Azure App Service / container deployment will run.
import { cpSync, existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  console.error(
    "No .next/standalone build found. Run `npm run build` first.",
  );
  process.exit(1);
}

cpSync(path.join(root, "public"), path.join(standaloneDir, "public"), {
  recursive: true,
});
cpSync(
  path.join(root, ".next", "static"),
  path.join(standaloneDir, ".next", "static"),
  { recursive: true },
);

const child = spawn(
  process.execPath,
  [path.join(standaloneDir, "server.js")],
  {
    stdio: "inherit",
    env: { ...process.env, PORT: process.env.PORT ?? "3000" },
  },
);

child.on("exit", (code) => process.exit(code ?? 0));
