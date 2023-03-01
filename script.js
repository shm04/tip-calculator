const billInput = document.getElementById('bill-input');
const tipInput = document.getElementById('tip-input');
let numberOfPeople = document.getElementById('number-of-people');
const increaseBtn = document.getElementById('increase-btn')
const decreaseBtn = document.getElementById('decrease-btn')
const totalPerPerson = document.getElementById('total-per-person');

let total = 0;
tipInput.addEventListener('input', () => {
    let tipDecimal = Number(tipInput.value) / 100;
    totalPerPerson.textContent = Number(billInput.value) * tipDecimal + Number(billInput.value);
    total = Number(billInput.value) * tipDecimal + Number(billInput.value);
});

let peopleCounter = 1;

increaseBtn.addEventListener('click', () => {
    peopleCounter ++;
    numberOfPeople.textContent = peopleCounter;
    let result = total / peopleCounter;
    totalPerPerson.textContent = result.toFixed(2);
})

decreaseBtn.addEventListener('click', () => {
    peopleCounter --;
    if (peopleCounter < 1) {
        numberOfPeople.textContent = 1;
        peopleCounter = 1;
    } else {
        numberOfPeople.textContent = peopleCounter;
    }
    let result = total / peopleCounter;
    totalPerPerson.textContent = result.toFixed(2);
})




