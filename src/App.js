import Stats from "./Components/Stats";
import Images from "./Components/Images";
import { useState } from "react";
import { shuffle } from "./Components/Utils";

const App = () => {
  const [images, setImages] = useState([
    // {
    //   name: "Conan",
    //   url: "https://www.detectiveconanworld.com/wiki/images/archive/9/9e/20110914002215%21Conan_Edogawa_60px.jpg",
    // },
    {
      name: "Conan2",
      url: "https://www.detectiveconanworld.com/wiki/images/0/00/Conan_Edogawa_Profile.png",
    },
    {
      name: "Kogoro",
      url: "https://www.detectiveconanworld.com/wiki/images/c/c5/Kogoro_Mouri_Profile2.png",
    },
    {
      name: "Ran",
      url: "https://www.detectiveconanworld.com/wiki/images/9/92/Ran_Mouri_Profile.jpg",
    },
    {
      name: "Shinshi",
      url: "https://www.detectiveconanworld.com/wiki/images/3/3b/Shinichi_Kudo_Profile.jpg",
    },
    {
      name: "Conan2",
      url: "https://www.detectiveconanworld.com/wiki/images/0/00/Conan_Edogawa_Profile.png",
    },
    {
      name: "Kogoro",
      url: "https://www.detectiveconanworld.com/wiki/images/c/c5/Kogoro_Mouri_Profile2.png",
    },
    {
      name: "Ran",
      url: "https://www.detectiveconanworld.com/wiki/images/9/92/Ran_Mouri_Profile.jpg",
    },
    {
      name: "Shinshi",
      url: "https://www.detectiveconanworld.com/wiki/images/3/3b/Shinichi_Kudo_Profile.jpg",
    },
    {
      name: "Shinshi",
      url: "https://www.detectiveconanworld.com/wiki/images/3/3b/Shinichi_Kudo_Profile.jpg",
    },
  ]);
  const handleClick = (name) => {
    setImages([]);
    setTimeout(() => {
      setImages(shuffle(images));
    }, 1);
  };

  return (
    <div className="bg-gradient-to-t from-orange-600 to-pink-900 h-screen w-screen flex flex-col items-center justify-start text-center text-white   font-semibold gap-4 pt-8">
      <h1 className="text-[2em]  ">Detective Conan Memory Game</h1>
      <p className="  text-[1em]">
        Get points by clicking on an image but don't click on any more than
        once! You move to next level when you click on all the images.
      </p>
      <Stats />
      <Images images={images} handleClick={handleClick} />
    </div>
  );
};

export default App;
