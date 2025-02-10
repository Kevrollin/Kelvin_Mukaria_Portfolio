import SkillsCard from "../components/SkillsCard";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing social icons

const Skills = () => {
  // Technical Skills Data
  const techSkills = [
    { title: "JavaScript", icon: "code", level: 85 },
    { title: "Python", icon: "/images/python-icon.svg", level: 80 },
    { title: "React.js", icon: "sync", level: 75 },
    { title: "Next.js", icon: "integration_instructions", level: 70 },
    { title: "Tailwind CSS", icon: "palette", level: 90 },
    { title: "Django", icon: "security", level: 70 },
    { title: "Cybersecurity", icon: "/images/cybersecurity-icon.svg", level: 60 },
  ];

  // Soft Skills Data
  const softSkills = [
    { title: "Teamwork", icon: "groups" },
    { title: "Problem Solving", icon: "psychology" },
    { title: "Communication", icon: "record_voice_over" },
    { title: "Leadership", icon: "leaderboard" },
    { title: "Security Mindset", icon: "security" },
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
    <section className="skills py-16 bg-gray-900 text-white min-h-screen">
      <h2 className="text-6xl text-dark font-semibold text-primary mb-12 text-center py-12">
        Skills & <span className="text-warning">Technologies</span>
      </h2>
      <div className="container mx-auto text-center flex flex-col items-center sm:px-28 lg:px-0">
        {/* Tech Skills and Soft Skills Layout */}
        <div className="flex flex-col sm:flex-col lg:flex-row justify-center gap-8 sm:gap-16">
          {/* Tech Skills */}
          <div className="w-full p-6 bg-gray-800 bg-opacity-80 border border-gray-600 rounded-lg shadow-lg skill-card">
            <h3 className="text-4xl font-semibold text-white mb-6">Tech Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
              {techSkills.map((skill, index) => (
                <SkillsCard key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="w-full p-6 bg-gray-800 bg-opacity-80 border border-gray-600 rounded-lg shadow-lg skill-card">
            <h3 className="text-4xl font-semibold text-warning mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {softSkills.map((skill, index) => (
                <SkillsCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* New Section for Collaboration */}
        <div className="text-center lg:py-28 sm:py-16 sm:px-28">
          <p className="text-4xl font-semibold text-white mb-6">
            Are you a <span className="text-warning">Developer</span>? Want us to build some <span className="text-primary">amaizing stuff</span>?
          </p>
          <button
            onClick={openModal}
            className="bg-primary text-white py-4 px-12 rounded-lg hover:bg-warning hover:scale-105 transition-all w-1/2"
          >
            Let's Collaborate!
          </button>
        </div>
      </div>

      {/* Modal for collaboration with Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl text-white mb-4">Let's Collaborate!</h3>
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
    </section>
  );
};

export default Skills;
