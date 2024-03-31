export const replaceItemAt = <T>(
  array: T[],
  index: number,
  newItem: T
): T[] => {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of range");
  }

  return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
};
