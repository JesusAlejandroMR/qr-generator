import React from 'react';
import { QRLine } from 'react-qrbtf';
import { Qrheader } from './Qrheader';
import './index.css';

function Qr() {
  const [patito, setPatito] = React.useState(' ');
  const svgQrRef = React.useRef(null);
  const [zoomLevel, setZoomLevel] = React.useState(100);

  React.useEffect(() => {
    if (svgQrRef.current) {
      const zoomTarget = svgQrRef.current;
      zoomTarget.style.zoom = `${zoomLevel}%`;
    }
  }, [zoomLevel]);

  const zoomInButton = () => {
    setZoomLevel(prevZoom => prevZoom + 10);
  };

  const zoomOutButton = () => {
    setZoomLevel(prevZoom => prevZoom - 10);
  };

  return (
    <>
      <Qrheader patito={patito} setPatito={setPatito} />
      <div className='svgQr' ref={svgQrRef}>
        <QRLine
          value={patito}
          qrcode=''
          level='M'
          className='AsyQrCode'
          styles={{ svg: { width: '800px' } }}
          funcType='A'
          posType='roundRect'
          posColor='#000000'
          direction='h-v'
          lineWidth='50'
          lineOpacity='100'
          lineColor='#000000'
          icon=''
          iconScale={'50'}
        />
      </div>
      <div className='zoom-bar'>
        <button className='zoom-in' onClick={zoomInButton}>
          +
        </button>
        <button className='zoom-out' onClick={zoomOutButton}>
          -
        </button>
      </div>
    </>
  );
}

export default Qr;
