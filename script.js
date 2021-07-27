

//1
let numberArray = [5, 25, 89, 120, 36];
numberArray.push('javascript', 'python');
numberArray.unshift('html', 'css');
console.log(numberArray.length);
numberArray.pop();
numberArray.shift();
console.log(numberArray);



// 2
let arrayFruit = ['fortoxali', 'banani', 'msxali'];
console.log(arrayFruit.length);
arrayFruit.push('vashli', 'ananasi');
arrayFruit.unshift('sazamtro');
console.log(arrayFruit.length);
arrayFruit.splice(2,0, 'mango');
console.log(arrayFruit);
arrayFruit.shift();
arrayFruit.pop();
console.log(arrayFruit.length);


//3
let user = {
    name: 'Aniko',
    surname:'Shaverdashvili',
    age:21
};
Object.keys(user).forEach( (x) => {
    console.log(x);
})


//4
let user = {
    name: 'Aniko',
    surname:'Shaverdashvili',
    age:21
};
Object.values(user).forEach( (y) => {
    console.log(y);
})

//5

let array= [12, 25, 3, 6, 8, 14, 7, 23];

let  result = array.map( (x) => x / 3 );
console.log(result);


//6
let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let numbersonly = (x) => {
    if (typeof (x) === 'number') {
        return x;
    }
}
let numbers = array.filter(numbersonly);
document.write(numbers);

