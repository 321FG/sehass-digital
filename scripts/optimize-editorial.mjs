// One-shot optimizer for Freepik editorial assets.
// Downscales source JPGs to a max long edge of 2400px, re-encodes at
// quality 82 (mozjpeg), writes to short semantic slugs, then removes
// the raw sources. Sharp comes in transitively via next.
//
// Run with: `node scripts/optimize-editorial.mjs`

import { readdir, rename, stat, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const editorialDir = join(root, "public", "editorial");
const archiveDir = join(root, ".editorial-source-archive");

// Explicit source → slug map. Anything not in this map is preserved
// but never referenced from the site (see SKIPPED list).
const rename_map = {
  "active-woman-standing-against-wall-using-her-smartphone.jpg":
    "human-smartphone.jpg",
  "admin-data-center-checking-time-late-shift-while-working-pc.jpg":
    "data-center-admin.jpg",
  "african-american-man-working-computer-write-code-programming.jpg":
    "software-engineer.jpg",
  "close-up-man-working-tech-support-doing-checkup-ai-systems.jpg":
    "ai-systems.jpg",
  "cloud-storage-background-business-network-design.jpg": "cloud-network.jpg",
  "data-center-technician-using-laptop-manage-software-updates-system-stability-african-american.jpg":
    "data-center-technician.jpg",
  "homepage-concept-with-search-bar.jpg": "intelligent-search.jpg",
  "media-hub-digital-community-icon.jpg": "digital-community.jpg",
  "medical-office-scene-doctor-patient-evaluating-cardiology-test-results.jpg":
    "healthcare-consult.jpg",
  "medium-shot-friends-reading-menu-restaurant.jpg": "commerce-restaurant.jpg",
  "programer-sitting-desk-with-multiple-screens-running-code-talking-with-colleague-about-artificial-intelligence-algorithm-software-developers-doing-innovative-artificial-intelligence-project.jpg":
    "ai-collaboration.jpg",
  "programmer-photovoltaics-factory-using-pc-program-diagnose-systems.jpg":
    "systems-integration.jpg",
  "programming-background-with-person-working-with-codes-computer.jpg":
    "code-close-up.jpg",
  "startup-manager-working-with-artificial-intelligence-hologram-manager-talk-about-company-report-using-holographic-augmented-reality-have-remote-conversation-online-digital-tech.jpg":
    "ai-hologram.jpg",
  "woman-scrolling-through-social-networks-feed-smartphone-front-digital-video-wall-showcasing.jpg":
    "digital-transformation.jpg",
  "young-students-attending-class.jpg": "education-students.jpg",
};

// Deliberately skipped for editorial credibility — negative or sensitive:
//   overworked-man-having-migraine-symptoms-while-working-pc-drinking-water.jpg
//   radiologist-delivering-bad-news-about-tumor-medical-consultation.jpg
const SKIPPED = new Set([
  "overworked-man-having-migraine-symptoms-while-working-pc-drinking-water.jpg",
  "radiologist-delivering-bad-news-about-tumor-medical-consultation.jpg",
]);

const MAX_EDGE = 2400;
const QUALITY = 82;

await mkdir(archiveDir, { recursive: true });
await mkdir(join(archiveDir, "unused"), { recursive: true });

const entries = await readdir(editorialDir);
let optimized = 0;
let archived = 0;
let skipped = 0;

for (const name of entries) {
  const abs = join(editorialDir, name);
  const info = await stat(abs);
  if (!info.isFile()) continue;
  if (!/\.(jpe?g)$/i.test(name)) {
    // ZIP or other — move out of public.
    await rename(abs, join(archiveDir, name));
    archived++;
    continue;
  }
  if (SKIPPED.has(name)) {
    await rename(abs, join(archiveDir, "unused", name));
    skipped++;
    continue;
  }
  const targetSlug = rename_map[name];
  if (!targetSlug) {
    console.warn(`[skip] no mapping for ${name}`);
    continue;
  }
  const outAbs = join(editorialDir, targetSlug);

  const image = sharp(abs, { failOnError: false });
  const meta = await image.metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  const pipeline = image.rotate();
  if (longEdge > MAX_EDGE) {
    if ((meta.width ?? 0) >= (meta.height ?? 0)) {
      pipeline.resize({ width: MAX_EDGE, withoutEnlargement: true });
    } else {
      pipeline.resize({ height: MAX_EDGE, withoutEnlargement: true });
    }
  }
  await pipeline
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toFile(outAbs + ".tmp");

  // Move the raw source into the archive, then swap the tmp into place.
  await rename(abs, join(archiveDir, name));
  await rename(outAbs + ".tmp", outAbs);
  optimized++;
  const outStat = await stat(outAbs);
  const before = (info.size / 1024).toFixed(0);
  const after = (outStat.size / 1024).toFixed(0);
  console.log(
    `[ok] ${name}  →  ${targetSlug}   ${before}KB → ${after}KB`,
  );
}

console.log(
  `\nDone. optimized=${optimized}  archived=${archived}  skipped=${skipped}`,
);
console.log(`Originals archived at: ${archiveDir}`);
