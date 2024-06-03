const MAX_COUNT = "9999+";

export function formatViewCount(count: number) {
  if (count > 9999) {
    return MAX_COUNT;
  } else {
    return count;
  }
}

export default formatViewCount;
