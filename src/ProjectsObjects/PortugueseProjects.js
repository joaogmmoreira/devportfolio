const recipeImg = require('../Images/recipes_app_folder.png');
const trybewartsImg = require('../Images/trybewarts_folder.png');
const tryunfoImg = require('../Images/tryunfo_folder.png');
const portugueseProjects = [
  {
    name: 'Recipes App',
    type: 'Frontend',
    tech: {
      tech1: 'React JS',
      tech2: 'Redux',
      tech3: 'ContextAPI'
    },
    group: 'Eu + 4 pessoas',
    description: `Um app de receitas usando React JS e Redux como principais tecnologias e sendo alimentado por uma API de receitas.
    Conta com página de login com validação de usuário e senha, diferentes filtros de busca na pagina de receitas e página de detalhes de cada receita.
    Além disso utiliza local storage para manter o progresso das receitas escolhidas.`,
    thumbnail: recipeImg,
    linkToPage: 'https://joaogmmoreira.github.io/recipesapp/',
  },
  {
    name: 'TrybeWarts',
    type: 'Frontend',
    tech: {
      tech1: 'JavaScript',
      tech2: 'CSS Flexbox',
      tech3: 'Manipulação do DOM'
    },
    group: 'Eu + 1 pessoa',
    description: `O desafio desse projeto era conseguir realizar as validações necessárias nos campos do formulário,
    se utilizar de  CSS flexbox para colocar cada coisa em seu lugar além da manipulação do DOM.`,
    thumbnail: trybewartsImg,
    linkToPage: 'https://joaogmmoreira.github.io/trybewarts/'
  },
  {
    name: 'Tryunfo',
    type: 'Frontend',
    tech: {
      tech1: 'React JS',
      tech2: 'React State',
      tech3: 'Single Page Application'
    },
    group: 'Só eu',
    description: `Uma brincadeira com o jogo Super Trunfo onde fazemos as cartas com o tema preferido.
    O grande desafio era conseguir realizar tudo apenas utilizando o estado do React`,
    thumbnail: tryunfoImg,
    linkToPage: 'https://joaogmmoreira.github.io/tryunfo/',
  },
]

export default portugueseProjects;