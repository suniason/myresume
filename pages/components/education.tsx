import { EducationWrapper } from "../../styles/education.styled"
import { Wrapper } from "../../styles/wrapper.styled"


const Education: React.FC = () => {
    return(
        <Wrapper>
            <EducationWrapper>
                <h1>EDUCATION</h1>
                <div className="gridcontainer">
                    <span>JUNIOR HIGH SCHOOL
                        <div className="content">
                            <div className="school">Diaz College</div>
                            <i className="date">2014-2018</i>
                        </div>
                    </span>
                    <span>SENIOR HIGH SCOOL
                        <div className="content">
                            <div className="school">University of San Jose - Recoletos</div>
                            <i className="date">2018-2019</i>
                        </div>
                        <div className="content">
                            <div className="school">St. Paul University - Dumaguete</div>
                            <i className="date">2019-2020</i>
                        </div>
                    </span>
                    <span>COLLEGE
                        <div className="content">
                            <div className="school">Cebu Institute of Technology - University</div>
                            <i className="date">2020-Present</i>
                        </div>
                    </span>
                </div>
            </EducationWrapper>
        </Wrapper>
    )
}

export default Education