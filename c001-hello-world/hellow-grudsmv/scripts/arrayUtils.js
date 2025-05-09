// unique([1,2,2]) → [1,2]
export const unique = arr => [...new Set(arr)];
    
// groupBy([{tipo:'A'},{tipo:'B'}],'tipo') → {A:[…], B:[…]}
export const groupBy = (arr, key) =>
  arr.reduce((acc, obj) => {
    (acc[obj[key]] = acc[obj[key]] || []).push(obj);
    return acc;
  }, {});

// sumBy([{valor:10},{valor:5}], 'valor') → 15
export const sumBy = (arr, key) =>
  arr.reduce((total, obj) => total + (obj[key] ?? 0), 0);