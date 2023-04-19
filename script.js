var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var img = document.getElementById('img')
var price = document.getElementById('price')
var model = document.getElementById('model')
var mark = document.getElementById('mark')
var year = document.getElementById('year')
var transmission = document.getElementById('transmission')
var fuel = document.getElementById('fuel')
var btnfaq1 = document.getElementById('btnfaq1')
var btnfaq2 = document.getElementById('btnfaq2')
var btnfaq3 = document.getElementById('btnfaq3')
var hide1 = document.getElementById('hide1')
var hide2 = document.getElementById('hide2')
var hide3 = document.getElementById('hide3')

btn1.addEventListener ('click', ()=>{
    img.src = ('x1.png')
    model.innerText = 'X1'
    mark.innerText = 'BMW'
    year.innerText = '2020'
    transmission.innerText = 'Automatic'
    fuel.innerText = 'Diesel'
    price.innerText = '$35 / rent per day'
    btn1.style.backgroundColor = `rgb(255, 89, 0)`
    btn1.style.color = `white`
    btn2.style.backgroundColor = `white`
    btn2.style.color = `black`
    btn3.style.backgroundColor = `white`
    btn3.style.color = `black`
    btn4.style.backgroundColor = `white`
    btn4.style.color = `black`
    btn5.style.backgroundColor = `white`
    btn5.style.color = `black`
    btn6.style.backgroundColor = `white`
    btn6.style.color = `black`
})

btn2.addEventListener ('click', ()=>{
    img.src = ('320I.png')
    price.innerText = '$40 / rent per day'
    model.innerText = '320I'
    mark.innerText = 'BMW'
    year.innerText = '2019'
    transmission.innerText = 'Automatic'
    fuel.innerText = 'Gasoline'
    btn1.style.backgroundColor = `white`
    btn1.style.color = `black`
    btn2.style.backgroundColor = `rgb(255, 89, 0)`
    btn2.style.color = `white`
    btn3.style.backgroundColor = `white`
    btn3.style.color = `black`
    btn4.style.backgroundColor = `white`
    btn4.style.color = `black`
    btn5.style.backgroundColor = `white`
    btn5.style.color = `black`
    btn6.style.backgroundColor = `white`
    btn6.style.color = `black`
})

btn3.addEventListener ('click', ()=>{
    img.src = ('a35.png')
    price.innerText = '$40 / rent per day'
    model.innerText = 'A35 AMG'
    mark.innerText = 'Mercedez'
    year.innerText = '2023'
    transmission.innerText = 'Automatic'
    fuel.innerText = 'Gasoline'
    btn1.style.backgroundColor = `white`
    btn1.style.color = `black`
    btn2.style.backgroundColor = `white`
    btn2.style.color = `black`
    btn3.style.backgroundColor = `rgb(255, 89, 0)`
    btn3.style.color = `white`
    btn4.style.backgroundColor = `white`
    btn4.style.color = `black`
    btn5.style.backgroundColor = `white`
    btn5.style.color = `black`
    btn6.style.backgroundColor = `white`
    btn6.style.color = `black`
})

btn4.addEventListener ('click', ()=>{
    img.src = ('gla200.png')
    price.innerText = '$45 / rent per day'
    model.innerText = 'GLA200'
    mark.innerText = 'Mercedez'
    year.innerText = '2021'
    transmission.innerText = 'Automatic'
    fuel.innerText = 'Diesel'
    btn1.style.backgroundColor = `white`
    btn1.style.color = `black`
    btn2.style.backgroundColor = `white`
    btn2.style.color = `black`
    btn3.style.backgroundColor = `white`
    btn3.style.color = `black`
    btn4.style.backgroundColor = `rgb(255, 89, 0)`
    btn4.style.color = `white`
    btn5.style.backgroundColor = `white`
    btn5.style.color = `black`
    btn6.style.backgroundColor = `white`
    btn6.style.color = `black`
})

btn5.addEventListener ('click', ()=>{
    img.src = ('civic.png')
    price.innerText = '$30 / rent per day'
    model.innerText = 'Civic'
    mark.innerText = 'Honda'
    year.innerText = '2022'
    transmission.innerText = 'Manual'
    fuel.innerText = 'Gasoline'
    btn1.style.backgroundColor = `white`
    btn1.style.color = `black`
    btn2.style.backgroundColor = `white`
    btn2.style.color = `black`
    btn3.style.backgroundColor = `white`
    btn3.style.color = `black`
    btn4.style.backgroundColor = `white`
    btn4.style.color = `black`
    btn5.style.backgroundColor = `rgb(255, 89, 0)`
    btn5.style.color = `white`
    btn6.style.backgroundColor = `white`
    btn6.style.color = `black`
})

btn6.addEventListener ('click', ()=>{
    img.src = ('accord.png')
    price.innerText = '$35 / rent per day'
    model.innerText = 'Accord'
    mark.innerText = 'Honda'
    year.innerText = '2023'
    transmission.innerText = 'Automatic'
    fuel.innerText = 'Hibrid'
    btn1.style.backgroundColor = `white`
    btn1.style.color = `black`
    btn2.style.backgroundColor = `white`
    btn2.style.color = `black`
    btn3.style.backgroundColor = `white`
    btn3.style.color = `black`
    btn4.style.backgroundColor = `white`
    btn4.style.color = `black`
    btn5.style.backgroundColor = `white`
    btn5.style.color = `black`
    btn6.style.backgroundColor = `rgb(255, 89, 0)`
    btn6.style.color = `white`
})

btnfaq1.addEventListener ('click', ()=>{
    hide1.style.display = `block`
    hide2.style.display = `none`
    hide3.style.display = `none`
    btnfaq1.style.backgroundColor = `rgb(255, 89, 0)`
    btnfaq1.style.color = `white`
    btnfaq2.style.backgroundColor = `white`
    btnfaq2.style.color = `black`
    btnfaq3.style.backgroundColor = `white`
    btnfaq3.style.color = `black`
})


btnfaq2.addEventListener ('click', ()=>{
    hide1.style.display = `none`
    hide2.style.display = `block`
    hide3.style.display = `none`
    btnfaq2.style.backgroundColor = `rgb(255, 89, 0)`
    btnfaq2.style.color = `white`
    btnfaq1.style.backgroundColor = `white`
    btnfaq1.style.color = `black`
    btnfaq3.style.backgroundColor = `white`
    btnfaq3.style.color = `black`
})


btnfaq3.addEventListener ('click', ()=>{
    hide1.style.display = `none`
    hide2.style.display = `none`
    hide3.style.display = `block`
    btnfaq3.style.backgroundColor = `rgb(255, 89, 0)`
    btnfaq3.style.color = `white`
    btnfaq2.style.backgroundColor = `white`
    btnfaq2.style.color = `black`
    btnfaq1.style.backgroundColor = `white`
    btnfaq1.style.color = `black`
})

const menu = document.querySelector('.menu')
const close1 = document.querySelector('.close')
const nav = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    nav.style.display = `block`
})

close1.addEventListener('click', () => {
    nav.style.display = `none`
})