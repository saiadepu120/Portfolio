import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Development Trainee',
      company: 'Agaram Technologies',
      location: 'Chennai, India',
      period: 'Jun 2025 – Present',
      highlights: [
        'Developing cross-platform iOS and Android applications using Flutter with a Java backend',
        'Implementing an offline-first architecture with SQLite for local storage and seamless synchronization',
        'Driving mobile development best practices, performance optimization, and clean, scalable code',
      ],
    },
    {
      title: 'Software Development Intern',
      company: 'Agaram Technologies',
      location: 'Chennai, India',
      period: 'Dec 2024 – Jun 2025',
      highlights: [
        'Built a full-stack AI chatbot using Rasa, Java Spring Boot, and ReactJS for an enterprise LIMS product',
        'Containerized microservices with Docker to improve deployment efficiency and scalability',
        'Engineered an offline-first Android app with PostgreSQL sync',
        'Collaborated with R&D team on scalable architecture and automated workflows',
        'Gained hands-on experience with API integration, real-time data processing, and production deployments',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Briefcase size={20} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-slate-600 mt-2 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
