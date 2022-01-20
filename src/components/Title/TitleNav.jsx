import styles from './Title.module.css'
import { Link } from 'react-router-dom'

export default function TitleNav({ pageTitle, pageHeader }) {
  switch (pageTitle) {
    case 'projects':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={' '}>{pageHeader}</a>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/projects/new">New Project</Link>
          </li>
        </ul>
      )

    case 'clients':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={' '}>{pageTitle}</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/clients/newclient">New Client</Link>
          </li>
        </ul>
      )

    case 'project detail':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/projects'}>Projects</a>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/editproject">Edit Project</Link>
          </li>
        </ul>
      )

    case 'client detail':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/clients'}>Clients</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/editclient">Edit Client</Link>
          </li>
        </ul>
      )

    case 'new-edit project':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/projects'}>Projects</a>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
        </ul>
      )

    case 'new-edit client':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/clients'}>Clients</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      )

    default:
      return 'err'
  }
}
