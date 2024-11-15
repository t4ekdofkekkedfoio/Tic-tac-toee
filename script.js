let btn = document.querySelectorAll(".box");
let choice= prompt("Select between X and 0");

const win = [ [0,1,2],[0,3,6],[0,4,8],
[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6], ];

btn.forEach((val) =>{
val.addEventListener("click", () => {
if(choice === "X" || choice === "x"){
    console.log("X");
    console.log(val.innerText = "X");
    choice="O";
}
else{
    console.log("O");
    console.log(val.innerText = "O");
    choice="X";
}
val.disabled = true;
checkwinner();
}
);
}
);

let checkwinner = () => {
for(let num of win){
let pos1=btn[num[0]].innerText;
let pos2=btn[num[1]].innerText;
let pos3=btn[num[2]].innerText;

if(pos1 !='' && pos2 !='' && pos3 !=''){
    if(pos1===pos2 && pos2===pos3){
        console.log("Winner");
    }
}
}
}
