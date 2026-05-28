const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nomeCadastro").value;

    const email = document.getElementById("emailCadastro").value;

    const senha = document.getElementById("senhaCadastro").value;

    const mensagem = document.getElementById("mensagemCadastro");

    if(nome === "" || email === "" || senha === "") {

        mensagem.innerHTML = "Preencha todos os campos.";

        mensagem.style.color = "red";

        return;

    }

    mensagem.innerHTML = "Cadastro realizado com sucesso!";

    mensagem.style.color = "#4caf50";

});