import "./App.css";
import Header from "./components/Header";
import Carousal from "./components/Carousal";
import Footer from "./components/Footer";

function App() {
  const images = [
    {
      id: "1",
      image: "https://i.imgur.com/5VWT4R9.jpg",
    },
    {
      id: "2",
      image: "https://i.imgur.com/5VWT4R9.jpg",
    },
    {
      id: "3",
      image: "https://i.imgur.com/5VWT4R9.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Carousal images={images} />
      <Footer />
    </div>
  );
}

export default App;
