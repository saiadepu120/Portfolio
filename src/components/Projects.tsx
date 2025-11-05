export default function Projects() {
  const projects = [
    {
      title: 'Blockchain-Cloud Fusion for Decentralized Data Management',
      period: 'May 2025',
      tools: ['Ethereum', 'Solidity', 'ReactJS', 'Django', 'AWS S3', 'AES-256', 'PostgreSQL', 'Docker'],
      highlights: [
        'Developed a scalable, secure data management system combining blockchain transparency and cloud scalability',
        'Used Solidity smart contracts to automate access control and data logging on the Ethereum blockchain',
        'Implemented real-time encryption and authentication using AES-256 and Proof-of-Stake (PoS) consensus',
        'Achieved 35% faster file operations and supported 10,000+ concurrent transactions',
      ],
    },
    {
      title: 'Cloud-Powered AI System for Advanced Plant Disease Detection',
      period: 'Dec 2023',
      tools: ['Python', 'Cloud Computing', 'Java', 'SQL', 'CNNs', 'Google Maps API'],
      highlights: [
        'Developed AI-based platform for plant disease identification using CNNs and cloud processing',
        'Built collaborative disease tracking and forecasting system with geolocation data',
        'Created disease density maps and prediction models for outbreak prevention',
        'Improved model accuracy through continuous learning with user-uploaded images',
      ],
    },
    {
      title: 'Chatbot Song Recommender System',
      period: 'Sept 2022',
      tools: ['Python', 'NLP', 'APIs', 'SQL', 'AWS Lex', 'AWS Lambda', 'Spotify API'],
      highlights: [
        'Developed chatbot using machine learning algorithms to recommend songs based on user emotions',
        'Implemented Collaborative Filtering and Content-based Filtering for emotion identification',
        'Integrated Spotify APIs for personalized songs and playlist recommendations',
        'Designed conversational flows using AWS Lex to improve user engagement',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 md:mb-0 flex-1">
                  {project.title}
                </h3>
                <span className="text-slate-600 font-medium">{project.period}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
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
