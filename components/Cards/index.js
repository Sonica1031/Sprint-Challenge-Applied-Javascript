// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let container = document.querySelector('.cards-container');

axios

.get('https://lambda-times-backend.herokuapp.com/articles')
.then ((response) => {

    console.log(response);

createcard = (item) =>{
let cardDiv = document.createElement('div');
let headline = document.createElement('div');
let author = document.createElement('div');
let img = document.createElement('div');
let span = document.createElement('span');

container.appendChild(cardDiv);
container.appendChild(headline);
container.appendChild(author);
container.appendChild(img);
container.appendChild(span);

cardDiv.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
img.classList.add('img-container'); 

cardDiv.textContent = Object.keys(item.data.articles);

let cardArrays = Object.values(item.data.articles[keys]);
console.log (cardArrays);

}

createcard(response);
});