import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen py-10 w-full flex flex-col bg-gray-900 text-white">

      {/* Main About Section */}
      <main className="flex-grow flex-1 flex flex-col items-center justify-center px-12">
        <div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between border border-gray-700 rounded-lg shadow-lg p-10 bg-gray-800">
          {/* Profile Image */}
          <div className="w-80 h-80 md:w-96 md:h-96 mb-8 md:mb-0 relative">
            <Image
              src="/images/profile.jpg"
              alt="Kelvin Mukaria"
              width={320}
              height={320}
              className="rounded-full border-4 border-primary shadow-lg transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* About Me Content */}
          <div className="text-left md:ml-12 sm:text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary">Kelvin Mukaria</h1>
            <p className="text-xl text-warning mt-2">Web Developer | Cybersecurity Learner | Programmer</p>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
              Passionate about **full-stack development and cybersecurity**, I build **scalable, secure, and high-performance applications**.  
              My expertise spans across **JavaScript, Python, C#, Java, Next.js, React, and Django**, focusing on **clean, efficient, and secure code**.
            </p>

            {/* Skills & Technologies */}
            <div className="mt-6 sm:py-7">
              <h2 className="text-2xl font-semibold text-white">Skills & Technologies</h2>
              <div className="flex flex-wrap mt-4 gap-4 lg:justify-left lg:px-0 sm:px-28 sm:py-5">
                {["JavaScript", "Python", "Next.js", "React", "Django", "Tailwind CSS", "Cybersecurity", "C#", "Java"].map(skill => (
                  <span key={skill} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex gap-6 lg:align-left lg:mx-0 sm:mx-28">
              <a
                href="/files/kelvin-mukaria-cv.pdf"
                download
                className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-warning hover:scale-105 transition-all"
              >
                Download CV
              </a>
              <button
                onClick={() => alert('Open Contact Modal')}
                className="bg-warning text-gray-900 py-3 px-8 rounded-lg hover:bg-primary hover:text-white hover:scale-105 transition-all"
              >
                Let Connect
              </button>
            </div>
          </div>
        </div>
        
          <div className='flex flex-row gap-6 py-10 justify-center'>
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
          </div>
        

        {/* Expanded Sections */}
        <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education & Certifications */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-3xl font-bold text-primary mb-4">Education & Certifications</h3>
            <ul className="text-lg text-gray-300 space-y-3">
              <li>🎓 Bachelor’s in Computer Science - [Your University]</li>
              <li>📜 Certified in Cybersecurity Essentials</li>
              <li>🖥️ Web Development Bootcamp Graduate</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-3xl font-bold text-primary mb-4">Work Experience</h3>
            <ul className="text-lg text-gray-300 space-y-3">
              <li>💻 Freelance Web Developer (Built scalable applications for various clients)</li>
              <li>🔐 Cybersecurity Researcher (Specializing in website security & penetration testing)</li>
              <li>🌍 Community Trainer (Helping beginners learn web development & programming)</li>
            </ul>
          </div>

          {/* My Approach & Philosophy */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">My Approach & Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in **writing clean, efficient, and secure code** that not only meets the client’s requirements but also 
              ensures scalability and maintainability. I strive to **stay updated** with the latest technologies, adopt 
              **best coding practices**, and contribute to **open-source projects** whenever possible.
            </p>
          </div>

          {/* Career Growth Timeline */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">Career Growth Timeline</h3>
            <ul className="text-lg text-gray-300 space-y-3">
              <li>🚀 **2023** - Started Web Development & Cybersecurity Learning</li>
              <li>💡 **2024** - Built multiple full-stack projects & started community training</li>
              <li>🔒 **2025** - Developed security tools & contributed to open-source</li>
              <li>🌟 **Future** - Keep growing, collaborating, and innovating!</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">What People Say About Me</h3>
            <div className="text-lg text-gray-300">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                Kelvin is an exceptional developer with an eye for security. He not only builds, but ensures applications are <strong>secure and efficient</strong>!
                <span className="block text-warning mt-2">— Client, Web App Project</span>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic mt-4">
                His teaching style is <span>clear and professional</span>, making it easy for beginners to understand web development.
                <span className="block text-warning mt-2">— Student, Web Dev Training</span>
              </blockquote>
            </div>
          </div>

        </div>
      </main>


    </div>
  );
}
