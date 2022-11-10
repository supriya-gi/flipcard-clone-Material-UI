import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";

function App() {
  const images = [
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvvzMMAAWHgzsKw8MnMrEQ6PTdyzhd-h2hg&usqp=CAU",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ONseJI7RRK9vTtywJnKD93YmCQlfN168Og&usqp=CAU",
    },
    {
      id: "3",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/1176cec8a9974c97.jpg?q=50",
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
