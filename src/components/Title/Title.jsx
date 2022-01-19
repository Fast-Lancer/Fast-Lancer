import styles from './Title.module.css'
import TitleNav from './TitleNav'

export default function Title({ pageTitle, pageHeader }) {
  return (
    <div className={styles.titleBody}>
      <section className={styles.title}>{pageHeader}</section>
      <TitleNav pageTitle={pageTitle, pageHeader} />
    </div>
  )
}
