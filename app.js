let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".btn");
let btnColors = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", () => {
    if (!started) {
        started = true;
        console.log("The game has started.");
        levelUp();
    }
});

let gameFlash = (btn) => {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
};

let userFlash = (btn) => {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
};

let levelUp = () => {
    level++;
    console.log("Level up!");
    h2.innerText = `Level ${level}`;
    // Random button choose
    let randIdx = Math.floor(Math.random() * btnColors.length);
    let randColor = btnColors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    userSeq = [];
    gameFlash(randBtn);
};

let checkAns = () => {
    let idx = userSeq.length - 1;    
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            console.log("correct");
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function (){
            document.querySelector("body").style.backgroundColor = "#d7f8ff";
        },150);
        reset();
    }
};

let btnPress = (btn) => {
    userFlash(btn);
    // console.log(btn);
    let userColor = btn.classList[1];
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns();
};

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", () => btnPress(btn));
}

let reset = () => {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
};
