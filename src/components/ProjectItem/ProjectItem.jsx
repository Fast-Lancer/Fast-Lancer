export default function ProjectItem({ project }) {
  return (
    <div>
      <section>
        <h1>{project.title}</h1>
        <h3>{project.client.name}</h3>
      </section>
      <section>
        <div>Hourly Rate: {project.hourly_rate}</div>
        <div>Hours Quoted: {project.hours_quoted}</div>
        <div>Quoted Price: {project.price_quoted}</div>
      </section>
    </div>
  );
}
