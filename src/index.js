import loadHomepage from "./homepage";
import loadMenu from "./menu";
import loadAboutPage from "./about";

const reset = () => {
    const header = document.querySelector('header')
    const headerBtns = header.querySelectorAll('button')
    headerBtns.forEach((btn) => {
        btn.classList.remove('active')
    })
};

(() => {
    const homeBtn = document.querySelector('#homeBtn')
    const menuBtn = document.querySelector('#menuBtn')
    const aboutBtn = document.querySelector('#aboutBtn')

    document.addEventListener('DOMContentLoaded', () => {
      homeBtn.classList.add('active')
      loadHomepage()  
    })

    homeBtn.addEventListener('click', (e) => {
        reset()
        e.target.classList.add('active')
        loadHomepage()
    })

    menuBtn.addEventListener('click', (e) => {
        reset()
        e.target.classList.add('active')
        loadMenu()
    })

    aboutBtn.addEventListener('click', (e) => {
        reset()
        e.target.classList.add('active')
        loadAboutPage()
    })
})();