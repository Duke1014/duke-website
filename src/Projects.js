import ProjectCardInfo from './ProjectCardInfo'
import { projectInfo } from './ProjectInfo'

export default function Projects() {
  return (
    <div className='devwork' id='projects'>
        <div className='project-banner'>
            Projects
        </div>
        <div className='project-container'>
            {projectInfo.map((p, i) => {
              // console.log(p, i)
              return <ProjectCardInfo key={i} title={p.title} image={p.image} info={p.info} skills={p.skills} links={p.links} />
            })} 
        </div>
    </div>
  )
}
