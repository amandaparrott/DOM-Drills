

window.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement('div');
    div.className = 'head-container';
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1!');
    h1.className = 'h1';
    h1.appendChild(h1Text);
    div.appendChild(h1);
    document.body.appendChild(div);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2!');
    h2.className = 'h2';
    h2.appendChild(h2Text);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3!');
    h3.className = 'h3';
    h3.appendChild(h3Text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4!');
    h4.className = 'h4';
    h4.appendChild(h4Text);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5!');
    h5.className = 'h5';
    h5.appendChild(h5Text);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6!');
    h6.className = 'h6';    
    h6.appendChild(h6Text);
    div.appendChild(h6);


let colors = [
    '#CCFF1A', 
    '#FF1A66', 
    '#E6331A', 
    '#33FFCC',
    '#66994D', 
    '#B366CC', 
    '#4D8000', 
    '#B33300'
];

function randomColor() {
    let aRandomColor = colors[Math.floor(Math.random()*colors.length)];
    return aRandomColor;
}
h1.addEventListener ('dblclick', function() {
    let aRandomColor = randomColor();
    h1.style.color = aRandomColor; 
}); 

h2.addEventListener ('dblclick', function() {
    let aRandomColor = randomColor();
    h2.style.color = aRandomColor; 
}); 

h3.addEventListener ('dblclick', function() {
    let aRandomColor = randomColor();
    h3.style.color = aRandomColor; 
}); 

h4.addEventListener ('dblclick', function() {
    let aRandomColor = randomColor();
    h4.style.color = aRandomColor; 
}); 

h5.addEventListener ('dblclick', function() {
    let aRandomColor = randomColor();
    h5.style.color = aRandomColor; 
}); 

h6.addEventListener ('dblclick', function() {
    let aRandomColor = randomColor();
    h6.style.color = aRandomColor; 
}); 

let listItem = 0
let ul = document.createElement('ul');


function addListItem() {
    listItem++;
    let newListItem = document.createElement('li');
    newListItem.textContent = 'This is List Item' + listItem;
    removeListItem(newListItem);
    ul.appendChild(newListItem);
    document.body.appendChild(ul);
}

let btn = document.getElementById("button");

btn.addEventListener ('click', function() {
    addListItem();
})
ul.addEventListener ('click', function() {
    let aRandomColor = randomColor();
    ul.style.color = aRandomColor;
});

function removeListItem (element) {
    element.addEventListener('dblclick', function() {
        ul.removeChild(element);
    })
}






//end of container
});