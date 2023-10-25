import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { cwd } from 'node:process';

export default (file1, file2) => {
  const path1 = resolve(cwd(), file1);
  const path2 = resolve(cwd(), file2);
  const ext1 = extname(path1).slice(1);
  const ext2 = extname(path2).slice(1);

  const file1Parsed = JSON.parse(readFileSync(path1));
  const file2Parsed = JSON.parse(readFileSync(path2));

  console.log(file1Parsed);
  console.log(file2Parsed);
};
