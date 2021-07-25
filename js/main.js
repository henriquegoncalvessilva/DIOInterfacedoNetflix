const descricao = document.getElementsByClassName("descricao");
const titulo = document.getElementsByClassName("titulo");
const backgroundImageCanvas = document.getElementsByClassName("filme-principal");

//Movies Descriptions
let descriptionArmyDead = "Após um surto de zumbis em Las Vegas, nos Estados Unidos, um grupo de mercenários faz uma aposta final, aventurando-se na zona de quarentena para tentar realizar o maior assalto de todos os tempos."
let descriptionGameofThrones = "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto."
let descriptionRuaDoMedo = "De volta a 1666, Deena descobre a verdade sobre Sarah Fier. Em 1994, os amigos lutam para sobreviver e pelo futuro de Shadyside.";
let descriptionElite = "Após três jovens da escola pública serem transferidos para um conceituado colégio de elite, o conflito entre classes acaba levando a um assassinato.";
let descriptionRainhadoFluxo = "Dezessete anos após ser presa injustamente, uma compositora talentosa busca justiça contra os homens que causaram sua queda e mataram sua família.";
let descriptionTwd = "Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.";
let descriptionGreysAnatomy = "Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho.";
let descriptionMortalKombat = "Nova aventura baseada no videogame Mortal Kombat. Na história, um jovem que nunca treinou artes marciais acaba envolvido em um gigantesco torneio de luta envolvendo guerreiros da Terra e lutadores e outras dimensões.";
let descriptionSimpsonsLoky = "Banido novamente de Asgard, Loki enfrenta seus mais ferozes rivais até então: os Simpsons e os heróis mais poderosos de Springfield. O Deus da Trapaça se junta a Bart Simpson em uma derradeira fusão de personagens para homenagear o universo cinematográfico dos super-heróis e vilões da Marvel.";
let descriptionMiraculous = "Logo que chega a Xangai para visitar um tio, Ladybug tem a bolsa roubada com Tikki dentro. Na tentativa de recuperá-lo, ela descobre que Gabriel Agreste também está na cidade em busca de um poderoso artefato.";

//Movies Titles
let TitleArmyDead = "Army of the Dead: Invasão em Las Vegas";
let TitleGameofThrones = "Game of Thrones";
let TitleRuadoMedo = "Rua do Medo: 1666 – Parte 3";
let TitleElite = "Elite";
let TitleRainhadoFluxo = "A Rainha do Fluxo";
let TitleTwd = "The Walking Dead";
let TitleGreysAnatomy = "Grey's Anatomy";
let TitleMortalKombat = "Mortal Kombat";
let TitleSimpsonsLoky = "Os Simpsons: O Bem, o Bart e o Loki";
let TitleMiraculous = "Miraculous World: Xangai, a Lenda de Ladydragon";


//Covers BG
let coverArmyDead = "./img/capa-armyDead.jpg";
let coverGameOfThrones = "./img/capa-gameofthrones.jpg";
let coverRuadoMedo = "./img/capa-RuadoMedo.jpg";
let coverElite = "./img/capa-Elite.jpg";
let coverRainhadoFluxo = "./img/capa-RainhadoFluxo.jpg";
let coverTWD = "./img/capa-TWD.jpg";
let coverGreysAnatomy = "./img/capa-GraysAnatomy.jpg";
let coverMortalKombat = "./img/capa-MortalKombat.jpg";
let coverSimpsonsLoki = "./img/capa-SimpsonsLoki.jpg";
let covermiraculous = "./img/capa-miraculous.jpg"



//Change info of MainCover
function changeinfo(tituloMovie,descricaoMovie,urlImg) {
	titulo[0].innerHTML = tituloMovie;
	descricao[0].innerHTML = descricaoMovie;
	backgroundImageCanvas[0].style.background="url("+urlImg+")";
	backgroundImageCanvas[0].style.backgroundSize="cover";
	backgroundImageCanvas[0].style.animationName ="fade";
	backgroundImageCanvas[0].style.animationDuration = "1s";
  	backgroundImageCanvas[0].style.transition="all 1s";


}