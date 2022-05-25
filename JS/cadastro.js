document.querySelector('#btn-cadastrar').addEventListener('click', (e)=>{
  e.preventDefault();
  let email = document.querySelector('#input-email').value;
  let senha = document.querySelector('#input-senha').value;
  let confirmaSenha = document.querySelector('#input-confirma-senha').value;

  salvar(email, senha, confirmaSenha);
});


function salvar(e, s, c){
  let db = JSON.parse(localStorage.getItem('usuarios') || '[]');
  //crio um objeto
  let usuario = {
      id: db.length + 1,
      login: e,
      senha: s,
      confirmaSenha: c
  }
  //jogo o obejto dentro do vetor
  db.push(usuario);
  //salvo no localstorage
  localStorage.setItem('usuarios', JSON.stringify(db));
  location.href = 'login.html';    
}
