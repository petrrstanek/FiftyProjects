const charsEmail = document.querySelector('.email').textContent; //*
const labelEmail = document.querySelector('.email');
const charsPw = document.querySelector('.pw').textContent;
const labelPw = document.querySelector('.pw');

//*vytvoření volného místa, kde se bude vše ukládat (span+písmenko)
let spanEmail = '';
let spanPw = '';

//* pomocné proměnné pro načítání hodnoty v cyklu
let counter = 0;
let counter2 = 0;

//* vytvoření jednolivých písmenek v poli a uložení do proměnné
let splitted = charsEmail.split('');
console.log(splitted);
let splittedPw = charsPw.split('');

for (let i = 0; i < splitted.length; i++) {
  counter += 50;
  spanEmail = spanEmail + `<span class='spanEmail' style=transition-delay:${counter}ms>` + splitted[i] + '</span>'; //*jednotlivé písmenka*//
  labelEmail.innerHTML = spanEmail;
  console.log(spanEmail);
}

for (let i = 0; i < splittedPw.length; i++) {
  counter2 += 50;
  spanPw = spanPw + `<span class='spanPw' style=transition-delay:${counter2}ms>` + splittedPw[i] + '</span>'; //*jednotlivé písmenka*//
  labelPw.innerHTML = spanPw;
}

//TODO: DOM tree hiearchy of nodes
//TODO: nebrat element ale pouze text v elementu pomocí innerText nebo textContent
//TODO: CSS advanced selectors +, >, *mezera
//TODO: cubic-bazier = bounce efekt
//TODO: pomocny 0 a pomocny prostor pro uložení stringu jinak by to nefungovalo
//TODO: nepoužtívat zbytečné třídy navíc ale použít zdrojový elemnt (=> form, input, label)
//TODO: starý loop nový loop
/* 
    index = 0;
    splitted.forEach(myFunction);
    function myFunction(letter, index)
    {
        spanEmail = spanEmail + "<spanEmail>" + letter + "</spanEmail>" ;
        labelEmail.innerHTML = spanEmail;
    } */
