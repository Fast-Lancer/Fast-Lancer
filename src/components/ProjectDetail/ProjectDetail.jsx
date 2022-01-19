import styles from './ProjectDetail.module.css'

export default function ProjectDetail({ project }) {
  const { hourly_rate, URL, date_start, date_end, description, notes, clients } = project

  return <main>
    {clients && <div className={styles.clientName}><h1>{clients?.name}</h1></div>}
    <section className={styles.infoSection}>
      <h2>Hourly Rate: {hourly_rate}</h2>
      {URL && <h2>Repo: {URL}</h2>}
      <h2>Start Date: {date_start}</h2>
      <h2>End Date: {date_end}</h2>
    </section>
    <section className={styles.alignLeft}>
      <h2>Description</h2>
      <p>
        {description ? description : 'Description goes here'}
      </p>
    </section>
    <section className={styles.alignLeft}>
      <h2>Notes</h2>
      <p>
        {notes ? notes : 'Notes go here'}
      </p>
    </section>
  </main>
}
