const menu = document.querySelector('.menu');
const button = document.querySelector('.btn');
const line1 = document.querySelector('.line');
const line2 = document.querySelector('.line2');
const hrefs = document.querySelectorAll('.hrefs');

//* button
button.addEventListener('click', () => {
	menu.classList.toggle('active');
	line1.classList.toggle('active');
	line2.classList.toggle('active');
	hrefs.forEach((href) => {
		href.classList.toggle('active');
	});
});
