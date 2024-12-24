const state = {

    view: {
        squares:document.querySelectorAll(".score"),
        enemy:document.querySelector(".enemy"),
        timeLeft:document.querySelector("#time-left"),
        score:document.querySelector("#score"),
     },

    values:{
        timerId: null,
        countDownTimerId:setInterval(countDown, 1000),
        gameVelocity:(1000),
        hitposition: 0,
        result: 0,
        curretTime: 60,
},

actions: {
    timerId:setInterval(randomSquare, 1000),
    countDownTimerId: setInterval(countDown, 1000),
}}

function countDown() {

    state.values.curretTime--;

    state.view.timeLeft.textContent = state.values.curretTime;

    if (state.values.curretTime <=0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.TimerId);
        alert("Game Over! O resultado foi:" + state.values.result);
    }
}

function playSound(audioName) {
    let audio = new Audio('./src/audios/${audioName}.m4a');
    audio.volume = 0.2;
    audio.play();
    
}

function randomSquare() {

    state.view.forEach ((square)  => 
    square.classList.remove("enemy")
)};

let randomNumber = Math.floor(Mathrandom() * 9);
let randomSquare = state.view.squares[randomNumber];
randomSquare.classList.add("enemy");
state.values.hitposition = randomSquare.id;


//function moveEnemy(){
   // state.values.timerId = setInterval(randomSquare, state.gameVelocity);//
//}//

function addListenerHitbox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedonw", () =>{
            if(square.id === state.values.hitposition){
                state.values.result++;
                state.view.score,textContet = state.values.result;
                state.values.hitposition = null;
                playSound("hit");

            }
        });
        
    });
}


function initialize(){
    moveEnemy();
    addListenerHitbox();
}

initialize();

