import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail.jsx'
import Title from '../../components/Title/Title.jsx'
import { getProjectById } from '../../services/projects.js'
import { getOpenProjects } from '../../utils/getOpenProjects.js'

export default function ProjectDetailView() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjectById(id).then(setProject).finally(() => setLoading(false))

    
  }, [])

  return <div>
    {
      loading
        ? <h1>Loading...</h1>
        : <div>
          <Title pageTitle='clients' pageHeader={project.title} />
          <ProjectDetail project={project} />
        </div>
    }
  </div>
}
