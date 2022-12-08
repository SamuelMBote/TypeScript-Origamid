import CountList from '../interfaces/ICountList';

export default function countBy(arr: (string | number)[]): CountList {
  return arr.reduce((acc: CountList, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}
