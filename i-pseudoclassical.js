document.writeln('<pre>\n\n========================== Pseudoclassical Inheritance Pattern ============================');
document.writeln('====================================================================================');

document.writeln('\n\n&#x1F497; Mammal constructor');

var Mammal = function( name ) {
  this.name = name;
}

Mammal.prototype.getName = function() {
  return this.name;
}
Mammal.prototype.says = function() {
  return this.saying || '';
}



var sheltie = new Mammal('Oliver');
sheltie.saying = 'woof-woof';
document.writeln(sheltie.getName() + ' says "' + sheltie.says() + '"');


document.writeln('\n\n&#x1F497; Cat constructor');
var Cat = function( name ) {
  this.name = name;
  this.saying = 'meow-meow';
}

Cat.prototype = new Mammal(); // inherits Mammal's methods
Cat.prototype.getName = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
}

var siam = new Cat('Liam');
document.writeln(siam.getName() + ' says "' + siam.says() + '"');
