console.log("- JS INICIADO GONZALO SANCHEZ -");

const title = document.getElementById('title');

if(title){
	title.textContent = 'BIENVENIDO A MI PAGINA 2';
}

const btn = document.getElementById('btn-action');

if (btn) {
	btn.addEventListener('click', () => {
		alert('🚀 Botón pulsado correctamente');
	});
}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	if (header) {
		if (window.scrollY > 100) {
			header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
			header.style.color = 'white';
		} else {
			header.style.backgroundColor = 'transparent';
			header.style.color = 'inherit';
		}
	}
});

