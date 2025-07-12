export default function ProjectCardInfo({ title, image, info, skills, links }) {

  return (
    <div className="project-card">
        <div className="project-title">
            {title}
        </div>
        <div className="project-image">
            {image}
        </div>
        <div className="project-info">
            {info}
        </div>
        <br/>
        <div className="project-skills">
            Skills: {skills.map((skill, k, arr) => {
                return <span key={k}>{skill}{k < arr.length - 1 ? ' | ' : ' '}&nbsp;</span>
            })}
        </div>
        <br/>
        <div className="project-links">
            {Object.entries(links).map(([label,link], i, arr) => {
                console.log(label, link, i, arr)
                return <button key={i}><a href={link}>{label}</a></button> 
            })}
        </div>
    </div>
  )
}