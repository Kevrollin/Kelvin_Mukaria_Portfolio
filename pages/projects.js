import emailjs from "emailjs-com";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
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



    // Modal state management
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      projectTitle: "",
    });
    const [message, setMessage] = useState("");
  
    // Function to open modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Function to close modal
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    // Handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const templateParams = {
        to_name: "Kev Developer",      // Your name or the name you want in the email
        from_name: formData.name,      // User's name
        from_email: formData.email,    // User's email
        from_phone: formData.phone,    // User's phone number (optional)
        message: formData.projectTitle, // Project title entered by the user (message body)
      };
  
      emailjs
        .send(
          "service_qbiym4m", // Replace with your EmailJS service ID
          "template_134wyxx", // Replace with your template ID
          templateParams,
          "OEzF15RYCvBQI8hwR", // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response);
            setMessage("Your message has been sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error);
            setMessage("Something went wrong, please try again.");
          }
        );
  
      setFormData({ name: "", email: "", phone: "", projectTitle: "" });
    };


  return (
    <div>
          <div className="text-center lg:py-28 sm:py-16 sm:px-28">
          <p className="text-2xl font-semibold text-white mb-6">
            Are you a <span className="text-warning">Developer</span>? Want us to build some <span className="text-primary">amaizing stuff</span>?
          </p>
          <button
            onClick={openModal}
            className="bg-primary text-white py-4 px-12 rounded-lg hover:bg-warning hover:scale-105 transition-all"
          >
            Let Collaborate!
          </button>
        </div>
            {/* Modal for collaboration with Form */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                  <h3 className="text-3xl text-white mb-4">Let Collaborate!</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg"
                      />
                    </div>
                    <div>
                      <textarea
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleChange}
                        placeholder="Your Project Title/Idea"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg"
                        rows="4"
                        required
                      />
                    </div>
      
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-4 mb-4">
                      <a href="https://www.x.com/kevrollin012" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={18} className="text-white hover:text-blue-500" />
                      </a>
                      <a href="https://instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={18} className="text-white hover:text-blue-400" />
                      </a>
                      <a href="https://www.linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={18} className="text-white hover:text-blue-700" />
                      </a>
                      <a href="https://github.com/Kevrollin" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={18} className="text-white hover:text-black" />
                      </a>
                    </div>
      
                    {/* Send Button */}
                    <div>
                      <button
                        type="submit"
                        className="bg-warning text-white py-3 px-8 rounded-lg hover:bg-primary hover:scale-105 transition-all"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                  {message && <p className="text-lg text-white mt-4">{message}</p>}
                  <button
                    onClick={closeModal}
                    className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-warning hover:scale-105 transition-all mt-4"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
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
