import { ContactWrapper } from "../../styles/contact.styled"
import { AiFillFacebook, AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { Wrapper } from "../../styles/wrapper.styled";

const Contact: React.FC = () => {
    const iconSize = 40;
    const mailAddress = 'galvezbrett17@gmail.com';
    const discordNametag = 'Shinigami#8997'

    const mailClicked = () => {
        navigator.clipboard.writeText(mailAddress);
        alert("E-mail Address Copied");
    }

    const discordClicked = () => {
        navigator.clipboard.writeText(discordNametag);
        alert("Discord Name Tag Copied");

    }

    return(
        <Wrapper>
            <ContactWrapper>
                <ul>
                    <div>CONTACT ME</div>
                    <li>
                        <a href="https://www.facebook.com/brett.galvez.77" target="_blank" rel="noreferrer">
                            <AiFillFacebook color="#0099ff" size={iconSize}/>
                        </a>
                    </li>
                    <li><a href="https://github.com/Sunias17" target="_blank" rel="noreferrer">
                            <AiFillGithub color="#0099ff" size={iconSize}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/brett-galvez-718b1324a/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin color="#0099ff" size={iconSize}/>
                        </a>
                    </li>
                    <li>
                        <a onClick={discordClicked}>
                            <FaDiscord color="#0099ff" size={iconSize}/>
                        </a>
                    </li>
                    <li>
                        <a onClick={mailClicked}>
                            <AiFillMail color="#0099ff" size={iconSize}/>
                        </a>
                    </li>
                </ul>
            </ContactWrapper>
        </Wrapper>
    )
}

export default Contact