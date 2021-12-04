import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Feature from './components/Feature';
import Footer from './components/Footer';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Single from './pages/Single';
import Contact from './pages/Contact';
function App(){  
return (
    <div> 
      <Topbar/>
      <Navbar/>
      <Carousel/>
      <Feature/>
      <About/>
      <Service/>
      <Team/>
      <Portfolio/>
      <Blog/>
      <Single/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
