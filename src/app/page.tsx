'use client';

import { IconCloudDemo } from '@/components/IconCloud';
import { TextAnimate } from '@/components/magicui/text-animate';
import { useEffect } from 'react'; // Import useEffect
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Optional: Configuration options
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
      easing: 'ease-in-out', // default easing for AOS animations
      offset: 100, // offset (in px) from the original trigger point
      // delay: 100, // values from 0 to 3000, with step 50ms (can be overridden per element)
    });

    // Optional: Refresh AOS if your content changes dynamically after initial load
    // AOS.refresh();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-600">EH</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 gradient-text"></h1>
            <TextAnimate
              className="text-5xl font-bold mb-4"
              animation="blurInUp"
              by="character"
              once
            >
              Eugene Hoh Zhao Quan
            </TextAnimate>
            <p className="text-xl text-slate-600 mb-6">
              Senior Software Engineer
            </p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              With more than 6 years of experience in full stack development, I
              create robust solutions using modern technologies and best
              practices.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:hohzq.eugene@gmail.com"
              className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-slate-800 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section
        className="py-16 px-6 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {' '}
        {/* Added relative and overflow-hidden */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 left-20">
          {' '}
          {/* Positioning and opacity */}
          <IconCloudDemo />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          {' '}
          {/* Added relative and z-10 to bring content forward */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                About Me
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I&apos;m a passionate full stack developer with expertise in
                modern web technologies. I enjoy building scalable applications
                and solving complex problems with elegant solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-700">
                    6+ years of professional experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Full stack development expertise
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Modern technology stack
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2 text-slate-700">
                    Frontend
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>React JS, Next JS</li>
                    <li>TypeScript, JavaScript</li>
                    <li>HTML, CSS</li>
                    <li>Astro</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2 text-slate-700">Backend</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>ASP .NET</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Java Springboot</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2 text-slate-700">
                    Database
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>MSSQL</li>
                    <li>MySQL</li>
                    <li>Oracle SQL</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2 text-slate-700">CMS</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Umbraco CMS</li>
                    <li>Wordpress</li>
                    <li>Sitecore</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* IconCloudDemo is now outside this grid and absolutely positioned */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-white py-16 px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                E-Commerce Platform
              </h3>
              <p className="text-slate-600 mb-4">
                Full-stack e-commerce solution built with React and .NET Core.
                Features include user authentication, payment processing, and
                admin dashboard.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  .NET
                </span>
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  SQL
                </span>
              </div>
              <a
                href="#"
                className="text-slate-800 hover:text-slate-600 font-medium"
              >
                View Project →
              </a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Task Management App
              </h3>
              <p className="text-slate-600 mb-4">
                Modern task management application with real-time updates. Built
                using Next.js and TypeScript with a focus on user experience.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  Next.js
                </span>
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  TypeScript
                </span>
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  MySQL
                </span>
              </div>
              <a
                href="#"
                className="text-slate-800 hover:text-slate-600 font-medium"
              >
                View Project →
              </a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                CMS Solution
              </h3>
              <p className="text-slate-600 mb-4">
                Custom content management system built with Umbraco. Features
                multi-language support and advanced content workflows.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  Umbraco
                </span>
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  C#
                </span>
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                  MSSQL
                </span>
              </div>
              <a
                href="#"
                className="text-slate-800 hover:text-slate-600 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="bg-slate-800 text-white py-16 px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl mb-8 text-slate-300">
            I&apos;m always interested in new opportunities and exciting
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hohzq.eugene@gmail.com"
              className="bg-white text-slate-800 px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors font-medium"
            >
              Send Email
            </a>
            <a
              href="#"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-800 transition-colors font-medium"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Eugene Hoh Zhao Quan. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
