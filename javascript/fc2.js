



function typeWriter(elemento)  {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = "";
	textoArray.forEach((letra,i)=>{
	setTimeout(()=> elemento.innerHTML += letra, 180 * i)
	});
}

const interatividade = document.querySelector('h3');
typeWriter(interatividade);



