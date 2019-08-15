document.writeln('<pre>\n\n==================================== Memoization =======================================');
document.writeln('====================================================================================');

document.writeln('\n\n&#x1F497; Fibonacci generator');
document.writeln('No memoization');

var fibonacci = function() {
  var start = performance.now();
  function fibonacciDigit( i ) {
    return i > 1 ? fibonacciDigit(i-1) + fibonacciDigit(i-2) : 1;
  }
  for (var i = 0; i <= 10; i += 1) {
    document.write(fibonacciDigit(i) + ', ');
  }
  var time = performance.now() - start;

  return '\nExecution time: ' + time.toPrecision(3);
}

document.writeln( fibonacci() );


document.writeln('\n\n\n&#x1F497; X-bonacci generator\n');
function xBonacci(seed, n){
  var start = performance.now();
  var Xbonacci = [], i = 0;
  document.writeln('seed: {' + seed + '}');
  while(i < n) {    
    Xbonacci[i] = typeof seed[i] !== 'undefined' ? seed[i] : Xbonacci.slice(i - seed.length, i).reduce((a,b) => a + b, 0);
    i++;
  }
  document.writeln(Xbonacci.join(', '));
  var time = performance.now() - start;

  return 'Execution time: ' + time.toPrecision(3); 
}

document.writeln(xBonacci([1,1], 11) + '\n');
document.writeln(xBonacci([1,1,1], 11) + '\n');