// Option-01:Directly Set On The HTML Element
// <button onclick="console.log(65)">Another Button</button>

// Option-02:Add onclick function on the html element
// Important:We will use this
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option-03:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// Option-03:
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// Option-04: 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// Option-04: Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})
// Option-04: Final
// Important: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click',function(){})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})