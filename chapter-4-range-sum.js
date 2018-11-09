function range(start, finish, step) {
  if ((start > finish && step >= 0) || (start < finish && step <= 0) ){
    console.log("This won't work");
    return false;
  };
    
  var theRangeArray = [];
  var countAbsolute = Math.abs(finish - start)
  var step = step || 1;
  var num = start;
  var stepAbsolute = Math.abs(step)
  for (i = 0; i <= countAbsolute; i = i + stepAbsolute ) {
    theRangeArray.push(num);
      num += step;
  };
  return theRangeArray
};

function sum(array) {
  total = 0;
  for (i = 0; i < array.length; i++){
    total += array[i];
  }
  return total
}

console.log(sum(range(1, 10)));
