import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "emailjs-com";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectTitle: "",
  });
  const [message, setMessage] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_qbiym4m", "template_134wyxx", {
        to_name: "Kev Developer",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.projectTitle,
      }, "OEzF15RYCvBQI8hwR")
      .then(() => setMessage("Your message has been sent successfully!"))
      .catch(() => setMessage("Something went wrong, please try again."));

    setFormData({ name: "", email: "", phone: "", projectTitle: "" });
  };

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
    }
  ];

  return (
    <div className="bg-gray-900">
      <div className="text-center lg:py-8 sm:py-16 sm:px-28">
        <p className="text-sm font-semibold text-white mb-6">
          Are you a <span className="text-warning">Developer</span>? Want us to build some <span className="text-primary">amazing stuff</span>?
        </p>
        <button onClick={openModal} className="bg-primary text-white p-4 rounded-lg hover:bg-warning hover:scale-105 transition-all">
          Let us Collaborate!
        </button>
      </div>

      {/* Modal with Animation */}
      <AnimatePresence>
        {isClient && isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-3xl text-white mb-4">Let us Collaborate!</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 bg-gray-700 text-white rounded-lg" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 bg-gray-700 text-white rounded-lg" required />
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="w-full p-3 bg-gray-700 text-white rounded-lg" />
                <textarea name="projectTitle" value={formData.projectTitle} onChange={handleChange} placeholder="Your Project Title/Idea" className="w-full p-3 bg-gray-700 text-white rounded-lg" rows="4" required />
                <div className="flex justify-center gap-4 mb-4">
                  <a href="https://www.x.com/kevrollin012" target="_blank" rel="noopener noreferrer"><FaTwitter size={18} className="text-white hover:text-blue-500" /></a>
                  <a href="https://instagram.com/kev.mukaria" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} className="text-white hover:text-blue-400" /></a>
                  <a href="https://www.linkedin.com/in/kelvin-mukaria-98008b230" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} className="text-white hover:text-blue-700" /></a>
                  <a href="https://github.com/Kevrollin" target="_blank" rel="noopener noreferrer"><FaGithub size={18} className="text-white hover:text-black" /></a>
                </div>
                <button type="submit" className="bg-warning text-white py-3 px-8 rounded-lg hover:bg-primary hover:scale-105 transition-all">
                  Send
                </button>
              </form>
              {message && <p className="text-lg text-white mt-4">{message}</p>}
              <button onClick={closeModal} className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-warning hover:scale-105 transition-all mt-4">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="p-10 mx-68">
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
