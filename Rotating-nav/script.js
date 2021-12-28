 const openMenu = document.querySelector('.menu');
 const closeMenu = document.querySelector('.close');
 const containerToRotate = document.querySelector('.content');
 const circle = document.querySelector('.circle');
 const navbar = document.querySelector('.navbar');
 const home = document.querySelector('.home');
 const contact = document.querySelector('.contact');
 const about = document.querySelector('.about');

 openMenu.addEventListener('click', () => {
    containerToRotate.classList.add('rotator'); //* otáčí TAM celým obsahem stránky
     circle.classList.add('circleRotator'); //* otáčí TAM menu kolečkem
     navbar.classList.add('showNav');
     
 })
 
 closeMenu.addEventListener('click', () => {
    containerToRotate.classList.remove('rotator'); //* otáčí ZPĚT celým obsahem stránky
     circle.classList.remove('circleRotator'); //* otáčí ZPĚT menu kolečkem
     navbar.classList.remove('showNav');
     
 })

//TODO: PŘEVÁŽNĚ CSS ANIMACE A TRANSFORMY