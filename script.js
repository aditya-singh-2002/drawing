// refers to the canvas element with said ID "canvas"
const canvas = document.getElementById('Canvas');

// obtains drawing context from canvas
const ctx = canvas.getContext('2d');

// whether the user is drawing or not
let isDrawing = false;

// initial drawing color
let currentColor = 'black';

// updates color once one is chosen through the custom picker
function updateColor(e) {
    const customColorInput = document.getElementById('customColor');
    currentColor = customColorInput.value;
}

// starts drawing
function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

// draws line when mouse is moved off canvas whilst the button is being held
function drawLine(e) {
    if (isDrawing) {
        ctx.strokeStyle = currentColor;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
}

// stops drawing
function stopDrawing() {
    isDrawing = false;
}

// event listeners which detect actions such as change in color and drawing 
document.getElementById('customColor').addEventListener('change', updateColor);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
