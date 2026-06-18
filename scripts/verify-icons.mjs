// Verifies that every icon name used in the site exists in the installed
// Iconify JSON sets, so the astro-icon build never fails on a missing slug.
import { readFile } from 'node:fs/promises';

const sets = {
  'simple-icons': new URL('../node_modules/@iconify-json/simple-icons/icons.json', import.meta.url),
  lucide: new URL('../node_modules/@iconify-json/lucide/icons.json', import.meta.url),
};

// Keep in sync with the icons actually referenced in src/ (Icon name=... and
// the `icon` fields in src/data/content.ts).
const used = {
  'simple-icons': [
    'typescript', 'javascript', 'php', 'openjdk', 'html5', 'css',
    'nodedotjs', 'astro', 'tailwindcss', 'react', 'electron', 'git', 'docker',
    'linux', 'github',
  ],
  lucide: [
    'bot', 'database', 'webhook', 'sparkles', 'map-pin', 'briefcase', 'languages',
    'file-search', 'bot-message-square', 'layout-panel-left', 'list-checks', 'image',
    'menu', 'x', 'arrow-right', 'arrow-up', 'mail', 'send', 'loader-circle', 'external-link',
  ],
};

let missing = 0;
for (const [prefix, url] of Object.entries(sets)) {
  const json = JSON.parse(await readFile(url, 'utf8'));
  const available = new Set(Object.keys(json.icons ?? {}));
  const aliases = new Set(Object.keys(json.aliases ?? {}));
  for (const name of used[prefix]) {
    const ok = available.has(name) || aliases.has(name);
    if (!ok) {
      missing++;
      console.log(`MISSING  ${prefix}:${name}`);
    }
  }
}
console.log(missing === 0 ? 'ALL_OK' : `MISSING_COUNT=${missing}`);
