const spanvar = document.getElementById('span');
const inputvar = document.getElementById('adj1');

const spanadjvar = document.getElementById('noun-1-span');
const inputadjvar = document.getElementById('noun-1-input');

const buttonvar = document.getElementById('button');

const changefunc = () => {
    spanvar.textContent = inputvar.value;
    spanadjvar.textContent = inputadjvar.value;
}

buttonvar.addEventListener('click', changefunc)



//const adj1Output = adj1Input.value;


// Add an event listener to your button









// add an event listener to the button


// In the event listen, put all the input.values into the span.textContent elements