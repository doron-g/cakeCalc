document.getElementById("cakeMe").addEventListener("click", calcCake);
//document.getElementsByName("formaType").addEventListener("click", changeForma(this))
document.getElementsByClassName("input_elem").hidden = true

function calcCake(){



const diameter = document.getElementById('diameter').value
const length = document.getElementById('length').value
const width = document.getElementById('width').value
const square_edge = document.getElementById('square_edge').value
const height = document.getElementById('height').value
const amount = document.getElementById('amount').value

const newDiameter = document.getElementById('newDiameter').value
const newlength = document.getElementById('newlength').value
const newwidth = document.getElementById('newwidth').value
const newsquare_edge = document.getElementById('newsquare_edge').value
const newHeight = document.getElementById('newHeight').value
const newAmount = document.getElementById('newAmount').value



const cakes  = diameter/2 * diameter/2 * height * Math.PI * amount
const newCakes = newDiameter/2 * newDiameter/2 * newHeight * Math.PI * newAmount

const ratio = newCakes / cakes
 alert (ratio);
}

function changeForma(elem){
    document.getElementsByClassName("input_elem").hidden = true
    if (elem == document.getElementById("round")) {
         document.getElementsByClassName("round").hidden = false
    }
    else if (elem == document.getElementById("square")) {
        //shows square forma
    }
    else  {
        //shows malben forma
    }
}

