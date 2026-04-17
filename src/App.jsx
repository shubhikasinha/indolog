import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import QcPlatform from './pages/QcPlatform';
import Industries from './pages/Industries';
import About from './pages/About';
import Offices from './pages/Offices';
import Contact from './pages/Contact';
import { PersonalizationProvider } from './context/PersonalizationContext';

function App() {
  return (
    <PersonalizationProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="qc-platform" element={<QcPlatform />} />
          <Route path="industries" element={<Industries />} />
          <Route path="about" element={<About />} />
          <Route path="offices" element={<Offices />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </PersonalizationProvider>
  );
}

export default App;
