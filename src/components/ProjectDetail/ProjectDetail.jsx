import styles from './ProjectDetail.module.css'
import clock from '../../assets/icons/clockSmall.png'
import www from '../../assets/icons/wwwSmall.png'
import money from '../../assets/icons/moneySmall.png'

export default function ProjectDetail({ project }) {
  const { hourly_rate, URL, date_start, date_end, description, notes, clients, hours_worked, price_quoted, hours_quoted } = project

  return (
    <main>
      <div className={styles.projectDetail}>
        Client Name
        <div className={styles.clientName}>

          <h1 aria-label='client-name'>
            {clients?.client_name ?? 'No client name entered'}
          </h1>
        </div>
        <section className={styles.infoSection}>
          <div className={styles.infoItem} aria-label='hourly-rate'>
            <img src={money} alt='money' />
            Hourly Rate: ${hourly_rate}</div>

          {URL && <div className={styles.infoItem} aria-label='URL'><img src={www} alt='www' />URL: {URL}</div>}
          <div className={styles.infoItem} aria-label='start-date'><img src={clock} alt='clock' />Start Date: {date_start}</div>
          <div className={styles.infoItem} aria-label='end-date'><img src={clock} alt='clock' />Deadline: {date_end}</div>
        </section>
        <section className={styles.alignLeft}>
          <h2>Project Description:</h2>
          <p className={styles.textBlock} aria-label='description'>
            {description ? description : 'No description entered.'}
          </p>
        </section>
        <section className={styles.alignLeft}>
          <h2>Hours and Pricing:</h2>
          <p className={styles.alignItem}><img src={clock} alt='clock' />Hours Worked: {hours_worked}</p>
          <p className={styles.alignItem}><img src={clock} alt='clock' />Hours Quoted: {hours_quoted}</p>
          <p className={styles.alignItem}><img src={money} alt='money' />Price Quoted: ${price_quoted}</p>
        </section>
        <section className={styles.alignLeft}>
          <h2>Notes</h2>
          <p className={styles.textBlock} aria-label='notes'>
            {notes ? notes : 'No notes entered.'}
          </p>
        </section>
      </div>
    </main>
  )
}
