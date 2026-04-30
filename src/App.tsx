import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './components/home';
import About from './components/about';
import Location from './components/location';
import Pricing from './components/pricing';
import Login from './components/login';
import Signup from './components/signup';
import Contact from './components/contact';

function App () {

  return (
    <>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />

          <div className="flex-1 p-6 md:ml-20 lg:ml-70">

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/location" element={<Location />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
        </div>
    </>
  )
}

export default App;
