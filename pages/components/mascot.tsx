import React, { useEffect, useState } from "react"
import { MascotWrapper } from "../../styles/intro.styled"

const Mascot: React.FC = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const wave = (
        ['wave_1.png','wave_2.png','wave_3.png','wave_4.png','wave_5.png','wave_6.png','wave_7.png','wave_8.png']
    )
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((currentIndex+1) % wave.length);
        },150);
        return () => clearInterval(interval);
    },[currentIndex]);

    return(
        <MascotWrapper>
            <img className='mascot' src={"/mascot/"+wave[currentIndex]} alt='Mascot'/>
        </MascotWrapper>
    )
}

export default Mascot;
