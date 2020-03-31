"use strict";

var inventory = [];

var ferCar = {
    make: "Nissan",
    model: "Maxima",
    price: 25000,
    year: 2014,
    features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    owner: {
        name: "Fernando Mendoza",
        age: 29
    },
    honk: function (){
        alert("Honk!!!");
    },
    computerLog: function(){
        console.log("--- " + this.make + " --- " + this.model + " ---");
    }
};

var douglasCar = {
    make: "Toyota",
    model: "Avalon",
    price: 24000,
    year: 2015
};

// this info came from a form submit
douglasCar.features = ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"];
douglasCar["owner"] = {name: prompt("Who's the owner?"), age: prompt("How old is owner?")};
douglasCar.honk = function(){
    alert("Honk!");
};
douglasCar.computerLog = function(){
    console.log("--- " + this.make + " --- " + this.model + " ---");
};

inventory.push(ferCar);
inventory.push(douglasCar);

inventory.forEach(function(aCar){
    console.log(aCar.make + " " + aCar.model + " cost = $" + aCar.price + " " + aCar.features + " " + aCar.owner.name + " " + aCar.owner.age);
});


// Run tests on the car
inventory.forEach(function(currentCar){
    // Get the computerLog
    currentCar.computerLog();

    // test the honking feature:
    currentCar.honk();
})

// 2nd example
var ferContact = {
    name: "fer mendoza",
    phoneNumber: "3424234252345"
};

var aContact = {
    name: prompt("Name?"),
    phoneNumber: prompt("Number?")
};

var phone = {
    screenSize: 5.1,
    price: 500.99,
    brand: "Apple",
    color: "blue",
    storageSize: 128,
    contacts: [ferContact, aContact],
    call: function(number){
        console.log("calling: " + number);
    }
};

// print the name of the first contact
console.log(phone.contacts[0].name);
console.log(phone.contacts[0].phoneNumber);

// make a call to the second contact
phone.call(phone.contacts[1].phoneNumber);

