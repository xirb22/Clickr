
let score = 0;
let sessionscore = 0;
let level = 1;

if(localStorage.score) {
    score = parseInt(localStorage.score);
} 

document.querySelector(".score-total-data").innerHTML = score;
document.querySelector(".score-session-data").innerHTML = sessionscore;


function clickrClick() {

    score += 1;
    sessionscore += 1;

    document.querySelector(".score-total-data").innerHTML = score;
    document.querySelector(".score-session-data").innerHTML = sessionscore;

    localStorage.score = score;
}





// function clicksToScore(n) {

//     let score = 1;
//     let scoreArray = [];

//     for(let i = 1; i <= n; i++) {

//         console.log(i + ": " + score + "; " + score/i);
//         scoreArray[i] = {clicks: i, score: score};

//         score += 1;

//         if(i % 1000000 == 0) {
//             score += 1000000;
//             console.log("Adding 1000000")
//         }
//         else if(i % 100000 == 0) {
//             score += 100000;
//             console.log("Adding 100000")
//         }
//         else if(i % 10000 == 0) {
//             score += 10000;
//             console.log("Adding 10000")
//         }
//         else if(i % 1000 == 0) {
//             score += 1000;
//             console.log("Adding 1000")
//         }
//         else if(i % 100 == 0) {
//             score += 100;
//             console.log("Adding 100")
//         }
//         else if(i % 10 == 0 ) {
//             score += 10;
//             console.log("Adding 10")
//         }

//     }
// }
