let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg= document.querySelector(".msg");

let turn0 =true;


let winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
];

const resetgame= () => {
    turn0 = true;
    enableBoxs();
    msgcontainer.classList.add('hide');
};


boxs.forEach((box) =>{
    box.addEventListener("click", () =>{
        if ( turn0 ){
            box.innerHTML = "o";
            turn0 = false;
        }
        else
        {
            box.innerHTML = "X";
            turn0 = true ;
        }
        box.disabled = true;
        checkwinner()
    });
});

const disableBoxs =  () => {
     for(let box of boxs){
        box.disabled = true;
     }
};

const enableBoxs =  () => {
    for(let box of boxs){
       box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.style.fontSize ="50px";
    msgcontainer.classList.remove("hide");
    disableBoxs();
  };



const checkwinner= () => {
    for(let pattern of winpattern){
        let pos1val =boxs[pattern[0]].innerText;
        let pos2val =boxs[pattern[1]].innerText;
        let pos3val =boxs[pattern[2]].innerText;
    
         if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
         }
      }
    }
};

newGamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
