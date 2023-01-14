import { SkillWrapper } from "../../styles/skill.styled"
import { Wrapper } from "../../styles/wrapper.styled"

const Skill: React.FC = () => {
    return(
     <Wrapper>
        <SkillWrapper>
            <div className="head">
                <h1>SKILLS</h1>
            </div>
            <ul className="one"> 
                <div>Programming and Web Design</div>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>Hands-on with Microsoft Products</li>
                    <ul className="two">
                        <li>Word</li>
                        <li>PowerPoint</li>
                        <li>Excel</li>
                        <li>Adept with internet and social media</li>
                    </ul>
            </ul>
        <ul className="three">
            <div>Basic Grammar Proficiency</div>
                <li>English</li>
                <li>Filipino</li>
                <li>Cebuano</li>
            </ul>
        <ul className="four">
            <div>Soft Skills</div>
                <li>Teamwork</li>
                <li>Critical Thinking</li>
                <li>Problem Solving</li>
                <li>Communication Skills</li>
                <li>Decision Making</li>   
            </ul>
        </SkillWrapper>
     </Wrapper>
    )
}

export default Skill 