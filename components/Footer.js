import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-footerBg text-footerText py-8 px-6 md:px-16 text-center">
      <div className="container mx-auto text-center">
        {/* Copyright Text */}
        <p className="text-white lg:text-sm sm:text-xs md:text-lg mb-4">
          © 2025 Kelvin Mukaria. <span className="text-warning">All Rights Reserved.</span>
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 sm:gap-8 mb-4">
          <a href="https://github.com/Kevrollin" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-sm sm:text-lg hover:text-primary transition-all" />
          </a>
          <a href="https://www.instagram.com/in/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl sm:text-sm hover:text-primary transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl sm:text-sm hover:text-primary transition-all" />
          </a>
          <a href="https://twitter.com/kevrollin012" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl sm:text-sm hover:text-primary transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
