const tag = document.querySelector('.tag');
const textArea = document.querySelector('.textarea');
const tagsFlex = document.querySelector('.tags-flex');

textArea.focus();
textArea.addEventListener('keyup', updateValue);

function updateValue(e) {
      let inputValues = e.target.value; //* nastav novou hodnotu stisknutého písmena
      tag.textContent = inputValues; //* ulož stisknuté písmeno do divu TAGS

      const splittedValues = inputValues
            .split(',') //* stiskutné písmena, které jsou oddělené čárkou, ulož do nového pole
            .filter((splitted) => splitted.trim() !== '')
            .map((splitted) => splitted.trim());

      tagsFlex.innerHTML = ''; //* zajistí debug násobení všech tagů => vymazaním tagsflexu
      //* na každý stisk to vše smaže a přidá čistě splitted
      //* základní tag se nesmaže protože je uchycený v jiném elementu
      //! když kliknu enter je jeden cyklus na hodnoty, ale když chci druhy cyklus musí se to celé vynulovat a to zajistí innerHTML

      splittedValues.forEach((splitted) => {
            //* pole projeď a jednotlivé hodnoty z pole ulož do nové proměnné
            const newTag = document.createElement('div'); //* vytvoř nový div
            newTag.classList.add('new-tags'); //* dej mu classu
            newTag.innerText = splitted; //* jednotlivé prvky z pole přidej do nového tagu
            tagsFlex.appendChild(newTag); //* do DIVU vlož nový TAG s hodnotu jedntolivé hodnoty z POLE
      });

      if (inputValues.length === 0) {
            //* pokud není tag, hodí se display none
            tag.style.display = 'none';
            tagsFlex.style.display = 'none';
      } else {
            tag.style.display = 'inline-flex'; //* důležité inline-flex pro oba divy jeden je základní druhý je přidaný
            tagsFlex.style.display = 'inline-flex';
      }

      if (e.code === 'Enter') {
            setTimeout(() => {
                  e.target.value = ''; //! vymaže mezeru <br>, kterou dělá ENTER => prevent default nefungoval
            }, 10);
            randomized(); //* pro přehlednost kódu, další akce, tak nová funkce
      }
}

function randomized() {
      const times = 30;
      const interval = setInterval(() => {
            const pickle = pickRandomTag(); //? * ten výsledek je uložený v této funkci => 1 random tag, který uložím do proměnné v jiné funkci
            pickle.classList.toggle('highlight');
      }, 100);

      //* zajistí stopnutí intervalu
      setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => {
                  highlighten();
            }, 100);
      }, times * 100); //* počkej určitou dobu a zastav interval a zvýrazni
}

function pickRandomTag() {
      const newTags = document.querySelectorAll('.new-tags');
      const random = Math.floor(Math.random() * newTags.length);
      return newTags[random]; //? * do funkce uloží výsledek tohoto kódu pro další použití => pickRandomTag() = newTags[random]
}

function highlighten() {
      const pickle = pickRandomTag();
      pickle.classList.add('highlighten');
}

//FIXME://! pointa práce s jednodochými funkcemi, tak, že předávám jednotlivých akcí napříč aplikací pomocí jednotlivých funkcí
//TODO: tagy měli být ve spanu ne milion divů
//TODO: .focus() automaticky při načteni rozkline
//TODO: funkce split() + vymazaní celého obsahu innerHTML
//TODO: cpal jsem vše do jedné funkce,bůh ví jestli to vůbec šlo nějak vytvořit => pomáhat si vícero funkcema, jak pro přehlednost, tak pro funkčnost kódu
//TODO: předání hodnot, místo parametrů
//TODO: zamyslet se co doslova dělá aplikace = buď kliknu a nic se nestane nebo kliknu a volné místo se vymaže (ENTER + innerHTML div)
