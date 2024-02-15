const weightele = document.getElementById('weight')
const heightele = document.getElementById('height')
const ageele = document.getElementById('age')
const calcbtn = document.querySelector('button')

let image = document.getElementById('image')
let maleimg = document.getElementById('male')
let femaleimg = document.getElementById('female')
let info = document.getElementById('info');



image.addEventListener('click', ((e) => {
    if (e.target.id === 'male') {
        femaleimg.className = ""
        maleimg.classList.toggle('selectedimg')
        mamsg = e.target.classList.value
    }

    else if (e.target.id === 'female') {
        maleimg.className = ""
        femaleimg.classList.toggle('selectedimg')
        femsg = e.target.classList.value
    }

}))

console.log(maleimg.classList.value);
console.log(femaleimg.classList);

let inputgroup = document.querySelectorAll('.input-group')
let formele = document.querySelector('form')

let output = document.getElementById('output')

formele.addEventListener('submit', ((e) => {
    e.preventDefault()
    if (ageele.value !== "" ||
        weightele.value !== "" ||
        heightele.value !== "") {
        calculation(e)
    }

    if (maleimg.className === "" && femaleimg.className === "") {
        alert('Select the gender')
    }

    if (ageele.value === "") {
        seterror(ageele, "Age is required")
    }
    else if (ageele.value < 1 || ageele.value > 100) {
        seterror(ageele, "Invalid age")
    }
    else {
        setsucess(ageele)
    }
    if (weightele.value === "") {
        seterror(weightele, "Enter your weight")
    }
    else {
        setsucess(weightele)
    }
    if (heightele.value === "") {
        seterror(heightele, "Enter your height")
    }
    else {
        setsucess(heightele)
    }

}))

let message = document.getElementById('message');

function calculation(e) {
    console.log(e.target.previousElementSibling);
    // let a = e.target.parentElement
    // let b = a.querySelector('img')
    // console.log(b.classList !== '', b.id, b.id === 'female');
    // console.log(b.classList);
    // if (b.classList !== '', b.id === 'male') {
    //     info.innerText = `${weightele.value}Kg | ${heightele.value}Cm | Male | ${ageele.value}yr old `
    // }
    // else if (b.classList !== '', b.id === 'female') {
    //     info.innerText = `${weightele.value}Kg | ${heightele.value}Cm | Female | ${ageele.value}yr old `
    // }

    cm = Number(heightele.value) / 100 * Number(heightele.value) / 100
    cal = Number(weightele.value) / cm
    let res = cal.toString().slice(0, 4)

    output.innerText = res


    if (res < 18.5) {
        message.innerText = "Your'e Underweight"
    }
    else if (res > 24.9) {
        message.innerText = "Your'e Overweight"
    }
    else if (res > 18.5 && res < 24.9) {
        message.innerText = "Healthy Weight"
    }
}

function seterror(element, message) {
    let input = element.parentElement
    let errorele = input.querySelector('.errored')
    errorele.innerText = message

    element.classList.add('error')
    input.classList.add('error')
    input.classList.remove('success')
    element.classList.remove('success')
}

function setsucess(element) {
    let input = element.parentElement
    let errorele = input.querySelector('.errored')

    errorele.innerText = ""
    element.classList.remove('error')
    element.classList.add('success')
}
