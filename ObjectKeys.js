/*
Verify if the given string is present in the given
Object as a Key
*/

var spike = { name: "spike", surname: "setaro", height: 1.9 };
var string = "surname";

function whereThisStringIsAmongMyObjectKeys(x) {
  //Here I convert my given Object Keys in an Array
  var newX = Object.keys(x);

  //Here if my given string is equal to any of the Arrays pieces
  for (i = 0; i < newX.length; i++) {
    if (string == newX[i]) {
      return (
        "The Given String is the Key number: " + i + " of the given Object"
      );
    }
  }
  return "The value of the given String isn't equal to any of the given Object Keys";
}

console.log(whereThisStringIsAmongMyObjectKeys(spike));
