const fotos = [
    {
        lugar: "Mercado Ver-o-Peso",
        url_foto: "tur imagens/fotos_local/Mercado-ferro-Ver-o-Peso-torres-azul-flickr-1024x778.jpg",
        link: "detalhes.html?id=MercadoVerOPeso",
        descricao: "O Mercado Ver-o-Peso é um dos maiores mercados a céu aberto da América Latina, sendo um ponto turístico e cultural de Belém, oferecendo uma grande variedade de produtos regionais.",
    },
    {
        lugar: "Orla de Icoaraci",
        url_foto: "tur imagens/fotos_local/orla-de-icoaraci.jpg",
        link: "detalhes.html?id=OrlaIcoaraci",
        descricao: "A Orla de Icoaraci oferece uma vista panorâmica da Baía do Guajará, com opções de lazer e comércio, sendo um excelente local para caminhadas e passeios à beira-mar.",
    },
    {
        lugar: "Basílica de Nossa Senhora de Nazaré",
        url_foto: "tur imagens/fotos_local/basilica-de-nossa-senhora-de-nazare.jpg",
        link: "detalhes.html?id=BasilicaNossaSenhoraNazare",
        descricao: "A Basílica de Nossa Senhora de Nazaré é um dos principais templos religiosos de Belém e é famosa por abrigar a imagem de Nossa Senhora de Nazaré, venerada durante o Círio de Nazaré.",
    },
    {
        lugar: "Bosque Rodrigues Alves",
        url_foto: "tur imagens/fotos_local/BosqueRodriguesAlves.jpg",
        link: "detalhes.html?id=BosqueRodriguesAlves",
        descricao: "O Bosque Rodrigues Alves é um espaço verde localizado no centro de Belém, oferecendo uma rica diversidade de fauna e flora, além de ser um excelente ponto de lazer para moradores e turistas.",
    },
    {
        lugar: "Casa das Onze Janelas",
        url_foto: "tur imagens/fotos_local/Casa das onze janelas.jpg",
        link: "detalhes.html?id=CasaOnzeJanelas",
        descricao: "A Casa das Onze Janelas é um importante patrimônio histórico e cultural de Belém, conhecida por sua arquitetura colonial e por ser sede de eventos culturais e exposições artísticas.",
    },
    {
        lugar: "Estação das Docas",
        url_foto: "tur imagens/fotos_local/estaçãodasdocas.jpg",
        link: "detalhes.html?id=estacaodasdocas",
        descricao: "A Estação das Docas é um complexo turístico e gastronômico localizado à beira do rio, com bares, restaurantes e lojas, oferecendo uma vista encantadora da Baía do Guajará.",
    },
    {
        lugar: "Mangal das Garças",
        url_foto: "tur imagens/fotos_local/mangal-das-garcas.jpg",
        link: "detalhes.html?id=mangaldasgarcas",
        descricao: "O Mangal das Garças é um parque ecológico de Belém, ideal para quem deseja apreciar a natureza, com um mirante, museu, restaurante e uma grande variedade de aves e flora regional.",
    },
    {
        lugar: "Museu Emílio Goeldi",
        url_foto: "tur imagens/fotos_local/museu-emilio.jpg",
        link: "detalhes.html?id=museuemilio",
        descricao: "O Museu Emílio Goeldi é um importante centro de pesquisa e preservação da biodiversidade amazônica, com um acervo rico sobre a fauna, flora e cultura da região.",
    },
    {
        lugar: "Praça da República",
        url_foto: "tur imagens/fotos_local/praca-da-republica.jpg",
        link: "detalhes.html?id=pracadarepublica",
        descricao: "A Praça da República é um dos principais espaços públicos de Belém, cercada por belos edifícios históricos e sendo palco de diversas manifestações culturais e eventos da cidade.",
    },
    {
        lugar: "Theatro da Paz",
        url_foto: "tur imagens/fotos_local/teatro-da-paz.jpg",
        link: "detalhes.html?id=theatrodapaz",
        descricao: "O Theatro da Paz é um dos mais importantes teatros do Brasil, conhecido por sua arquitetura imponente e por abrigar importantes apresentações culturais e musicais de renome internacional.",
    },
    {
        lugar: "Cidade Velha",
        url_foto: "tur imagens/fotos_local/cidade-velha.jpg",
        link: "detalhes.html?id=cidadevelha",
        descricao: "A Cidade Velha é o bairro mais antigo de Belém, com ruas de paralelepípedos e casarões históricos, representando o início da fundação da cidade e a história colonial da região.",
    },
    {
        lugar: "Círio de Nazaré",
        url_foto: "tur imagens/fotos_local/cirio-de-nazare.jpg",
        link: "detalhes.html?id=ciriodenazare",
        descricao: "O Círio de Nazaré é a maior festa religiosa do Brasil, realizada anualmente em Belém, reunindo milhões de fiéis em uma procissão em homenagem a Nossa Senhora de Nazaré.",
    },
    {
        lugar: "Forte do Presépio",
        url_foto: "tur imagens/fotos_local/forte-do-presepio.jpg",
        link: "detalhes.html?id=fortedopresepio",
        descricao: "É uma das construções mais antigas da cidade, representando o marco da fundação da capital paraense e um importante símbolo da colonização portuguesa.",
    },
    {
        lugar: "Igreja de Santo Alexandre",
        url_foto: "tur imagens/fotos_local/igreja-santo-alexandre.jpg",
        link: "detalhes.html?id=igrejadesantoalexandre",
        descricao: "Um marco da arquitetura barroca em Belém, hoje abriga o Museu de Arte Sacra do Pará, com belíssimas obras e uma rica história religiosa.",
    },
    {
        lugar: "Palacete Bolonha",
        url_foto: "tur imagens/fotos_local/palacete-bolonha.jpg",
        link: "detalhes.html?id=palacetebolonha",
        descricao: "Construído no início do século XX, é uma joia arquitetônica inspirada no estilo art-nouveau, destacando-se como um símbolo do ciclo da borracha em Belém."
    },
    {
        lugar: "Parque Cemitério Nossa Senhora da Soledade",
        url_foto: "tur imagens/fotos_local/cemiterio-soledade.jpg",
        link: "detalhes.html?id=cemiteriosoledade",
        descricao: "Um cemitério histórico de Belém, conhecido por sua arquitetura antiga e importância cultural."
    },
    {
        lugar: "Praia do Cruzeiro",
        url_foto: "tur imagens/fotos_local/praia-do-cruzeiro.jpg",
        link: "detalhes.html?id=praiadocruzeiro",
        descricao: "Uma praia tranquila com vistas deslumbrantes, ideal para quem busca sossego e um cenário encantador.",
    },
    {
        lugar: "Praia do Farol",
        url_foto: "tur imagens/fotos_local/praia-do-farol.jpg",
        link: "detalhes.html?id=praiadofarol",
        descricao: "Uma das mais conhecidas da região. Seu nome vem de um farol histórico situado próximo à orla, que se tornou um marco e ponto de referência."
    },
    {
        lugar: "Praia do Murubira",
        url_foto: "tur imagens/fotos_local/praia-do-murubira.jpg",
        link: "detalhes.html?id=praiadomurubira",
        descricao: "Uma das praias mais movimentadas de Mosqueiro, conhecida por suas águas salobras e restaurantes locais."
    },
    {
        lugar: "Praia do Chapéu Virado",
        url_foto: "tur imagens/fotos_local/chapeu-virado.jpg",
        link: "detalhes.html?id=praiadochapeuvirado",
        descricao: "Com uma infraestrutura acolhedora, é popular entre turistas e moradores pela sua beleza e bons serviços."
    },
    {
        lugar: "Praia do Ariramba",
        url_foto: "tur imagens/fotos_local/praia-ariramba.jpg",
        link: "detalhes.html?id=praiadoariramba",
        descricao: "Tranquila e charmosa, é ideal para famílias que buscam um ambiente mais reservado."
    },
    {
        lugar: "Praia do Marahu",
        url_foto: "tur imagens/fotos_local/praia-marahu.jpg",
        link: "detalhes.html?id=praiadomarahu",
        descricao: "Reconhecida por sua beleza natural, é ótima para quem quer relaxar em um cenário paradisíaco."
    },
    {
        lugar: "Praia do Paraíso",
        url_foto: "tur imagens/fotos_local/praia-do-paraiso.jpg",
        link: "detalhes.html?id=praiadoparaiso",
        descricao: "Como o nome sugere, um verdadeiro paraíso em Mosqueiro, com areia branca e águas calmas."
    },
    {
        lugar: "Ilha do Combu",
        url_foto: "tur imagens/fotos_local/ilha-combu.jpg",
        link: "detalhes.html?id=ilhadocombu",
        descricao: "Localizada a poucos minutos de Belém, é um refúgio de natureza, com restaurantes ribeirinhos e paisagens de tirar o fôlego."
    },
    {
        lugar: "Praia do Carananduba",
        url_foto: "tur imagens/fotos_local/praia-carananduba.jpg",
        link: "detalhes.html?id=praiadocarananduba",
        descricao: "Outra joia de Mosqueiro, com um cenário tranquilo e perfeito para contemplar a natureza."
    },
    {
        lugar: "Praia Vai-Quem-Quer",
        url_foto: "tur imagens/fotos_local/praia-vai-quem-quer.jpg",
        link: "detalhes.html?id=praiavaiquemquer",
        descricao: "Um destino encantador e cheio de tranquilidade. Com um nome curioso e convidativo, essa praia se destaca pela atmosfera rústica e preservada, perfeita para quem busca um refúgio longe do agito urbano."
    },
    {
        lugar: "Praia da Pedra Branca",
        url_foto: "tur imagens/fotos_local/praia-pedra-branca.jpg",
        link: "detalhes.html?id=praiadapedrabranca",
        descricao: "Conhecida por suas pedras características, essa praia é um ponto turístico menos explorado, mas cheio de encanto."

    },
    {
        lugar: "Praia Funda",
        url_foto: "tur imagens/fotos_local/praia-funda.jpg",
        link: "detalhes.html?id=praiafunda",
        descricao: "Com um acesso mais remoto, é uma praia para quem aprecia o isolamento e a natureza em estado puro."
    },
    {
        lugar: "Praia do Cemitério",
        url_foto: "tur imagens/fotos_local/praia-cemiterio.jpg",
        link: "detalhes.html?id=praiadocemiterio",
        descricao: "Pequena e tranquila, é rodeada por muita vegetação e ideal para caminhadas."

    },
    {
        lugar: "Praia do Farol - Cotijuba",
        url_foto: "tur imagens/fotos_local/praia-farol-cotijuba.jpg",
        link: "detalhes.html?id=praiadofarolcotijuba",
        descricao: "Uma das praias mais famosas da ilha de Cotijuba, com um farol imponente e águas calmas perfeitas para relaxar."
    },
    {
        lugar: "Praia da Saudade",
        url_foto: "tur imagens/fotos_local/praia-da-saudade.jpg",
        link: "detalhes.html?id=praiadasaudade",
        descricao: "Uma praia nostálgica, com uma atmosfera pacífica, ótima para momentos de reflexão."
    },
    {
        lugar: "Praia do Belo Paraíso",
        url_foto: "tur imagens/fotos_local/praia-belo-paraiso.jpg",
        link: "detalhes.html?id=praiadobeloparaiso",
        descricao: "Bela e tranquila, oferece um refúgio perfeito para quem busca paz e contato com a natureza."
    },
    {
        lugar: "Praia do Barro Branco",
        url_foto: "tur imagens/fotos_local/praia-barro-branco.jpg",
        link: "detalhes.html?id=praiadobarrobranco",
        descricao: "Destaca-se pelas águas serenas e pelo ambiente acolhedor."
    },
    {
        lugar: "Praia do Amor",
        url_foto: "tur imagens/fotos_local/praia-amor.jpg",
        link: "detalhes.html?id=praiadoamor",
        descricao: "Um nome romântico para uma praia encantadora, conhecida por seu charme e atmosfera relaxante."
    },
    {
        lugar: "Praia Grande",
        url_foto: "tur imagens/fotos_local/praia-grande.jpg",
        link: "detalhes.html?id=praiagrande",
        descricao: "Uma das maiores e mais populares, com infraestrutura e um ambiente animado."
    }
        
    

];

function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    fotos.forEach(foto => {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        const imgElement = document.createElement('img');
        imgElement.src = foto.url_foto;
        imgElement.alt = foto.lugar;
        imgElement.onclick = () => openModal(foto.url_foto, foto.lugar, foto.descricao);

        const linkElement = document.createElement('a');
        linkElement.href = foto.link;
        linkElement.textContent = foto.lugar;

        photoCard.appendChild(imgElement);
        photoCard.appendChild(linkElement);
        galleryContainer.appendChild(photoCard);
    });
}

function openModal(url, caption, descricao) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = url;
    document.getElementById("caption").textContent = caption;
    if(descricao == null){
        document.getElementById("caption2").textContent = "Essa foto não tem descrição";
    }else{
        document.getElementById("caption2").textContent = descricao;
    }
    
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onload = loadGallery;