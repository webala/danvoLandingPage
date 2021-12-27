//select elements
var toggle_button;
var big_wrapper;
var hamburger_menu;
const main = document.querySelector('main')


let dark = false;

function declare() {
    toggle_button = document.querySelector('.toggle-btn');
    big_wrapper = document.querySelector('.big-wrapper');
    hamburger_menu = document.querySelector('.hamburger-menu')
}
function events() {
    toggle_button.addEventListener('click', toggleAnimation);
    hamburger_menu.addEventListener('click', () => {
        big_wrapper.classList.toggle('active');
    })
}


declare();
events();

function toggleAnimation() {

    dark = !dark;
    //Clone the wrapper
    let clone = big_wrapper.cloneNode(true);

    if (dark) {
        clone.classList.remove('light');
        clone.classList.add('dark');
    } else {
        clone.classList.remove('dark');
        clone.classList.add('light');
    }

    document.body.classList.add('stop-scrolling');
    clone.classList.add('copy');
    main.appendChild(clone)

    clone.addEventListener("animationend", () => {
        document.body.classList.remove('stop-scrolling');
        big_wrapper.remove();
        clone.classList.remove('copy');
        //Reset variables
        declare();
        events();
    }); 
}


