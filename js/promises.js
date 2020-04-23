"use strict";

console.log('ready');

// let username = 'roshan2021';

// function getUserRecentCommit(username) {
//     let url = `https://api.github.com/users/${username}/events/public`;
//     return fetch(url, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
//         .then(response => response.json()
//             .then(data =>(data[0].created_at)
//                 // console.log(data)(data[0].created_at);
//             )
//         ).catch(error => console.log(error));
// }


function getUserRecentCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
        .then(response => response.json()
            .then(listOfEvents=>{
                for (let event of listOfEvents){
                    if (event.type === 'PushEvent'){
                        return event.created_at;
                    }
                }
            })
        ).catch(error => console.log(error));
}

getUserRecentCommit('roshan2021')
    .then(lastCommitDate => console.log('lastCommitDate', lastCommitDate));

getUserRecentCommit('roshan2021')
    .then(lastCommitDate => document.body.innerHTML = `${lastCommitDate} lastCommitDate`);


//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
const wait = miliseconds => {
    return new Promise((resolved, reject) => {
        setTimeout( () => {
            resolved(miliseconds);
        }, miliseconds);
    });
};

wait(1000).then((ms) => console.log(`You\'ll see this after ${ms/1000} second`));
wait(3000).then((ms) => console.log(`You\'ll see this after ${ms/1000} second`));
wait(4000).then((ms) => console.log(`You\'ll see this after ${ms/1000} second`));
wait(5000).then((ms) => console.log(`You\'ll see this after ${ms/1000} seconds`));
