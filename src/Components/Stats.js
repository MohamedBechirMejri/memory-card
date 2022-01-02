const Stats = (props) => {
  return (
    <div className="text-right text-[1.1em]">
      <h2>Level {props.level}</h2>
      <h2>Score: {props.score}</h2>
      <h2>Top Score: {props.topScore}</h2>
    </div>
  );
};

export default Stats;
