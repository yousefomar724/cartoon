import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Episodes from './pages/Episodes'
import Home from './pages/Home'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'
import Programs from './pages/Programs'
import SeasonOutlet from './pages/SeasonOutlet'
import Seasons from './pages/Seasons'

const App = () => {
  return (
    <div className='font-cairo' dir='rtl'>
      <Router>
        <Header />
        <div className='bg-homeBg'>
          <div className='bg-gradient-to-r from-primary-900/90 to-secondary-900/90 pt-[64px] md:pt-[120px]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/programs' element={<Programs />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/:showName' element={<SeasonOutlet />}>
                <Route index element={<Seasons />} />
                <Route path=':seasonNumber' element={<Episodes />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
