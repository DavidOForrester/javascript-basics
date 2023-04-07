const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const p = document.createElement("p");
p.style.color = "red";
p.classList.add("p");
p.textContent = "Hey I'm red!";
container.appendChild(p);

//an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.classList.add("h3");
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);

// a <div> with a black border and pink background color
const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderColor = "black"
div.classList.add("div");

const header = document.createElement("h1");
header.textContent = "I;m in a div"

const meToo = document.createElement("p");
meToo.textContent = "ME TOO!"

div.appendChild(header);
div.appendChild(meToo);
container.appendChild(div);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});