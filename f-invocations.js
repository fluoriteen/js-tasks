var FN = {}

document.writeln('<pre>==================================== Functions ====================================');
document.writeln('===================================================================================');

// I(nvokation) P(atterns)
// Method IP
document.writeln('\n\n&#x1F497; Method Invocation Pattern');
document.writeln('this parameter is an object of the method');

FN.calc = {
  result: null,
  add: function(arr) {
    console.log('Method IP: this parameter is an object of the method:');
    console.log(this);
    this.result = Array.isArray(arr) ? arr.reduce((a,b) => a + b, 0) : null;
    return this.result;
  },
  subtract: function(arr) {
    this.result = Array.isArray(arr) ? arr.slice(1).reduce((a,b) => a - b, arr[0]) : null;
    return this.result;
  },
  multiply: function(arr) {
    // inner f-n doesn't see this of the FN.calc.multiply method
    // inner f-n refrs to global this
    // that's why returned FN.calc.result will be equal to the one set with previous (other) FN.calc method call
    var helper = function() {
      this.result = Array.isArray(arr) ? arr.slice(1).reduce((a,b) => a * b, arr[0]) : null;
    }

    helper();

    // inner f-n limitation can be overcome with assigning this to another local variable
    var correct_helper = function( that  ) {
      that.result = Array.isArray(arr) ? arr.slice(1).reduce((a,b) => a * b, arr[0]) : null;
    }

    correct_helper( this );

    return this.result;
  },
  lastResult: function() {
    return this.result;
  }
}

document.writeln(FN.calc.add([10,12,9]));
//console.log(FN.calc.subtract([10,12,9]));
//console.log(FN.calc.multiply([10,12,9]));


// Function IP
document.writeln('\n\n&#x1F497; Function Invocation Pattern');
document.writeln('this parameter is a global object');

var sum = function(arr) {
  console.log('Function IP: this parameter is a global object');
  console.log(this);
  return Array.isArray(arr) ? arr.reduce((a,b) => a + b, 0) : null;
}

document.writeln(sum([10,12,9]));
//console.log(FN.calc.subtract([10,12,9])); // TODO: why the row 14 returns object with result property assigned with the value returned in this row


// Constructor IP
document.writeln('\n\n&#x1F497; Constructor Invocation Pattern');
document.writeln('this parameter is an object created via constructor');

var ComplexNumber = function ( x, y ) {
  this.real = x;
  this.imaginary = y;

  this.display = function() {
    console.log('Constructor IP: this parameter is an object created via constructor');
    console.log(this);

    var format = '';

    if( this.imaginary > 0 ) format = ' + ' + this.imaginary + '*i';
    else if( this.imaginary < 0 ) format = ' - ' + this.imaginary*(-1) + '*i';

    return this.real + format;
  };
  
  //return {}; // TODO: Why would anyone need to return another object in constructor function?
};

ComplexNumber.prototype.abs = function() {
  return Math.sqrt(this.real**2 + this.imaginary**2);
}

var myNumber = new ComplexNumber(5, -5);
document.writeln(myNumber.display());
document.writeln(myNumber.abs());


// Apply IP
document.writeln('\n\n&#x1F497; Apply Method Invocation Pattern');
document.writeln('this parameter is configurable by first arg of apply method');

function add(arr) {
  console.log('Apply Method IP: this parameter is configurable by first arg of apply method');
  console.log(this);
  return Array.isArray(arr) ? arr.reduce((a,b) => a + b, 0) : null;
}

var anotherSum = add.apply(3, [[10,30,211]]);
document.writeln(anotherSum);


document.writeln('apply method can apply other objects\' methods to objects not inherited from the first');
var anotherAbs = ComplexNumber.prototype.abs.apply( {real: 4, imaginary: 5} );
document.writeln(anotherAbs);


// Function Arguments
document.writeln('&#x1F497; Function Arguments');
document.writeln('arguments are another extra parameter that revels all args passed to f-n at invocation');
function divide() {
  if( arguments.length > 0 ) {
    var part = arguments[0], i = 1;
    while( i < arguments.length ) {
      part = part / arguments[i++];
    }
  }

  return part;
}

var i = 4;
while(i--) {
  var arr = [];
  for(var j = 0; j <= i; j++) arr[j] = j+1; 
  document.write('Array: [' + arr + '], division: ');
  document.writeln( divide(...arr) );
}

document.writeln('</pre>');