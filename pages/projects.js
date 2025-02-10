import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Plant Sale Website',
      description: 'A fully responsive e-commerce site for selling plants.',
      link: 'https://github.com/your-username/plant-sale-website',
      image: '/assets/plant-sale.png',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'A tool to scan websites for potential vulnerabilities.',
      link: 'https://github.com/your-username/vulnerability-scanner',
      image: '/assets/vulnerability-scanner.png',
    },
    {
      title: 'Plant Sale Website',
      description: 'A fully responsive e-commerce site for selling plants.',
      link: 'https://github.com/your-username/plant-sale-website',
      image: '/assets/plant-sale.png',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'A tool to scan websites for potential vulnerabilities.',
      link: 'https://github.com/your-username/vulnerability-scanner',
      image: '/assets/vulnerability-scanner.png',
    },
    {
      title: 'Plant Sale Website',
      description: 'A fully responsive e-commerce site for selling plants.',
      link: 'https://github.com/your-username/plant-sale-website',
      image: '/assets/plant-sale.png',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'A tool to scan websites for potential vulnerabilities.',
      link: 'https://github.com/your-username/vulnerability-scanner',
      image: '/assets/vulnerability-scanner.png',
    },
    {
      title: 'Plant Sale Website',
      description: 'A fully responsive e-commerce site for selling plants.',
      link: 'https://github.com/your-username/plant-sale-website',
      image: '/assets/plant-sale.png',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'A tool to scan websites for potential vulnerabilities.',
      link: 'https://github.com/your-username/vulnerability-scanner',
      image: '/assets/vulnerability-scanner.png',
    },
    {
      title: 'Plant Sale Website',
      description: 'A fully responsive e-commerce site for selling plants.',
      link: 'https://github.com/your-username/plant-sale-website',
      image: '/assets/plant-sale.png',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'A tool to scan websites for potential vulnerabilities.',
      link: 'https://github.com/your-username/vulnerability-scanner',
      image: '/assets/vulnerability-scanner.png',
    },
    {
      title: 'Plant Sale Website',
      description: 'A fully responsive e-commerce site for selling plants.',
      link: 'https://github.com/your-username/plant-sale-website',
      image: '/assets/plant-sale.png',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'A tool to scan websites for potential vulnerabilities.',
      link: 'https://github.com/your-username/vulnerability-scanner',
      image: '/assets/vulnerability-scanner.png',
    },
    // Add more projects here
  ];

  return (
    <div>
      <Header />
      <main className="p-10">
        <h2 className="text-4xl font-bold text-white text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      
    </div>
  );
}
