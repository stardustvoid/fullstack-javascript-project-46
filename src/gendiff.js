import parse from './parse.js';
import jsondiff from './jsondiff.js';

export default (file1, file2) => {
  const data1 = parse(file1);
  const data2 = parse(file2);

  console.log(jsondiff(data1, data2));
};
