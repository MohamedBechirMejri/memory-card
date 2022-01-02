import Stats from "./Components/Stats";
import Images from "./Components/Images";
import { useState } from "react";
import ImagesData from "./Components/ImagesData";

const App = () => {
  const [images, setImages] = useState(ImagesData[0]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [level, setLevel] = useState(1);

  const handleClick = (name) => {
    // check if name is in clicked array
    if (clicked.includes(name)) {
      // if name is in clicked array
      // check if score is greater than top score
      if (score > topScore) {
        // if score is greater than top score
        // set top score to score
        setTopScore(score);
      }
      // set score to 0
      setScore(0);
      // set clicked to empty array
      setClicked([]);
    } else {
      // if name is not in clicked array
      // set score to score + 1
      setScore(score + 1);
      // set clicked to clicked array with name
      setClicked([...clicked, name]);
    }
    // shuffle images in array
    const a = [...images];
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    // set images to shuffled array
    setImages(a);
  };

  return (
    <div className="bg-gradient-to-t from-slate-600 to-slate-800 h-screen w-screen flex flex-col items-center justify-start text-center text-white   font-bold gap-8 select-none ">
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

      <Images images={images} handleClick={handleClick} />
    </div>
  );
};

export default App;
