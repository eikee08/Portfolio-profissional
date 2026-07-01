# Meu Portfólio

## Descrição

Este projeto foi desenvolvido como trabalho da disciplina de Front-end. O objetivo foi criar um portfólio pessoal utilizando HTML, CSS e JavaScript, além de consumir APIs públicas para praticar requisições assíncronas.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- BrasilAPI
- Visual Studio Code

## Funcionalidades

- Informações pessoais.
- Consulta de CEP através da BrasilAPI.
- Consulta de CNPJ através da BrasilAPI.
- Consulta de DDD através da BrasilAPI.
- Interface simples e responsiva.

## APIs utilizadas

### CEP

https://brasilapi.com.br/api/cep/v1/{cep}

### CNPJ

https://brasilapi.com.br/api/cnpj/v1/{cnpj}

### DDD

https://brasilapi.com.br/api/ddd/v1/{ddd}

## Como foi desenvolvido

O projeto foi desenvolvido utilizando HTML para a estrutura da página, CSS para a estilização e JavaScript para implementar as funcionalidades.

Para realizar as consultas foi utilizada a função `fetch()` juntamente com `async/await`, consumindo os dados disponibilizados pela BrasilAPI e exibindo os resultados na própria página.

## Como executar

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo `index.html` em um navegador.

## Estrutura do projeto

```
📁 projeto
│── index.html
│── styles.css
│── script.js
│── README.md
```

## Disciplina

Front-end

## Autor

**Eike Flores**