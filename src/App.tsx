import './App.css';
import CustomFooter from './components/customFooter';
import HeroSection from './section/hero.section';
import FeaturesSection from './section/future.section';
import CTA from './section/cta.section';
import Testimonials from './section/testimonials.section';
import Navigation from './components/navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Conteneur principal centré */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl:">
        {/* Navigation */}
        <Navigation/>

        {/* Hero Section */}
        <HeroSection/>

        {/* Features Section */}
        <FeaturesSection/>      

        {/* Testimonials */}
        <Testimonials/>

        {/* CTA Section */}
        <CTA/>
      </div>
      
      {/* Footer (peut être en dehors pour occuper toute la largeur si besoin) */}
      <CustomFooter/>
    </div>
  );
}

export default App;