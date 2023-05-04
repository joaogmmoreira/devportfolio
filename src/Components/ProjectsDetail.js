import React from 'react';
import portugueseProjects from '../ProjectsObjects/PortugueseProjects';
import englishProjects from '../ProjectsObjects/EnglishProjects';
import ProjectsDescriptionPortuguese from './ProjectsDescriptionPortuguese';
import ProjectsDescriptionEnglish from './ProjectsDescriptionEnglish';
// import '../Style/projectDetails.css'

export default function ProjectsDetail(props) {
  const projectDetailsRender = () => {
    const { languageState } = props;
    if (languageState.language === 'portugues') {
      const render = portugueseProjects.map(({ name,
        type,
        tech,
        group,
        description,
        thumbnail,
        linkToPage
        }) => {
        return (
          <ProjectsDescriptionPortuguese
          key={name}
          name={ name }
          type={ type }
          tech={ tech }
          group={ group }
          description={ description }
          thumbnail={ thumbnail }
          linkToPage={ linkToPage }
          />
        )
      })
      return render;
    }
    if (languageState.language === 'english') {
      const render = englishProjects.map(({name, 
        type, 
        tech, 
        group, 
        description,
        thumbnail,
        linkToPage
      }) => {
        return (
          <ProjectsDescriptionEnglish
          key={name}
          name={ name }
          type={ type }
          tech={ tech }
          group={ group }
          description={ description }
          thumbnail={ thumbnail }
          linkToPage={ linkToPage }
          />
        )
      })
      return render;
    }
  }

    return (
      <div className='projectsDetails'>
        {
          projectDetailsRender()
        }
      </div>     
    )
}
