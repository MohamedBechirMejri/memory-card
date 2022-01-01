import Stats from "./Components/Stats";
import Images from "./Components/Images";
import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([
    {
      name: "Conan",
      url: "https://www.detectiveconanworld.com/wiki/images/archive/9/9e/20110914002215%21Conan_Edogawa_60px.jpg",
    },
    {
      name: "Conan",
      url: "https://www.detectiveconanworld.com/wiki/images/archive/9/9e/20110914002215%21Conan_Edogawa_60px.jpg",
    },
    {
      name: "Conan",
      url: "https://www.detectiveconanworld.com/wiki/images/archive/9/9e/20110914002215%21Conan_Edogawa_60px.jpg",
    },
  ]);

  return (
    <div className="bg-gradient-to-t from-orange-600 to-pink-900 h-screen w-screen flex flex-col items-center justify-start text-center text-white   font-semibold gap-8 pt-8">
      <h1 className="text-[2em]  ">Detective Conan Memory Game</h1>
      <p className="  text-[1em]">
        Get points by clicking on an image but don't click on any more than
        once! You move to next level when you click on all the images.
      </p>
      <Stats />
      <Images images={images} />
    </div>
  );
};

export default App;
