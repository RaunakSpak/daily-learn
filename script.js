// DOM (Documents Objects Model) in javascript 

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `Unique value ${idx}`;
    idx++;
}

document.getElementById("demo").innerText = "Raunak vishwakarma";