const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

var typed = new Typed(".typing", {
	strings: ["Content Writer", "Essayist", "Poet", "Suicide Gatekeeper", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

var typed = new Typed(".typing-2", {
	strings: ["Content Writer", "Essayist", "Poet", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});
sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})



