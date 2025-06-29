import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg lg:text-xl font-bold text-gray-800" style={{ fontFamily: '"Amiri", serif' }}>
                MI Al Ikhlas
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">Sekolah Islam Modern</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              <li><button onClick={() => scrollToSection('beranda')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Beranda</button></li>
              <li><button onClick={() => scrollToSection('tentang')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Profil</button></li>
              <li><button onClick={() => scrollToSection('program')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Program</button></li>
              <li><button onClick={() => scrollToSection('fasilitas')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Fasilitas</button></li>
              <li><button onClick={() => scrollToSection('testimoni')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Testimoni</button></li>
              <li><button onClick={() => scrollToSection('kontak')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Kontak</button></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('pendaftaran')}
            className="hidden lg:block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Daftar Sekarang
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('beranda')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Beranda</button></li>
              <li><button onClick={() => scrollToSection('tentang')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Profil</button></li>
              <li><button onClick={() => scrollToSection('program')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Program</button></li>
              <li><button onClick={() => scrollToSection('fasilitas')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Fasilitas</button></li>
              <li><button onClick={() => scrollToSection('testimoni')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Testimoni</button></li>
              <li><button onClick={() => scrollToSection('kontak')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Kontak</button></li>
              <li className="px-4">
                <button 
                  onClick={() => scrollToSection('pendaftaran')}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300"
                >
                  Daftar Sekarang
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;