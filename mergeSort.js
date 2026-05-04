export { mergeSort };

const mergeSort = (array) => {
  // base case
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  const middleIndex = Math.ceil(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);
  console.log("left: ", left, "right: ", right);

  let leftSide = mergeSort(left);
  let rightSide = mergeSort(right);

  return sort(leftSide, rightSide);
};

function sort(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
