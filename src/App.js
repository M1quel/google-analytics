import Gallery from "./components/Gallery";
import Pitch from "./components/Pitch";
import PrimaryNavigation from "./components/PrimaryNavigation";
import Testimonials from "./components/Tesimonials";
import "./style.scss";

function App() {
  return (
    <>
      <PrimaryNavigation/>
      <Gallery/>
      <Pitch/>
      <Testimonials/>
    </>
  );
}

export default App;
