function showMultiplicationTable(input) {
    for(var i = 1; i <= 10; i++) {
        var answer = input * i;

        console.log(input +  ' x ' + i + ' = ' + answer);
    }
    // return "All done!";  needs console.log to show this statement here
}
// console.log(showMultiplicationTable(7));   needs return statement to clear out undefined in Chrome console
showMultiplicationTable(7);


//This is how you get a random number between 20 and 200
for( var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 180 + 20);

    if(randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    }   else {
        console.log(randomNumber + ' is odd');
    }
}


// 4.
for (var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}


//Example of nesting loops without using the "repeat function"
// for (var outer = 1; outer <= 9; outer++) {
//     // console.log('outer loop');
//     var output = "";
//
//     for (var inner = 1; inner <= outer; inner++) {
//         output += outer;
//     }
//     console.log(output);
// }


// 5.
for ( var i = 100; i >= 5; i -= 5) {
    console.log(i);
}




