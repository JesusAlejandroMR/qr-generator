import React from "react";
import './Qrheader.css';
import { toPng } from 'html-to-image';
import {Qrlevel} from './Qrlevel';

/*Para a lista de niveles qr*/
const levelQr = [
  {level:"L",description:"Low"},
  {level:"M",description:"Medium"},
  {level:"H",description:"High"},
  {level:"VH",description:"Very High"}
]

function Qrheader({ patito, setPatito }) {
  
  let valorQr= ' ';

  /*Detecta cada cambio den el textbox*/
  const onValueQrChange = (event) => {     
    valorQr = (event.target.value);    
  }
  /*guarda el valor en el estado setPatito*/
  const GenerarQR=() => {    
    setPatito(valorQr);    
  };
  
    /* Descarga el SVG */
  const DownloadQRSvg = () => {
    const svgElement = document.getElementById("svgQr");
    svgElement.style.zoom = '100%';
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
  
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = URL.createObjectURL(blob);
    enlaceDescarga.download = "qr.svg";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
    svgElement.style.zoom = '50%';
  };  

  const DownloadQRPng = () => {
    const svgElement = document.getElementById("svgQr");
    svgElement.style.zoom = '100%';    
    toPng(svgElement)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'qr.png';
        link.href = dataUrl;
        link.click();
        svgElement.style.zoom = '50%';
      })
      .catch(function (error) {
        console.error('Error al generar la imagen:', error);
      });      
  }


  return (
    <React.Fragment>
    <div className="fromQr">
      <header className="formQr-header">  
        <h1> Generador  de códigos Qr </h1>                   
        <input className="inputHead" placeholder="Ingrese su texto aquí" onChange={onValueQrChange}></input>
        <div className="botonera">
          <button className="btnHead" onClick={GenerarQR}>Generar</button>
          <button className="btnHead" onClick={DownloadQRSvg}>SVG</button>
          <button className="btnHead" onClick={DownloadQRPng}>PNG</button>
        </div>
        {/*
          <Qrlevel>
          {levelQr.map(lev =>(
              <Levelitem key={lev.level} text={lev.description}/>
          ))}
          </Qrlevel>
        */}       
      </header><br></br>
    </div>
    </React.Fragment>
  );
}

export {Qrheader};
