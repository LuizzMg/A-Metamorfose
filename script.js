// Função auxiliar para pegar elementos pelo ID
const get = (id) => document.getElementById(id);

// Adiciona UM único "ouvinte" de eventos na página inteira
document.addEventListener('click', (event) => {
  
  // 1. Verifica se o item clicado tem o atributo 'data-target'
  const proximaTelaId = event.target.getAttribute('data-target');

  // Se não tiver (se o usuário clicou em um texto, etc.),
  // não faz nada e para a função aqui.
  if (!proximaTelaId) {
    return;
  }

  // 2. Acha a tela que está visível no momento
  // O .closest() sobe do botão até achar a div "pai" que tenha
  // as classes 'tela-jogo' e 'visible'.
  const telaAtual = event.target.closest('.tela-jogo.visible');

  // 3. Acha a próxima tela usando o ID que pegamos do 'data-target'
  const proximaTela = get(proximaTelaId);

  // 4. Faz a transição
  if (telaAtual && proximaTela) {
    // Esconde a tela atual
    telaAtual.classList.remove('visible');
    // Mostra a próxima tela
    proximaTela.classList.add('visible');
  } else {
    // Isso ajuda a encontrar erros, caso você tenha digitado um ID errado no HTML
    console.error(`Erro de transição: Não foi possível encontrar tela atual ou próxima tela (ID: ${proximaTelaId})`);
  }
});
