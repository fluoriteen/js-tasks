document.writeln('<pre>\n\n==================================== Currying ====================================');
document.writeln('====================================================================================');

function multiply() {
  var multipliers = [];
  for( var i in arguments ) {
    multipliers.push(arguments[i]);
  }

  return multipliers.reduce((a, b) => a*b, 1);
}

document.writeln( multiply(3,5,10) );

function curry(fun) {
  var args = Array.prototype.slice.apply(arguments);
  
  return function() {
    var allArgs = Array.prototype.slice.apply(arguments).concat( args.splice(1,1) );    
    return fun.apply(null, allArgs);
  };
}

var multi3 = curry(multiply, 3);
var multi5 = curry(multiply, 5);

document.writeln( multi5(1,6,4) );