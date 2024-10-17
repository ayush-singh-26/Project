import Home from './components/home';
import Navbar from './components/navbar'
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Home />
      <Footer/>
    </>
    );
}

export default App;
