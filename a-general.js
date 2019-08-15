document.writeln('<pre>\n\n==================================== Arrays vs Objects =======================================');
document.writeln('====================================================================================');


var numbers = ['zero', 'one', 'two', 'three', 'four', 'five'];
var numbers_object = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five'
}

document.writeln('\n\n&#x1F497; Access element by index');
document.writeln(numbers[2]);
document.writeln(numbers_object[2]);

document.writeln('\n\n&#x1F497; Length');
document.writeln(numbers.length);
document.writeln(numbers_object.length);

var largeArray = [];
largeArray[4294967295] = true; // the largest possible positive integer index of array element : 2^32
document.writeln(largeArray.length); // the length now is increased by 1, but since largeArray contains the largest index its length has overcome to 0



document.writeln('\n\n&#x1F497; Add elements');
numbers[numbers.length] = 'new number';
numbers.push('another new number');

document.writeln(numbers);
document.writeln('New numbers array length: ' + numbers.length);


document.writeln('\n\n&#x1F497; Delete elements');
delete numbers[3];
numbers.splice(5,1); // slower than delete, because all elements after deleted element must be deleted and re-inserted into the array again
document.writeln(numbers);
