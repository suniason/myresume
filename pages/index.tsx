import { useRef } from 'react'
import Contact from './components/contact'
import Education from './components/education'
import Intro from './components/intro'
import Navbar from './components/navbar'
import Profile from './components/profile'
import Skill from './components/skill'

export default function Home() {
  const IntroRef = useRef<null | HTMLDivElement>(null);
  const profileRef = useRef<null | HTMLDivElement>(null);
  const educationRef = useRef<null | HTMLDivElement>(null);
  const skillRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const navClicked = (section: number) => {
    switch(section){
      case 0: 
        IntroRef.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 1: 
        profileRef.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 2: 
        educationRef.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 3: 
        skillRef.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 4: 
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        break;      
      }

  }

  return (
    <>
      <Navbar clicked={navClicked}/>
      <div ref={IntroRef}>
        <Intro/>
      </div>
      <div ref={profileRef}>
        <Profile/>
      </div>
      <div ref={educationRef}>
        <Education/>
      </div>
      <div ref={skillRef}>
        <Skill/>
      </div>
      <div  ref={contactRef}>
        <Contact/>
      </div>
    </>
  )
}
