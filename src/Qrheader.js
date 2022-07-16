import React from "react";
import './Qrheader.css';
import {Qrlevel} from './Qrlevel';
import { Levelitem } from "./Levelitem";

/*Para a lista de niveles qr*/
const levelQr = [
  {level:"L",description:"Low"},
  {level:"M",description:"Medium"},
  {level:"H",description:"High"},
  {level:"VH",description:"Very High"}
]

function Qrheader({ patito, setPatito }) {
  
  let valorQr= '';

  /*Detecta cada cambio den el textbox*/
  const onValueQrChange = (event) => {     
    valorQr = (event.target.value);    
  }
  /*guarda el valor en el estado setPatito*/
  const GenerarQR=() => {    
    setPatito(valorQr);    
  };
  
  return (
    <React.Fragment>
    <div className="fromQr">
      <header className="formQr-header">  
        <h1> Generador  de códigos Qr </h1>                   
        <input className="inputHead" placeholder="Ingrese su texto aquí" onChange={onValueQrChange}></input>
        <button className="btnHead" onClick={GenerarQR}>Generar</button>
        {/*
          <Qrlevel>
          {levelQr.map(lev =>(
              <Levelitem key={lev.level} text={lev.description}/>
          ))}
        </Qrlevel>
        */}
          {/*
          <Qrvalue/>
          <Qrlevel/>
          <Qrtype/>
          <QrposType/>
          <QrotherColor/>
          <QrposColor/>
          */}
      </header><br></br>
    </div>
    </React.Fragment>
  );
}

export {Qrheader};
