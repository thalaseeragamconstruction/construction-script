
import React, { useState } from 'react';
import Header from './components/Header';
import AIConsultant from './components/AIConsultant';
import ContactForm from './components/ContactForm';
import ProjectModal from './components/ProjectModal';
import { SERVICES, PROJECTS } from './constants';

import { Project } from './types';
import { 
  ChevronRight, Phone, Mail, MapPin, Instagram, Linkedin, Twitter, ArrowRight,
} from 'lucide-react';


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            // src="/Images/WhatsApp Image 2026-01-05 at 7.28.41 PM.jpeg"
            src="/construction-script/Images/WhatsApp Image 2026-01-05 at 10.12.15 PM.jpeg"
            alt="Construction background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-orange-600/20 border border-orange-600/30 rounded-full text-orange-400 text-sm font-bold animate-fade-in">
            ESTABLISHED SINCE 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-display leading-[1.1] animate-fade-in-up">
            BUILDING INFRASTRUCTURE <br />
            <span className="text-orange-600">BEYOND IMAGINATION</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
            Leading civil engineering and construction services for residential, commercial, and industrial projects TamilNadu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <button onClick={scrollToContact} className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-orange-600/30 hover:scale-105 active:scale-95">
              Start Your Project
            </button>
            <a href="#projects" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              View Our Work <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="bg-white py-12 relative -mt-16 z-20 mx-4 max-w-6xl lg:mx-auto rounded-2xl shadow-xl flex flex-wrap justify-around items-center gap-8 border border-slate-100">
        <div className="text-center px-4">
          <div className="text-4xl font-black text-slate-900 font-display">250+</div>
          <div className="text-slate-500 font-medium">Projects Done</div>
        </div>
        <div className="w-px h-12 bg-slate-100 hidden md:block"></div>
        <div className="text-center px-4">
          <div className="text-4xl font-black text-slate-900 font-display">15+</div>
          <div className="text-slate-500 font-medium">Global Awards</div>
        </div>
        <div className="w-px h-12 bg-slate-100 hidden md:block"></div>
        <div className="text-center px-4">
          <div className="text-4xl font-black text-slate-900 font-display">25k</div>
          <div className="text-slate-500 font-medium">Workers Engaged</div>
        </div>
        <div className="w-px h-12 bg-slate-100 hidden md:block"></div>
        <div className="text-center px-4">
          <div className="text-4xl font-black text-slate-900 font-display">99%</div>
          <div className="text-slate-500 font-medium">Safety Score</div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-4">OUR EXPERTISE</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-display">Comprehensive Civil Solutions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all group">
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 font-display text-slate-900">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={scrollToContact}
                  className="mt-6 flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all"
                >
                  Get Quote for {service.title} <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-orange-600 text-white p-10 rounded-2xl shadow-2xl max-w-xs hidden lg:block">
              <p className="text-3xl font-black mb-1 font-display">25 Years</p>
              <p className="text-sm font-medium text-orange-100">Of unwavering commitment to quality and architectural excellence.</p>
            </div>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-4">WHO WE ARE</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-display mb-8">Pioneering Modern Civil Engineering</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in 1998, Apex Structures has grown from a local contractor to an international powerhouse in civil construction. We combine traditional engineering wisdom with cutting-edge AI-driven project management to deliver results that stand the test of time.
            </p>
            <ul className="space-y-4 mb-8">
              {['Sustainable Building Practices', 'Advanced Structural Analytics', 'Transparent Project Lifecycle', 'Integrated Supply Chain Management'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-800 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <ChevronRight size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={scrollToContact} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-4">OUR PORTFOLIO</h2>
              <h3 className="text-4xl font-bold text-slate-900 font-display">Featured Masterpieces</h3>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full font-bold bg-orange-600 text-white shadow-lg">All Works</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-3xl bg-slate-900 aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-2">{project.category}</span>
                  <h4 className="text-3xl font-bold text-white mb-2 font-display">{project.title}</h4>
                  <p className="text-slate-300 max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project Details <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section Integration */}
      {/* <AIConsultant /> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's build your <br /> vision together</h3>
              <p className="text-slate-400 text-lg mb-10">
                Ready to discuss your project? Our engineering team is standing by to provide expert consultation and budgeting.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold">Call Us</div>
                    <div className="text-lg font-bold hover:text-orange-500 transition-colors cursor-pointer">+91 - 9025268147</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold">Email Us</div>
                    <div className="text-lg font-bold hover:text-orange-500 transition-colors cursor-pointer">thalaseeragamconstruction@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-orange-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold">Office</div>
                    <div className="text-lg font-bold">Velachery , Chennai</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <form className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your inquiry! Our engineers will contact you within 24 hours.'); }}>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600">
                  <option>Residential & Commercial Construction</option>
                  <option>Commercial Development</option>
                  <option>Civil Infrastructure</option>
                  <option>Renovation & Retrofitting</option>
                  <option>Individual House</option>
                  <option>Renovation & Remodeling</option>
                  <option>Interior & Exterior Design</option>
                  <option>Project Managment & Consultation</option>

                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Brief</label>
                <textarea required rows={4} placeholder="Describe your project goals..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-600/20">
                Send Inquiry
              </button>
            </form> */}
            {/* <form className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Our engineers will contact you within 24 hours.'); }}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
    </div>
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
    </div>
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
        <Mail className="h-4 w-4 text-slate-500" />
        Email
      </label>
      <input required type="email" placeholder="your@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
    </div>
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
        <Phone className="h-4 w-4 text-slate-500" />
        Phone Number
      </label>
      <input required type="tel" placeholder="+91-629702332" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
    </div>
  </div>
   <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Brief</label>
                <textarea required rows={4} placeholder="Describe your project goals..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-600/20">
                Send Inquiry
              </button>
</form> */}
<ContactForm/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-900 pb-16">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                {/* <div className="bg-orange-600 p-2 rounded-lg">
                  <HardHat size={24} />
                </div> */}
                <div className="bg-orange-40 p-2 rounded-lg">
              {/* <HardHat className="text-white w-6 h-6" /> */}
              <img 
              // src="/Images/WhatsApp Image 2026-01-05 at 6.51.38 PM.jpeg" 
              // src="/Images/WhatsApp Image 2026-01-05 at 6.51.37 PM.jpeg" 
              src="/construction-script/Images/LogoBlack.jpeg" 
              className="text-white" />
            </div>
                <span className="text-2xl font-bold font-display">THALASEER AGAM <span className="text-orange-600">Construction</span></span>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                Shaping skylines and building sustainable communities since 2025. Your partner in premium construction.
              </p>
              {/* <div className="flex gap-4">
                {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div> */}
              <div className="flex gap-4">
  {[  
    { Icon: Instagram, href: 'https://www.instagram.com/thalaseeragam/' },
    { Icon: Linkedin, href: '#' },
    { Icon: Twitter, href: '#' }
  ].map(({ Icon, href }, idx) => (
    <a 
      key={idx} 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-600 transition-colors group"
    >
      <Icon size={18} className="group-hover:scale-110 transition-transform" />
    </a>
  ))}
</div>

            </div>
            <div>
              <h5 className="font-bold text-lg mb-6">Company</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6">Resources</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#ai-consultant" className="hover:text-white transition-colors">Project Estimator</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Safety Protocols</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            {/* <div>
              <h5 className="font-bold text-lg mb-6">Newsletter</h5>
              <p className="text-slate-500 mb-4">Subscribe for latest engineering insights.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 flex-1 focus:outline-none" />
                <button className="bg-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors">Join</button>
              </div>
            </div> */}
          </div>
          <div className="text-center text-slate-600 text-sm">
            © {new Date().getFullYear()} THALASEER AGAM Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
