document.writeln('<pre>\n\n==================================== Short tasks =======================================');
document.writeln('====================================================================================');


document.writeln('\n\n&#x1F497; Probability of Reels');
document.writeln('What\'s the chance to get more reels in experiment with throwing a coin (n+1) times relatively to the number of reels in experiment with throwing a coin n times');


function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function throwCoin( n ) {
  var array1 = [], array2 = [];
  array1.length = n, array2.length = n + 1;

  var countR = [0, 0];

  
  array1.fill(0, 0, n);
  array1 = array1.map(() => ['r','e'][random(-1,2)]);

  array2.fill(0, 0, n+1); 
  array2 = array2.map(() => ['r','e'][random(-1,2)]);


  for(var i = 0; i < n+1; i++) {
    if(array1[i] === 'r') countR[0] += 1;
    if(array2[i] === 'r') countR[1] += 1;
  }

  return countR[1] > countR[0];
}

function repeatThrowing( n ) {
  var collectTrue = 0;

  for(var j = 0; j < n; j++) {
    collectTrue += throwCoin(j+1) ? 1 : 0;
  }

  var relation = collectTrue / n;

  return relation.toFixed(2);
}


document.writeln(repeatThrowing(1000));


document.writeln('\n\n&#x1F497; Possible to transform the string?');
document.writeln('A function to define if one string can be turned into another with the exact number of operations provided.');
document.writeln('Types of operations: append to the end, delete from the end. If empty string delete does nothing\n');
function appendAndDelete(s, t, k) {
  var startDifferAt = Math.min(s.length, t.length), i = 0;
  while( i < t.length ) {
      if(s.indexOf(t.slice(0, i+1)) < 0) {
        startDifferAt = i;
        break;
      }
      i++;
  }

  var countDiff = s.length + t.length - 2 * startDifferAt;
  var condition = k >= s.length + t.length ? true : k >= countDiff && (k - countDiff) % 2 == 0;
  
  document.writeln('Initial string: ' + s);
  document.writeln('Result string: ' + t);
  document.writeln('# of operations: ' + k);
  return condition ? "Answer: Yes" : "Answer: No";
}

document.writeln(appendAndDelete('a', 'abwww', 2));