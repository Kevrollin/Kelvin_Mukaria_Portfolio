import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Skills from './skills';
import { useState } from 'react';


export default function Home() {
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText("kelvinmukaria012@gmail.com")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset the success message after 2 seconds
      })
      .catch(() => {
        setCopySuccess(false);
      });
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <title>Kelvin Mukaria - Web Developer & Cybersecurity Enthusiast</title>
      </Head>

      {/* Hero Section */}
      <Header />
      <main className='flex-grow'>
      <section className="bg-gray-900 text-white lg:py-16 sm:px-28">
        <h1 className="text-6xl font-semibold text-warning mb-6 text-center py-12">About <span className='text-white'>Me</span> </h1>
        
        {/* About Section Wrapper with Border and Border Radius */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center lg:py-28 sm:py-12 lg:px-28 border-4 border-primary rounded-3xl shadow-3xl">
          {/* About Text */}
          <div className="md:ml-10 text-center md:text-left max-w-2xl">
            <h2 className="text-5xl font-semibold text-primary mb-6">I'm Kelvin, <br /> <span className='text-xl py-5 text-warning'>Web Developer | Cybersecurity | Programmer</span> </h2>
            <p className="mt-4 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Passionate about <strong>web development and cybersecurity</strong>, I specialize in <strong>full-stack development</strong> using
              JavaScript, Python, Next.js, and C#. I love building scalable, secure, and high-performance applications.
            </p>
            <p className="mt-4 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              My expertise lies in crafting <strong>interactive web experiences</strong> and implementing <strong>strong cybersecurity principles</strong>.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex sm:px-48 sm:mx-9 lg:mx-0 lg:px-0 lg:justify-left text-white space-x-8">
              <a
                href="https://linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  // Replace with your actual LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://github.com/Kevrollin"  // Replace with your actual GitHub profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://x.com/kevrollin012"  // Replace with your actual Twitter profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-x text-2xl"></i>
              </a>
              <a
                href="https://instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ=="  // Replace with your actual Twitter profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex justify-center md:justify-start space-x-8">
              <a
                href="/files/kelvin-mukaria-cv.pdf"  // Replace with actual path to your CV
                download
                className="bg-primary text-white fw-600 py-3 px-8 rounded-lg hover:bg-warning hover:scale-105 transition-all"
              >
                Download CV
              </a>
              <button
                onClick={copyEmail}
                className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-warning hover:scale-105 transition-all"
              >
                {copySuccess ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-96 h-96 md:w-112 md:h-112 mb-6 md:mb-0 p-8 py-28 md:p-0">
            <Image
              src="/images/profile.jpg" // Ensure the image exists in the public folder
              alt="Kelvin Mukaria"
              width={380}  // Increased width for a larger image
              height={380}  // Increased height for a larger image
              className="rounded-full shadow-2xl transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </section>

      <div className='sm:py-28 lg:py-0 bg-gray-900'>
        <Skills />
      </div>
      </main>
    </div>
  );
}
