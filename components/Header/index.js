// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

let container = document.querySelector('.header-container');
let headerDiv = document.createElement('div');
let dateSpan = document.createElement('span');
let headerH1 = document.createElement('h1');
let tempSpan = document.createElement('span');

container.appendChild(headerDiv);
container.appendChild(dateSpan);
container.appendChild(headerH1);
container.appendChild(tempSpan);

headerDiv.classList.add('header')
dateSpan.classList.add('date');
tempSpan.classList.add('temp');
headerH1.textContent = 'Lambda Times';
dateSpan.textContent = new Date;
tempSpan.textContent = "98°"

}
Header();