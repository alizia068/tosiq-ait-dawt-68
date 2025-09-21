import React from 'react'
import SectionHeading from './SectionHeading'
import noPicture from '../assets/images/no-picture.jpg'
const PersonalInformation = () => {
  return (
    <center>
      {/* <SectionHeading heading="Micheal Harris" /> */}
      <img src={noPicture} alt="User profile image" width={56}/>
      <h4>UI/UX Designer | 3D Animation | Software Engineer</h4>
      <p>Lahore, Pakistan | abc@mail.com | +92 312 34 56 789 | linkedin.com/in/acountname123</p>
    </center>
  )
}

export default PersonalInformation
