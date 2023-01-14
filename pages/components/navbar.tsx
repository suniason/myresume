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
            <span onClick={() => prop.clicked(0)}>
                <div onMouseEnter={handleHover}>R</div>
                <div onMouseEnter={handleHover}>E</div>
                <div onMouseEnter={handleHover}>S</div>
                <div onMouseEnter={handleHover}>U</div>
                <div onMouseEnter={handleHover}>M</div>
                <div onMouseEnter={handleHover}>E</div>
            </span>
            <ul>
                <li onClick={() => prop.clicked(1)}>Profile</li>
                <li onClick={() => prop.clicked(2)}>Education</li>
                <li onClick={() => prop.clicked(3)}>Skills</li>
                <li onClick={() => prop.clicked(4)}>Contact</li>
            </ul>
        </NavbarWrapper>
    )
}

export default Navbar
