# Catálogo de Produtos

Um projeto web simples e dinâmico que apresenta uma lista de produtos de tecnologia (como notebooks e computadores). A aplicação permite que o usuário visualize os itens em formato de cards e realize buscas em tempo real.

## 📋 Funcionalidades

- **Exibição Dinâmica:** Os produtos são renderizados dinamicamente na tela a partir de um array de dados no JavaScript.
- **Filtro de Busca em Tempo Real:** Uma barra de pesquisa permite filtrar os produtos mostrados no catálogo pelo **nome** e pela descrição. O filtro é aplicado instantaneamente enquanto o usuário digita.
- **Design Simples e Responsivo:** O layout utiliza Flexbox e variáveis CSS para manter um padrão visual limpo e organizado.

## 💻 Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização (incorporada no arquivo HTML) com o uso de variáveis de cores (`:root`) e Flexbox.
- **JavaScript (Vanilla):** Lógica de renderização dos cards e manipulação do DOM para o filtro de pesquisa.

## 📁 Estrutura de Arquivos

Para que o projeto funcione corretamente, a estrutura de pastas deve seguir este formato:

```text
/
├── index.html       # Estrutura principal e estilos da página
├── script.js        # Lógica de renderização e filtro do catálogo
└── assets/          # Pasta contendo as imagens locais dos produtos
    ├── Imagem1.avif
    ├── Imagem2.avif
    └── ... (até Imagem24.avif)
```

## 🚀 Como Executar o Projeto

1. Faça o download ou clone os arquivos do projeto.
2. Certifique-se de que a pasta `assets` com as imagens `.avif` esteja no mesmo diretório do arquivo `index.html`.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador web de preferência.
4. (Opcional) Para uma melhor experiência, você pode usar a extensão "Live Server" do VS Code para rodar a aplicação em um servidor local.

## 📝 Observações

- O array de produtos está fixo no arquivo `script.js` (mock data), simulando o retorno de um banco de dados ou API.
- As imagens estão configuradas com caminhos relativos (ex: `assets/Imagem1.avif`). Se as imagens não carregarem, verifique se o nome da pasta e das imagens coincidem exatamente com o que está no código.