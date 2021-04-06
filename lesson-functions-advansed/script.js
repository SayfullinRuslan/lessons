const sum = function (...args) {
    var sum = 0;
     for (i=0; i<args.length; i++) {
      sum += args[i];
     }
     return sum;
}

console.log(sum(1,2,3,4,5))


const sum1 = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(sum1(1,2,3,4,5))


const sum2 = function (a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum2(1)(2))