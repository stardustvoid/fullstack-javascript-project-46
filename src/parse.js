import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { cwd } from 'node:process';

const normalizePath = (path) => resolve(cwd(), path);

const getFileExt = (path) => extname(path).slice(1);

export default (filepath) => {
  const normalizedPath = normalizePath(filepath);
  const fileExt = getFileExt(normalizedPath);

  if (fileExt === 'json') {
    return JSON.parse(readFileSync(normalizedPath));
  }

  return null;
};
