document.writeln('<pre>\n\n============================= Functional Inheritance Pattern ===============================');
document.writeln('====================================================================================');

document.writeln('\n\n&#x1F497; Brushpen function');

function makeFaberCastelBrushpen( color, pens ) {
  pens = pens || 1;

  var producer = 'Faber Castel', brushType = 'nylon';

  var that = {
    color: color || '',
    inkType: 'aquatic',
  };

  var producerName = function() {
        return producer;
      },
      productID = function() {
        return producer.split(' ').map((val) => val.substring(0,1)).join('') + '-' + pens++;
      },
      brushType = function() {
        return brushType;
      },
      fill = function( color ) {
        that.color = color;
      },
      reset = function() {
        that.color = '';
      };


  that.getProductID = productID;
  that.getProducer = producerName;
  that.getBrushType = brushType;
  that.fill = fill;
  that.reset = reset;
  return that;
}

var myBrush = makeFaberCastelBrushpen('red');
document.writeln('Writing in ' + myBrush.color + ' with ' + myBrush.getProducer() + ' brushpen #' + myBrush.getProductID());
document.writeln('Ink type: ' + myBrush.inkType);

var myBrush2 = makeFaberCastelBrushpen('blue', 2);
document.writeln('Writing in ' + myBrush2.color + ' with ' + myBrush2.getProducer() + ' brushpen #' + myBrush2.getProductID());




document.writeln('\n\n&#x1F497; Mammal function');
function mammal(specs) {
  var that = {};

  that.getName = function() {
    return specs.name;
  }
  that.says = function() {
    return specs.saying || '';
  }

  return that;
}

var myDog = mammal({name: 'Cassie', saying: 'cassie-woof'});
document.writeln(myDog.getName() + ' dog woofs ' + myDog.says());


document.writeln('\n\n&#x1F497; Cat function');
function cat(specs) {
  var that = mammal(specs),
      saying = that.says(),
      name = that.getName();
  
  that.getName = function() {
    return saying + ' ' + name + ' ' + saying;
  }

  return that;
}

var myCat = cat({name: 'Jason', saying: 'meeeeeow'});
document.writeln(myCat.getName() + ' cat meows ' + myCat.says());

function alter() {
  var that = {
    says: function() {
      return 'fuck you';
    },
    getName: myCat.getName
  };

  return that.getName(); // if row 76 will contain pointer this. that it can be compromised by this alter() f-n
}

document.writeln(alter());