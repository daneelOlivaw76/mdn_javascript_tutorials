function doSomethingOldStyle(successCallback, failureCallback) {
  console.log("It is done.");
  // Succeed half of the time.
  if (Math.random() > .5) {
    successCallback("SUCCESS")
  } else {
    failureCallback("FAILURE")
  }
}

var failure = 0;
var success = 0;
function successCallback(result) {
  console.log("It succeeded with " + result + '.');
  success += 1;
}

function failureCallback(error) {
  console.log("It failed with " + error + '.');
  failure += 1;  
}

while ( failure < 10 && success <10) {
doSomethingOldStyle(successCallback, failureCallback);
}

console.log("Number of successes: " + success + '.');
console.log("Number of failures: " + failure + '.');

