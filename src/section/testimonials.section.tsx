const Testimonials = () => {
    return <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ce que nos utilisateurs disent
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            quote: "ChatTraductor a transformé ma façon de communiquer avec mes clients internationaux. Plus besoin de passer par des traducteurs externes!",
            name: "Marie Dupont",
            role: "Chef d'entreprise"
          },
          {
            quote: "En tant qu'étudiant Erasmus, cette application m'a sauvé la vie. Je peux maintenant parler avec mes camarades de classe sans barrières.",
            name: "Thomas Martin",
            role: "Étudiant"
          },
          {
            quote: "La précision des traductions est impressionnante. Bien meilleure que les autres solutions que j'ai essayées.",
            name: "Sophie Leroy",
            role: "Traductrice professionnelle"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-600 italic mb-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-gray-900 font-medium">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-500">
              {testimonial.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
};

export default Testimonials;