import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { MainFocus } from "../components/MainFocus"
import { OurProjects } from "../components/OurProjects"
import { ContactUs } from "../components/ContactUs"

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <MainFocus />
      <OurProjects />
      <ContactUs />
    </>
  )
}