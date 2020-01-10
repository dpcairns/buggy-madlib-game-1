// Get all spans and inputs
const adj1Span = document.getElementById('adj-1-span');
const adj1Input = document.getElementById('adj-1-input');

const name1Span = document.getElementById('name-1-span');
const name1Input = document.getElementById('name-1-input');

const noun1Span = document.getElementById('noun-1-span');
const noun1Input = document.getElementById('noun-1-input');

const noun2Span = document.getElementById('noun-2-span');
const noun2Input = document.getElementById('noun-2-input');

const noun3Span = document.getElementById('noun-3-span');
const noun3Input = document.getElementById('noun-3-input');

const saying1Span = document.getElementById('saying-1-span');
const saying1Input = document.getElementById('saying-1-input');

const verb1Span = document.getElementById('verb-1-span');
const verb1Input = document.getElementById('verb-1-input');

const name2Span = document.getElementById('name-2-span');
const name2Input = document.getElementById('name-2-input');

const storyBox = document.getElementById('results');

// Get button
const button = document.getElementById('button');

// Create function to set input values inside of spans
const changefunc = () => {
    adj1Span.textContent = adj1Input.value;
    name1Span.textContent = name1Input.value;
    noun2Span.textContent = noun2Input.value;
    noun3Span.textContent = noun3Input.value;
    saying1Span.textContent = saying1Input.value;
    verb1Span.textContent = verb1Input.value;
    name2Span.textContent = name2Input.value;  

    storyBox.style.display = "block";
}

// Add event listener to button that runs above function when button is clicked
button.addEventListener('click', changefunc)
