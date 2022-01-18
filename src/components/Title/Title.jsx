import { Link } from "react-router-dom";

export default function Title({ pageTitle }) {
  return (
    <div>
      {pageTitle}
      <section className="tab-nav-1">{pageTitle}</section>
      <section className="tab-nav-2">
        {pageTitle === "Projects" ? (
          <Link to="/clients">Clients</Link>
        ) : (
          "Projects"
        )}
      </section>
      <section className="tab-nav-3">
        {pageTitle === "Projects" ? (
          <Link to="/newproject">New Project</Link>
        ) : (
          <Link to="/newclient">New Client</Link>
        )}
      </section>
    </div>
  );
}
