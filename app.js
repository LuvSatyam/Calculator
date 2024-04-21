let screen=document.querySelector(".screen");
let btns=document.querySelectorAll(".btn");

for(let btn of btns){
    btn.addEventListener("click",()=>{
        console.log("clicked");
    })
}






let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    console.log("clicked");
    btn.innertext;
})
const queue = [];
function fetch(params) {
    console.log(params);
    queue.push(params)
}

function sum() {
    const num1 = queue[0];
    const num2 = queue[1];
    const sum = num1+num2;
    console.log(sum);
}