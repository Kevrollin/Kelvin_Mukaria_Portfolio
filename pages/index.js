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
      <section className="bg-gray-900 text-white lg:py-16 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-warning mb-4 text-center pt-6">
        About <span className='text-white'>Me</span> </h1>
        
        {/* About Section Wrapper with Border and Border Radius */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center lg:py-20 sm:py-10 px-6 md:px-14 border-4 border-primary rounded-3xl shadow-3xl">
          {/* About Text */}
          <div className="md:ml-10 text-center md:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-primary mt-4 mb-2">
              I&apos;m Kelvin,
            </h2>
            <span className='text-warning text-2xs'>Web Developer | Cybersecurity | Programmer</span>

            <p className="mt-4 lg:text-lg sm:text-sm text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Passionate about <strong>web development and cybersecurity</strong>, I specialize in <strong>full-stack development</strong> using
              JavaScript, Python, Next.js, and C#. I love building scalable, secure, and high-performance applications. My expertise lies in crafting 
              <strong>interactive web experiences</strong> and implementing <strong>strong cybersecurity principles</strong>.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center md:justify-start text-white space-x-4">
              <a
                href="https://linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  // Replace with your actual LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="https://github.com/Kevrollin"  // Replace with your actual GitHub profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-github text-sm"></i>
              </a>
              <a
                href="https://x.com/kevrollin012"  // Replace with your actual Twitter profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-x text-sm"></i>
              </a>
              <a
                href="https://instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ=="  // Replace with your actual Twitter profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warning transition-all"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/files/kelvin-mukaria-cv.pdf"
                download
                className="bg-primary text-white py-2 px-6 text-sm sm:text-base rounded-lg hover:bg-warning hover:scale-105 transition-all"
              >
                Download CV
              </a>
              <button
                onClick={copyEmail}
                className="bg-primary text-white py-2 px-6 text-sm sm:text-base rounded-lg hover:bg-warning hover:scale-105 transition-all"
              >
                {copySuccess ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>

          </div>

          {/* Profile Image */}
          <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-6 md:mb-0 p-4 md:p-0">
            <Image
              src="/images/profile.jpg"
              alt="Kelvin Mukaria"
              width={250}
              height={250}
              className="profile-blur rounded-full shadow-2xl transform hover:scale-105 transition-all"
            />
          </div>
        </div>
        <div className='py-4 bg-gray-900'>
          <Skills />
        </div>
      </section>
      </main>
    </div>
  );
}
