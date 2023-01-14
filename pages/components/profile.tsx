import { ProfileWrapper } from "../../styles/profile.styled"
import { Wrapper } from "../../styles/wrapper.styled"


const Profile: React.FC = () => {
    return(
        <div> 
            <Wrapper>
                <ProfileWrapper>
                    <div className="head">
                        <h1>PROFILE</h1>
                    </div>
                    <div className="photo">
                        <img src="IDPic.jpg" alt="Profile Photo" />
                    </div>
                    <div className="content">
                        A dedicated, passionate, trainable, hardworking student currently pursuing 
                        Bachelor of Science in Information Technology. 
                        Have fundamental programming skills in C, Java, Python (Django), SQL, CSS and JS.  
                        Willing to learn and have good adaptability skills. 
                        Does tasks successfully and finishes it punctually. 
                        Seeking to improve skills and knowledge for future ventures.
                    </div>
                </ProfileWrapper>
            </Wrapper>
        </div>
    )
}

export default Profile