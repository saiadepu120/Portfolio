import { Award, Calendar } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'August 2025',
      status: 'Valid',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'July 2025 - July 2027',
      status: 'Valid',
    },
    {
      title: 'AWS Fundamentals: Building Serverless Applications',
      issuer: 'Amazon Web Services',
      date: 'June 2023',
      status: 'Valid',
    },
    {
      title: 'IaaS, PaaS, SaaS for Cloud Computing',
      issuer: 'Cloud Computing',
      date: 'August 2023',
      status: 'Valid',
    },
    {
      title: 'SQL and Relational Databases',
      issuer: 'Database Management',
      date: 'March 2024',
      status: 'Valid',
    },
    {
      title: 'C Programming',
      issuer: 'Programming',
      date: 'June 2022',
      status: 'Valid',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">{cert.issuer}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
