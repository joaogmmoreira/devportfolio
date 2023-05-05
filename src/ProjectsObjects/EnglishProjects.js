const recipeImg = require('../Images/recipes_app_folder.png');
// const trybewartsImg = require('../Images/trybewarts_folder.png');
// const tryunfoImg = require('../Images/tryunfo_folder.png');

const englishProjects = [
  {
    name: 'Recipes App',
    type: 'Frontend',
    tech: {
      tech1: 'ReactJS',
      tech2: 'Redux',
      tech3: 'ContextAPI'
    },
    group: 'Me + 4 people',
    description: `It's a recipe app using React JS and Redux as main technologies and being fed by a recipe API.
    It has a login page with user and password validation, different kinds of search filters on recipes page and recipes details page.
    Furthermore it uses local storage to keep chosen recipes progress.`,
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
    group: 'Me + 4 people',
    description: `hi`,
    thumbnail: recipeImg,
    linkToPage: 'https://joaogmmoreira.github.io/recipesapp/',
  },
]

export default englishProjects;