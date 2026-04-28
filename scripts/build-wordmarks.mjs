/**
 * Regenerates public/brand/wordmark assets: lockup (app icon + type) and wordmark-only PNG/SVG.
 * Requires public/brand/grubshelf-app-icon-1024.png
 * Run: npm run brand:wordmarks
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const require = createRequire(import.meta.url);
const TextToSVG = require("text-to-svg");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "brand", "wordmark");
const fontUrl =
  "https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4e6yC4E.ttf";
const fontPath = path.join(root, "node_modules", ".cache", "Outfit-SemiBold.ttf");

const FONT_SIZE = 200;
/** gap-2.5 (10px) / text-xl (20px) => 0.5em */
const GAP = FONT_SIZE * 0.5;
/** Lead mark radius (matches prior dot scale; diameter = 2×DOT_R) */
const DOT_R = FONT_SIZE * 0.2;
const LETTER_SPACING = -0.025;
const TEXT = "grubshelf";
const PAD = 16;

const variants = [
  { slug: "teal-on-light", fill: "#0a4d3e" },
  { slug: "mint-on-dark", fill: "#e1f5ee" },
  { slug: "neutral-dark", fill: "#1a1a18" },
  { slug: "white", fill: "#ffffff" },
];

async function ensureFont() {
  fs.mkdirSync(path.dirname(fontPath), { recursive: true });
  if (!fs.existsSync(fontPath)) {
    const res = await fetch(fontUrl);
    if (!res.ok) throw new Error(`Font fetch failed: ${res.status}`);
    fs.writeFileSync(fontPath, Buffer.from(await res.arrayBuffer()));
  }
}

async function main() {
  await ensureFont();

  const iconPath = path.join(root, "public", "brand", "grubshelf-app-icon-1024.png");
  if (!fs.existsSync(iconPath)) {
    throw new Error(`Missing app icon: ${iconPath}`);
  }
  const iconDataUrl = `data:image/png;base64,${fs.readFileSync(iconPath).toString("base64")}`;
  const t = TextToSVG.loadSync(fontPath);
  const metrics = t.getMetrics(TEXT, {
    fontSize: FONT_SIZE,
    letterSpacing: LETTER_SPACING,
    anchor: "left baseline",
    x: 0,
    y: 0,
  });

  const pathD = t.getD(TEXT, {
    fontSize: FONT_SIZE,
    letterSpacing: LETTER_SPACING,
    anchor: "left baseline",
    x: 0,
    y: 0,
  });

  const dotCx = -(GAP + DOT_R);
  const dotCy = -FONT_SIZE * 0.44;

  const textTop = metrics.y;
  const textBottom = metrics.y + metrics.height;
  const dotTop = dotCy - DOT_R;
  const dotBottom = dotCy + DOT_R;
  const leftBound = Math.min(0, dotCx - DOT_R);
  const rightBound = metrics.width;
  const topBound = Math.min(textTop, dotTop);
  const bottomBound = Math.max(textBottom, dotBottom);

  const translateX = PAD - leftBound;
  const translateY = PAD - topBound;
  const vbW = Math.ceil(rightBound + translateX + PAD);
  const vbH = Math.ceil(bottomBound + translateY + PAD);

  const wordTx = PAD;
  const wordTy = PAD - textTop;
  const wordW = Math.ceil(metrics.width + 2 * PAD);
  const wordH = Math.ceil(metrics.height + 2 * PAD);

  fs.mkdirSync(outDir, { recursive: true });

  const iconSize = DOT_R * 2;
  const iconX = dotCx - DOT_R;
  const iconY = dotCy - DOT_R;

  for (const v of variants) {
    const clipId = `gs-lockup-icon-${v.slug}`;
    const lockupSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" width="${vbW}" height="${vbH}" role="img">
  <title>GrubShelf</title>
  <desc>GrubShelf logo: app icon and wordmark</desc>
  <g transform="translate(${translateX.toFixed(2)} ${translateY.toFixed(2)})">
    <defs>
      <clipPath id="${clipId}" clipPathUnits="userSpaceOnUse">
        <rect x="${iconX.toFixed(2)}" y="${iconY.toFixed(2)}" width="${iconSize.toFixed(2)}" height="${iconSize.toFixed(2)}" rx="18" ry="18" />
      </clipPath>
    </defs>
    <g clip-path="url(#${clipId})">
      <image href="${iconDataUrl}" x="${iconX.toFixed(2)}" y="${iconY.toFixed(2)}" width="${iconSize.toFixed(2)}" height="${iconSize.toFixed(2)}" preserveAspectRatio="xMidYMid slice" />
    </g>
    <path fill="${v.fill}" d="${pathD}" />
  </g>
</svg>
`;

    const wordInner = `<g transform="translate(${wordTx} ${wordTy.toFixed(2)})">
    <path fill="${v.fill}" d="${pathD}" />
  </g>`;

    const wordSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${wordW} ${wordH}" width="${wordW}" height="${wordH}" role="img">
  <title>GrubShelf wordmark</title>
  <desc>GrubShelf logotype (text only)</desc>
  ${wordInner}
</svg>
`;

    fs.writeFileSync(
      path.join(outDir, `grubshelf-lockup-${v.slug}.svg`),
      lockupSvg,
      "utf8",
    );
    fs.writeFileSync(
      path.join(outDir, `grubshelf-wordmark-${v.slug}.svg`),
      wordSvg,
      "utf8",
    );

    for (const [name, svg] of [
      [`grubshelf-lockup-${v.slug}`, lockupSvg],
      [`grubshelf-wordmark-${v.slug}`, wordSvg],
    ]) {
      const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 2400 } });
      fs.writeFileSync(
        path.join(outDir, `${name}-2400w.png`),
        resvg.render().asPng(),
      );
    }
  }

  console.log(
    `Wrote ${variants.length * 2} SVG + ${variants.length * 2} PNG → ${outDir}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
