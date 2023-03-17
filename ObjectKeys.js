/*
Verify if the a value is present in an Object as a Key
*/

var man = { name: "livio", surname: "setaro", height: 1.9 };
var string = "height";

function isThisStringAmongMyObjectKeys(string, object) {
  //Here I convert my Object Keys in an Array in an Array called newX
  var newX = Object.keys(object);

  console.log(newX);

  //Here I check if my value is equal to any of the Array element
  for (i = 0; i < newX.length; i++) {
    if (string == newX[i]) {
      return "The String is the Key at the position: " + i + " of the Object";
    }
  }
  return "The value of the String isn't equal to any of the Object Keys";
}

console.log(isThisStringAmongMyObjectKeys(string, man));

/*
Now we verify if the value is present in the  Object as a Value
*/

var man2 = { name: "armando", surname: "picchi", height: 1.7 };
var string2 = 1.7;

function isThisStringAmongMyObjectValues(string2, object2) {
  //Here I convert my  Object Values in an Array called newY
  var newY = Object.values(object2);
  console.log(newY);

  //Here I check if my value is equal to any of the Array element
  for (z = 0; z < newY.length; z++) {
    if (string2 == newY[z]) {
      return "The value is the Value at the position: " + z + " of the  Object";
    }
  }
  return "The value of the String isn't equal to any of the Object Values";
}

console.log(isThisStringAmongMyObjectValues(string2, man2));
