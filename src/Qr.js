import React from 'react';
import { QRLine } from 'react-qrbtf';
import {Qrheader} from './Qrheader';


function Qr() {   
    const [patito, setPatito] = React.useState(' ');

        return (
            <React.Fragment>
            <Qrheader
                patito={patito}
                setPatito={setPatito} 
            />
            <QRLine
                value={patito}
                className="AsyQrCode"
                level="H"
                funcType = "B"
                styles={{ svg: {width: "600px"} }}
                type="round"
                direction="h-v"
                size={50}
                opacity={80}
                posType="rect"
                otherColor="#000000"
                posColor="#000000"
            />            
            </React.Fragment>
        )
}

export default Qr;