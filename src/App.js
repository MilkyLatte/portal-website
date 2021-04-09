import "./App.css";
import Spacer from "./components/Layout/Spacer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Sections/Banner/Banner";
import Mission from "./Sections/Mission/Mission";
import RoadMap from "./Sections/Roadmap/Roadmap";
import Token from "./Sections/Token/Token";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />
      <Mission />
      <Token />
      <RoadMap />
      <Spacer height="100px" />
    </div>
  );
}

export default App;
