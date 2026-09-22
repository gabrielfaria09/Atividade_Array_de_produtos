const produtos = [
    ['Notebook Dell', '500 GB SSD, 8 GB RAM', 'R$ 2200', 'assets/Imagem1.avif'],
    ['Notebook Lenovo', '240 GB HD, 4 GB RAM', 'R$ 3000', 'assets/Imagem2.avif'],
    ['Notebook Samsung', '1 TB SSD, 16 GB RAM', 'R$ 5000', 'assets/Imagem3.avif'],
    ['MAC', '512 GB HD, 8 GB RAM', 'R$ 1340', 'assets/Imagem4.avif'],
    ['Notebook Acer Aspire', '256 GB SSD, 8 GB RAM', 'R$ 2100', 'assets/Imagem5.avif'],
    ['Notebook HP Pavilion', '512 GB SSD, 16 GB RAM', 'R$ 3800', 'assets/Imagem6.avif'],
    ['MacBook Air M1', '256 GB SSD, 8 GB RAM', 'R$ 5200', 'assets/Imagem7.avif'],
    ['MacBook Pro M2', '512 GB SSD, 16 GB RAM', 'R$ 9800', 'assets/Imagem8.avif'],
    ['Notebook Asus Vivobook', '1 TB SSD, 16 GB RAM', 'R$ 4200', 'assets/Imagem9.avif'],
    ['Notebook Lenovo IdeaPad', '128 GB SSD, 4 GB RAM', 'R$ 1800', 'assets/Imagem10.avif'],
    ['Notebook Dell Inspiron', '512 GB SSD, 8 GB RAM', 'R$ 2900', 'assets/Imagem11.avif'],
    ['Notebook Samsung Galaxy Book', '256 GB SSD, 8 GB RAM', 'R$ 2600', 'assets/Imagem12.avif'],
    ['Notebook Acer Nitro 5', '512 GB SSD, 16 GB RAM', 'R$ 4500', 'assets/Imagem13.avif'],
    ['Notebook Positivo Motion', '128 GB eMMC, 4 GB RAM', 'R$ 1100', 'assets/Imagem14.avif'],
    ['Notebook Asus ROG Strix', '1 TB SSD, 32 GB RAM', 'R$ 12000', 'assets/Imagem15.avif'],
    ['Notebook Alienware m15', '1 TB SSD, 32 GB RAM', 'R$ 14500', 'assets/Imagem16.avif'],
    ['Mac Mini M2', '512 GB SSD, 8 GB RAM', 'R$ 6100', 'assets/Imagem17.avif'],
    ['Notebook HP Victus', '512 GB SSD, 8 GB RAM', 'R$ 4100', 'assets/Imagem18.avif'],
    ['Notebook Lenovo Legion', '1 TB SSD, 16 GB RAM', 'R$ 7300', 'assets/Imagem19.avif'],
    ['Notebook Vaio FE15', '256 GB SSD, 8 GB RAM', 'R$ 2400', 'assets/Imagem20.avif'],
    ['Notebook Dell Alienware', '2 TB SSD, 64 GB RAM', 'R$ 18900', 'assets/Imagem21.avif'],
    ['iMac 24"', '256 GB SSD, 8 GB RAM', 'R$ 11200', 'assets/Imagem22.avif'],
    ['Notebook Samsung Book', '1 TB HD, 4 GB RAM', 'R$ 1950', 'assets/Imagem23.avif'],
    ['Notebook Acer Swift', '512 GB SSD, 16 GB RAM', 'R$ 4800', 'assets/Imagem24.avif']
];

const catalogo = document.getElementById('catalogo');
const pesquisa = document.getElementById('pesquisa');

function filtrar(){
    const valor = pesquisa.value.toLowerCase();

    catalogo.innerHTML = "";

    produtos.filter(([nome, descricao, preco, imagem]) => 
    nome.toLowerCase().includes(valor) || descricao.toLowerCase().includes(valor))
    .forEach(([nome, descricao, preco, imagem]) => {
        const divisao = document.createElement('div');
        divisao.className = "card";

        divisao.innerHTML = `<img src="${imagem}" alt="${nome}">
                            <h4>${nome}</h4>
                            <p>${descricao}</p>
                            <p>${preco}</p>`;
    
    catalogo.append(divisao);
    })
}

pesquisa.addEventListener('input', filtrar);

filtrar();
