function arrayToList(array) {
  ar = array.slice(0);
  if (ar.length > 0) {
    var lst = {value: ar.splice(0, 1)[0], rest: arrayToList(ar)};
    return lst;
  };
};

var arr = [];

function listToArray(list) {
  val = (list.value);
  arr.push(val);
  if (list.rest) {
  	listToArray(list.rest);
  };
  return arr;
};

function prepend(val, list) {
  var lst = {value: val, rest: list};
  return lst
};

function nth(list, position) {
  var val = list.value
  if (position != 0) {
    val = nth(list.rest, position -1)
  };
  return val;
};

console.log(prepend(10, prepend(20, null)));
console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])))
console.log(nth(arrayToList([10, 20, 30]), 1));
