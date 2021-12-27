//select elements
var toggle_button = document.querySelector('.toggle-btn');
var big_wrapper = document.querySelector('.big-wrapper');
const main = document.querySelector('main')


let dark = false;

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
    clone.classList.add('copy')

    main.appendChild(clone)
}

toggle_button.addEventListener('click', toggleAnimation);