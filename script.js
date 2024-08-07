let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
console.log(boxes)

let turnO=true; //playerX, playerO
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame=()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});


const disabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }

}

const enabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }

}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}
const checkWinner=()=>{
    for(let pattern of winPattern){
       let position1val = boxes[pattern[0]].innerText;
       let position2val = boxes[pattern[1]].innerText;
       let position3val = boxes[pattern[2]].innerText;

       if(position1val != "" && position2val != "" && position3val != ""){
        if(position1val===position2val && position2val===position3val){
            console.log(`winner${position1val}`);
            showWinner(position1val);
        }
       }

    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
