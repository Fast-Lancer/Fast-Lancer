import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectItem from '../../components/ProjectItem/ProjectItem.jsx'
import { getProjects } from '../../services/projects.js'

export default function ProjectListView() {
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
        projects.map((project) => <Link key={project.id} to={`/projects/${project.id}`}><ProjectItem key={project.id}  project={project}  />
        </Link>)
      )}
    </div>
  )
}
