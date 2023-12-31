let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#reset1");
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnO=true;

let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const resetgame=()=>{
    turno=true;
    enableBtn();
    msgContainer.classList.add("hide");

}
const disableBtn=()=>{
   for(let box of boxes){
    box.disabled=true;
   }
};
const enableBtn=()=>{
    for(let box of boxes){
     box.disabled=false;
     box.innerText="";
    }
 };
const showWinner=(winner)=>{
    msg.innerText= `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};
const checkWinner=()=>{
    for(let pattern of winpatterns){
     let pos1Val1 = boxes[pattern[0]].innerText;
     let pos1Val2 = boxes[pattern[1]].innerText;
     let pos1Val3 = boxes[pattern[2]].innerText; 
     
     if(pos1Val1 !="" && pos1Val2 !="" && pos1Val3 !=""){
        if(pos1Val1===pos1Val2 && pos1Val2===pos1Val3){
            console.log("Winner");
            showWinner(pos1Val1);
        }
     }
    }
};
newbtn.addEventListener(("click"),resetgame);
resetbtn.addEventListener(("click"),resetgame);