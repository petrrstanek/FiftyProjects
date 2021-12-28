const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++ //* KLIKEM PŘIDÁM +JEDNA

    //* POKUD NAKLIKAM TOLIK KOLIK JE POČET STEPU - KROUŽKŮ
    if(currentActive > circles.length) {
        currentActive = circles.length //* KLIKY SE BUDOU VŽDY ROVNAT POČTU KRUHU TEDY 4 - STOPKA NA 4 NEPUJDE NAKLIKAT VIC
    }

    update() //* FUNKCE KTERÁ PŘIDÁVÁ BARVU DO STEPŮ
})

prev.addEventListener('click', () => {
    currentActive-- //* ODEČÍTÁ KLIKEM -JEDNA

    //* POKUD JE NAKLIKÁNO NA 1 VYKONÁ PŘÍKAZ
    if(currentActive < 1) {
        currentActive = 1 //* POKUD JE NAKLIKANO NA JEDNA BUDE SE ROVNA VŽDY 1 NEPUSTÍ NÍŽE 
    }

    update()
})


//* KLÍČOVÁ FUNKCE 
//* VZÍTÝ ELEMENT CIRCLES PROJEDU VŠECHY KRUHY A ULOŽÍM DO CIRCLE + 2.PROMENNA JE INDEX JEDNOHO KRUHU
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) { //* POKUD JE INDEX NIŽŠNÍ NEŽ MÁM NAKLIKANO PRIDA CLASSU V OSTATNICH PRIPADECH ODDELA
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    
    //* PŘIDÁVÁ PROGRESS-LINE V PROCENTECH -JEDNA ZNAMENÁ ŽE TO VYPOČÍTÁ V MENŠÍCH PROCENTECH
    //* LINE SE PŘIDÁVÁ PODLE PROCENT ZAČINÝ NA 0%
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //* POKUD JE NAKLIKANO NA 1 TAK DISABLED PREV
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) { //* POKUD JE NAKLIKANO TOLIK KOLIK JE KRUHU, TAK NEXT DISABLED
        next.disabled = true
    } else { //* POKUD JE 2,3,4 TAK JSOU TLAČITKA SPUSTENY
        prev.disabled = false
        next.disabled = false
    }
}

//TODO: KDYŽ CHCI VZÍT VÍCE DIVU MUSÍM POUŽÍT FOREACH NA PROJETI VŠECH DIVU NE TO DĚLAT JEDNOTIVĚ