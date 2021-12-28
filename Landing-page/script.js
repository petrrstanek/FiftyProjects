const playstation = document.querySelector('.playstation')
const xbox = document.querySelector('.xbox')

xbox.addEventListener('mouseenter', (e) => {
    
        xbox.classList.add('active')
});

xbox.addEventListener('mouseleave', (e) => {
    
    xbox.classList.remove('active')
});

playstation.addEventListener('mouseenter', (e) => {
    
    playstation.classList.add('active')
});

playstation.addEventListener('mouseleave', (e) => {

    playstation.classList.remove('active')
});

//TODO: použití mouseeventu
//TODO: transition se dáva na zdrojový prvek který se hýbě ne do aktivace