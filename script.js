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

// downloading our drawing on the canvas as a png
function downloadCanvasAsPNG() {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Clear the entire canvas by drawing a white rectangle over it
function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// event listeners which detect actions such as change in color and drawing actions
document.getElementById('customColor').addEventListener('change', updateColor);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// download button event
document.getElementById('downloadButton').addEventListener('click', downloadCanvasAsPNG);

// clear button event
document.getElementById('clearButton').addEventListener('click', clearCanvas);
