import styles from './ProjectItem.module.css'

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
      <div className={styles.col}>
        <div>Hourly Rate: {hourly_rate}</div>
        <div>Hours Quoted: {hours_quoted}</div>
        <div>Quoted Price: {price_quoted}</div>
      </div>
    </div>
  )
}
