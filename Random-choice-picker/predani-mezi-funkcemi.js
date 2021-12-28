function pickRandomTag() {
  const newTags = document.querySelectorAll('.new-tags');
  const random = Math.floor(Math.random() * newTags.length);
  return newTags[random]; //? * do funkce uloží výsledek tohoto kódu
  //FIXME://!SHORTHAND** return newTag[Math.floor(Math.random() * newTags.length)]
}

function randomized() {
  //? * ten výsledek (return)* předávám do jiné funkce =>* 1 random tag *<=
  //? +
  //? uložím do proměnné a můžu s výsledkem z jiné funkce pracovat v této funkci
  const pickle = pickRandomTag();
  pickle.classList.toggle('highlight');
}
