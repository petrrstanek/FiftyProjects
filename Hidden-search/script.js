const btn = document.querySelector('.btn');
const fas = document.querySelector('.fas');
const input = document.querySelector('.input')
console.log(fas);



function expandBar() {

    btn.classList.toggle('active')
    fas.classList.toggle('active')
    input.classList.toggle('active')
    input.focus();
    
}

//TODO: POUZE ZÁKLADNÍ ANIMACE + LOGICKE UVAZOVANI NAD PROBLEMEM A VYRESENI PROBLEMU
//TODO: CELOU DOBU JSEM ROZSIROVAL TLACITKO A NEVIDEL INPUT NENAPADLO ME ROZSIRIT INPUT A POSUNOUT TLACITKO
//TODO: 2.VARIANTY BUD TO EVENT LISTERNER NEBO POUZE BUTTON CLICK S FUNKCI
//TODO: INPUT FOCUS - MUŽU ROVNOU PSAT + OUTLINE NONE OSTRANI FOCUSOVY RAMEČEK
//TODO: POSITION REV X ABS - REV MUSÍ MÍT V CELEM DIVU NE V INPUTU ABY SE ABS MOHL ZAROVNAT