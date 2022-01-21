import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail.jsx'
import Title from '../../components/Title/Title.jsx'
import { getProjectById } from '../../services/projects.js'

export default function ProjectDetailView() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getProjectById(id).then(data => setProject(data)).finally(() => setLoading(false))
  }, [])

  if(loading) return <h1>Loading...</h1>
  return (
    <div>
      <Title pageTitle='project detail' pageHeader={project.title} />
      <ProjectDetail project={project} />
    </div>
  )
}
