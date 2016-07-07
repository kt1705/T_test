function getFibonaccieNumber(total){

  var results = [0,1];

//  console.time('Getting Fibonaccie Numbers');
//  console.log("Let's get Fibonacci Numbers ...");

  for ( var i = 0; i < total ;i++){
    if(i>=2){
      results.push(results[i -2 ] + results[i -1 ]);
    }
  }

//  console.log("Fibonacci ["+ total +"] th Number is [" + results[total - 1 ]+ "]");
//  console.log("All number is [" +results +"]");

  return results[total -1];
}

module.exports.getFibonaccieNumber = getFibonaccieNumber;
