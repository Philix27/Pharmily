import {HomeLanding} from '../comps/Landing/Landing'
import ContactUs from '../comps/ContactUsForm/ContactUsForm'
import About from '../comps/AboutUs/About'
import OurGoal from '../comps/OurGoal/OurGoal'
import Ourservices from '../comps/Services/OurServices'


export default function Home() {
  return (
    <div >
      <HomeLanding />
      <OurGoal />
      <Ourservices />
      <About/>
      <ContactUs/>
    </div>
  )
}
