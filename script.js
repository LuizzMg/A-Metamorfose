const get = (id) => document.getElementById(id);

// Telas do Jogo
const telaInicial    = get('tela-inicial');
const telaIntroducao = get('tela-introducao');
const telaHist1      = get('tela-historia-1');
const telaLevantar   = get('tela-levantar');
const telaQuarto1    = get('telaquarto1');
const oDespertar = get('ODespertar');
const aPorta = get('APorta');
const telaodespertar = get('tela-odespertar');
const telaaporta = get('tela-aporta');
const aComida = get('AComida');
const telaacomida = get('tela-acomida');
const oQuartovazio = get('OQuartovazio');
const telaoquartovazio = get('tela-oquartovazio');
const aMusicafinal = get('AMusicafinal');

// Botões de Ação
const startButton    = get('iniciar-button');
const progredButton  = get('progredir-button');
const levantarButton = get('levant');
const progredButton1 = get('progredir-button2');
const AvancarButton  = get('avancar-button');
const AvancarButton1 = get('avancar-button1');
const Choices1 = get('choices1');
const progred3 = get('progredir-button3');
const despert = get('despertbutton');
const Choices2 = get('choices2');
const port = get('portabutton');
const Choices3 = get('choices3');
const comid = get('comidabutton');
const Choices4 = get('choices4')
const quart = get('quartobutton');
const Choices5 = get('choices5');


function configurarTransicao(botao, telaAtual, proximaTela) {
  botao.addEventListener('click', () => {
 
    telaAtual.classList.remove('visible'); 
    proximaTela.classList.add('visible');
  });
}

configurarTransicao(startButton,    telaInicial,    telaIntroducao);
configurarTransicao(progredButton,  telaIntroducao, telaHist1);
configurarTransicao(levantarButton, telaHist1,      telaLevantar);
configurarTransicao(progredButton1, telaLevantar,   telaQuarto1);
configurarTransicao(AvancarButton1, telaQuarto1, oDespertar);
configurarTransicao(Choices1, oDespertar, telaodespertar);
configurarTransicao(despert, telaodespertar, aPorta);
configurarTransicao(Choices2, aPorta, telaaporta);
configurarTransicao(port, telaaporta, aComida);
configurarTransicao(Choices3, aComida, telaacomida);
configurarTransicao(comid, telaacomida, OQuartovazio);
configurarTransicao(Choices4, OQuartovazio, telaoquartovazio);
configurarTransicao(quart, telaoquartovazio, aMusicafinal);
// Último botão, reiniciar
//configurarTransicao(AvancarButton1, telaQuarto1,    telaInicial);
