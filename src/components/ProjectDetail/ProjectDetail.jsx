import styles from './ProjectDetail.module.css'

export default function ProjectDetail({ project }) {
  const { hourly_rate, URL, date_start, date_end, description, notes, clients } = project

  return (
    <div className={styles.projectDetail}>
      <div className={styles.clientName}>
        <h1 aria-label='client-name'>
          {clients?.client_name ?? 'No client name entered'}
        </h1>
      </div>
      <section className={styles.infoSection}>
        <div aria-label='hourly-rate'>Hourly Rate: {hourly_rate}</div>
        {URL && <div aria-label='URL'>Repo: {URL}</div>}
        <div aria-label='start-date'>Start Date: {date_start}</div>
        <div aria-label='end-date'>End Date: {date_end}</div>
      </section>
      <section className={styles.alignLeft}>
        <h2>Description</h2>
        <p aria-label='description'>
          {description ? description : 'No description entered.'}
        </p>
      </section>
      <section className={styles.alignLeft}>
        <h2>Notes</h2>
        <p aria-label='notes'>
          {notes ? notes : 'No notes entered.'}
        </p>
      </section>
    </div>
  )
}
