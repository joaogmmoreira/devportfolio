const recipeImg = require('../Images/recipes_app_folder.png');
const mauraRuteImg = require('../Images/maura_rute_folder.png');

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
    name: 'Maura Rute\'s Landing Page',
    type: 'Fullstack',
    tech: {
      tech1: 'React JS',
      tech2: 'Embed Google Docs',
      tech3: 'Responsiveness for mobile'
    },
    group: 'Me',
    description: `Uma página de destino para a coach cristã Maura Rute, utilizando o React JS para componentizar os elementos e permitir escalabilidade futura do aplicativo. 
    Usamosando um formulário do Google Docs que já estava funcionando para o registro de estudantes.`,
    thumbnail: mauraRuteImg,
    linkToPage: 'https://maurarute.com',
  },
]

export default portugueseProjects;