import React from 'react';
import portugueseProjects from '../ProjectsObjects/PortugueseProjects';
import englishProjects from '../ProjectsObjects/EnglishProjects';
import ProjectsDescriptionPortuguese from './ProjectsDescriptionPortuguese';
import ProjectsDescriptionEnglish from './ProjectsDescriptionEnglish';
import '../Style/projectDetails.css'

class ProjectsDetail extends React.Component {
  projectDetailsRender = () => {
    const { languageState } = this.props;
    if (languageState.language === 'portugues') {
      const render = portugueseProjects.map(({ name,
        type,
        tech,
        group,
        description,
        thumbnail
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
        thumbnail
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
          />
        )
      })
      return render;
    }
  }
  render() {
    return (
      <div className='projectsDetails'>
        {
          this.projectDetailsRender()
        }     
      </div>     
    )
  }
}

export default ProjectsDetail;