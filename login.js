document.querySelector("#logar").addEventListener("click", (e) => {
  e.preventDefault();

  logar();
});

function logar() {
  const login = document.querySelector("#login");
  const senha = document.querySelector("#pass");

  let usuarios_novo = [];

  //pego todos os dados de usuarios que tenho no localstorage
  usuarios_novo = JSON.parse(localStorage.getItem("usuarios"));

  //crio um objeto para comparar com os dados do objero que vem do localstorage
  let usuario = {
    email: "",
    senha: "",
  };

  usuarios_novo.forEach((element) => {
    if (element.login === login.value && element.senha === senha.value) {
      usuario = {
        email: element.login,
        senha: element.senha,
      };
    }
  });

  if (usuario.email === login.value && usuario.senha === senha.value) {
    sessionStorage.setItem("logado", usuario.email);
    window.location.href = "home.html";
  } else {
    alert("Opa! Deu algo errado");
  }
}
