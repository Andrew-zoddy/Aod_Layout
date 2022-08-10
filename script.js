

const menu = document.querySelector('.menuBurger');
const menuItems = document.querySelectorAll('.menuItemBurg');
const burger = document.querySelector('.burger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menufixed = document.querySelector('.menu_ul')

function toggleMenu () {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

burger.addEventListener('click' , toggleMenu)

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener('click', toggleMenu);
    }
)

