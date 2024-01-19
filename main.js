const headerBtn = document.querySelector('.headerBars');
const mobileNav = document.querySelector('.mobileNav');

let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen){
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.style.display = 'none';
    }
});