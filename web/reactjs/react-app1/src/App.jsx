import Certifications from "./components/Certifications"
import Education from "./components/Education"
import Experience from "./components/Experience"
import PersonalInformation from "./components/PersonalInformation"
import Skills from "./components/Skills"
import Summary from "./components/Summary"

const App = () => {
  return (
    <>
    <PersonalInformation />
    <Summary />
    <Experience />
    <Education />
    <Skills />
    <Certifications />
    </>
  )
}

export default App