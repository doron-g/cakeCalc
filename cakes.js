document.getElementById("cakeMe").addEventListener("click", calcCake);

function calcCake(){
    alert ("hksfdj");
}



const size = document.getElementById('size').value
const height = document.getElementById('height').value
const amount = document.getElementById('amount').value

const newSize = document.getElementById('newSize').value
const newHeight = document.getElementById('newHeight').value
const newAmount = document.getElementById('newAmount').value

const cakes  = size * height * Math.PI * amount
const newCakes = newSize * newHeight * Math.PI * newAmount

const ratio = cakes / newCakes

