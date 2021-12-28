const boxes = document.querySelectorAll('.box')


//TODO: WINDOW EVENT - NA SCROLL VYVOVLA FUNKCI
window.addEventListener('scroll', checkBoxes)

//TODO: ZAJISTÍ, ABY TAM BYLI PRVNÍ 3, BOX => PROTOŽE JSOU V ROZSAHU (INNERHEIGHT)
checkBoxes()

//TODO: KLASICKÁ FUNKCE KDE SI DEFINUJI ROZSAH OKNA, VELIKOST OKNA NA VÝŠKU(JE TO RESPONZIBILNÍ)
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    //TODO PROLISTUJI NODE LIST FOREACH A ULOŽÍM DO PROMENNE S VLASTNOSTÍ TOP => VEZME TO HORNÍ OKRAJ BOXU
    //TODO: A PROTOŽE JSEM UDĚLAL FOREACH, TAK TO BUDE BRAT HORNI OKRAJ KAŽDÉHO BOXU
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        //TODO: A BUDE SE TO HORNÍ OKRAJ BOXU POROVNÁVAT S VELIKOSTI OKNA, ROZAHEM OKNA TO CO VIDÍM A 
        //TODO: TEHDY AŽ OKRAJ BOXU BUDE MENŠÍ NEŽ ZADANÝ ROZSAH TAK PŘILETÍ BOX NEBO NAOPAK ODLETÍ
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}