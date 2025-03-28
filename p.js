// Take four parameters. Multiply the four numbers and then return the result

// Answer
function multiply (a,b,c,d) {
    const total = a * b * c * d;
    console.log(total);
    return total;
}
// const math = multiply(7,18,16,26)




// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// Answer
function isOddOrEven (number){
    if(number %2 ===0){
console.log(number * 2);
    }
    else{
        console.log(number / 2);
    }
    return number;
}
// const numb = isOddOrEven(5);
// const numbs = isOddOrEven(24);




// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// answer
function make_avg(arr) {
    let sum =0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;

    }
    return sum / size;
}
// let numbers = [12, 12,34,556,768,475,67]
// let size = numbers.length
// console.log(size)
// console.log(make_avg(numbers))


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// answer
function odd_even (number){
    if(number % 2 === 1){
     return "Odd"
    }
   else{
    return "Even"
   }
   return number
}
console.log(odd_even(10))
console.log(odd_even(7))