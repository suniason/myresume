/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import { MascotWrapper } from "../../styles/intro.styled"

const Mascot: React.FC = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const wave = (
        ['wave_1.png','wave_2.png','wave_3.png','wave_4.png','wave_5.png','wave_6.png','wave_7.png','wave_8.png']
    )
    
    const changeIndex = () => {
        setCurrentIndex((currentIndex+1) % wave.length);
    }
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            changeIndex();
        },150);
        return () => clearInterval(interval);
    },[currentIndex]); //adding the missing dependency

    return(
        <MascotWrapper>
            <img className='mascot' src={"/mascot/"+wave[currentIndex]} alt='Mascot'/>
        </MascotWrapper>
    )
}

export default Mascot;
