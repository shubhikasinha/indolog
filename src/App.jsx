import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import QcPlatform from './pages/QcPlatform';
import Industries from './pages/Industries';
import About from './pages/About';
import Offices from './pages/Offices';
import Contact from './pages/Contact';
import OceanFreight from './pages/services/OceanFreight';
import AirFreight from './pages/services/AirFreight';
import RoadFreight from './pages/services/RoadFreight';
import CustomsBrokerage from './pages/services/CustomsBrokerage';
import Multimodal from './pages/services/Multimodal';
import ImportConsole from './pages/services/ImportConsole';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Insights from './pages/Insights';
import { PersonalizationProvider } from './context/PersonalizationContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <PersonalizationProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/ocean-freight" element={<OceanFreight />} />
          <Route path="services/air-freight" element={<AirFreight />} />
          <Route path="services/road-freight" element={<RoadFreight />} />
          <Route path="services/customs-brokerage" element={<CustomsBrokerage />} />
          <Route path="services/multimodal" element={<Multimodal />} />
          <Route path="services/import-console" element={<ImportConsole />} />
          <Route path="qc-platform" element={<QcPlatform />} />
          <Route path="industries" element={<Industries />} />
          <Route path="about" element={<About />} />
          <Route path="offices" element={<Offices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>
    </PersonalizationProvider>
  );
}

export default App;
