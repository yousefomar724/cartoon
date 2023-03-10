import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Episodes from './pages/Episodes'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Programs from './pages/Programs'
import Seasons from './pages/Seasons'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='font-cairo' dir='rtl'>
      <Router>
        <Header />
        <div className='bg-mainBg bg-no-repeat bg-cover pt-[64px] md:pt-[120px]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/:showName' element={<Outlet />}>
              <Route index element={<Seasons />} />
              <Route path=':seasonNumber' element={<Episodes />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
