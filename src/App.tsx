import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './components/home';
import About from './components/about';
import Location from './components/location';
import Pricing from './components/pricing';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Contact from './components/contact';
import Footer from './components/footer';
import Careers from './components/careers';
import FAQS from './components/faqs';
import { locationData } from "./data/locationData";

//navigation rules
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';


function App () {
  //const [collapsed, setCollapsed] = useState(false);
  //const { user, loading } = useContext(AuthContext);

  return (
    <>
        {/**outer dive and inner to keep layout consistent (footer stays where it is) */}
        <div className="flex flex-col min-h-screen">
          <Sidebar />

          <div className="flex p-10 flex-1
                          md:ml-65 lg:ml-100">

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/location" element={<Location locations={locationData} />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                  <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/faqs" element={<FAQS />} />
                </Routes>
          </div>
          <Footer />
        </div>
    </>
  )
}

export default App;
