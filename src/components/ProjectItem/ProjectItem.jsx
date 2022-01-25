import styles from './ProjectItem.module.css'
import clock from '../../assets/icons/clockSmall.png'
import money from '../../assets/icons/moneySmall.png'

export default function ProjectItem({ project }) {
  const { title, clients, hourly_rate, hours_quoted, price_quoted } = project

  return (
    <div className={styles.projectItem}>
      <div className={styles.col}>
        <h3 className={styles.h3}>
          {title}
        </h3>
        <h4 className={styles.h4}>
          {clients.client_name}
        </h4>
      </div>
      <div className={styles.detailCol}>
        <div className={styles.detailContainer}><img src={clock} alt='clock' />Hourly Rate: ${hourly_rate}</div>
        <div className={styles.detailContainer}>
          <img src={clock} alt='clock' />Hours Quoted: {hours_quoted}hrs</div>
        <div className={styles.detailContainer}>
          <img src={money} alt='money' />
          Quoted Price: ${price_quoted}</div>
      </div>
    </div>
  )
}
