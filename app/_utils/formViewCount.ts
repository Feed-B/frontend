export function formatViewCount(count: number, maxCount: number) {
  if (count > maxCount) {
    return maxCount + "+";
  } else {
    return count;
  }
}

export default formatViewCount;
