let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".reset");
let newgame=document.querySelector(".nwgame");
let msgcon=document.querySelector(".msgcont");
let msg=document.querySelector("msg");


//player x or o

let turnO=true;
//check for winnig patterns 
//multiarrays  2d array 
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="X";
            box.classList.add("box2");
            turnO=true;
        }

        box.disabled=true;
      checkwinner();
    })

});
const checkwinner=()=>{
for(pattern of winpattern){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);   //ie gives arr[i]
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;

      if(pos1 != "" && pos2!="" && pos3!=""){
        if(pos1===pos2&&pos2===pos3){
                 console.log("Winner is",pos1);
                 showwinner(pos1)
                 ;
        }
      }

}
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const showwinner=(pos1)=>{
    msg.innerText=`Congatulations,Winner is ${pos1} `;
    msgcon.classList.remove("hide");
    disablebox();


}

const resetGame=()=>{
    turnO=true;
    enablebox();
    msgcon.classList.add("hide");

};

newgame.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);