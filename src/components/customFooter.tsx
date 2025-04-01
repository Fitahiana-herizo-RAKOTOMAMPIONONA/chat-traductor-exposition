import { FiGlobe, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const CustomFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="mx-auto px-4 py-8">
        {/* Liens principaux */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo et copyright */}
          <div className="flex items-center flex-wrap gap-2 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img src="/vite.svg" alt="Logo" className="h-8 w-auto" />
              <span className="text-white font-medium">ChatTraductor</span>
            </div>
            <span className="hidden md:block text-gray-500">•</span>
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Tous droits réservés
            </span>
          </div>

          {/* Liens rapides */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
              Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
              Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
              Contact
            </a>
          </nav>
        </div>

        {/* Séparateur */}
        <hr className="border-gray-700 my-6" />

        {/* Réseaux sociaux et langue */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Sélecteur de langue */}
          <div className="flex items-center space-x-2">
            <FiGlobe className="text-gray-400" />
            <select 
              className="bg-gray-700 text-sm rounded px-2 py-1 focus:outline-none cursor-pointer"
              aria-label="Sélecteur de langue"
            >
              <option>Français</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          {/* Icônes réseaux sociaux */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FiFacebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FiInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;