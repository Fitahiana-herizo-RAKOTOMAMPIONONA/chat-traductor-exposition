import { FiCheckCircle, FiGlobe, FiMessageSquare, FiSmartphone, FiUsers, FiZap } from "react-icons/fi";

const FeaturesSection = () => {
    return <div className="bg-white py-16">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Fonctionnalités puissantes
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Découvrez ce qui rend ChatTraductor unique
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <FiZap className="w-8 h-8 text-blue-600" />,
            title: "Traduction instantanée",
            description: "Messages traduits en temps réel avec une latence minimale"
          },
          {
            icon: <FiGlobe className="w-8 h-8 text-blue-600" />,
            title: "+5 langues",
            description: "Support pour la plupart des langues parlées dans le monde"
          },
          {
            icon: <FiMessageSquare className="w-8 h-8 text-blue-600" />,
            title: "Chat fluide",
            description: "Interface conçue pour des conversations naturelles"
          },
          {
            icon: <FiCheckCircle className="w-8 h-8 text-blue-600" />,
            title: "Précis",
            description: "Technologie IA avancée pour des traductions précises"
          },
          {
            icon: <FiUsers className="w-8 h-8 text-blue-600" />,
            title: "Conversations de groupe",
            description: "Discutez avec plusieurs personnes dans différentes langues"
          },
          {
            icon: <FiSmartphone className="w-8 h-8 text-blue-600" />,
            title: "Multiplateforme",
            description: "Disponible sur mobile, tablette et ordinateur"
          }
        ].map((feature, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
};
export default FeaturesSection;