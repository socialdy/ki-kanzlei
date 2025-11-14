import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import ICO from 'icojs';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const projectRoot = resolve(__dirname, '..');
  const repoRoot = resolve(projectRoot, '..');
  const inputPath = resolve(repoRoot, 'favicon.ico');
  const outputPath = resolve(projectRoot, 'public', 'img', 'favicon-300.jpg');

  const icoBuffer = await readFile(inputPath);

  const images = await ICO.parse(icoBuffer, { ignoreSizes: false });
  if (!images || images.length === 0) {
    throw new Error('ICO enthält keine Bilder.');
  }

  const largest = images.reduce((acc, cur) => {
    const accArea = acc.width * acc.height;
    const curArea = cur.width * cur.height;
    return curArea > accArea ? cur : acc;
  });

  const pngBuffer = Buffer.from(largest.buffer);

  await sharp(pngBuffer)
    .resize(300, 300, { fit: 'cover' })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  // eslint-disable-next-line no-console
  console.log(`Wrote: ${outputPath}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
