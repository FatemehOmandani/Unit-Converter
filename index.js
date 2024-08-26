/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEL = document.getElementById("input-el")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const refreshBtn = document.getElementById("refresh-btn")
refreshBtn.addEventListener("click" , function(){
    emptyTheFields()
})


convertBtn.addEventListener("click" , function(){
    const input = inputEL.value.trim();


    if (input === "" || isNaN(input) ) {
        emptyTheFields();
        return;
    }

    lengthEl.textContent = input + " meters = " +  meterToFeet(input) + " feet "+ " | " + 
                           input + " feet = " + feetToMeter(input) + " meters "

    volumeEl.textContent = input + " liters = " +  literTogallon(input) + " gallons "+ " | " + 
                           input + " gallons = " + gallonToliter(input) + " liters "
    
    massEl.textContent = input + " kilos = " +  kiloToPound(input) + " pounds "+ " | " + 
                           input + " pounds = " + poundToKilo(input) + " kilos "
                       


})


function emptyTheFields(){
        inputEL.value = "";
        lengthEl.textContent = "";
        volumeEl.textContent = "";
        massEl.textContent = "";
}



function meterToFeet(num){
    return (num * 3.281).toFixed(3)
}
function literTogallon(num){
    return (num * 0.264).toFixed(3)
}
function kiloToPound(num){
    return (num * 2.208).toFixed(3)
}


function feetToMeter(num){
    return (num /3.281).toFixed(3)
}
function gallonToliter(num){
    return (num / 0.264).toFixed(3)
}
function poundToKilo(num){
    return (num / 2.208).toFixed(3)
}