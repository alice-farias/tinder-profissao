const questions = [
    {
        question: "Quando você pensa em tecnologia, o que mais te anima?",
        options: [
            { text: "Criar coisas novas e legais, tipo apps ou jogos.", answer: "a", area: "Segurança da Informação", image: "../IMG/ads.jpg" },
            { text: "Ajudar todo mundo a ficar conectado e online.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Organizar a galera e fazer tudo acontecer.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Entender como as coisas funcionam por dentro.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Nada disso parece ser a minha cara.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    {
        question: "No seu tempo livre, o que você mais curte fazer?",
        options: [
            { text: "Inventar e testar novas ideias no computador.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Brincar com gadgets, tipo mexer na internet ou no Wi-Fi.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Planejar rolês ou organizar os planos da turma.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Ficar por dentro de curiosidades e mistérios da ciência e tecnologia.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Prefiro atividades fora da tela, como esporte ou arte.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    // Adicione as outras perguntas aqui de forma semelhante
    {
        question: "Se você fosse ajudar um amigo com algo de tecnologia, o que escolheria?",
        options: [
            { text: "Dar uma força com algo criativo, como fazer um site ou um joguinho.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Ajustar a conexão de internet ou configurar o computador.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Ajudar a organizar um evento ou uma ideia legal.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Explicar como as coisas funcionam, tipo 'por que o computador faz isso?'", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Acho que não sou a pessoa certa para ajudar com tecnologia.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    // Continue adicionando todas as perguntas da mesma forma...
    {
        question: "O que você acha mais divertido?",
        options: [
            { text: "Criar alguma coisa do zero, tipo um app ou um projeto no computador.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Resolver problemas e deixar tudo funcionando, tipo arrumar o Wi-Fi.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Planejar algo grande e fazer todo mundo colaborar.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Descobrir como as coisas realmente funcionam por trás.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Nenhuma dessas opções me parece divertida.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    {
        question: "Como você gosta de trabalhar?",
        options: [
            { text: "De forma criativa, inventando coisas novas.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Resolvo os problemas do jeito que precisa ser feito.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Gosto de coordenar as coisas, tipo organizar a galera.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Prefiro trabalhar sozinho, pensando em como as coisas funcionam.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Prefiro trabalhar em coisas mais práticas, fora da área de tecnologia.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    {
        question: "Qual dessas situações você prefere?",
        options: [
            { text: "Ver uma ideia legal que você teve se tornar realidade.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Quando tudo funciona bem e sem problemas, como o Wi-Fi rápido.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Quando todo mundo trabalha junto e faz as coisas acontecerem.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Quando você entende algo complicado, tipo como as coisas funcionam por dentro.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Nenhuma dessas situações me atrai muito.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    {
        question: "Qual é o seu tipo de conteúdo favorito na internet?",
        options: [
            { text: "Tutoriais de como criar coisas legais, tipo vídeos de programação.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Dicas de como deixar o computador ou a internet mais rápidos.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Conselhos sobre organização e produtividade.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Vídeos sobre curiosidades ou ciência.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Prefiro assistir a coisas sobre outros assuntos, como música ou esportes.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    {
        question: "O que mais te anima em um trabalho?",
        options: [
            { text: "A chance de criar algo novo e deixar minha marca.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Fazer as coisas funcionarem bem e ajudar os outros.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Organizar tudo e garantir que todo mundo faça sua parte.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Entender como as coisas funcionam e por que elas são assim.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Prefiro fazer algo fora do mundo da tecnologia.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    {
        question: "Onde você se vê daqui a cinco anos?",
        options: [
            { text: "Criando projetos legais e inovadores no computador.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Trabalhando para manter tudo conectado e funcionando.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Liderando uma equipe em um grande projeto.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Explorando e entendendo coisas novas na tecnologia.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Fazendo algo totalmente diferente do que essas opções sugerem.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    },
    {
        question: "Se você pudesse escolher um superpoder, qual seria?",
        options: [
            { text: "Criar qualquer coisa que eu imaginar no computador.", answer: "a", area: "Segurança da Informação", image: "seguranca.jpg" },
            { text: "Conectar todas as coisas ao meu redor e fazer tudo funcionar.", answer: "b", area: "Design e Desenvolvimento de Interface (UI/UX)", image: "designer.jpg" },
            { text: "Fazer todo mundo trabalhar junto de maneira perfeita.", answer: "c", area: "Engenharia de Software", image: "engenharia.jpg" },
            { text: "Saber como tudo funciona, desde o menor detalhe.", answer: "d", area: "Tecnologia Emergente e Inovação", image: "tecnologia.jpg" },
            { text: "Fazer coisas incríveis fora do mundo da tecnologia.", answer: "e", area: "Ciência de Dados e Machine Learning", image: "ciencia.jpg" }
        ]
    }
];

let currentQuestionIndex = 0;
let answerTally = { a: 0, b: 0, c: 0, d: 0, e: 0 };

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.querySelector(".question");
    const optionsElement = document.querySelector(".options");
    const resultCard = document.getElementById("result-card");
    const questionCard = document.getElementById("question-card");
    const resultArea = document.getElementById("result-area");
    const resultImage = document.getElementById("result-image");
    const restartButton = document.getElementById("restart");

    function loadQuestion(index) {
        const currentQuestion = questions[index];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach(option => {
            const div = document.createElement("div");
            div.className = "option";
            div.textContent = option.text;
            div.setAttribute("data-answer", option.answer);
            div.addEventListener("click", handleAnswer);
            optionsElement.appendChild(div);
        });
    }

    function handleAnswer(event) {
        const selectedOption = event.target;
        const answer = selectedOption.getAttribute("data-answer");

        answerTally[answer]++;

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResult();
        }
    }

    function showResult() {
        const mostFrequentAnswer = Object.keys(answerTally).reduce((a, b) => answerTally[a] > answerTally[b] ? a : b);

        let result = {
            area: "",
            image: ""
        };

        switch (mostFrequentAnswer) {
            case "a":
                result.area = "Análise e Desenvolvimento de Sistemas";
                result.image = "../IMG/ads.jpg";
                break;
            case "b":
                result.area = "Redes";
                result.image = ".jpg";
                break;
            case "c":
                result.area = "Gestão de TI";
                result.image = "engenharia.jpg";
                break;
            case "d":
                result.area = "Ciências da Computação";
                result.image = "tecnologia.jpg";
                break;
            case "e":
                result.area = "Talvez tecnologia não seja a área certa pra você!";
                result.image = "ciencia.jpg";
                break;
        }

        // Exibe a área de correspondência e a imagem associada
        resultArea.textContent = result.area;
        resultImage.src = `./images/${result.image}`;
        questionCard.classList.add("hidden");
        resultCard.classList.remove("hidden");
    }

    restartButton.addEventListener("click", () => {
        questionCard.classList.remove("hidden");
        resultCard.classList.add("hidden");
        currentQuestionIndex = 0;
        answerTally = { a: 0, b: 0, c: 0, d: 0, e: 0 };
        loadQuestion(currentQuestionIndex);
    });

    loadQuestion(currentQuestionIndex);
});