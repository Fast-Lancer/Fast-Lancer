import { useEffect, useState } from 'react'
import ProjectItem from '../../components/ProjectItem/ProjectItem.jsx'
import { getProjects } from '../../services/projects.js'

export default function Projects() {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(setProjects).finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (

        projects.map((project) => <ProjectItem key={project.id}  project={project}  />)
      )}
    </div>
  )
}
