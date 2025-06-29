import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.7), rgba(0, 128, 128, 0.5)), url('https://images.pexels.com/photos/8617705/pexels-photo-8617705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-2 border-white/30 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium">🎓 Sekolah Islam Terdepan</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block" style={{ fontFamily: '"Amiri", serif' }}>
              Selamat Datang di
            </span>
            <span className="block text-yellow-300 drop-shadow-lg">
              MI Al Ikhlas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Membangun Generasi Islami yang Cerdas dan Berakhlak Mulia 
            melalui Pendidikan Berkualitas dan Lingkungan yang Kondusif
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('program')}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Lihat Program</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scrollToSection('pendaftaran')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-sm opacity-80">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-sm opacity-80">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-sm opacity-80">Kepuasan Orang Tua</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;