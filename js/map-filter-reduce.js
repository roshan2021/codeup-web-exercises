
"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const languages = users.filter(user => user.languages.length >= 3);
console.log(languages);


// 3. Use .map to create an array of strings where each element is a user's email address
const emails = users.map(user => user.email);
console.log(emails);


// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//Finding the AVERAGE of all Users Experience
const totalYearsOfExp = users.reduce((totalYears, user) => totalYears + user.yearsOfExperience , 0);
console.log('Total years of exp', totalYearsOfExp);
console.log('Average years of exp', totalYearsOfExp/users.length);

// const totalYearsOfExperience = users.reduce((total, person) => {
//     console.log('sum of total years of all users experience ', total);
//     return total + person.yearsOfExperience;
// }, 0);
// console.log('Sum of all users experience ',  totalYearsOfExperience);
// const averageOfAllUsersYearsOfExperience = totalYearsOfExperience/users.length;
// console.log('Average years of experience of all users together ', averageOfAllUsersYearsOfExperience);




// 5. Use .reduce to get the longest email from the list of users.
const longestEmail = emails.reduce((email1, email2) => email1.length > email2.length ? email1 : email2);
console.log(longestEmail);
// const longestEmail = emails.reduce((email1, email2) => { return email1.length > email2.length ? email1 : email2 });
//uses return and curly braces, not clean as arrow function ES6 code in line 64
//HINT from stackOverFlow
// var longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });


const longestEmail2 = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, '');

console.log(longestEmail2);


// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//Needs empty string to initialize instead of the number 0.  'strings'
const names = users.reduce((result, person) => {
    return result + person.name + ", ";
}, "");
console.log(names, 'there is a comma at the end of justin, must remove comma');
console.log(names.length, '# characters in the string');
console.log(names.slice(0, 34), ': comma removed by slice method');



const everyone = users.reduce((names, user) => {
    if (names !== '') {
        names += ', ';
    }
    return names + user.name;
}, '');

console.log(everyone);




// BONUS BELOW
// Use .reduce to get the unique list of languages from the list of users.

//Using join.
console.log('Using join instead of reduce.', users.map( user => user.name ).join( ', ' ));

//Using reduce
const allLanguages = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        if(!languages.includes(language)){ // If we don't already have the language
            languages.push(language)       // Add it here.
        }
    });
    return languages;
}, []);

console.log(allLanguages);









