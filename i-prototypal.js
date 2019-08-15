document.writeln('<pre>\n\n============================= Prototypal Inheritance Pattern ===============================');
document.writeln('====================================================================================');

document.writeln('\n\n&#x1F497; Dog prototype object');

var dog = {
  name: 'Oliver',
  saying: 'woof-woof',
  getName: function() {
    return this.name;
  },
  says: function() {
    return this.saying || '';
  }
}

document.writeln(dog.getName() + ' says "' + dog.says() + '"');



// The create method creates a new object that uses an old object as its prototype.
Object.create = function(o) {
  var F = function() {};
  F.prototype = o;
  return new F();
}


document.writeln('\n\n&#x1F497; Cat prototype object / Differential inheritance');
var cat = Object.create(dog);
cat.name = 'Lila';
cat.saying = 'meow-meow';
cat.getName = function () {
  return this.says() + ' ' + this.name + ' ' + this.says();
};
document.writeln(cat.getName() + ' says "' + cat.says() + '"');
