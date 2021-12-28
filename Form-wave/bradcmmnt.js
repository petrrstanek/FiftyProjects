const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText //* vytáhnutí jednotlivých písmen
        
    .split('') //* vložení a rozdělění jednolivých písmenek do pole
        
        //* funkce která z pole vytvoří nové pole
        //* je to pole takže index začíná na 0
        //* letter jsou jednolivá písmenka rozvržená v poli
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        
        .join('')//* z pole vytvoří string už z jednolivými přidanými spany
})