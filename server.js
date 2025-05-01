import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function listPDFs() {
  const publicDir = path.join(__dirname, 'public');
  try {
    const files = await fs.readdir(publicDir);
    const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');
    return pdfFiles;
  } catch (err) {
    console.error('Error reading directory:', err);
    return [];
  }
}
