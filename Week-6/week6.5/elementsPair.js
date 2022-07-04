function elementsPair(elements,integer){
  
    findPair = new Set(elements);
    
  for (i in elements){
    difference = elements[i] - integer;
    
    if (findPair.has(difference)){
      return 1;
    }else if(i == elements.length-1){
      return 0;
    }
  }
  }
   console.log(elementsPair([5, 10, 3, 1, 50, 80],78));