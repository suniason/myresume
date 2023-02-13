import { useEffect } from "react";
import { NavbarWrapper } from "../../styles/navbar.styled"

export interface Navigation{
    clicked : (section: number) => void;
}

const Navbar: React.FC<Navigation> = (prop: Navigation) => {

    const handleHover = (e:any) => {
        e.target.classList.add('zoom');
        setTimeout(()=>{
            e.target.classList.remove('zoom');
        },500);
    };
    
    return(
        <NavbarWrapper>
            <nav>
                <div className="division">
                    <span onClick={() => prop.clicked(0)}>
                        <div className="name" onMouseEnter={handleHover}>R</div>
                        <div className="name" onMouseEnter={handleHover}>E</div>
                        <div className="name" onMouseEnter={handleHover}>S</div>
                        <div className="name" onMouseEnter={handleHover}>U</div>
                        <div className="name" onMouseEnter={handleHover}>M</div>
                        <div className="name" onMouseEnter={handleHover}>E</div>
                    </span>
                </div>
                <div className="division">
                    <ul>
                        <li onClick={() => prop.clicked(1)}>Profile</li>
                        <li onClick={() => prop.clicked(2)}>Education</li>
                        <li onClick={() => prop.clicked(3)}>Skills</li>
                        <li onClick={() => prop.clicked(4)}>Contact</li>
                    </ul>
                </div>
            </nav>
        </NavbarWrapper>
    )
}

export default Navbar
