// navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarfixed = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset > navbarfixed){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden')
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden')
    }
}

// button  hum
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector("#menu")
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
});

// klik dimanapun
window.addEventListener('click', function(a){
    if (a.target!=hamburger && a.target !=navMenu){
        hamburger.classList.remove('active');
    navMenu.classList.add('hidden');
    }
});

// darkmode
const darkToggle=document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark'
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

// perpindahan
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
      } else {
        darkToggle.checked = false;
      }

