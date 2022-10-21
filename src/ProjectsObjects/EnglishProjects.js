const recipeImg = require('../Images/recipes_app_folder.png');
const trybewartsImg = require('../Images/trybewarts_folder.png');

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
    thumbnail: recipeImg
  },
  {
    name: 'TrybeWarts',
    type: 'Frontend',
    tech: {
      tech1: 'JavaScript',
      tech2: 'CSS Flexbox',
      tech3: 'Manipulação do DOM'
    },
    group: 'Me + 1 person',
    description: `This project's main challenge was to validate the forms's fields, 
    in addition to using CSS flexbox to put everything in its place. Furthermore we had to manipulate the DOM.`,
    thumbnail: trybewartsImg
  },
]

export default englishProjects;