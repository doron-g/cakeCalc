document.getElementById("cakeMe").addEventListener("click", calcCake);
document.querySelector('#cakeMe').addEventListener('click', function(event) {
  event.preventDefault();
});

let originalCakeType

let newCakeType



function calcCake(){
let originalCake
let newCake

const diameter = document.getElementById('diameter').value
const length = document.getElementById('length').value
const width = document.getElementById('width').value
const square_edge = document.getElementById('square_edge').value
const height = document.getElementById('height').value
const amount = document.getElementById('amount').value

const newDiameter = document.getElementById('newDiameter').value
const newLength = document.getElementById('newLength').value
const newWidth = document.getElementById('newWidth').value
const newSquare_edge = document.getElementById('newSquare_edge').value
const newHeight = document.getElementById('newHeight').value
const newAmount = document.getElementById('newAmount').value

const round_cake  = diameter/2 * diameter/2 * height * Math.PI * amount
const rectangle_cake = length * width * height * amount
const square_cake = square_edge * square_edge * height * amount
const new_round_cake = newDiameter/2 * newDiameter/2 * newHeight * Math.PI * newAmount
const new_rectangle_cake = newLength * newWidth * newHeight * newAmount
const new_square_cake = newSquare_edge * newSquare_edge * newHeight * newAmount
switch(originalCakeType){
case "circle":
originalCake = round_cake;
break;
case  "square":
originalCake = square_cake;
break;
case "rectangle":
originalCake = rectangle_cake;
break;
}
switch(newCakeType){
 case "circle":
newCake = new_round_cake;
break;
case  "square":
newCake = new_square_cake;
break;
case "rectangle":
newCake = new_rectangle_cake;
break;
}

const ratio = Math.round((newCake / originalCake)*100)/100
 document.getElementById("ratio").innerHTML = "יש להכפיל את הכמות ב" + ratio;
 /*alert (ratio + "הכפילו את הכמות ב");*/

}

function changeForma(cakeType){
    originalCakeType = cakeType
    const elems = document.getElementsByClassName("input_elem");
    for(i=0; i<elems.length; i++){
    const elem = elems[i];
     if(elem.classList.contains(cakeType)){
          elem.style.display="block";
        } else {
            elem.style.display="none";
        }
    }
}

function newChangeForma(cakeType){
    newCakeType = cakeType
    const newElems = document.getElementsByClassName("new_input_elem");
    for(i=0; i<newElems.length; i++){
    const newElem = newElems[i];
     if(newElem.classList.contains(cakeType)){
          newElem.style.display="block";
        } else {
            newElem.style.display="none";
        }
    }
}

/*
$(document).ready(function)(){
    $(".toast").toast()
}*/
