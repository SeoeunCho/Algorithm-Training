const solution = (cards1, cards2, goal) => {
    let arr1 = cards1;
    let arr2 = cards2;
    
    for(let i of goal){
      if(arr1.indexOf(i) === 0) arr1.shift();
      else if(arr2.indexOf(i) === 0) arr2.shift();
      else return 'No';
    }
    return 'Yes';
 }