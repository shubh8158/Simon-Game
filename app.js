let gameSeq=[];
let userSeq=[];
let btns=["green","yellow","red","purple"]

let started=false;
let level=0;

let h3=document.querySelector("h3");
let h4=document.querySelector("h4");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started!");
        started=true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("gameflash")
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}
   

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`); 
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        let score=level;
        h3.innerHTML=`Game Over!Your Score was <b>${level}</b> <br>Press any other Key to Start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
        
    }
}
 
function btnPress(){
     
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    
}



let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    
    level=0;
}