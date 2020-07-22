document.getElementById("cakeMe").addEventListener("click", calcCake);

function calcCake(){

const size = document.getElementById('size').value
const height = document.getElementById('height').value
const amount = document.getElementById('amount').value

const newSize = document.getElementById('newSize').value
const newHeight = document.getElementById('newHeight').value
const newAmount = document.getElementById('newAmount').value

const cakes  = size/2 * height * Math.PI * amount
const newCakes = newSize/2 * newHeight * Math.PI * newAmount

const ratio = newCakes / cakes
 alert (ratio);
}