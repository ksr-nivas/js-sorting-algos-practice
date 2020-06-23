export default function bubbleSort(array = []) {
  let temp, i, j;
  for (i = 0; i < array.length; i++) {
    for (j = 1; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  console.log(array);
}