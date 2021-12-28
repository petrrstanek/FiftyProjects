const buttons = document.querySelectorAll('.btn');
const columns = document.querySelectorAll('.col');
const aws = document.querySelectorAll('.aws');

buttons.forEach((button, bidx) => {
  //* chytím si všechny tlačítka
  button.addEventListener('click', (event) => {
    //* všem tlačítkum dám event
    columns.forEach((cols, cidx) => {
      //* chytnu všechny záložky
      aws.forEach((answers, aidx) => {
        if (bidx === cidx && cidx === aidx) {
          //* porovnám jestli se index tlačítka rovná indexu záložky
          cols.classList.toggle('active');
          answers.classList.toggle('awsactive');
        }
      });
    });
  });
});

//FIXME://! POINTA = forEach, ale šlo to jedním řádkem na parentNode
//TODO: CSS - max width + width - responozivní box
//TODO: argumenty u foreach (index)
//TODO: nemuseli se řešit indexi ani loopy stačilo vzít parentNode a dát mu toggle
//TODO: práce s fontawesome => content ::before ::after + dávat do buttonu
//TODO: správně se podívat na CSS a ideálně kombinovat aktivní třídy v CSS
//TODO: css třídy jsou vzít pouze 1. parent a 2. child (1P..btn 2CH. .fa-times a ne 1CH. .fas)
