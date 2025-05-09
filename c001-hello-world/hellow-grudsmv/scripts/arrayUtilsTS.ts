/**
 * Returns a new array with unique elements.
 * @example unique([1, 2, 2]) → [1, 2]
 */
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

/**
 * Groups an array of objects by a specified key.
 * @example groupBy([{ type: 'A' }, { type: 'B' }], 'type') → { A: [...], B: [...] }
 */
export const groupBy = <T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> =>
  arr.reduce((acc, obj) => {
    const groupKey = obj[key] as unknown as string;
    (acc[groupKey] = acc[groupKey] || []).push(obj);
    return acc;
  }, {} as Record<string, T[]>);

/**
 * Sums the values of a specified key in an array of objects.
 * @example sumBy([{ value: 10 }, { value: 5 }], 'value') → 15
 */
export const sumBy = <T>(arr: T[], key: keyof T): number =>
  arr.reduce((total, obj) => total + (obj[key] as unknown as number ?? 0), 0);