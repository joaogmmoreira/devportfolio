const recipeImg = require('../Images/recipes_app_folder.png');
const mauraRuteImg = require('../Images/maura_rute_folder.png');

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
    name: 'Maura Rute\'s Landing Page',
    type: 'Fullstack',
    tech: {
      tech1: 'ReactJS',
      tech2: 'Embed Google Docs',
      tech3: 'Responsiveness for mobile'
    },
    group: 'Me',
    description: `A landing page for the christian coach Maura Rute using React JS for componentizing components and to be able to scale the application for future purposes.
    It's using a Google Docs form that was already working for students registration.`,
    thumbnail: mauraRuteImg,
    linkToPage: 'https://maurarute.com',
  },
]

export default englishProjects;