let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#reset");

let turnO = true; 

const winningPattern = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],  //vertical
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], //diagonal
    [2, 4, 6]
];

let count = 0;
let checkWinnerForTie=false;
boxes.forEach((box)=>{
    box.addEventListener("click", (e)=>{
        count++;
        console.log(count); 
        if(turnO === true){
            box.innerText="O"; 
            turnO = false;
            box.disabled=true;
        }else{
            box.innerText="X";
            turnO = true;
            box.disabled=true;
        }
        checkWinner();
        if(checkWinnerForTie===false && count===9){
            let panel = document.querySelector("#p3");
            panel.innerText=`Match Tie`
        }
    })
});

const checkWinner = () =>  {
    for (let pattern of winningPattern)
    {
       let box0InnerValue = boxes[pattern[0]].innerText;
       let box1InnerValue = boxes[pattern[1]].innerText;
       let box2InnerValue = boxes[pattern[2]].innerText;

       if((box0InnerValue===box1InnerValue && box1InnerValue===box2InnerValue && box0InnerValue===box2InnerValue) && (box0InnerValue!="" &&  box1InnerValue!="" && box2InnerValue!="")){

        let panel = document.querySelector("#p3");
        panel.innerText=`Winner is ${box0InnerValue[0]}`

        for (let box of boxes){
            box.disabled =true;
        }
        checkWinnerForTie =  true;
       }
   }
};

boxes.forEach((box)=>{
    resetBtn.addEventListener("click", ()=>{
        console.log("Reset");

       box.innerText="";
       let panel = document.querySelector("#p3");
       panel.innerText=`Waiting for winner`

       count = 0;

       for (let box of boxes){
        box.disabled =false;
    } 
    })
});