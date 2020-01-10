// Get all spans and inputs
const adj1Span = document.getElementById('adj-1-span');
const adj1Input = document.getElementById('adj-1-input');

const noun1Span = document.getElementById('noun-1-span');
const noun1Input = document.getElementById('noun-1-input');

// Get button
const button = document.getElementById('button');

// Create function to set input values inside of spans
const changefunc = () => {
    adj1Span.textContent = adj1Input.value;
    noun1Span.textContent = noun1Input.value;
}

// Add event listener to button that runs above function when button is clicked
button.addEventListener('click', changefunc)
