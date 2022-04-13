function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  let piv = arr[start];

  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (piv > arr[i]) {
      swapIndex++;
      // console.log(arr, swapIndex, i)
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  // console.log(arr)
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

quickSort([10, -2, 4, 6, 9, 1, 2, 5, 3]);
