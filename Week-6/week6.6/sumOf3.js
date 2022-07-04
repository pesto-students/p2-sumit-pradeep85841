
function sumOf3(array, size, target){
    let i = 0;
    let j = 1;
    let k = 2;
    
    let closestNumber = Number.MAX_VALUE;
    
    while (i<size && j<size && k<size){
      if (Math.abs(target - closestNumber) >
      Math.abs(target - (array[i] + array[j] + array[k])))
      closestNumber = (array[i] + array[j] + array[k]);
      i++;
      j++;
      k++;
    }
    return console.log(closestNumber);
    }
    array = [-1, 2, 1, -4];
    target = 1
    size = array.length;
    
    console.log(sumOf3(array, size, target));