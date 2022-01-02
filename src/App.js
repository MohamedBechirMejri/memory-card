import Stats from "./Components/Stats";
import Images from "./Components/Images";
import { useState, useEffect } from "react";
import ImagesData from "./Components/ImagesData";

const App = () => {
  const [images, setImages] = useState(ImagesData[0]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (score === 48) {
      setWon(true);
    }
    if (score > topScore) setTopScore(score);
    if (clicked.length === images.length) {
      setLevel(level + 1);
      setClicked([]);
      setImages(ImagesData[level]);
    } else {
      const a = [...images];
      for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      setImages([...a]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const handleClick = (name) => {
    setLoading(true);
    if (clicked.includes(name)) {
      setIsGameOver(true);
    } else {
      setScore(score + 1);
      setClicked([...clicked, name]);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-t from-slate-600 to-slate-800 min-h-screen w-screen flex flex-col items-center justify-start text-center text-white   font-bold gap-8 select-none ">
      <div className="flex justify-between text-left items-center w-full pl-2 pr-4">
        <div>
          <h1 className="text-[2em] ">Detective Conan Memory Game</h1>
          <p className="  text-[1em]">
            Get points by clicking on an image but don't click on any more than
            once!
            <br />
            You move to next level when you click on all the images.
          </p>
        </div>
        <Stats score={score} topScore={topScore} level={level} />
      </div>

      {won ? (
        <div className="flex flex-col items-center justify-center gap-4 transition-all ">
          <h1 className="text-[2em] ">You Win!</h1>
          <p className="  text-[1em]">
            You have completed all the levels.
            <br />
            You can play again by clicking on the button below.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              setScore(0);
              setTopScore(0);
              setLevel(1);
              setClicked([]);
              setImages(ImagesData[0]);
              setWon(false);
            }}
          >
            Play Again
          </button>
        </div>
      ) : isGameOver ? (
        <div className="flex flex-col items-center justify-center gap-4 transition-all ">
          <h1 className="text-[2em] ">Game Over</h1>
          <p className="  text-[1em]">
            You scored {score} points.
            <br />
            You have reached level {level}.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              setScore(0);
              setClicked([]);
              setLevel(1);
              setImages(ImagesData[0]);
              setIsGameOver(false);
            }}
          >
            Play Again
          </button>
        </div>
      ) : loading ? (
        <h1>Loading</h1>
      ) : (
        <Images images={images} handleClick={handleClick} />
      )}
    </div>
  );
};

export default App;
