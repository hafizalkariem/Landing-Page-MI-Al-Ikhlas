import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const FacilitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const facilities = [
    {
      image: "https://images.pexels.com/photos/8617728/pexels-photo-8617728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Ruang Kelas Modern",
      description: "Ruang kelas dilengkapi AC, LCD proyektor, dan whiteboard interaktif untuk pembelajaran yang optimal"
    },
    {
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Perpustakaan Digital",
      description: "Koleksi buku lengkap dengan sistem digital dan area baca yang nyaman untuk menumbuhkan minat baca"
    },
    {
      image: "https://images.pexels.com/photos/6474502/pexels-photo-6474502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Masjid Sekolah",
      description: "Masjid yang luas dan nyaman untuk kegiatan ibadah harian dan pembelajaran agama"
    },
    {
      image: "https://images.pexels.com/photos/9159033/pexels-photo-9159033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Laboratorium Sains",
      description: "Lab sains lengkap dengan peralatan modern untuk praktikum fisika, kimia, dan biologi"
    },
    {
      image: "https://images.pexels.com/photos/8761571/pexels-photo-8761571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lapangan Olahraga",
      description: "Area olahraga yang luas untuk berbagai aktivitas fisik dan pengembangan bakat olahraga"
    },
    {
      image: "https://images.pexels.com/photos/8617804/pexels-photo-8617804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Ruang Komputer",
      description: "Lab komputer dengan perangkat terbaru untuk pembelajaran teknologi dan coding"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + facilities.length) % facilities.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="fasilitas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Amiri", serif' }}>
            Fasilitas Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fasilitas modern dan lengkap yang mendukung proses pembelajaran 
            dan pengembangan potensi siswa secara optimal
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {facilities.map((facility, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[16/9] md:aspect-[21/9] relative">
                    <img 
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                      <h3 className="text-2xl md:text-4xl font-bold mb-4">
                        {facility.title}
                      </h3>
                      <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-teal-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Facility Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                currentIndex === index 
                  ? 'ring-4 ring-teal-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-lg mb-1">{facility.title}</h4>
                  <p className="text-sm opacity-90 line-clamp-2">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-teal-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Lokasi Strategis</h3>
          </div>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            MI Al Ikhlas terletak di lokasi yang strategis, mudah diakses dari berbagai arah 
            dengan lingkungan yang aman dan kondusif untuk belajar
          </p>
          
          {/* Map Placeholder */}
          <div className="aspect-[16/9] bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Peta Lokasi MI Al Ikhlas</p>
              <p className="text-sm text-gray-400 mt-2">
                Jl. Pendidikan No. 123, Kota Malang, Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;