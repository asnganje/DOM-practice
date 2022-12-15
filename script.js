let main = document.querySelector('.parent');
let div = document.createElement('div');
div.id = 'myDiv';
div.className = 'ourDiv';
let h2 = document.createElement('h2');
h2.textContent = 'Amazing Work in progress';
div.appendChild(h2);
let text = document.createTextNode('My Simple basic Practice');
div.appendChild(text);
main.appendChild(div);

const menu = document.querySelector('#menu');
let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About us';
menu.appendChild(li);

let jsClasses = document.querySelector('#classes');
jsClasses.classList.add('nafisa');
jsClasses.classList.add('visible');
jsClasses.classList.add('hidden');
jsClasses.classList.remove('hidden');
jsClasses.classList.replace('visible', 'abdul');
jsClasses.classList.toggle('abdul');

  for( let ourClasses of jsClasses.classList) {
    let theClass = document.createElement('p');
    theClass.textContent = ourClasses;
    jsClasses.appendChild(theClass);
  }

let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    alert('I was clicked')
});
