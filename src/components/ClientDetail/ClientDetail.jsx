import styles from './ClientDetail.module.css'
import phoneIcon from '../../assets/icons/phoneSmall.png'
import emailIcon from '../../assets/icons/emailSmall.png'
import paletteIcon from '../../assets/icons/paletteSmall.png'
import { Link } from 'react-router-dom'

export default function ClientDetail2({ client }) {
  const {
    client_name: name,
    email,
    phone,
    business_name: businessName,
    notes,
    projects
  } = client

  console.log(projects)
  return (
    <main>
      <div className={styles.clientDetail}>
        <div className={styles.clientName}>{name}</div>
        <div className={styles.businessName}>
          <h1 aria-label="business-name">
            {businessName ?? 'No business name entered'}
          </h1>
          <h3>Business Name</h3>
        </div>
        <div className={styles.infoWrapper}>
          <h3>
            <div className={styles.contactDetails} aria-label="phone">
              <section className={styles.contactItem}><img src={phoneIcon} alt="phone icon" />
                {phone}
              </section>
              <section className={styles.contactItem}>
                <img src={emailIcon} alt="email" />
                {email}
              </section>
            </div>
          </h3>         

          <section className={styles.projectSection}> 
            <h2><img src={paletteIcon} alt="palette" />
            Client Projects</h2>
            <section className={styles.projectList}>
              <ul>
                {
                  projects.map((project) => (
                    <li key={project.id}>
                      <Link to={`/projects/${project.id}`}>
                        {project.title}
                      </Link>
                      <section className={styles.projectDescription}>
                        {project.description}
                      </section>
                    </li>
                  ))
                }
              </ul>
            </section>
          </section>
        </div>
        <section className={styles.alignLeft}>
          <h2>Notes</h2>
          <p className={styles.textBlock} aria-label="notes">
            {notes ? notes : 'No notes entered.'}
          </p>
        </section>
      </div>
    </main>
  )
}
