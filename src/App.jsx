import '@fontsource-variable/roboto';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MainFocus } from './components/MainFocus';
import { OurProjects } from './components/OurProjects';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <MainFocus />
        <OurProjects />
        <ContactUs />
      </MainLayout>
    </>
  )
}

export default App
