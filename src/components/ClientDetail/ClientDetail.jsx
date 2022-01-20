import styles from './ClientDetail.module.css'
import phoneIcon from '../../assets/icons/phoneSmall.png'
import emailIcon from '../../assets/icons/emailSmall.png'
import paletteIcon from '../../assets/icons/paletteSmall.png'
import { Link } from 'react-router-dom'

export default function ClientDetail({ client }) {
  const {
    client_name: name,
    email,
    phone,
    business_name: businessName,
    notes,
    projects
  } = client

  return (
    <div className={styles.clientDetail}>
      <h3 className={styles.h3}>
        {businessName}
      </h3>
      <div className={styles.twoColRow}>
        <div className={styles.col}>
          <div className={styles.row}>
            <img src={phoneIcon} alt='a phone icon' />
            {phone}
          </div>
          <div className={styles.row}>
            <img src={emailIcon} alt='an email icon' />
            {email}
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.row}>
            <img src={paletteIcon} alt='a palette icon' />
            Client Projects
          </div>
          <ul className={styles.linkList}>
            {
              projects.map((project) => (
                <li key={project.id}>
                  <Link to={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.row}>
          <img src={emailIcon} alt='a notes icon' />
          Notes
        </div>
        <div className={styles.notesDiv}>
          {notes ?? 'No notes entered.'}
        </div>
      </div>
    </div>
  )
}
