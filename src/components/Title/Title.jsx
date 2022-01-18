import { Link } from "react-router-dom";
import styles from "./Title.module.css";

export default function Title({ pageTitle }) {
  return (
    <div className={styles.titleBody}>
      <section className={styles.title}>{pageTitle}</section>
      <ul className={styles.tabnav}>
        <li className={styles.active}>
          <a href="#">{pageTitle}</a>
        </li>
        <li className={styles.tab2}>
          {pageTitle === "Projects" ? (
            <Link to="/clients">Clients</Link>
          ) : (
            "Projects"
          )}
        </li>
        <li className={styles.tab3}>
          {pageTitle === "Projects" ? (
            <Link to="/newproject">New Project</Link>
          ) : (
            <Link to="/newclient">New Client</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
