document.getElementById("cakeMe").addEventListener("click", calcCake);
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

const newdiameter = document.getElementById('newdiameter').value
const newlength = document.getElementById('newlength').value
const newwidth = document.getElementById('newwidth').value
const newsquare_edge = document.getElementById('newsquare_edge').value
const newheight = document.getElementById('newheight').value
const newamount = document.getElementById('newamount').value

const round_cake  = diameter/2 * diameter/2 * height * Math.PI * amount
const rectangle_cake = length * width * height * amount
const square_cake = square_edge * square_edge * height * amount
const new_round_cake = newdiameter/2 * newdiameter/2 * newheight * Math.PI * newamount
const new_rectangle_cake = newlength * newwidth * newheight * newamount
const new_square_cake = newsquare_edge * newsquare_edge * newheight * newamount
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





const ratio = newCake / originalCake
 alert (ratio);
}

function changeForma(cakeType){
    originalCakeType = cakeType
    const elems = document.getElementsByClassName("input_elem");
    for(i=0; i<elems.length; i++){
    const elem = elems[i];
     if(elem.classList.contains(cakeType)){
          elem.style.visibility="visible";
        } else {
            elem.style.visibility="hidden";
        }
    }
}

function newchangeForma(cakeType){
    newCakeType = cakeType
    const newelems = document.getElementsByClassName("new_input_elem");
    for(i=0; i<newelems.length; i++){
    const newelem = newelems[i];
     if(newelem.classList.contains(cakeType)){
          newelem.style.visibility="visible";
        } else {
            newelem.style.visibility="hidden";
        }
    }
}


