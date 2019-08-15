document.writeln('<pre>\n\n==================================== Modules =======================================');
document.writeln('====================================================================================');


document.writeln('\n\n&#x1F497; Password generator 1');
document.writeln('No module pattern. The lowercase, uppercase and numeric values are aproximately equally distributed here, which gives some pattern == no good\n');
function passwordGen(){
  function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  var ops = [
    function lowercase() {
      return 'abcdefghijklmnopqrstuvwxyz'.charAt(random(25));
    },
    function uppercase() {
      return ops[0]().toUpperCase();
    },
    function number() {
      return '0123456789'.charAt(random(9));
    }
  ];

  var pass = '', passLength = random(20, 7),
  usedChars = {}, usedOps = Array.from({length: passLength}, (x, i) => i%ops.length), n = 0;
  shuffle(usedOps);
  
  while(n < passLength) {
    var o, char;
    
    // Select char generating operation # from all possible
    o = usedOps[n];

    // Generate random char by selected operation
    do {
      char = ops[o](); 
    } while ( usedChars[char] >= passLength * 0.35 );
    usedChars[char] = !usedChars.hasOwnProperty(char) ? 1 : usedChars[char] + 1; 
    
    pass += char;
    n++;
  }
  
  return pass;
}

Array.from({length: 10}, () => document.writeln(passwordGen()));



document.writeln('\n\n&#x1F497; Password generator 2');
document.writeln('Module pattern uses closure and scope benefits of private vars and functions. There is no way to compromize pass alg in this kind of pattern.\n');

var massPass = function() {
  const lcChars = 'abcdefghijklmnopqrstuvwxyz', ucChars = lcChars.toUpperCase(), nChars = '0123456789';
  const chars = lcChars + ucChars + nChars;

  var random = function (max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  let singleGen = function() {
    var plength = random(20,6), usedChars = {}, j = 0, pass = '';

    while(j < plength) {
      var char = '';

      do {
        char = chars.charAt(random(chars.length));
      } while(usedChars[char] >= plength * 0.35);  
      usedChars[char] = !usedChars.hasOwnProperty(char) ? 1 : usedChars[char] + 1;

      pass += char;
      j++;

    }

    return pass.match(/(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)^.{6,20}$/) ? pass : singleGen();
  }

  return {
    generate: function(n) {
      return Array.from({length: n}).map((x) => singleGen()).join('\n');
    }
  };
}();

document.writeln(massPass.generate(12));
