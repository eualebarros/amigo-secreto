// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar nomes à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o input
    let nome = input.value.trim(); // Remove espaços em branco

    // Verifica se o nome não está vazio
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens

    // Percorre o array e adiciona os nomes à lista no HTML
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    // Sorteia um nome aleatório do array
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Exibe o resultado na tela
    document.getElementById("resultado").textContent = "Amigo Secreto: " + sorteado;
}
