import { Smartphone, Mail, MapPinned, Instagram, Headset, Brush, Dumbbell, Gamepad2 } from 'lucide-react';
import html from '/html5-brands-solid-full.svg';
import css from '/css3-alt-brands-solid-full.svg';
import js from '/js-brands-solid-full.svg';
import tailwind from '/tailwind-css-svgrepo-com.svg';
import react from '/react-brands-solid-full.svg';
import figma from '/figma-brands-solid-full.svg';
import book from '/book-solid-full.svg';

const Resume = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-10 pt-10 sm:pt-12 md:pt-16 lg:pt-20 border-4 rounded-xl text-center">
      {/* Main Container - Stacks on mobile/tablet, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 md:gap-12 lg:gap-20">
        
        {/* Left Column - Profile, Contact, Education, Skills */}
        <div className="text-center">
          <img 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[600px] lg:h-[600px] rounded-full border-4 mb-4 mx-auto lg:mx-0 object-cover" 
            src="/pfp.jpg" 
            alt="Paawan's profile picture"
          />
          <h1 className="font-head text-4xl sm:text-5xl lg:text-6xl mb-2">Paawan</h1>
          <p className="font-sub text-lg sm:text-xl text-stone-500">Frontend Developer | Aspiring Full-Stack Engineer</p>
          
          {/* Contact Section */}
          <div className="text-left mt-6 lg:mt-10">
            <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">Contact</h2>
            <div className="flex gap-3 lg:gap-4 items-center mb-2">
              <Smartphone className="w-7 h-7 lg:w-8 lg:h-8 text-stone-600"/>
              <span className="text-sm sm:text-base font-body-strong">+91 9651685215</span>
            </div>
            <div className="flex gap-3 lg:gap-4 items-center mb-2">
              <Mail className="w-7 h-7 lg:w-8 lg:h-8 text-stone-600"/>
              <span className="text-sm sm:text-base font-body-strong break-all">paawankatiyar612006@gmail.com</span>
            </div>
            <div className="flex gap-3 lg:gap-4 items-center mb-2">
              <MapPinned className="w-7 h-7 lg:w-8 lg:h-8 text-stone-600"/>
              <span className="text-sm sm:text-base font-body-strong">SRMIST, KTR</span>
            </div>
            <div className="flex gap-3 lg:gap-4 items-center">
              <Instagram className="w-7 h-7 lg:w-8 lg:h-8 text-stone-600"/>
              <a 
                href="https://www.instagram.com/paawankatiyar/" 
                className="text-sm sm:text-base font-body-strong hover:text-stone-600 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                paawankatiyar
              </a>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="text-left mt-6 lg:mt-10">
            <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">Education</h2>
            <div>
              <h3 className="text-lg sm:text-xl font-sub-strong mb-1">Web Development</h3>
              <p className="text-sm sm:text-base font-body-strong text-stone-600">Self-learning</p>
              <p className="text-sm sm:text-base font-body-strong text-stone-700">2024 - ∞</p>
            </div>
            <div className="mt-3">
              <h3 className="text-lg sm:text-xl font-sub-strong mb-1">B-tech in Electrical and Electronics Engineering</h3>
              <p className="text-sm sm:text-base font-body-strong text-stone-600">SRM KTR, Chennai, India</p>
              <p className="text-sm sm:text-base font-body-strong text-stone-700">2024 - 2028</p>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="text-left mt-6 lg:mt-10">
            <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">Skills</h2>
            <div className="flex gap-4 lg:gap-6">
              <img className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" src={html} alt="HTML5 logo"/>
              <img className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" src={css} alt="CSS3 logo"/>
              <img className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" src={js} alt="JavaScript logo"/>
              <img className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" src={react} alt="React logo"/>
            </div>
            <div className="flex gap-4 lg:gap-6 mt-4 lg:mt-6">
              <img className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" src={tailwind} alt="Tailwind CSS logo"/>
              <img className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" src={figma} alt="Figma logo"/>
            </div>
          </div>
        </div>
        
        {/* Right Column - About, Experience, Hobbies */}
        <div className="mt-0 lg:mt-20">
          {/* Intro Section - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block">
            <h1 className="font-head text-5xl mb-6 text-left">Hey!</h1>
            <p className="font-body-strong text-xl text-left w-[520px] text-stone-600 tracking-wide">
              My name, Paawan, means pure, and I carry that meaning into the way I approach my work — with clarity, honesty, and a drive to create experiences that feel fresh and seamless. I am a passionate Frontend Developer focused on building clean, user-friendly, and visually engaging interfaces. I love crafting interactive designs that feel smooth and polished, and I admit — I have a bit of OCD for perfection, never leaving a pixel, margin, or animation out of place. Currently, I am expanding my skills into backend technologies with the goal of becoming a Full-Stack Developer, capable of delivering applications that are not only functional but also delightful and refined.
            </p>
          </div>
          
          {/* Experience Section */}
          <div className="text-left mt-0 lg:mt-16">
            <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl mb-4">Experience</h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line - Visible on all devices */}
            <div className="absolute border-2 h-[660px] top-10 left-[-2px] rounded-full"></div>
            
            {/* FOLIORA */}
            <div className="flex text-left">
              <div className="absolute w-6 h-6 bg-black left-[-12px] mt-8 rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <div className="ml-6 sm:ml-8 lg:ml-10 mt-6">
                <h3 className="font-sub-strong text-xl sm:text-2xl mb-2">FOLIORA</h3>
                <h2 className="font-sub text-sm sm:text-base text-stone-600 mb-2">Frontend | React . Tailwind</h2>
                <ul className="list-disc pl-4">
                  <li className="font-body text-sm sm:text-base mb-1">Created a blog platform for sharing book reviews and articles.</li>
                  <li className="font-body text-sm sm:text-base mb-1">Focused on typography and layout to ensure readability.</li>
                  <li className="font-body text-sm sm:text-base mb-1">Integrated clean navigation and user-friendly design.</li>
                  <li className="font-body text-sm sm:text-base mb-1 hover:text-stone-600 transition duration-300 ease-in-out">
                    <a href="https://foliora-99nj.vercel.app/" target="_blank" rel="noopener noreferrer">Visit FOLIORA</a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* DRAFT */}
            <div className="flex text-left">
              <div className="absolute w-6 h-6 bg-black left-[-12px] mt-[52px] rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <div className="ml-6 sm:ml-8 lg:ml-10 mt-11">
                <h3 className="font-sub-strong text-xl sm:text-2xl mb-2">DRAFT</h3>
                <h2 className="font-sub text-sm sm:text-base text-stone-600 mb-2">Full-Stack | React . Tailwind . Node.js . Express.js . MongoDB</h2>
                <ul className="list-disc pl-4">
                  <li className="font-body text-sm sm:text-base mb-1">Removed print shop queues with online ordering & payments</li>
                  <li className="font-body text-sm sm:text-base mb-1">Built responsive UI using React & Tailwind</li>
                  <li className="font-body text-sm sm:text-base mb-1">Integrated clean navigation and user-friendly design.</li>
                  <li className="font-body text-sm sm:text-base mb-1 hover:text-stone-600 transition duration-300 ease-in-out">
                    <a href="https://draft-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">Visit DRAFT</a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Ceramics */}
            <div className="flex text-left">
              <div className="absolute w-6 h-6 bg-black left-[-12px] mt-[52px] rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <div className="ml-6 sm:ml-8 lg:ml-10 mt-11">
                <h3 className="font-sub-strong text-xl sm:text-2xl mb-2">Ceramics</h3>
                <h2 className="font-sub text-sm sm:text-base text-stone-600 mb-2">Frontend | HTML . CSS . Javascript</h2>
                <ul className="list-disc pl-4">
                  <li className="font-body text-sm sm:text-base mb-1">Showcased ceramic designs with modern, clean layout.</li>
                  <li className="font-body text-sm sm:text-base mb-1">Designed with a clean, modern layout for easy browsing.</li>
                  <li className="font-body text-sm sm:text-base mb-1">Focused on clear product presentation and simple navigation.</li>
                  <li className="font-body text-sm sm:text-base mb-1 hover:text-stone-600 transition duration-300 ease-in-out">
                    <a href="#">Visit Ceramics</a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Timeline End */}
            <div className="flex text-left">
              <div className="absolute w-6 h-6 bg-black left-[-12px] mt-4 rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <Brush className="absolute left-1 z-20 w-8 h-8"/>
            </div>
            
            {/* Hobbies Section */}
            <div className="text-left mt-16 lg:mt-16">
              <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">Hobbies</h2>
              <div className="flex gap-4 lg:gap-6 flex-wrap">
                <Headset className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" />
                <Dumbbell className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" />
                <Gamepad2 className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" />
                <img className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 rounded-md" src={book} alt="Reading books"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;
