//#1: Array Slice
const  foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

function slice_food(foods, x, y) {

    var modifiedFood = foods.slice(x, y);
    console.log(modifiedFood);

}
console.log(slice_food(foods, 1, 4));


//#2: Array Splice

foods.splice(1, 0, "noodles", "icecream");
console.log(foods);

//#3: Filter
function isPrime(numberArray) {
    return numberArray.filter((n) => {
        for (var i = 2; i < (n / 2).toFixed(0); i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    });
}

function isEven(numberArray) {
    return numberArray.filter(n => n % 2 == 0);
}
//#4: Reject
function reject() {}
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
console.log(isPrime(numberArray), isEven(numberArray));

//#5: lamda
function isEvenLamda(numberArray) {
    return numberArray.filter(n => n % 2 == 0);
}
console.log(isEvenLamda([4, 12]));

//#6: Map
function findSquareOfNumbers(myArray) {
    return myArray.map(n => n * 2);
}
const myArray = [11, 34, 20, 5, 53, 16];
console.log(findSquareOfNumbers(myArray));


//#7: Reduce
var arr = [2, 3, 5, 10]

function multiply(arr) {
    return arr.reduce(function(a, b) {
        return a * b;
    }, 1);
}
console.log(multiply(arr));