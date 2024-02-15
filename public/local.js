
let score = 0;
let sessionscore = 0;
let level = 1;

if(localStorage.score) {
    score = parseInt(localStorage.score);
} 

document.querySelector(".score-total-data").innerHTML = score;
document.querySelector(".score-session-data").innerHTML = sessionscore;

const webSocketClient = new WebSocket('ws://localhost:8080');
webSocketClient.onopen = () => {
    console.log("Connection to server established.")
}

function clickrClick() {

    score += 1;
    sessionscore += 1;

    document.querySelector(".score-total-data").innerHTML = score;
    document.querySelector(".score-session-data").innerHTML = sessionscore;

    localStorage.score = score;

    webSocketClient.send("Click")
}

