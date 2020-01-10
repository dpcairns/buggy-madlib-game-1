const adj1Span = document.getElementById('adj-1-span');
const adj1Input = document.getElementById('adj-1-input');

const spanadjvar = document.getElementById('noun-1-span');
const inputadjvar = document.getElementById('noun-1-input');

const buttonvar = document.getElementById('button');

const changefunc = () => {
    adj1Span.textContent = adj1Input.value;
    spanadjvar.textContent = inputadjvar.value;
}

buttonvar.addEventListener('click', changefunc)



//const adj1Output = adj1Input.value;


// Add an event listener to your button









// add an event listener to the button


// In the event listen, put all the input.values into the span.textContent elements