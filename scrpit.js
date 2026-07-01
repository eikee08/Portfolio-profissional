async function buscarCEP() {

const cep = document.getElementById("cep").value;

const resposta = await fetch(
`https://brasilapi.com.br/api/cep/v1/${cep}`
);

const dados = await resposta.json();

document.getElementById("resultadoCep").innerHTML =
`${dados.street} - ${dados.city}`;
}

async function buscarCNPJ() {

const cnpj = document.getElementById("cnpj").value;

const resposta = await fetch(
`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
);

const dados = await resposta.json();

document.getElementById("resultadoCnpj").innerHTML =
dados.razao_social;
}

async function buscarDDD() {

const ddd = document.getElementById("ddd").value;

const resposta = await fetch(
`https://brasilapi.com.br/api/ddd/v1/${ddd}`
);

const dados = await resposta.json();

document.getElementById("resultadoDDD").innerHTML =
dados.state;
}