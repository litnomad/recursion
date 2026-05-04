export { mergeSort };

const mergeSort = (array) => {
  // base case: zero or single element is already sorted
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  // find the middle and split the array
  const middleIndex = Math.ceil(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);
  console.log("left: ", left, "right: ", right);

  let leftSide = mergeSort(left);
  let rightSide = mergeSort(right);

  // return sorted and merge the halves
  return sort(leftSide, rightSide);
};

// helper function for merge sorting left and right sides
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

  // concatenate the remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
