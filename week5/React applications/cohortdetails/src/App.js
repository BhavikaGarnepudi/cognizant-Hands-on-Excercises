import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>

      <CohortDetails
        name="React Bootcamp"
        startedOn="10 Jul 2026"
        status="ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        name="Java Full Stack"
        startedOn="01 Jun 2026"
        status="completed"
        coach="Sarah"
        trainer="James"
      />
    </div>
  );
}

export default App;