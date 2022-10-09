
let weightDiv = document.getElementById('wt')
let heightDiv = document.getElementById('ht')
let bmiDiv =document.getElementById('bmi')
let btnDiv = document.getElementById('bmibutton')
function bmiFunction (weight,height) {
  let calc = (weight/height**2)
  return Math.floor(calc)
}
btnDiv.onclick = () =>{
    bmiDiv.innerText = `BMI: ${bmiFunction(Number(weightDiv.value),Number(heightDiv.value))}`
}
