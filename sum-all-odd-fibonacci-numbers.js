function sumFibs(num) {
    let n1 = 1;
    let n2 = 1;
    let nextNum = 0;
    let result = 2;
    while (nextNum < num){
      nextNum= n1 + n2;
      n1 = n2;
      n2 = nextNum;
      if(nextNum % 2 !== 0 && nextNum < num){
        result += nextNum;
      }
    }
    return result;
}
  
console.log(sumFibs(1000));
