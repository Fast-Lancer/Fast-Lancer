import styles from './ProjectDetail.module.css'

export default function ProjectDetail({ project }) {
  const { hourly_rate, URL, date_start, date_end, description, notes, clients, hours_worked, price_quoted, hours_quoted } = project

  return (
    <div className={styles.projectDetail}>
      <div className={styles.clientName}>
        <h1 aria-label='client-name'>
          {clients?.client_name ?? 'No client name entered'}
        </h1>
      </div>
      <section className={styles.infoSection}>
        <div aria-label='hourly-rate'>Hourly Rate: {hourly_rate}</div>
        {URL && <div aria-label='URL'>URL: {URL}</div>}
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
      <section className={styles.alignLeft}>
        <h2>Hours and Pricing</h2>
        <p>Hours Worked: {hours_worked}</p>
        <p>Hours Quoted: {hours_quoted}</p>
        <p>Price Quoted: {price_quoted}</p>
      </section>
    </div>
  )
}
