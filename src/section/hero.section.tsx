const HeroSection = () => {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Parlez sans frontières avec <span className="text-blue-600">ChatTraductor</span>
                </h1>
                <p className="text-lg text-gray-600">
                  L'application révolutionnaire qui brise les barrières linguistiques en temps réel. 
                  Communiquez naturellement avec des personnes du monde entier, quelle que soit leur langue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                    Commencer gratuitement
                  </button>
                  <button className="px-8 py-3 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-all duration-300">
                    Voir la démo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-blue-100 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="bg-gray-100 p-3 flex items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="mx-auto text-sm font-medium">ChatTraductor</div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-blue-100 rounded-r-lg rounded-bl-lg px-4 py-2 max-w-xs">
                          <p className="text-gray-800">Bonjour! Comment ça va?</p>
                          <p className="text-xs text-gray-500 text-right mt-1">10:30 AM</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 rounded-l-lg rounded-br-lg px-4 py-2 max-w-xs">
                          <p className="text-white">Hello! How are you?</p>
                          <p className="text-xs text-blue-100 text-right mt-1">10:30 AM</p>
                        </div>
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Message traduit automatiquement
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full opacity-70"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>;
};
export default HeroSection;