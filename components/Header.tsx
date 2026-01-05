
import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    // { name: 'AI Consultant', href: '#ai-consultant' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md py-3 backdrop-blur-md' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-orange-40 p-2 rounded-lg">
              {/* <HardHat className="text-white w-6 h-6" /> */}
              <img 
              // src="/Images/WhatsApp Image 2026-01-05 at 6.51.38 PM.jpeg" 
              // src="/Images/WhatsApp Image 2026-01-05 at 6.51.37 PM.jpeg" 
              src="/construction-script/Images/LogoBlack.jpeg" 
              className="text-white w-15 h-20" />
            </div>
            {/* <span className={`text-xl font-bold font-display tracking-tight ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Thalaseer Agam <span className="text-orange-600">  Construction</span>
            </span> */}
            <span className={`text-xl font-bold font-display tracking-tight flex flex-col h-12 w-48 ${
  isScrolled ? 'text-slate-900' : 'text-white'
}`}>
  <span>THALASEER AGAM</span>
  {/* <span> தளசீர் அகம் </span> */}
  <span className="text-orange-600">Construction</span>
  {/* <span className="text-orange-600"> கட்டுமானம் </span> */}
</span>

          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold hover:text-orange-600 transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            {/* <button 
              onClick={(e) => {
                const contact = document.getElementById('contact');
                contact?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20"
            >
              Get Quote
            </button> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-slate-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block py-3 text-slate-800 font-medium border-b border-slate-100 last:border-0 hover:text-orange-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold shadow-lg"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
