import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919266896322" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-[999] w-[54px] h-[54px] bg-[#25d366] text-white flex items-center justify-center text-3xl rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-250 hover:scale-110"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
