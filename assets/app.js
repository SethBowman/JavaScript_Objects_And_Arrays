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


class Person 
{
constructor (firstName, lastName, favoriteColor) 
{
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;   
}
details() 
    {
        alert(`Your name is ${this.firstName} ${this.lastName} and your favorite color is ${this.favoriteColor}!`);
    }      
}

let seth = new Person("Seth", "Bowman", "Red");

seth.details();