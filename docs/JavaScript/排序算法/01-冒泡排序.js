// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     for(let j = 0; j < arr.length - i - 1; j++){
//       if (arr[j] < arr[j + 1]){
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr
// } 

// function bubbleSort(arr) {
//   if (Array.isArray(arr)) {
//     for (var i = arr.length - 1; i > 0; i--) {
//       for (var j = 0; j < i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
// }

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length -i; j++){
      if(arr[j] < arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([3,9,6,8]));


