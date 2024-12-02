const responses = {
    "O que é saúde mental?": "Saúde mental é um estado de bem-estar em que o indivíduo é capaz de lidar com as tensões normais da vida, trabalhar de maneira produtiva e contribuir para a sua comunidade.",
    "Como lidar com a ansiedade?": "A ansiedade pode ser tratada com técnicas de relaxamento, como respiração profunda, e, em casos mais graves, com acompanhamento psicológico ou médico.",
    "O que é depressão?": "A depressão é um distúrbio de humor caracterizado por sentimentos de tristeza, perda de interesse em atividades, e outros sintomas que afetam o bem-estar do indivíduo.",
    "O que é um transtorno de ansiedade generalizada?": "É uma condição onde uma pessoa sente uma ansiedade excessiva e persistente, mesmo sem razão aparente. Pode afetar o dia a dia e exige tratamento especializado.",
    "Como posso melhorar minha autoestima?": "Focar em pensamentos positivos, praticar a autocompaixão, e se cercar de ambientes e pessoas que promovam o seu bem-estar podem ajudar a melhorar sua autoestima.",
    "O que é terapia cognitivo-comportamental?": "A terapia cognitivo-comportamental (TCC) é uma abordagem que ajuda a identificar e mudar padrões de pensamento e comportamento prejudiciais à saúde mental.",
    "Como posso ajudar alguém com depressão?": "É importante ser compreensivo, ouvir sem julgamentos e incentivar a pessoa a buscar ajuda profissional. Nunca subestime os sintomas.",
    "O que são ataques de pânico?": "Ataques de pânico são episódios de medo intenso e repentino, com sintomas físicos como falta de ar, aumento da frequência cardíaca e sensação de morte iminente.",
    "Como a meditação pode ajudar na saúde mental?": "A meditação pode ajudar a reduzir o estresse, melhorar o foco e promover o equilíbrio emocional ao treinar a mente para ficar mais presente no momento.",
    "O que são distúrbios alimentares?": "Distúrbios alimentares incluem condições como anorexia, bulimia e compulsão alimentar, onde o comportamento relacionado à alimentação é distorcido e afeta a saúde mental e física.",
    "O que é saúde mental?": "Saúde mental é um estado de bem-estar em que o indivíduo é capaz de lidar com as tensões normais da vida, trabalhar de maneira produtiva e contribuir para a sua comunidade.",
  "Quais são os sinais de um problema de saúde mental?": "Os sinais incluem mudanças no humor, comportamento ou no funcionamento diário, como tristeza excessiva, medo, preocupações constantes, dificuldade de concentração, e alterações no sono ou apetite.",
  "O que causa problemas de saúde mental?": "Problemas de saúde mental podem ser causados por uma combinação de fatores genéticos, biológicos, ambientais e psicológicos, incluindo estresse, traumas, predisposição genética e desequilíbrios químicos no cérebro.",
  "O que fazer quando alguém tem um problema de saúde mental?": "É importante procurar ajuda profissional, como psicólogos, psiquiatras ou outros especialistas em saúde mental. Oferecer apoio emocional, ser compreensivo e ajudar a pessoa a buscar tratamento é essencial.",
  "Como melhorar a saúde mental?": "Praticar atividades físicas, manter uma alimentação equilibrada, ter uma boa rotina de sono, gerenciar o estresse, estabelecer relações sociais saudáveis e procurar apoio profissional quando necessário.",
  "Quais são os tipos de transtornos mentais?": "Existem vários tipos de transtornos mentais, incluindo depressão, ansiedade, transtornos de personalidade, transtornos alimentares, transtornos obsessivo-compulsivos (TOC), esquizofrenia, entre outros.",
  "O que é depressão?": "A depressão é um transtorno mental caracterizado por sentimentos persistentes de tristeza, desesperança, perda de interesse nas atividades diárias, alterações no apetite e no sono, e dificuldades de concentração.",
  "O que é ansiedade?": "A ansiedade é uma sensação de apreensão ou preocupação excessiva, muitas vezes sem causa aparente, podendo causar sintomas físicos como aceleração do coração, suor excessivo, tremores e falta de ar.",
  "O que é estresse?": "Estresse é a reação física e emocional do corpo diante de situações desafiadoras ou ameaçadoras. Pode ser causado por fatores externos, como pressão no trabalho, problemas financeiros ou questões familiares.",
  "Como lidar com a ansiedade?": "Técnicas como respiração profunda, meditação, atividade física regular, e a busca de apoio psicológico são fundamentais para ajudar a controlar a ansiedade.",
  "O que é transtorno obsessivo-compulsivo (TOC)?": "O TOC é um transtorno mental caracterizado por obsessões (pensamentos intrusivos e repetitivos) e compulsões (ações repetitivas para tentar reduzir a ansiedade causada pelas obsessões).",
  "O que é esquizofrenia?": "Esquizofrenia é um transtorno psicótico grave que afeta o pensamento, a percepção da realidade, emoções e comportamento, podendo causar alucinações e delírios.",
  "Como saber se tenho transtorno bipolar?": "O transtorno bipolar é caracterizado por mudanças extremas de humor, alternando entre episódios de mania (ou hipomania) e depressão. Consultar um profissional de saúde mental é essencial para um diagnóstico preciso.",
  "O que é transtorno de personalidade borderline?": "É um transtorno caracterizado por instabilidade emocional, relações interpessoais intensas e instáveis, medo de abandono e comportamentos impulsivos.",
  "O que é transtorno de estresse pós-traumático (TEPT)?": "O TEPT ocorre após uma pessoa vivenciar um evento traumático e pode causar flashbacks, pesadelos, medo intenso e evitação de situações associadas ao trauma.",
  "O que é psicose?": "Psicose é um estado mental caracterizado pela perda de contato com a realidade, que pode incluir alucinações, delírios e dificuldade em distinguir o real do irreal.",
  "A saúde mental pode afetar a saúde física?": "Sim, problemas de saúde mental, como depressão e ansiedade, podem impactar o corpo fisicamente, causando fadiga, dores, insônia, problemas digestivos e até doenças cardiovasculares.",
  "Como funciona a terapia cognitivo-comportamental?": "A terapia cognitivo-comportamental (TCC) é uma abordagem terapêutica que ajuda a pessoa a identificar e mudar padrões de pensamento e comportamentos negativos, promovendo melhor controle emocional e mental.",
  "O que é autoconhecimento e como ele ajuda na saúde mental?": "O autoconhecimento é o processo de se entender melhor, reconhecendo suas emoções, pensamentos e comportamentos. Ele pode ajudar a melhorar a saúde mental, aumentando a consciência e o controle sobre os próprios desafios emocionais.",
  "O que é burnout?": "Burnout é um estado de exaustão física, emocional e mental causado por estresse excessivo e prolongado, frequentemente relacionado ao ambiente de trabalho.",
  "O que é saúde mental infantil?": "A saúde mental infantil se refere ao bem-estar emocional e psicológico das crianças, envolvendo sua capacidade de lidar com os desafios do desenvolvimento e estabelecer relações saudáveis com os outros."
    
};

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value.trim();

    if (userMessage === "") return;

    displayMessage(userMessage, "user-message");

    const response = getResponse(userMessage);
    displayMessage(response, "bot-message");

    inputField.value = "";
}

function displayMessage(message, type) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', type);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to bottom
}

function getResponse(userMessage) {
    for (const question in responses) {
        if (userMessage.toLowerCase().includes(question.toLowerCase())) {
            return responses[question];
        }
    }
    return "Desculpe, não entendi a sua pergunta. Pode reformular?";
}
