#!/usr/bin/env node
/**
 * Копирует реальные файлы в public/assets (без symlink).
 * Так git push и сервер получают те же картинки, что и локально.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wireframeRoot = path.resolve(__dirname, '..');
const publicAssets = path.join(wireframeRoot, 'public', 'assets');
const landingAssets = path.resolve(wireframeRoot, '..', 'landing', 'assets');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(from, to) {
  if (!fs.existsSync(from)) {
    console.warn('[sync] skip (missing):', from);
    return false;
  }
  fs.copyFileSync(from, to);
  return true;
}

function removeSymlinks(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.lstatSync(full);
    if (st.isSymbolicLink()) {
      fs.unlinkSync(full);
      console.log('[sync] removed symlink', name);
    }
  }
}

ensureDir(publicAssets);
removeSymlinks(publicAssets);

const fromLanding = [
  ['kisfit-logo-wordmark-light.png', 'kisfit-logo-wordmark.png'],
  ['hero-app-screen.png', 'hero-app-screen.png'],
  ['rosmolodezh-grants.jpg', 'rosmolodezh-grants.jpg'],
];

for (const [srcName, destName] of fromLanding) {
  copyFile(path.join(landingAssets, srcName), path.join(publicAssets, destName));
}

const motivationSrc = path.join(publicAssets, 'motivation.mp4');
if (!fs.existsSync(motivationSrc)) {
  console.warn('[sync] motivation.mp4 not in public/assets — add manually if needed');
}

const screens = fs.readdirSync(publicAssets).filter((n) => /^screen-.+\.(jpg|jpeg|png|webp)$/i.test(n));
if (screens.length === 0) {
  for (const n of ['screen-01.jpg', 'screen-02.jpg', 'screen-03.jpg', 'screen-04.jpg']) {
    copyFile(path.join(landingAssets, n), path.join(publicAssets, n));
  }
}

console.log('[sync] public/assets ready:', fs.readdirSync(publicAssets).join(', '));
