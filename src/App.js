
import './App.css';
import logoMio from "./imagenes/logotipo.png";
import Boton from './componentes/Boton';
import Pantalla from "./componentes/Pantalla";
import BotonClear from './componentes/BotonClear';
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor)
  };


  const calculadarResultado = () =>{
    if (input){
      setInput(evaluate(input))  
    } else{
      alert("Por favor ingrese valores para calcular");
    }
    
  };


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
      <img
      src={logoMio}
      className="freecodecamp-logo"
      alt="logo mio" />
      </div>
      <div className="contenedor-principal">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton>*</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={calculadarResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear= {() => setInput("")}>Borrar
          </BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App;
