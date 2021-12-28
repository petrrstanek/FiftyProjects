//FIXME: //! 1) vytvořit pole podle názvu jednolivých zvuků kvůli názvu jednotlivých tlačítek
//FIXME: //! 2) projet pole a vytvořit tlačítka
//FIXME: //! 3) k jednotlivým tlačítkům vytvořit classu kvůli editaci
//FIXME: //! 4) k jednotlivým tlačítkům přiřadit názvy jednolivých zvuků (proto to pole)
//FIXME: //! 5) všem tlačítkům přidat klik
//FIXME: //! 6) přiřadit všechny tlačítka do dokumentu => musím vytvořit prostor kam to chci přiřadit

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//* projet pole a jednotlivý item uložit do SOUND
sounds.forEach(sound => {

    //* při každém loopu vytvořit tlačítko a uložit ho do btn
    const btn = document.createElement('button');

    //* přiradit classu abych mohl modifikovat tlačítka
    btn.classList.add('btn');

    //* protože názvy zvuků jsou v poli tak je můžu naplnit jednolivými názvy zvuků proměnnou z FOREACH
    btn.innerText = sound;

    //* přidat event click do tlačítka --> když kliknu tak se zvuk nastaví na 0 a zapne se zvuk
    //* takže když kliknu na jiný zvuk tak se zvuk nastaví na 0 a zapne se další zvuk
    btn.addEventListener('click', () =>{
        stopSongs();
        document.getElementById(sound).play();
    })

    //* vezmu tlačítka přiradím je do DIVU-prostoru který jsem si vytvořil v HTML s názvem BUTTONS a přiradím tlačítka BTN
    document.getElementById('buttons').appendChild(btn);
    
});


function stopSongs(){
    sounds.forEach(sound => {
        //* vezmu jednolivý zvuk, protože ho chci stopnout když kliknou na druhý
        const song = document.getElementById(sound)
        
        //* stop funguje tak že ještě musím nastavit čas zvuku na 0
        song.pause()
        song.currentTime = 0;
        
    })
    
}
//TODO: dělal jsem to ručně po jednom, musím nad tím lépe uvažovat a 
//TODO: napsat si postup kterým budu programovat

