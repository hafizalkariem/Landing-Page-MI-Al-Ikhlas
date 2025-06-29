import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ibu Sarah Handayani",
      role: "Orang Tua Siswa Kelas 4",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "MI Al Ikhlas benar-benar memberikan pendidikan yang luar biasa untuk anak saya. Tidak hanya akademik yang meningkat, tapi akhlaknya juga semakin baik. Guru-gurunya sangat perhatian dan sabar dalam mendidik.",
      rating: 5,
      highlight: "Akhlak dan akademik meningkat"
    },
    {
      name: "Bapak Ahmad Ridwan",
      role: "Orang Tua Siswa Kelas 3",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Fasilitas sekolah sangat lengkap dan modern. Anak saya yang tadinya pemalu sekarang sudah berani tampil dan hafalan Qur'annya sudah 2 juz. Program tahfidznya sangat bagus dan sistematis.",
      rating: 5,
      highlight: "Fasilitas lengkap dan program tahfidz terbaik"
    },
    {
      name: "Ibu Fatimah Zahra",
      role: "Orang Tua Siswa Kelas 5",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Saya sangat puas dengan perkembangan anak saya di MI Al Ikhlas. Komunikasi dengan guru sangat baik, ada grup WA untuk update kegiatan harian. Anak jadi lebih mandiri dan bertanggung jawab.",
      rating: 5,
      highlight: "Komunikasi baik dan anak jadi mandiri"
    },
    {
      name: "Bapak Muhammad Yusuf",
      role: "Orang Tua Siswa Kelas 2",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Lingkungan belajar di MI Al Ikhlas sangat mendukung. Anak saya yang awalnya sulit mengaji sekarang sudah lancar dan senang belajar. Metode pembelajaran yang digunakan sangat cocok untuk anak-anak.",
      rating: 5,
      highlight: "Metode pembelajaran yang tepat"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Amiri", serif' }}>
            Testimoni Orang Tua
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kepercayaan dan kepuasan orang tua adalah motivasi terbesar bagi kami 
            untuk terus memberikan pelayanan pendidikan terbaik
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-100 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-16 h-16 text-teal-600" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        <div className="flex space-x-1 mr-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {testimonial.rating}.0/5.0
                        </span>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Highlight */}
                      <div className="bg-teal-100 rounded-full px-4 py-2 inline-block mb-8">
                        <span className="text-teal-700 font-semibold text-sm">
                          ✨ {testimonial.highlight}
                        </span>
                      </div>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-4 border-white shadow-lg">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 border border-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-teal-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-teal-50 rounded-2xl">
            <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium">Kepuasan Orang Tua</div>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-2xl">
            <div className="text-3xl font-bold text-yellow-600 mb-2">4.9/5</div>
            <div className="text-gray-700 font-medium">Rating Rata-rata</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Keluarga Percaya</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;