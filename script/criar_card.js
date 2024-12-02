function criarCards() {
    const cardContainer = document.getElementById('card-container');
    pontosTuristicos.forEach(ponto => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = ponto.imagem;
        img.alt = ponto.nome;
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const titulo = document.createElement('h3');
        titulo.textContent = ponto.nome;

        const descricao = document.createElement('p');
        descricao.textContent = ponto.descricao;

        const link = document.createElement('a');
        link.href = ponto.link;
        link.classList.add('button');
        link.textContent = 'Visite-nos';

        cardContent.appendChild(titulo);
        cardContent.appendChild(descricao);
        cardContent.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardContent);
        cardContainer.appendChild(card);
    });
}

function criarCardsPraias() {
    const cardContainer = document.getElementById('card-container-praia');
    pontosPraias.forEach(ponto => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = ponto.imagem;
        img.alt = ponto.nome;
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const titulo = document.createElement('h3');
        titulo.textContent = ponto.nome;

        const descricao = document.createElement('p');
        descricao.textContent = ponto.descricao;

        const link = document.createElement('a');
        link.href = ponto.link;
        link.classList.add('button');
        link.textContent = 'Visite-nos';

        cardContent.appendChild(titulo);
        cardContent.appendChild(descricao);
        cardContent.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardContent);
        cardContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", criarCardsPraias);


function buscar() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        let titulo = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = titulo.includes(input) ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", criarCards);

