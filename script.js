let text = document.getElementById('text');
let leaf = document.getElementById('i7');
let hill1 = document.getElementById('i1');
let hill4 = document.getElementById('i4');
let hill5 = document.getElementById('i5');



window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value *1.5 + 'px';

});