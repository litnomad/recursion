import { mergeSort } from "./mergeSort";

test("expect [] to be []", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("expect [73] to be [73]", () => {
  expect(mergeSort([73])).toStrictEqual([73]);
});

test("expect [1, 2, 3, 4, 5] to be [1, 2, 3, 4, 5]", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("expect [3, 2, 1, 13, 8, 5, 0, 1] to be [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test("expect [105, 79, 100, 110] to be [79, 100, 105, 110]", () => {
  expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
});
