import Certifications from "./components/Certifications"
import Education from "./components/Education"
import Experience from "./components/Experience"
import PersonalInformation from "./components/PersonalInformation"
import Skills from "./components/Skills"
import Summary from "./components/Summary"

const Resume = () => {
  return (
    <div className="w-[750px] my-8 mx-auto">
    <PersonalInformation />
    <Summary />
    <Experience />
    <Education />
    <Skills />
    <Certifications />
    </div>
  )
}

export default Resume