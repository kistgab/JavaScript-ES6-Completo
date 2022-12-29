async function puxarDados() {
  const promiseDados = fetch("./dados.json");
  const promiseClientes = fetch("./clientes.json");

  const jsonDados = await (await promiseDados).json();
  const jsonClientes = await (await promiseClientes).json();

  document.body.innerText = jsonDados.aula + " /" + jsonClientes[0].id + " " + jsonClientes[0].cliente;
}

puxarDados();
