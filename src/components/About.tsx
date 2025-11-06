import { Code2, Database, Smartphone, Cloud } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Cross-platform iOS & Android apps with Flutter & Native Java',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with Java, ReactJS, and Spring Boot',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Expert in PostgreSQL, MySQL, and offline-first architectures',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, and containerized microservices',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a motivated Software Developer with hands-on experience in full-stack and mobile application development.
            Currently working at Agaram Technologies, I contribute to AI-powered chatbots and scalable web applications
            using Java, ReactJS, Python (Rasa), PostgreSQL, and Docker.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I'm passionate about building efficient, reliable software solutions that make a real impact. My expertise
            spans cross-platform mobile development, backend architecture, cloud technologies, and DevOps practices.
            I thrive on solving complex problems and delivering high-quality code that meets both user needs and
            business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
