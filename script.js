

document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement('div');
    div.className = 'head-container'
    let h1 = document.createElement('h1');
    let text = document.createTextNode('This is an h1');
    h1.appendChild(text);
    div.appendChild(h1);
    document.body.appendChild(div);
});