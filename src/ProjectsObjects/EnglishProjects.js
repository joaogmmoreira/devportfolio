const recipeImg = require('../Images/recipes_app_folder.png');
const trybewartsImg = require('../Images/trybewarts_folder.png');
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
    thumbnail: trybewartsImg,
    linkToPage: 'https://joaogmmoreira.github.io/trybewarts/'
  },
//   {
//     name: 'Tryunfo',
//     type: 'Frontend',
//     tech: {
//       tech1: 'React JS',
//       tech2: 'React State',
//       tech3: 'Single Page Application'
//     },
//     group: 'Just me',
//     description: `In this project we made cards like the Super Trunfo game with our favorite topic.
//     The greatest challenge in this project was making everything work with just using React JS state.`,
//     thumbnail: tryunfoImg,
//     linkToPage: 'https://joaogmmoreira.github.io/tryunfo/',
//   },
]

export default englishProjects;