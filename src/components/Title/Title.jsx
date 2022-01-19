import styles from './Title.module.css'
import TitleNav from './TitleNav'

export default function Title({ pageTitle }) {
  return (
    <div className={styles.titleBody}>
      <section className={styles.title}>{pageTitle}</section>
      <TitleNav pageTitle={pageTitle} />
    </div>
  )
}
