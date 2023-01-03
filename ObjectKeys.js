/*
Verify if the given string is present in the given
Object as a Key
*/

var spike = { name: "spike", surname: "setaro", height: 1.9 };
var string = "surname";

function isThisStringAmongMyObjectKeys(x) {
  //Here I convert my given Object Keys in an Array in an Array called newX
  var newX = Object.keys(x);

  //Here I check if my given string is equal to any of the Array element
  for (i = 0; i < newX.length; i++) {
    if (string == newX[i]) {
      return (
        "The Given String is the Key at the position: " +
        i +
        " of the given Object"
      );
    }
  }
  return "The value of the given String isn't equal to any of the given Object Keys";
}

console.log(isThisStringAmongMyObjectKeys(spike));

/*
Now we verify if the given string is present in the given
Object as a Value
*/

var armandeiro = { name: "armando", surname: "picchi", height: 1.7 };
var string2 = "picchi";

function isThisStringAmongMyObjectValues(y) {
  //Here I convert my given Object Values in an Array called newY
  var newY = Object.values(y);

  //Here I check if my given string is equal to any of the Array element
  for (z = 0; z < newY.length; z++) {
    if (string2 == newY[z]) {
      return (
        "The Given String is the Value at the position: " +
        z +
        " of the given Object"
      );
    }
  }
  return "The value of the given String isn't equal to any of the given Object Values";
}

console.log(isThisStringAmongMyObjectValues(armandeiro));
