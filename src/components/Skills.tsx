export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'C', 'Python', 'Dart'],
    },
    {
      category: 'Web & UI',
      skills: ['ReactJS', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend & API',
      skills: ['Java Spring Boot', 'REST APIs', 'Django'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'Tomcat', 'RabbitMQ', 'Git', 'Postman'],
    },
    {
      category: 'Cloud & Security',
      skills: ['AWS S3', 'AWS Lambda', 'AWS Lex', 'AES-256', 'SHA-256'],
    },
    {
      category: 'Frameworks & Platforms',
      skills: ['Rasa', 'Android SDK', 'Flutter', 'Ethereum', 'Solidity'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['CNNs', 'NLP', 'Collaborative Filtering', 'Content-based Filtering'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Languages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-slate-800 mb-2">Telugu</div>
              <div className="text-slate-600">Native Language</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-slate-800 mb-2">English</div>
              <div className="text-slate-600">Working Proficiency, Fluent</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-slate-800 mb-2">Hindi</div>
              <div className="text-slate-600">Intermediate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
