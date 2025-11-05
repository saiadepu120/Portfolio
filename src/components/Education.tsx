import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'SRM Institute of Science and Technology',
      degree: 'Computer Science and Engineering',
      specialization: 'Specialization in Cloud Computing',
      location: 'Chennai, India',
      period: 'June 2021 - May 2025',
      grade: 'CGPA: 9.34/10.00',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Telangana State Board of Intermediate Education',
      location: 'Hyderabad, India',
      period: 'March 2021',
      grade: 'Grade: 96.4%',
    },
    {
      institution: 'Narayana High School',
      degree: 'Telangana State Board of Secondary Education',
      location: 'Hyderabad, India',
      period: 'March 2019',
      grade: 'GPA: 9.7/10',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-slate-700 mt-1">{edu.degree}</p>
                      {edu.specialization && (
                        <p className="text-blue-600 font-medium mt-1">
                          {edu.specialization}
                        </p>
                      )}
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-slate-600 font-medium">{edu.period}</p>
                      <p className="text-slate-500 text-sm mt-1">{edu.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-blue-600 font-semibold">
                    <Award size={20} />
                    <span>{edu.grade}</span>
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
