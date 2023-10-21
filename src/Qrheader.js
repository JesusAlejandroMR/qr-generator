import React, { useState } from "react";
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

function Qrheader({ patito, setPatito, imagen, setImagen }) {  
  /*Uso del checkbox*/
  const [isChecked, setIsChecked] = useState(false);  
  const handleOnChange = () => {
    setIsChecked(!isChecked);    
    var dataImg = document.getElementById("file");
    if (!isChecked === true) {      
      dataImg.style.display = 'flex'; 
    }else{
      dataImg.style.display = 'none'; 
      setImagen(null);
    }
  };    
  /*Selecciona la img*/
  let valorImg = '';   

  const get_image_path = (event) => {    
    const file = event.target.files[0];    
    const imageUrl = URL.createObjectURL(file);
    setImagen(imageUrl);
  }

   
  /*Detecta cada cambio den el textbox*/
  let valorQr = ' '; 
  const onValueQrChange = (event) => {     
    valorQr = (event.target.value);    
  }
    /*guarda el valor en el estado setPatito*/
  const GenerarQR=() => {    
    setPatito(valorQr);
    var objInput = document.getElementById("inputHead");
    objInput.value = ''; // Cambio a value en lugar de val
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
    /* Descarga el PNG */
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
        <input className="inputHead" id="inputHead" placeholder="Ingrese su texto aquí" onChange={onValueQrChange}/>
        <div className="botoneraImg">
          <input type="checkbox" className="chbImg" name="chbImg" checked={isChecked} onChange={handleOnChange}/>Añadir Img        
          <input className="btnIconHead" type="file" accept="image/*" id="file" onClick={get_image_path} onChange={get_image_path}/>
        </div>
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
