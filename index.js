/*
var password = prompt("enter password: ")

function makePassword() {
  var correctPas = "1q2w3e";
  return function () {
    (password === correctPas) ? console.log("true") : console.log("false")
  }
}
var test = makePassword();
test()
*/

// ------------------------------------

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arr() {
  var arr1 = [];
  return function a() {
    var num = getRandomInRange(1, 100);
    if (!arr1.includes(num)) {
      arr1.push(num);
      a()
    } else if (arr1[99]) {
      console.log(arr1);
      return
    } else {
      a()
    }
  }
}

var test = arr();
test()