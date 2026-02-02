function salvarContato() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !assunto || !mensagem) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    const contato = {
        nome,
        email,
        senha,
        assunto,
        mensagem
    };

    let lista = JSON.parse(localStorage.getItem("contatos")) || [];
    lista.push(contato);

    localStorage.setItem("contatos", JSON.stringify(lista));

    alert("Contato salvo com sucesso!");
    window.location.href = "lista-contatos.html";
}
