const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', async function(event) {

    event.preventDefault();

    const email = document.getElementById('emailLogin').value;

    const senha = document.getElementById('senhaLogin').value;

    const mensagem = document.getElementById('mensagemLogin');

    try {

        const resposta = await fetch('SUA_API_LOGIN_AQUI', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({

                email: email,
                senha: senha

            })

        });

        const dados = await resposta.json();

        if(resposta.ok) {

            mensagem.innerHTML = 'Login realizado com sucesso!';

            mensagem.style.color = '#4caf50';

        }

        else {

            mensagem.innerHTML = dados.erro;

            mensagem.style.color = 'red';

        }

    }

    catch(erro) {

        mensagem.innerHTML = 'Erro ao conectar com a API.';

        mensagem.style.color = 'red';

    }

});