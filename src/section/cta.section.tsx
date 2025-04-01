import { FiDownload } from "react-icons/fi";

const CTA = () => {
    return <div className="bg-blue-600">
    <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span className="block">Prêt à briser les barrières linguistiques?</span>
        <span className="block text-blue-200">Téléchargez ChatTraductor dès aujourd'hui.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="ml-3 inline-flex rounded-md shadow">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-all duration-300">
            <FiDownload className="mr-2" />
            Télécharger pour Android
          </button>
        </div>
      </div>
    </div>
  </div>
};
export default CTA;