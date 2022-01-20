import styles from './ProjectItem.module.css'

export default function ProjectItem({ project }) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.col}>
        <h3 className={styles.h3}>
          {project.title}
        </h3>
        <h4 className={styles.h4}>
          {project.clients.client_name}
        </h4>
      </div>
      <div className={styles.col}>
        <div>Hourly Rate: {project.hourly_rate}</div>
        <div>Hours Quoted: {project.hours_quoted}</div>
        <div>Quoted Price: {project.price_quoted}</div>
      </div>
    </div>
  )
}
