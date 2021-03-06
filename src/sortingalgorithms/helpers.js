export const newTrace = (array) => {
  return [
    {
      array: [...array],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      value: -1,
      sortedIndices: []
    }
  ];
};

export const addToTrace = (
  trace,
  array,
  value,
  sortedIndices = [],
  groupA = [],
  groupB = [],
  groupC = [],
  groupD = []
) => {
  trace.push({
    array: [...array],
    groupA: [...groupA],
    groupB: [...groupB],
    groupC: [...groupC],
    groupD: [...groupD],
    value: value,
    sortedIndices: [...sortedIndices]
  });
};

export const lastSorted = (trace) => {
  return trace[trace.length - 1].sortedIndices;
};

export const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};
