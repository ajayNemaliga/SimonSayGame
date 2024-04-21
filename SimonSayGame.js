let gameSeq=[];
let userSeq=[];
let btns=['red','yellow','green','purple'];
let highestScore=1;

let started =false;
let level = 0;
let h2=document.querySelector("h2");
let highest=document.querySelector("#highest");

let outer=document.querySelector(".outer");
let start=document.createElement("button");
start.classList.add("button");
outer.append(start);
start.innerText="start";
start.addEventListener("click",function(){
    if(started==false){
        started=true;
        start.innerText="start";
        levelUp();
    }

});
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },400)
};
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },400)
};
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randcolor=btns[randIndx];
    let randBtn=document.querySelector(`#${randcolor}`);
    playaudio();
    gameFlash(randBtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    
};



function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(levelUp,1000);
           if(highestScore<=level)
           highestScore=level;
           highest.innerText=highestScore;
            
        }
    }
    else {
        h2.innerText="game over press agian to start";
        reset();
        
    }
}
function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(this);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}
function playaudio(){
    /* const audio= new Audio("C:/Users/nemal/Downloads/audio for simon say game.wav"); */
    const audio= new Audio("../JavaScript/audioforsimonsaygame.wav");
    audio.play();
}
let allbtn=document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",btnPress);
    btn.addEventListener("click",playaudio);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    start.innerText='Restart';
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    },1000);
}

 