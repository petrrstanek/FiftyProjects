const expandedPanel = document.querySelectorAll('.panel');
/*console.log(expandedPanel);*/

//* vzíté všechny .panely co jsou v html prolistuju a uložím do panel
//* ))pozn panel = expandedPanel = .panel - chronologie proměnných - stejný zdroj z HTML jiné názvy použité do funkcí
//** teď je z toho funkce na všechny .panely
expandedPanel.forEach((panel) =>{

  //** všechny panely jsou zpřístupněny funkci... přidám klik který platí na všechny panely s funkcí
  panel.addEventListener('click', (e) => {

        //* toto je ta funkce která může působit na všechny panely díky ))pozn
        //* *DULEZITE* prvni musím najít aktivní panely a odstranit až potom můžu přidat classu (chronologie je dulezita)
      expandedPanel.forEach((panel) =>{
        panel.classList.remove('active');

      })


    //* první jsem oddělal classu teď můžu teprv přidat
    panel.classList.add('active');


  })


})

//TODO: FLEXBOX
//TODO: POKUD CHCI PRACOVAT SE VŠEMI OBJEKTY MUSÍM POUŽÍT FOREACH LOOP
//TODO: URL PRO BACK-G JDE TO I Z HTML ABYCH ŠETŘIL KOD V CSS 
//TODO: EVENTLISTENER NA KLIK
//TODO: CHRONOLOGIE KODU JE VELICE DULEŽITA PSAL JSEM STALE FUNKČNÍ KÓD ALE SE ŠPATNOU CHRONOLOGII, TAK SE TVOŘIL BUG REMOVE / ADD
