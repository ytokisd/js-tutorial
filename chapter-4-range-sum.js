function range(start, finish) {
	var theRangeArray = [];
    var num = start;
    for (i = 0; i <= finish - start; i++) {
    	theRangeArray.push(num);
      num ++;
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
