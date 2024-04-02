const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function(){
    nav.classList.toggle('active');
})