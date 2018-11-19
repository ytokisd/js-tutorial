// У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный.
// В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace.
// Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
// Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
// который был ей передан в качестве аргумента. 
// Не используйте стандартный метод reverse.

Если иметь в виду побочные эффекты и чистые функции из предыдущей главы, какой из вариантов вам кажется более полезным? Какой более эффективным?

function reverseArray(arr) {
	var newArray = [];
  	var operationLength = arr.length
	for (i = 0; i < operationLength; i++){
    	var element = arr.pop();
        newArray.push(element);
    };
    return newArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
////////////////////////////////////////////
function reverseArrayInPlace(arr) {
  var newArray = [];
  var duplicateArr = arr.slice(0);
  var operationLength = duplicateArr.length
  for (i = 0; i < operationLength; i++) {
    var element = duplicateArr.pop();
    newArray.push(element);
  };
  return newArray;
};

var testArray = [1, 2, 3, 4, 5, 6];
console.log(reverseArrayInPlace(testArray));
console.log(testArray);

