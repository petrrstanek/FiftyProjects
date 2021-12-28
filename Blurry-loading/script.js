const loading = document.querySelector('.loading');
const bg = document.querySelector('.background');

//let counter = 0;

//TODO1: NAČÍTÁNÍ PROCENT
//TODO2: OPACITY PROCENT
//TODO3: BLUR EFFECT

//! MŮJ KÓD, POUZE INERVALOVÁ ZBYTEK JE V CSS
//setInterval(() => {
//  if(counter == 100){ //* POKUD SE COUNTER 100 SPLNÍ SE BLOK KODU S CLEAR
//    clearInterval(); //* JESTLIŽE DOSÁHNE COUNTER 100 TAK SE INTERVAL UKONČÍ
//  }else{
//    //TODO: 2. varianta -  counter+=1; */ //* ZKRÁCENÝ ZÁPIS PRO +1
//    counter = counter + 1; //* ZAČÍNÁ OD COUNTER = 0 PŘIČÍTÁ PO ČAS INTERVALU +1ČKY
//    loading.textContent = counter + "%"; //* VLOŽÍ K ČÍSLU KTERÉ SE "NAČÍTÁ" PROCENTO

//}
//}, 20); //* ČAS PO KTERÝ SE INTEVAL VYKONÁVÁ 0 AŽ 100

//! SPRÁVNÝ KÓD, KTERÝ POUŽÍTVÁ PROMĚNNÉ S FUNKCEMI

let counter = 0;

let int = setInterval(blurring, 30); //* SPUSTÍ FUNKCI BLURRING S ZADANÝM INTERVAL 30ms

function blurring() {
      //* OBYČEJNÝ FUNKCE KTERÁ PŘIDÁVÁ +1 DO PROMENNE COUNTER = 0
      counter++;

      /**
       * * KDYŽ JSEM PŘIDAL TENTO BLOK KÓDU TAK JSEM OMEZIL FUNKCI DO HODNOTY 100 PAK SE VYKONA -->
       * * CLEAR A UKONČÍ INTERVAL A TÍM I FUNKCI
       */

      if (counter > 99) {
            clearInterval(int); //* VLOŽÍM INT PROTOŽE TAM JE TEN INTERVAL KTERÝ CHCI UKONČIT
      }

      //* VLOŽÍ DO HTML TEXTU 0% PROMENNOU 0 KTERÁ FUNGUJE VE FUNKCI JAKO ++, TAKŽE 0 AŽ 100%

      //TODO: 2.varianta -  loading.innerText = `${counter}%`  */
      loading.innerText = counter + '%';

      /**
       * * VLOŽÍ DO HTML TEXTU 0% FUNKCI KTERÁ VEZME MOJI PROMENNOU A PRI PODMINCE 0 AŽ 100 UDĚLÁ -->
       * * NAPŘ OPACITY 1 AŽ 0 --> OPACITY NEMÁ UNIT TAKŽE STAČÍ ČÍSLO
       */

      loading.style.opacity = scale(counter, 0, 100, 1, 0);

      //* --.-- ALE PROTOŽE BLUR MÁ UNIT TAK MUSÍM PŘES TEMPLATE STRING KVŮLI PX
      bg.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`; // blur( ${  funkce()  }  )
}

//* https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
/**
 * * FUNKCE Z STACK-OVERFLOW, KTERÁ NAČTE PROMENNOU COUNTER KTERÁ SE NAČÍTÁ +1, -->
 * * TAK PŘÍMO NA NI NAVÁZNĚ MŮŽU NAČÍTAT -->
 * * JINOU HONDOTU NAPŘ PRO STYL OPACITY NEBO BLUR
 */

const scale = (num, in_min, in_max, out_min, out_max) => {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//TODO: ROZDÍLY MEZI T-OUT A S-INTERVAL
//TODO: TEMPLATE STRING PRO UNIT V PX U BLUR !!!
//TODO: ZAJÍMAVÁ FUNKCE PRO DVOJITÉ HLEDÁNÍ ČÍSEL A VYKONÁVÁNÍ NĚJAKÉ FUNKCE
