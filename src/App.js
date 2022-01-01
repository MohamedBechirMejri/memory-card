import Stats from "./Components/Stats";
import Images from "./Components/Images";

const App = () => {
  return (
    <div>
      <h1>Detective Conan Memory Game</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once! You move to next level when you click on all the images.
      </p>
      <Stats />
      <Images />
    </div>
  );
};

export default App;
