document.writeln('<pre>\n\n==================================== Methods =======================================');
document.writeln('====================================================================================');


document.writeln('\n\n&#x1F497; Sort');

var numbersArray = [10, 11, 3, 15, 99, 0, 3, 2];

var numericSort = function (a,b) {
  return a - b;
}

document.writeln('Initial array: ' + numbersArray);
document.writeln('Incorrect sort: ' + numbersArray.sort());
document.writeln('Correct numeric sort: ' + numbersArray.sort( numericSort ) + '\n\n');


var mixedArray = [10, 11, 3, '15', 99, 0, '3', 2, 'a', 'fff'];

var mixedSort = function (a,b) {
  if( a === b ) return 0;
  if( typeof a === typeof b ) return a < b ? -1 : 1;
  return typeof a < typeof b ? -1 : 1;
}



document.writeln('Initial array: ' + mixedArray);
document.writeln('Incorrect sort: ' + mixedArray.sort());
document.writeln('Correct mixed sort: ' + mixedArray.sort( mixedSort ) + '\n\n');