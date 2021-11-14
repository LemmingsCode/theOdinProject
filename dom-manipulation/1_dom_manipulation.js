const container = document.querySelector('#container');

// create div class
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// create red text
const redText = document.createElement('p')
redText.classList.add('redText');
redText.style.color = 'red';
redText.textContent = 'Hey I\'m red!';
container.appendChild(redText);

// create blue text
const blueText = document.createElement('h3')
blueText.classList.add('blueText');
blueText.style.color = 'blue';
blueText.textContent = 'Hey I\'m blue!';
container.appendChild(blueText);


// Create 2 elements to put inside the divBlackPink
const divHeader = document.createElement('h1')
divHeader.classList.add('divHeader');
divHeader.textContent = 'Hey I\'m in a div!';

const divParagraph = document.createElement('p')
divParagraph.classList.add('divParagraph');
divParagraph.textContent = 'ME TOO!';

const divBlackPink = document.createElement('div');
divBlackPink.classList.add('divBlackPink');
divBlackPink.style.border = "thick solid black";
divBlackPink.style.background = "pink";

divBlackPink.append(divHeader);
divBlackPink.append(divParagraph);
container.appendChild(divBlackPink);