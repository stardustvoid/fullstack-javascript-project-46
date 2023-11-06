import _ from 'lodash';

const compareObjKeys = (obj1, obj2, key) => {
  const result = [];

  const delStr = '-';
  const addStr = '+';
  const padStr = ' ';

  const hasKeyObj1 = _.has(obj1, key);
  const hasKeyObj2 = _.has(obj2, key);
  const value1 = obj1[key];
  const value2 = obj2[key];

  if (!hasKeyObj1 || !hasKeyObj2) {
    const action = hasKeyObj1 ? delStr : addStr;
    const value = hasKeyObj1 ? value1 : value2;
    result.push(`${action} ${key}: ${value}`);
    return result;
  }

  if (value1 === value2) {
    result.push(`${padStr} ${key}: ${value1}`);
  } else {
    result.push(`${delStr} ${key}: ${value1}`, `${addStr} ${key}: ${value2}`);
  }

  return result;
};

export default (data1, data2) => {
  const stringStart = '{\n';
  const stringEnd = '\n}';
  const tab = '  ';

  const uniqueKeys = _.uniq([...Object.keys(data1), ...Object.keys(data2)]);
  const sortedKeys = _.sortBy(uniqueKeys, (key) => key);

  const diffString = sortedKeys
    .reduce((acc, key) => {
      const str = compareObjKeys(data1, data2, key);
      return [...acc, ...str];
    }, [])
    .join(`\n${tab}`);

  return `${stringStart}${tab}${diffString}${stringEnd}`;
};
