// Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив,
// который содержит все числа из него, включая начальное и конечное.

// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
// Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.

// В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива.
// Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

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
