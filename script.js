const get = (id) => document.getElementById(id);

document.addEventListener('click', (event) => {

  const proximaTelaId = event.target.getAttribute('data-target');

  if (!proximaTelaId) {
    return;
  }

 
  const telaAtual = event.target.closest('.tela-jogo.visible');

 
  const proximaTela = get(proximaTelaId);

  
  if (telaAtual && proximaTela) {
  
    telaAtual.classList.remove('visible');
 
    proximaTela.classList.add('visible');
  } else {
  
    console.error(`Erro de transição: Não foi possível encontrar tela atual ou próxima tela (ID: ${proximaTelaId})`);
  }
});
