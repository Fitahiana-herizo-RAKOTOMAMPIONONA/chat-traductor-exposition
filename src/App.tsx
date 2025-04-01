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
      {/* Footer */}
      <CustomFooter/>
    </div>
  );
}

export default App;