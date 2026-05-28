function corrigirQuiz() {

    let respostas = document.querySelectorAll(
        'input[value="certo"]:checked'
    );

    let pontos = respostas.length;

    let resultado = document.getElementById('resultado');

    if(pontos <= 3) {

        resultado.innerHTML = `

            Você acertou ${pontos}/8<br><br>

            Você ainda está conhecendo Sinatra.

        `;

    }

    else if(pontos <= 6) {

        resultado.innerHTML = `

            Você acertou ${pontos}/8<br><br>

            Você conhece bem Sinatra.

        `;

    }

    else {

        resultado.innerHTML = `

            Você acertou ${pontos}/8<br><br>

            Você é praticamente um membro do Rat Pack.

        `;

    }

}