document.writeln('<pre>\n\n==================================== Exceptions ====================================');
document.writeln('====================================================================================');

var Exception = function(invalidVal, kind) {
  this.kind = kind || '';
  this.value = invalidVal;

  switch( this.kind ) {
    case 'type':
      this.name = 'TypeError';
      this.message = 'your name is not a string'
      break;

    case 'properName': 
      this.name = 'ProperNameError';
      this.message = 'your name looks like a generic word'
      break;

    default: 
      this.name = 'GeneralError';
      this.message = 'no specific error information provided';
  }  
}

var greet = function( name ) {

  if( typeof name !== 'string' || ( name.match(/[^a-zA-Z]/gi) || [] ).length > 0 ) {
    throw new Exception(name, 'type');
  } else if( name.slice(0,1) !== name.slice(0,1).toUpperCase() ) {
    throw new Exception();
  }
  
  return 'Hello, ' + name;
}

try {
  document.writeln( greet( 'Name' ) );
  document.writeln( greet( '2gg' ) );
} catch(e) {
  console.log(e.name + ': ' + e.message + '; value: ' + e.value);
}

document.writeln('</pre>');