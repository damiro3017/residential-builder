import '@fontsource-variable/roboto';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Gallery } from "./pages/Gallery"
import { Projects } from "./pages/Projects"
import { Contacts } from "./pages/Contacts"
import { NotFound } from "./pages/NotFound"
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectsItem } from './components/ProjectsItem';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectsItem />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
