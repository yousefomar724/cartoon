import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Episodes from './pages/Episodes'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SeasonOutlet from './pages/SeasonOutlet'
import Seasons from './pages/Seasons'

const App = () => {
  return (
    <div className='font-cairo' dir='rtl'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:showName' element={<SeasonOutlet />}>
            <Route index element={<Seasons />} />
            <Route path=':seasonNumber' element={<Episodes />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
