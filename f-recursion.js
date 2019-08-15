document.writeln('<pre>\n\n==================================== Recursion =====================================');
document.writeln('====================================================================================');


document.writeln('\n\n&#x1F497; Pyramide builder');
function pyramide( n, i ) {
  var i = i || 0;

  if( n > 0 ) {
    // If this is not the last level givee inner space.
    // If the last level give basement
    var h = !(n === 1 && i > 0) ? ' ' : '_';

    // One triangle side is set as space to left edge, /, space or basement inside, \, space to the next figure if exists
    var figSide = ' '.repeat(n-1) + '/' + h.repeat(2*i) + '\\' + ' '.repeat(n-1);
    
    // The number of pyramids are twice less than their level height
    document.writeln( figSide.repeat((n+i)/2) );
    pyramide(n-1, i+1);
  }
}
pyramide(12);


document.writeln('\n\n&#x1F497; The Tower of Hanoi');

var hanoi = {
  countMoves: 0, // Takes 2 ^ disc - 1 moves
  disc: 5, 
  move: function(left, middle, right, disc) {
    var disc = typeof disc !== 'undefined' ? disc : this.disc;
    if( this.n === 0  && disc === this.disc) {
      document.writeln('# of disks: ' + disc);
    }
  
    if(disc > 0) {
      this.move(left, right, middle, disc - 1);
      document.writeln('Move disk ' + disc + ' from ' + left + ' to ' + right);
      this.countMoves++;
      this.move(middle, left, right, disc - 1);
    }
  }
}
hanoi.move('Left', 'Middle', 'Right');
document.writeln('# of moves: ' + hanoi.countMoves);


document.writeln('\n\n&#x1F497; Factorial');
var factorial = function(a) {
  var sign = a / Math.abs(a);
  var a = Math.abs(a); 
  return a !== 0 ? sign * a * factorial(a-1) : 1;
}

var factorialBase = -12;
document.writeln(factorialBase + '! = ' + factorial(factorialBase)); // TODO: page 35 - what the hell?