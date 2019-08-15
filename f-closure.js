document.writeln('<pre>\n\n==================================== Closure =======================================');
document.writeln('====================================================================================');


document.writeln('\n\n&#x1F497; Function Factory');
document.writeln('functions for adding specific numbers');
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
var add5 = makeAdder(5);
var add7 = makeAdder(7);

document.writeln(add5(8));
document.writeln(add7(8));


document.writeln('\n\n&#x1F497; Emulating private methods with closures');
document.writeln('Object returned by an assigned function can serve as a protection to local variable value');
var incrementalObj = function () { 
  var value = 0;

  return {
    increment: function (inc) {
        value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function () { return value; } 
  };
}(); // here we assign the result returned by function (not the function itself) to incrementalObj
document.writeln( incrementalObj.getValue() );



document.writeln('There is no option to change status');
var newStatus = function( status ) {
  return {
    getStatus: function() {
      return status;
    }
  }
};
document.writeln( newStatus('charged').getStatus() );



function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
    
		res.push( function(i) {
      return function() {
        return i;
      }
    }(i) );
	}
  
	return res;
}


console.log( buildFun(3)[2]() );