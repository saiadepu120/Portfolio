import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fadeIn">
          <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-[3px]">
            <img
              src="/profile.jpg"
              alt="Sai Bharadwaj Adepu"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-4">
            Sai Bharadwaj Adepu
          </h1>

          <p className="text-2xl sm:text-3xl text-blue-600 font-medium mb-6">
            Software Developer
          </p>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Motivated Software Developer specializing in full-stack and mobile application development.
            Building AI-powered solutions and scalable applications with modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:saibharadwaj980@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          <a
            href="tel:+917729034411"
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl border border-slate-200"
          >
            <Phone size={20} />
            <span>Call</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12 text-slate-600">
          <a
            href="https://www.linkedin.com/in/sai-bharadwaj-b52431249/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/saiadepu120"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Hyderabad, India</span>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
