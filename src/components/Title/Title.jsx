import styles from './Title.module.css'
import TitleNav from './TitleNav'

export default function Title({ pageTitle, pageHeader }) {
  return (
    <div className={styles.titleBody}>
      <TitleNav pageTitle={pageTitle} pageHeader={pageHeader} />
    </div>
  )
}
