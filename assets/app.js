// const person = 
// {
//     firstName: "Seth",
//     lastName: "Bowman",
//     favColor: "Red"
// };

// console.log(person.firstName);


// console.log(`My first name is ${person.firstName}, my last name is ${person.lastName}, 
// and my favorite color is ${person.favColor}.`);


// let car = 
// {
//     make: "Fiat",
//     model: "500",
//     color: "white",
//     willDrive: function() 
//     {
//         console.log(`${car.make} ${car.model} is now in drive.`); 
//     }
// };

// car.willDrive();


// function Person(firstName, lastName, favoriteColor) 
// {
//     let person = 
//     {
//     firstName: firstName,
//     lastName: lastName,
//     favoriteColor: favoriteColor,
//     codeSome: function() 
//         {
//             console.log(`${this.firstName} can code!`);
//         }        
//     }
//     return person;
// };

// let seth = Person("Seth", "Bowman", "Red");

// seth.codeSome();


// class Person 
// {
// constructor (firstName, lastName, favoriteColor) 
// {
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;   
// }
// details() 
//     {
//         alert(`Your name is ${this.firstName} ${this.lastName} and your favorite color is ${this.favoriteColor}!`);
//     }      
// }

// let seth = new Person("Seth", "Bowman", "Red");

// seth.details();


// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// colors.length // the numer of values in the array (7)

// colors[3] // would access the color 'green' in the array (red would be  0)

// colors.push("burlywood"); // adds a new value to the end of the array

// colors.pop(); // removes the last item in the array

// colors.unshift("burlywood"); // add a value to the front of the array

// colors.shift(); // removes the first value of the array


// for(let i = 0; i < colors.length; i++) 
// {
//     console.log(`${colors[i]} is ${colors[i].length} characters long.`);
// }


// colors.forEach(function (value) 
// {
//     console.log(`${value} is ${value.length} characters long.`);
// });


// =======================================


// Exerise one

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) 
{
    let sum = 0;

    for(let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }
    
    return sum;
}

console.log(arraySum(numbers));


// Exercise two

const book = {};
book.title = "Lord Of The Rings";
book.author = "J.R.R. Tolkien";
book.pages = 1241;
book.readCount = 5;

book.info = function() 
{
    return `${this.title} by ${this.author}, has ${this.pages} pages. I have read this book ${this.readCount} times.`;
}

console.log(book.info());


let animal = 
{
    legCount: 4,
    hasFur: true,
    hasTail: true,
    name: "dog",
};

animal.info = function() 
{
    return `A ${this.name} has ${this.legCount} legs. It is ${this.hasFur} that it has fur and it is ${this.hasTail} that it has a tail. `
}

console.log(animal.info());


// ================================== Practice ==================================


let nums = [1, 2, 3, 4, 5];

function double(num) 
{
    return num * 2;
}

nums.forEach(double);

console.log(nums);

nums.map(double);

let doubledNums = nums.map(double);

console.log(doubledNums);

