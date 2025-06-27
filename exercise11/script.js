// Given 5 boxes. Assign a random color and a random background color to each box using DOM concept

function clr() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}

function bgColor() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}

let boxes = document.querySelectorAll(".box");

boxes.forEach(e => {
    let color = clr();
    let bgcolor = bgColor();
    e.style.color = color;
    e.style.backgroundColor = bgcolor;
});