const startButton = document.getElementById('iniciar-button');
const telaInicial = document.getElementById('tela-inicial');
const telaIntroducao = document.getElementById('tela-introducao');
const progredButton = document.getElementById('progredir-button');
const telaHist1 = document.getElementById('tela-historia-1');
const levantarButton = document.getElementById('levant');
const telaLevantar = document.getElementById('tela-levantar');
const telaQuarto = document.getElementById('telaquarto');
const progredButton1 = document.getElementById('progredir-button2');

startButton.addEventListener('click', () => {
telaInicial.classList.add('hidden');
telaIntroducao.classList.add('visible');
});

progredButton.addEventListener('click', () => {
telaIntroducao.classList.add('hidden');
telaHist1.classList.add('visible');
});

levantarButton.addEventListener('click', () =>{
telaHist1.classList.add('hidden');
telaLevantar.classList.add('visible');
});

progredButton1.addEventListener('click', () => {
telaLevantar.classList.add('hidden');
telaQuarto.classList.add('visible');
});
