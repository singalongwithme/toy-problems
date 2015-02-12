/*
  translates an inputted roman numeral string into integers
*/

var values = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 5000,
  'M': 1000
};

function romanNumeral(input){
  var total = 0;

  for( var i = 0; i < input.length; i++ ){
    var temp, chr = input[i], next = input[i + 1];
    if( i === input.length - 1 ){
      temp = values[chr];
      total += temp;
      return total;
    }

    if( values[chr] < values[next] ){
      temp = values[next] - values[chr];
      i++;
    } else {
      temp = values[chr];
    }
    total += temp;
    if( !next ){
      return total;
    }

  }

  return total;
}