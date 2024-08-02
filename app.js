let boxes = document.querySelectorAll(".box");
let resetbt = document.querySelector(".resetbt");
let newbt = document.querySelector(".newbt")
let msgc = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg")
let turnO = true;
const wincond = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () =>{
    turnO = true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgc.classList.add("hide"); 
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation the Winner is ${winner}`
    msgc.classList.remove("hide")
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkWinner = () => {
  for (let pattern of wincond) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
        }
    }
  }
};

newbt.addEventListener("click",resetGame);
resetbt.addEventListener("click",resetGame)