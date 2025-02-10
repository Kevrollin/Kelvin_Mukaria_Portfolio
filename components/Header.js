import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-gradient-to-r bg-gray-900 text-white py-8 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col items-center justify-center">
      <div className="container mx-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white lg:py-12 sm:py-12 flex flex-col items-center justify-center rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300">
      <h1 className="text-6xl font-bold mb-4 text-center">
        Hi! It&apos;s <span className="text-warning">Kelvin</span><br/><br/>Ready to take your <strong className="text-primary">Business/Idea</strong><br/><br/>To the next Level?
      </h1><br/>
      <p className="text-xl mb-8 text-center">
        Web Developer | Cybersecurity Enthusiast | Passionate About Coding
      </p><br/><br/>
      <button
        onClick={openModal}
        className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-warning transition-all duration-300"
      >
        Hire Me
      </button>
      <br/>
      <div className="flex justify-center space-x-6 my-6">
      <span className="text-primary">--------------------------</span>
            <a
                href="https://www.x.com/in/kevrollin012"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Kevrollin"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ=="
                target="_blank"
                className="text-pink-500 hover:text-pink-700 transition-all duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <br/>
              <span className="text-primary">--------------------------</span>
            </div>

      

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 text-white rounded-lg p-10 w-11/12 md:w-1/3 shadow-xl border border-gray-700 flex flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold text-gray-100 mb-6">
              Get in Touch
            </h2>

            {/* Contact Info */}
            <div className="mb-4">
              <p className="text-lg text-gray-300 mb-2">
                <strong>Email:</strong> kelvinmukaria012@gmail.com
              </p>
              <p className="text-lg text-gray-300 mb-2">
                <strong>Phone:</strong> +254 757 086 742
              </p>
              <p className="text-lg text-gray-300 mb-2">
                <strong>Phone:</strong> +254 708 889 092
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 my-6">
            <a
                href="https://www.x.com/in/kevrollin012"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Kevrollin"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ=="
                target="_blank"
                className="text-pink-500 hover:text-pink-700 transition-all duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>

            {/* Message Form */}
            <div className="mb-6 w-full">
              <label
                className="block text-lg text-gray-300 mb-2 text-left py-2"
                htmlFor="message"
              >
                Leave a Message:
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
                rows="4"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* CV Download */}
            <div className="mt-4">
              <a
                href="/cv.pdf"
                download
                className="text-white bg-blue-500 py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                Download My CV
              </a>
            </div>

            {/* Close Button */}
            <div className="mt-6">
              <button
                onClick={closeModal}
                className="text-red-500 hover:text-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
