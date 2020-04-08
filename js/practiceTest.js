
"use strict";

// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });



// "use strict";
//
// var car = {};
// car.make = "Toyota";
// car.model = "Camry";
//
// // create a honk method on the car object
// car.honk = function () {
//     alert("Honk! Honk!");
// };
//
// // honk the horn
// car.honk();



"use strict";
//
// var car = {};
// car.make = "Toyota";
// car.model = "Camry";
// car.color = "blue";
// car.doors = "4 or 5 doors";
//
// // create a logMakeModel method on the car object
// car.logMakeModel = function () {
//     console.log("Car make/model is: " + this.make + " " + this.model);
// };
//
// // log the make/model
// car.logMakeModel();
//
// car.colorDoors = function () {
//     console.log("Car color/ doors is " + this.color + " " + this.doors);
// }
//
// car.colorDoors();


// const tukeyPaper = {
//     title: "The Future of Data Analysis",
//     author: "John W. Tukey",
//     link: "https://projecteuclid.org/euclid.aoms/1177704711",
//     year_published: 1962
// };
//
// var thomasPaper =
//     {
//     title: "A mathematical model of glutathione metabolism",
//     author: "Rachel Thomas",
//     link: "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
//     year_published: 2008
// };
//
//
// // Exercise 87
// // Write a function named getPaperTitle that takes in a object and returns the title property
// function getPaperTitle(obj) {
//     return obj.title;
// }
//
// console.log(getPaperTitle(tukeyPaper.title));

// (function() {
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//
//     var person = {
//         firstName: "Rick",
//         lastName: "Sanchez"
//     };
//
//     var fer = {
//         firstName: "Fer",
//         lastName: "Mendoza"
//     };
//
//     console.log(person.firstName);
//     console.log(person.lastName);
//
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
//
//     person.sayHello = function(){
//         return "Hello from "+ this.firstName +" "+ this.lastName +"!";
//     };
//
//     fer["sayHello"] = function(){
//         return "Hello from "+ this.firstName +" "+ this.lastName +"!";
//     };
//
//     console.log(person.sayHello());
//     console.log(fer.sayHello());
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
//         // array of objects
//     var shoppers = [
//             {name: 'Cameron', amount: 180},
//             {name: 'Ryan', amount: 250},
//             {name: 'George', amount: 320}
//         ];
//
//     shoppers.forEach(function(shopper){
//
//         var discountedPrice = shopper.amount;
//         var discount = 0;
//
//         if(shopper.amount > 200){
//             // get a discount
//             discount = 12;
//             discountedPrice = 0.88 * shopper.amount;
//         }
//
//         console.log("Shopper: " + shopper.name + " amount: $" + shopper.amount + " discount: "+discount+"% $" + discountedPrice);
//
//     });
//
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
//     var books = [
//         {
//             title: "Garfield at Large: His First Book",
//             author: {
//                 firstName: "Jim",
//                 lastName: "Davis"
//             }
//         },
//         {
//             title: "The Hunchback of Notre-Dame",
//             author: {
//                 firstName: "Victor",
//                 lastName: "Hugo"
//             }
//         },
//         {
//             title: "1992 Information Please Sports Almanac",
//             author: {
//                 firstName: "Mike",
//                 lastName: "Meserole"
//             }
//         },
//         {
//             title: "Life is Too Short",
//             author: {
//                 firstName: "Mickey",
//                 lastName: "Rooney"
//             }
//         },
//         {
//             title: "How To Draw Manga",
//             author: {
//                 firstName: "Katy",
//                 lastName: "Coope"
//             }
//         }, {
//             title: "The Cosmic Serpent",
//             author: {
//                 firstName: "Jeremy",
//                 lastName: "Narby"
//             }
//         }
//     ];
//
//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//
//     books.push( createBook("The Salmon of Doubt", "Douglas Adams") );
//     books.push( createBook("Walkaway", "Cory Doctorow") );
//     books.push( createBook("A Brief History of Time", "Stephen Hawking") );
//     books.push( createBook("Harry Potter", "JK Rowling"));
//
//     books.forEach(function(book, index){
//         console.log("Book # " + (index + 1));
//         showBookInfo(book);
//         console.log("---");
//     });
//
//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
//     function createBook(aTitle, authorName){
//         var names = authorName.split(" ");
//         return {
//             title: aTitle,
//             author: {
//                 firstName: names[0],
//                 lastName: names[1]
//             }
//         };
//     }
//
//     function showBookInfo(book){
//         console.log("Title: " + book.title);
//         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
//     }
//
// })();




function remove9s(number) {
    let filteredItems = number.filter(9);
    return filteredItems;
}






//
// var fieldName = 'name'
// var obj = {
//     name: 'js',
//     age: 20
// };
// var value = obj[fieldName];
//
// console.log(value);