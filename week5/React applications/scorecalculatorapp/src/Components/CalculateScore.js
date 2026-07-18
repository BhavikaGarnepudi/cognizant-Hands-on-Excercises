import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const avgScore = props.total / props.goal;

  return (
    <div className="score">
      <h1>Student Details:</h1>

      <p><b>Name:</b> {props.name}</p>
      <p><b>School:</b> {props.school}</p>
      <p><b>Total Score:</b> {props.total}</p>
      <p><b>Subjects:</b> {props.goal}</p>
      <p><b>Average Score:</b> {avgScore}</p>
    </div>
  );
}

export default CalculateScore;