function carregarContatos() {
    const tabela = document.getElementById("tabela-contatos");
    tabela.innerHTML = "";

    const lista = JSON.parse(localStorage.getItem("contatos")) || [];

    lista.forEach(c => {
        const linha = `
            <tr>
                <td>${c.nome}</td>
                <td>${c.email}</td>
                <td>${c.assunto}</td>
                <td>${c.mensagem}</td>
            </tr>
        `;
        tabela.innerHTML += linha;
    });
}

function limparTudo() {
    if (confirm("Tem certeza que deseja apagar todos os contatos?")) {
        localStorage.removeItem("contatos");
        carregarContatos();
    }
}

carregarContatos();
