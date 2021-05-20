const checkYuGiOh = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      //Condition to check for array items that are multiples of 2, 3 and 5
      arr.push("yu-gi-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      //Condition to check for array items that are multiples of 3 and 5
      arr.push("gi-oh");
    } else if (i % 2 === 0 && i % 5 === 0) {
      //Condition to check for array items that are multiples of 2 and 5
      arr.push("yu-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      //Condition to check for array items that are multiples of 2 and 3
      arr.push("yu-gi");
    } else if (i % 5 === 0) {
      //Condition to check for array items that are multiples of 5 only
      arr.push("oh");
    } else if (i % 3 === 0) {
      //Condition to check for array items that are multiples of 3 only
      arr.push("gi");
    } else if (i % 2 === 0) {
      //Condition to check for array items that are multiples of 2 only
      arr.push("yu");
    } else {
      arr.push(i);
    }
  }

  //Conditional statement to check if the argument is of data type number
  if (typeof n === "number") {
    return arr;
  } else {
    console.log(`Invalid parameter: ${n}.`);
  }
};
//Test Cases
console.log(checkYuGiOh(5));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(30));
console.log(checkYuGiOh("'fizzbuzz is meh'"));
