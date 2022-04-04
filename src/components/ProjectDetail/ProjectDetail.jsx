import { Link } from 'react-router-dom'
import styles from './ProjectDetail.module.css'
import clock from '../../assets/icons/clockSmall.png'
import www from '../../assets/icons/wwwSmall.png'
import money from '../../assets/icons/moneySmall.png'

export default function ProjectDetail({ project }) {
  const {
    hourly_rate,
    URL,
    date_start,
    date_end,
    description,
    notes,
    clients,
    hours_worked,
    price_quoted,
    hours_quoted,
  } = project

  return (
    <main>
      <div className={styles.projectDetail}>
        <div className={styles.projectTitle}>{project.title}</div>
        <div className={styles.clientName}>
          <Link to={`/clients/${project.client_id}`}>
            <h1 aria-label="client-name">
              {clients?.client_name ?? 'No client name entered'}
            </h1>
          </Link>
          <h3>Client</h3>
        </div>
        <div className={styles.infoWrapper}>
          <h3>{URL && (
            <div className={styles.infoItem} aria-label="URL">
              <Link to={`${URL}`}><img src={www} alt="www" />
                {URL}
              </Link>
            </div>
          )}</h3>
          <section className={styles.infoSection}>          
            <div className={styles.infoItem} aria-label="hourly-rate">
              <img src={money} alt="money" />
            Hourly Rate: ${hourly_rate}
            </div>
            <div className={styles.infoItem} aria-label="start-date">
              <img src={clock} alt="clock" />
            Started: {date_start}
            </div>

            {hours_worked && (
              <div className={styles.infoItem} aria-label="hours-logged">
                <img src={money} alt="money" />
            Hours Logged: {hours_worked}
              </div>
            )}
            <div className={styles.infoItem} aria-label="end-date">
              <img src={clock} alt="clock" />
            Deadline: {date_end}
            </div>
          </section>
        </div>
        <section className={styles.alignLeft}>
          <h2>Description</h2>
          <p className={styles.textBlock} aria-label="description">
            {description ? description : 'No description entered.'}
          </p>
          <h2>Notes</h2>
          <p className={styles.textBlock} aria-label="notes">
            {notes ? notes : 'No notes entered.'}
          </p>
        </section>
      </div>
    </main>
  )
}
