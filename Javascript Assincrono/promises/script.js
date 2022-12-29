// const promise = new Promise((resolve, reject) => {
//   const condicao = false;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Gabriel" });
//     }, 1000);
//   } else {
//     reject(Error("Um erro ocorreu na promise"));
//   }
// });

// const retorno = promise
//   .then((result) => {
//     console.log(result);
//     result.profissao = "Designer";
//     return result;
//   })
//   .then((result) => console.log(result))
//   .then(
//     (result) => console.log("a"),
//     (rejectec) => console.log(rejectec)
//   );

// login
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((result) => console.log(result));
