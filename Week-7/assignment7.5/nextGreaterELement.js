let i=0;
let j=1;
let greaterElement = [];

function nextGreaterElement(arr,size){
while(i<size &&  j<size){
  if (arr[i]<arr[j]){
    greaterElement.push(arr[j]);
    i++;
  }else if(j == size-1){
    greaterElement.push(-1);
    i++;
  }else{
    j++
  }
}
}

let arr = [6, 8, 0, 1, 3];
let size = arr.length;
nextGreaterElement(arr,size);
console.log(greaterElement);