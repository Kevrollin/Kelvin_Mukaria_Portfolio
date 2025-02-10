import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen flex-grow flex flex-col items-center bg-gray-900 text-white">

      {/* Main About Section */}
      <main className="flex-grow flex-1 flex flex-col items-center justify-center py-4 sm:px-8">
        <div>
        <div className="w-full max-w-full flex flex-col md:flex-row px-4 items-center justify-center md:justify-center border border-gray-700 rounded-lg shadow-lg p-10 bg-gray-800">
          {/* Profile Image */}
          <div className="w-80 h-80 md:w-96 md:h-96 mb-8 md:mb-0 relative">
            <Image
              src="/images/profile.jpg"
              alt="Kelvin Mukaria"
              width={250}
              height={250}
              className="profile-blur rounded-full border-4 border-primary shadow-lg transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* About Me Content */}
          <div className="text-center md:text-left md:ml-8">
            <h1 className="text-2xl font-bold text-primary">Kelvin Mukaria</h1>
            <p className="text-xs text-warning mt-2">Web Developer | Cybersecurity Learner | Programmer</p>

            <p className="mt-6 text-sm text-gray-300 leading-relaxed max-w-3xl">
              Passionate about <strong>full-stack development and cybersecurity</strong>, I build <strong>scalable, secure, and high-performance applications</strong>.
              My expertise spans across <strong>JavaScript, Python, C#, Java, Next.js, React, and Django</strong>, focusing on <strong>clean, efficient, and secure code</strong>.
            </p>

            {/* Skills & Technologies */}
            <div className="mt-6 sm:py-7">
              <h2 className="text-lg font-semibold text-white text-warning">Skills & <span className='text-white'>Technologies</span></h2>
              <div className="flex flex-wrap mt-4 gap-3 lg:gap-4 justify-center md:justify-start">
                {["JavaScript", "Python", "Next.js", "React", "Django", "Tailwind CSS", "Cybersecurity", "C#", "Java"].map(skill => (
                  <span key={skill} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-col gap-6 lg:align-left lg:mx-0 sm:mx-4">
              <a
                href="/files/kelvin-mukaria-cv.pdf"
                download
                className="bg-primary text-sm text-white py-3 px-3 rounded-lg hover:bg-warning hover:scale-105 transition-all"
              >
                Download CV
              </a>
              <button
                onClick={() => alert('Open Contact Modal')}
                className="bg-warning text-sm text-gray-900 py-3 px-3 rounded-lg hover:bg-primary hover:text-white hover:scale-105 transition-all"
              >
                Let Connect
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-3 py-6">

                      <a
                          href="https://www.x.com/in/kevrollin012"
                          target="_blank"
                          className="text-blue-400 hover:text-blue-600 transition-all duration-300"
                        >
                          <FaTwitter className="w-2 h-2" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/kelvin-mukaria-98008b230?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                        >
                          <FaLinkedin className="w-2 h-2" />
                        </a>
                        <a
                          href="https://github.com/Kevrollin"
                          target="_blank"
                          className="text-gray-400 hover:text-white transition-all duration-300"
                        >
                          <FaGithub className="w-2 h-2" />
                        </a>
                        <a
                          href="https://www.instagram.com/kev.mukaria?utm_source=qr&igsh=MWJ2cGF4cmNtOHIsaQ=="
                          target="_blank"
                          className="text-pink-500 hover:text-pink-700 transition-all duration-300"
                        >
                          <FaInstagram className="w-2 h-2" />
                        </a>
          </div>
          </div>
        

        {/* Expanded Sections */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
          
          {/* Education & Certifications */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-sm font-semibold text-primary mb-2">Education & Certifications</h3>
              <ul className="text-xs text-gray-300 space-y-2">
                <li>🎓 Bachelors in Computer Science - Egerton University</li>
                <li>📜 Certified in Cybersecurity Essentials</li>
                <li>🖥️ Web Development Bootcamp Graduate</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-sm font-semibold text-primary mb-2">Work Experience</h3>
              <ul className="text-xs text-gray-300 space-y-3">
                <li>💻 Freelance Web Developer (Built scalable applications)</li>
                <li>🔐 Cybersecurity Researcher (Website security & penetration testing)</li>
                <li>🌍 Community Trainer (Helping beginners learn programming)</li>
              </ul>
            </div>
          </div>


          {/* My Approach & Philosophy */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 col-span-1 md:col-span-2">
            <h3 className="text-sm font-bold text-primary mb-2">My Approach & Philosophy</h3>
            <p className="mt-6 text-xs text-gray-300 leading-relaxed max-w-3xl">
              I believe in <strong>writing clean, efficient, and secure code</strong> that not only meets the client’s requirements but also 
              ensures scalability and maintainability. I strive to <strong>stay updated</strong> with the latest technologies, adopt 
              <strong>best coding practices</strong>, and contribute to <strong>open-source projects</strong> whenever possible.
            </p>
          </div>

          {/* Career Growth Timeline */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 col-span-1 md:col-span-2">
            <h3 className="text-sm font-bold text-primary mb-2">Career Growth Timeline</h3>
            <ul className="text-xs text-gray-300 space-y-2">
              <li>🚀 <strong>2023</strong> - Started Web Development & Cybersecurity Learning</li>
              <li>💡 <strong>2024</strong> - Built multiple full-stack projects & started community training</li>
              <li>🔒 <strong>2025</strong> - Developed security tools & contributed to open-source</li>
              <li>🌟 <strong>Future</strong> - Keep growing, Learning, collaborating, and innovating!</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 col-span-1 md:col-span-2">
            <h3 className="text-sm font-bold text-primary mb-4">What People Say About Me</h3>
            <div className="text-xs text-gray-300">
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
