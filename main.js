const weightele = document.getElementById('weight')
const heightele = document.getElementById('height')
const ageele = document.getElementById('age')
const calcbtn = document.getElementById('calcbtn')

let errorage = document.getElementById('notvalidage')
let errorweight = document.getElementById('notvalidweight')
let errorheight = document.getElementById('notvalidheight')

let image = document.getElementById('image')
let maleimg = document.getElementById('male')
let femaleimg = document.getElementById('female')

image.addEventListener('click', ((e) => {
    console.log(femaleimg.className === "");
    if (e.target.id === 'male') {
        femaleimg.className = ""
        maleimg.classList.toggle('selectedimg')
        mamsg = e.target.classList.value
        console.log(mamsg);
        return mamsg
    }

    else if (e.target.id === 'female') {
        maleimg.className = ""
        femaleimg.classList.toggle('selectedimg')
        femsg = e.target.classList.value
        console.log(femsg);
        return femsg
    }

}))


calcbtn.addEventListener('click', ((event) => {
    if (maleimg.className === "" && femaleimg.className === "") {
        alert('Select the gender')
    }
    console.log(notvalidage.value);
    console.log(notvalidheight.value);
    console.log(notvalidweight.value);
    notvalidage.value === undefined ? notvalidage.innerText = "Enter Your Age" : notvalidage.innerText = ""
    notvalidheight.value === undefined ? notvalidheight.innerText = "Enter Your Height" : notvalidheight.innerText = ""
    notvalidweight.value === undefined ? notvalidweight.innerText = "Enter Your Weight" : notvalidweight.innerText = ""
}))
