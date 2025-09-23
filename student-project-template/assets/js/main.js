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