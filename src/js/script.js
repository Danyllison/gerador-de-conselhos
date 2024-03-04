const texto = document.getElementById('conselho')
const numeroDoConselho = document.getElementById('numero-do-conselho')
const botao = document.getElementById('botao')

async function gerarConselho(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()
    
    const conselhoId =  json.slip.id
    const numero = `conselho #${conselhoId}`;
    numeroDoConselho.innerHTML = numero;
    
    const conselhoTexto = json.slip.advice
    texto.innerHTML = conselhoTexto;
}

botao.addEventListener('click', function() {
    gerarConselho()
})

gerarConselho()
