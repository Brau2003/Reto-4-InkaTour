// NAVBAR

const menu = document.querySelector (".menu");
const openMenuBtn = document.querySelector (".open-menu");
const closeMenuBtn = document.querySelector (".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened")
}

openMenuBtn.addEventListener("click", toggleMenu)
closeMenuBtn.addEventListener("click", toggleMenu)

// CALCULADORA DE PRESUPUESTO DE VIAJES

let vacationCalc = document.getElementById('vacationCalc')
     vacationCalc.addEventListener('submit', calcExpenses)

function getValues () {
    let destiny = document.getElementById('destiny').value,
         budget = document.getElementById('budget').value,
         acomodation = document.getElementById('acomodation').value,
         transport = document.getElementById('transport').value,
         food = document.getElementById('food').value;
    
        //  console.log(destiny, budget, acomodation, transport, food)

    return {destiny, budget, acomodation, transport, food }
}

function calcExpenses (e) {
    e.preventDefault ();

    const {destiny, budget, acomodation, transport, food } = getValues();
    
    let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food)
    let balance = budget - expenses

    UI(destiny, budget, balance)
}

function UI(destiny, budget, balance) {
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')

    dataPrint.innerHTML = `
    <div class="container-data row">
        <div class="col s4">
          <h6>${destiny}</h6>
        </div>
        <div class="col s4">
          <h6>${budget}</h6>
        </div>
        <div class="col s4">
          <h6>${balance}</h6>
        </div>
      </div>
    `

    result.appendChild(dataPrint);

    reset ();
}

function reset() {
    document.getElementById('vacationCalc').reset()
}

// EFECTO SCROLL

let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('nav').style.top = '0';
    }
    else{
        document.getElementById('nav').style.top = '-80px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}

// CLOCK

const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const interval = setInterval(() => {

    const local = new Date();
    
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 1000);
