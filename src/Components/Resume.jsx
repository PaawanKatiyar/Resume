import { Smartphone , Mail , MapPinned , Instagram , Headset , Brush , Dumbbell , Gamepad2 } from 'lucide-react';
import html from '/html5-brands-solid-full.svg';
import css from '/css3-alt-brands-solid-full.svg';
import js from '/js-brands-solid-full.svg';
import tailwind from '/tailwind-css-svgrepo-com.svg';
import react from '/react-brands-solid-full.svg';
import figma from '/figma-brands-solid-full.svg';
import book from '/book-solid-full.svg';

const Resume = () => {
  return (
    <section className = "p-10 pt-20 border-4 rounded-xl text-center">
      <div className = "flex justify-center gap-20">
        <div className = "text-center">
          <img className = "w-150 h-150 rounded-full border-4 mb-4" src="/pfp.jpg" alt="pfp"/>
          <h1 className = "font-head text-6xl mb-2">Paawan</h1>
          <p className = "font-sub text-xl text-stone-500">Frontend Developer | Aspiring Full-Stack Engineer</p>
          <div className = "text-left">
            <h2 className = "font-head text-5xl mt-10 mb-6">Contact</h2>
            <div className = "flex gap-4 items-center mb-2">
              <Smartphone className = "w-8 h-8 text-stone-600"/>
              <span className = "text-md font-body-strong">+91 9651685215</span>
            </div>
            <div className = "flex gap-4 items-center mb-2">
              <Mail className = "w-8 h-8 text-stone-600"/>
              <span className = "text-md font-body-strong">paawankatiyar612006@gmail.com</span>
            </div>
            <div className = "flex gap-4 items-center mb-2">
              <MapPinned className = "w-8 h-8 text-stone-600"/>
              <span className = "text-md font-body-strong">SRMIST , KTR</span>
            </div>
            <div className = "flex gap-4 items-center">
              <Instagram className = "w-8 h-8 text-stone-600"/>
              <a href = "https://www.instagram.com/paawankatiyar/" className = "text-md font-body-strong hover:text-stone-600 transition duration-300 ease-in-out">paawankatiyar</a>
            </div>
          </div>
          <div className = "text-left">
            <h2 className = "font-head text-5xl mt-10 mb-6">Education</h2>
            <div>
              <h3 className = "text-xl font-sub-strong mb-1">Web Development</h3>
              <p className = "text-md font-body-strong text-stone-600">Self-learning</p>
              <p className = "text-md font-body-strong text-stone-700">2024 - &infin;</p>
            </div>
            <div>
              <h3 className = "text-xl font-sub-strong mt-3 mb-1">B-tech in Electrical and Electronics Engineering</h3>
              <p className = "text-md font-body-strong text-stone-600">SRM KTR , Chennai , India</p>
              <p className = "text-md font-body-strong text-stone-700">2024 - 2028</p>
            </div>
          </div>
          <div className = "text-left">
            <h2 className = "font-head text-5xl mt-10 mb-6">Skills</h2>
            <div className = "flex gap-6">
              <img className = "w-20 w-20 border-4 rounded-md" src={html} alt=""/>
              <img className = "w-20 w-20 border-4 rounded-md" src={css} alt=""/>
              <img className = "w-20 w-20 border-4 rounded-md" src={js} alt=""/>
              <img className = "w-20 w-20 border-4 rounded-md" src={react} alt=""/>
            </div>
            <div className = "flex gap-6 mt-6">
              <img className = "w-20 w-20 border-4 rounded-md" src={tailwind} alt=""/>
              <img className = "w-20 w-20 border-4 rounded-md" src={figma} alt=""/>
            </div>            
          </div>
        </div>
        <div className = "mt-20">
          <h1 className = "font-head text-5xl mb-6 text-left">Hey!</h1>
          <p className = "font-body-strong text-xl text-left w-130 text-stone-600 tracking-wide">My name, Paawan, means pure, and I carry that meaning into the way I approach my work — with clarity, honesty, and a drive to create experiences that feel fresh and seamless. I am a passionate Frontend Developer focused on building clean, user-friendly, and visually engaging interfaces. I love crafting interactive designs that feel smooth and polished, and I admit — I have a bit of OCD for perfection, never leaving a pixel, margin, or animation out of place. Currently, I am expanding my skills into backend technologies with the goal of becoming a Full-Stack Developer, capable of delivering applications that are not only functional but also delightful and refined.</p>
          <div className = "text-left">
            <h2 className = "font-head text-5xl mt-15 mb-4">Experience</h2>
          </div>
          <div className = "relative">
            <div className = "flex text-left">
              <div className = "absolute w-6 h-6 bg-black left-[-12px] mt-8 rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <div className = "absolute border-2 h-165 top-10 left-[-2px] rounded-full"></div>
              <div className = "ml-10 mt-6">
                <h3 className = "font-sub-strong text-2xl mb-2">FOLIORA</h3>
                <h2 className = "font-sub text-md text-stone-600 mb-2">Frontend | React . Tailwind</h2>
                <ul className = "list-disc pl-4">
                  <li className = "font-body text-md mb-1">Created a blog platform for sharing book reviews and articles.</li>
                  <li className = "font-body text-md mb-1">Focused on typography and layout to ensure readability.</li>
                  <li className = "font-body text-md mb-1">Integrated clean navigation and user-friendly design.</li>
                  <li className = "font-body text-md mb-1 hover:text-stone-600 transition duration-300 ease-in-out"><a href="https://foliora-99nj.vercel.app/">Visit FOLIORA</a></li>
                </ul>
              </div>
            </div>
            <div className = "flex text-left">
              <div className = "absolute w-6 h-6 bg-black left-[-12px] mt-13 rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <div className = "ml-10 mt-11">
                <h3 className = "font-sub-strong text-2xl mb-2">DRAFT</h3>
                <h2 className = "font-sub text-md text-stone-600 mb-2">Full-Stack  | React . Tailwind . Node.js . Express.js . MongoDB</h2>
                <ul className = "list-disc pl-4">
                  <li className = "font-body text-md mb-1">Removed print shop queues with online ordering & payments</li>
                  <li className = "font-body text-md mb-1">Built responsive UI using React & Tailwind</li>
                  <li className = "font-body text-md mb-1">Integrated clean navigation and user-friendly design.</li>
                  <li className = "font-body text-md mb-1 hover:text-stone-600 transition duration-300 ease-in-out"><a href="#">Visit DRAFT</a></li>
                </ul>
              </div>
            </div>
            <div className = "flex text-left">
              <div className = "absolute w-6 h-6 bg-black left-[-12px] mt-13 rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <div className = "ml-10 mt-11">
                <h3 className = "font-sub-strong text-2xl mb-2">Ceramics</h3>
                <h2 className = "font-sub text-md text-stone-600 mb-2">Frontend | HTML . CSS . Javascript</h2>
                <ul className = "list-disc pl-4">
                  <li className = "font-body text-md mb-1">Showcased ceramic designs with modern, clean layout.</li>
                  <li className = "font-body text-md mb-1">Designed with a clean, modern layout for easy browsing.</li>
                  <li className = "font-body text-md mb-1">Focused on clear product presentation and simple navigation.</li>
                  <li className = "font-body text-md mb-1 hover:text-stone-600 transition duration-300 ease-in-out"><a href="#">Visit Ceramics</a></li>
                </ul>
              </div>
            </div>
            <div className = "flex text-left">
              <div className = "absolute w-6 h-6 bg-black left-[-12px] mt-4 rounded-full border-4 border-[#F8F5F2] z-10"></div>
              <Brush className = "absolute left-1 z-20 w-8 h-8"/>
            </div>
            <div className = "text-left">
              <h2 className = "font-head text-5xl mt-15 mb-6">Hobbies</h2>
              <div className = "flex gap-6">
                <Headset className = "w-20 h-20 border-4 rounded-md" />
                <Dumbbell className = "w-20 h-20 border-4 rounded-md" />
                <Gamepad2 className = "w-20 h-20 border-4 rounded-md" />
                <img className = "w-20 w-20 border-4 rounded-md" src={book} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
