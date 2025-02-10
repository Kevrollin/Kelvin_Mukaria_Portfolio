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
    <header className="py-8 bg-gradient-to-r bg-gray-900 text-white py-8 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col items-center justify-center">
      <div className="container mx-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white lg:py-8 sm:py-12 flex flex-col items-center justify-center rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300">
      <p className="mt-5 mb-2 text-xm text-center">
        Web Developer | Cybersecurity Enthusiast | Passionate About Coding
      </p>
      <h1 className="text-xl sm:text-xl md:text-xl font-bold m-4 text-center">
        Hi! It&apos;s <span className="text-warning">Kelvin</span>Ready to take your <strong className="text-primary">Business/Idea</strong>To the next Level?
      </h1>

      <button
        onClick={openModal}
        className="bg-blue-700 text-white text-sm p-5 rounded-lg shadow-lg hover:bg-warning transition-all duration-300"
      >
        Hire Me
      </button>
      <div className="flex justify-center space-x-4 md:space-x-10 my-6">
            <a
                href="https://www.x.com/in/kevrollin012"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Kevrollin"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ=="
                target="_blank"
                className="text-pink-500 hover:text-pink-700 transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>

      

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 m-5 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 text-white rounded-lg p-6 max-w-sm md:w-1/3 shadow-xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">
              Let us Build your Idea
            </h2>

            {/* Contact Info */}
            <div className="mb-4">
              <p className="text-xl text-gray-300 mb-2">
                <strong>Email:</strong> kelvinmukaria012@gmail.com
              </p>
              <p className="text-xl text-gray-300 mb-2">
                <strong>Phone:</strong> +254 757 086 742
              </p>
              <p className="text-xl text-gray-300 mb-2">
                <strong>Phone:</strong> +254 708 889 092
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 my-6">
            <a
                href="https://www.x.com/in/kevrollin012"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Kevrollin"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ=="
                target="_blank"
                className="text-pink-500 hover:text-pink-700 transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
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
                className="text-white bg-blue-500 py-2 px-6 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                Download My CV
              </a>
            </div>

            {/* Close Button */}
            <div className="mt-6">
              <button
                onClick={closeModal}
                className="text-sm text-red-500 hover:text-red-700"
              >
                <strong className="text-xl text center">X</strong>
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
