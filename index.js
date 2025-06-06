let alf = [' ABCDEFGHIJKLMNOPQRSTUVWXYZ', '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---',
	   '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
	   '-.--', '--..']

let temp = ''
let resultado = ''

let deCode = (e)=>{
	for (let a = 0; a <= e.length; a++){
		if (e[a] == ' ' || e[a] == undefined){
			for (let b = 1; b < alf.length; b++){
				if (temp == alf[b]) {
					resultado += alf[0][b]
					b = alf.length
					temp = ''
				}
			}
		} else {
			temp += e[a]
		}
	}
	document.getElementById('result').textContent = resultado
	resultado = ''
}

document.getElementById('botao').addEventListener('click', ()=>{
	let mensagem = document.getElementById('msg').value
	deCode(mensagem)
})