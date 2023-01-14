import { IntroWrapper, NameWrapper } from "../../styles/intro.styled"
import { Wrapper } from "../../styles/wrapper.styled"
import Mascot from "./mascot"

const Intro : React.FC = () => {
    
    return(
        <Wrapper>
            <IntroWrapper>
                <NameWrapper>
                    <div className="container">
                        <div className="greet">Hello, I'm</div>
                        <div className="name">
                            <span>
                                Brett Josef C. Galvez
                            </span>
                        </div> 
                    </div>
                </NameWrapper>
                <Mascot/>
            </IntroWrapper>
        </Wrapper>
    )
}

export default Intro