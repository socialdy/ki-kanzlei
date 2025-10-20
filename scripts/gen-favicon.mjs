import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const svgPath = path.join(projectRoot, "public", "favicon.svg");
const outPath = path.join(projectRoot, "public", "favicon.ico");

async function generate() {
  if (!fs.existsSync(svgPath)) {
    console.error("favicon.svg not found at:", svgPath);
    process.exit(1);
  }

  const svg = fs.readFileSync(svgPath);
  const sizes = [16, 32, 48, 64];

  const pngBuffers = await Promise.all(
    sizes.map((size) => sharp(svg).resize(size, size, { fit: "contain" }).png().toBuffer())
  );

  const icoBuffer = await toIco(pngBuffers);
  fs.writeFileSync(outPath, icoBuffer);
  console.log("Generated:", outPath, "with sizes:", sizes.join(", "));
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});


