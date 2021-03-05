// typed js customize

setTimeout(() => {

  document.getElementById('typing').style.display = 'block';

  let typed = new Typed('#typing', {
    strings: ['Hi there <span>&#128075;</span>', "I'm Saidabdulla, web developer from Uzbekistan, Khorezm.", "I like to do amazing web applications.", "I deliver quality and user-friendly applications for your business."],
    typeSpeed: 80,
    backSpeed: 30,
    fadeOut: false,
    loop: true,
    backDelay: 1000,
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html'
  });

    
}, 1100);

// navbar button 

const menu = document.querySelector("svg");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
}


// navbar toggle 

const NavbarBtn = document.querySelector('.mobile_navbar_toggle');
const Navbar = document.querySelector('nav');
const NavbarLayout = document.querySelector('.navbar-layout');

NavbarBtn.addEventListener('click', () => {
  Navbar.classList.toggle('navbar-active');
  NavbarLayout.classList.toggle('navbar-layout-style');
});