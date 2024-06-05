const MAX_COUNT_STRING = "9999+";
const MAX_COUNT = 9999;

export function formatViewCount(count: number) {
  if (count > MAX_COUNT) {
    return MAX_COUNT_STRING;
  } else {
    return count;
  }
}

export default formatViewCount;
