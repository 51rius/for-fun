let tamTime = 0
// primeiro botão e a ação de clique
const botaoQuant = document.getElementById('btnQuant')
botaoQuant.addEventListener('click', ()=>{
    try {
        tamTime = Number(document.getElementById('quantidade').value) // recebe o número de jogadores
        if (isNaN(tamTime) || !tamTime) throw e // erro caso não seja um número
        //console.log(tamTime) // os console.log comentados são pra melhor análise de fluxo e falhas (caso descomentados)
        document.getElementById('err').textContent = '' // apaga a mensagem de erro se colocar um número
    } catch (e)  {
        document.getElementById('err').textContent = `Erro: a quantidade de jogadores deve ser um número maior que zero.`
    }
})

let manos = []
// segundo botão e a ação de clique
const quemVai = document.getElementById('btnPlayers')
quemVai.addEventListener('click', ()=>{
        try {
            const nome = document.getElementById('players').value.trim() // solução da IA
            if (nome) { manos.push(nome) } else throw e // erro caso seja undefined
            if (manos.includes(nome)) throw f
            // manos.push(document.getElementById('players').value) // coloca no array os nomes dos caba
            //console.log(manos)
            document.getElementById('players').value = '' // apaga o que ta escrito no input
        } catch (e) {
            document.getElementById('err').textContent = `Erro: insira um nome válido`
        } catch (f) {
            document.getElementById('err').textContent = `Erro: jogador já registrado`
        }
})

let time = []
// terceiro botão e a ação de clique
const sort = document.getElementById('sortear')
sort.addEventListener('click', ()=>{
    try {
        if (tamTime > manos.length) throw e // se não tiver nego suficiente pra formar um time, dá erro
        for(let a = 0; a < tamTime; a++){
            let random = Math.floor(Math.random()*manos.length)
            if (!time.includes(manos[random])) { time.push(manos[random]) } else a-- 
        }
    } catch(e) {
        document.getElementById('err').textContent = `Erro: a quantidade de jogadores é insuficiente pra formar um time`
    }
    document.getElementById('output').textContent = time.join(', ')
    time = []
    manos = []
})

// nomes vazios podiam ser adicionados (resolvido)
// a IA recomendou embaralhar o array (shufle) e pegar os N primeiros jogadores
