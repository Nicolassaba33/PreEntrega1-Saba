import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/navbar";
import Portada from "./components/Portada/Portada";
import Footer from "./components/Footer/Footer";

import imgProduct01 from "./assets/Images/Product01.png";
import imgProduct02 from "./assets/Images/Product02.png";
import imgProduct03 from "./assets/Images/Product03.png";
import imgProduct04 from "./assets/Images/Product04.png";
import imgProduct05 from "./assets/Images/Product05.png";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Portada />
      <div className="UserSection">
        <ItemListContainer img={imgProduct01} name="Saco" price="$25.000" />
        <ItemListContainer img={imgProduct02} name="Camisa" price="$18.000" />
        <ItemListContainer
          img={imgProduct03}
          name="Buzo De Color"
          price="$23.000"
        />
        <ItemListContainer
          img={imgProduct04}
          name="Pantalon Jean"
          price="$21.000"
        />
        <ItemListContainer
          img={imgProduct05}
          name="Pantalon Jean Celeste"
          price="$20.000 "
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
