import Stats from "./Components/Stats";
import Images from "./Components/Images";
import { useState } from "react";
import { shuffle } from "./Components/Utils";
import ImagesData from "./Components/ImagesData";

const App = () => {
  const [images, setImages] = useState(ImagesData[0]);
  const handleClick = (name) => {
    setImages([]);
    setTimeout(() => {
      setImages(shuffle(images));
    }, 50);
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
        <Stats />
      </div>

      <Images images={images} handleClick={handleClick} />
    </div>
  );
};

export default App;
