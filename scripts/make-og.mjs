// Rasterizes public/og-image.svg → public/og-image.png so social link
// previews (which usually ignore SVG) render correctly. Run: node scripts/make-og.mjs
import { readFile, writeFile } from 'node:fs/promises';

const svgPath = new URL('../public/og-image.svg', import.meta.url);
const pngPath = new URL('../public/og-image.png', import.meta.url);

const { default: sharp } = await import('sharp');
const svg = await readFile(svgPath);
const png = await sharp(svg, { density: 144 }).resize(1200, 630).png().toBuffer();
await writeFile(pngPath, png);
console.log('OG_PNG_OK', png.length, 'bytes');
