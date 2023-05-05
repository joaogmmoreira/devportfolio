const recipeImg = require('../Images/recipes_app_folder.png');
// const trybewartsImg = require('../Images/trybewarts_folder.png');
// const tryunfoImg = require('../Images/tryunfo_folder.png');
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
    name: 'Delivery App',
    type: 'Fullstack',
    tech: {
      tech1: 'React JS',
      tech2: 'RestAPI',
      tech3: 'Time'
    },
    group: 'Eu + 4 pessoas',
    description: `oi`,
    thumbnail: recipeImg,
    linkToPage: 'https://joaogmmoreira.github.io/recipesapp/',
  },
]

export default portugueseProjects;