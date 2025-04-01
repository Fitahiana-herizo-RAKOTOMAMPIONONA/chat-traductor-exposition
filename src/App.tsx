import { useState } from 'react';
import { FiDownload, FiGlobe, FiMessageSquare, FiZap, FiCheckCircle, FiUsers, FiSmartphone, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import './App.css';
import CustomFooter from './components/customFooter';
import HeroSection from './section/hero.section';
import FeaturesSection from './section/future.section';
import CTA from './section/cta.section';
import Testimonials from './section/testimonials.section';

function App() {
  const [date] = useState(new Date());
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="vite.svg" alt="Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold text-blue-600">ChatTraductor</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('features')} 
                className={`px-3 py-2 text-sm font-medium ${activeTab === 'features' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => setActiveTab('about')} 
                className={`px-3 py-2 text-sm font-medium ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                À propos
              </button>
              <button 
                onClick={() => setActiveTab('contact')} 
                className={`px-3 py-2 text-sm font-medium ${activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Contact
              </button>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
              <FiDownload className="mr-2" />
              Télécharger
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <FeaturesSection/>      

      {/* Testimonials */}
      <Testimonials/>

      {/* CTA Section */}
      <CTA/>
      {/* Footer */}
      <CustomFooter/>
    </div>
  );
}

export default App;