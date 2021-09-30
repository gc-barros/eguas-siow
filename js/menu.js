let menuMobile = document.querySelector(".menu");
let efervCult = document.getElementById('eferv-cult');
let subMenu = document.querySelector('.submenu');

// Fecha o menu
function closeMenu(menu){
    menu.style.display = 'none';
}

// Abre e fecha o menu hamburguer da versão mobile
function clickMenuMobile(){
        if (menuMobile.style.display == 'flex') {
            closeMenu(menuMobile);
        } else {
            menuMobile.style.display = 'flex';
        }
}

// Abre e fecha o submenu de "Efervescencia Cultural"
efervCult.addEventListener('click', function () {
    if(subMenu.style.display == 'block') {
        closeMenu(subMenu);
        // Remove a barra fixa embaixo do nome
        document.querySelector('#eferv-cult').classList.remove('active');
    } else {
        subMenu.style.display = 'block';
        // Adiciona a barra fixa embaixo do nome
        document.querySelector('#eferv-cult').classList.add('active');
    }
});

// Fecha o submenu ao clicar fora
document.addEventListener("click", (evt) => {
    let targetElement = evt.target;

    if (targetElement != efervCult && targetElement != subMenu) {
        closeMenu(subMenu);
    }
});
