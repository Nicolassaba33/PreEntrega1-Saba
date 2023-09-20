import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// const ImgURL = "https://edicion.parentesis.com:8082/imagesPosts/coder00.jpg";

const App = () => {
  // [El NombreDeMiVariable / La funcion que me permite mutar esa variable]
  // useState([EL_VALOR_INICIAL_DE_ELNOMBREDEMIVARIABLE])
  const [number, setNumber] = useState(1212);

  return (
    <div>
      <Header title="Mi primer titulo" subtitle="Soy un subtitulo" />
      <NavBar />
      <ItemListContainer />
      <div className="UserSection">
        <CardUser
          name="Nicolas Saba"
          date="Se unio en Septiembre 2023"
          description="Soy nuevo en React"
          img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <CardUser
          name="Raul Guitierrez"
          date="Se unio en Agosto 2021"
          description="Soy nuevo en Angular"
          img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        />
        <CardUser
          name="Daniel Di Salvo"
          date="Se unio en Septiembre 2019"
          description="Senior en React"
          img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        />
      </div>
      <div className="CounterSection">
        <p>{number}</p>
      </div>
    </div>
  );
};

export default App;
