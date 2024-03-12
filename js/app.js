let button1 = document.getElementById('btn-1');
let button2 = document.getElementById('btn-2');
let copycss = document.getElementById('copycode');
let copybtn = document.getElementById('copy-btn');
let msg = document.getElementById('msg');

let angel = 'to right';


const hexValue = () => {
    let myHexValue = '0123456789abcdef';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexValue[Math.floor(Math.random() * 16)];
    }
    return colors;
};

let rgb1 = '#C09173';
let rgb2 = '#86f8e8';



const handleButton1 = () => {
    rgb1 = hexValue();
    msg.innerText = ' ';
    button1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(${angel} , ${rgb1} , ${rgb2})`;
    copycss.innerHTML = `background-image: linear-gradient(${angel}, ${rgb1} , ${rgb2});`;
}


const handleButton2 = () => {
    rgb2 = hexValue();
    msg.innerText = '';
    button2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(${angel} , ${rgb1} , ${rgb2})`;
    copycss.innerHTML = ` background-image: linear-gradient(${angel}, ${rgb1} , ${rgb2});`;
}


button1.addEventListener('click', handleButton1);
button2.addEventListener('click', handleButton2);

copybtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copycss.innerText);
    msg.innerText = 'copied';
})


