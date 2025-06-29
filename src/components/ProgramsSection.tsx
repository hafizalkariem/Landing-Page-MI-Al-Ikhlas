import React from 'react';
import { BookOpen, Mic2, Microscope, Palette, Globe, Users } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Program Tahfidz",
      description: "Menghafal Al-Qur'an dengan metode yang menyenangkan dan terbukti efektif untuk anak-anak",
      features: ["Target hafalan 3-5 juz", "Metode Tilawati", "Pembinaan rutin"],
      color: "teal"
    },
    {
      icon: Mic2,
      title: "Bahasa Arab & Inggris",
      description: "Pembelajaran bahasa Arab dan Inggris aktif dengan pendekatan komunikatif yang menarik",
      features: ["Conversation class", "Native speaker", "Sertifikat internasional"],
      color: "blue"
    },
    {
      icon: Microscope,
      title: "Sains & Teknologi",
      description: "Eksplorasi sains dan teknologi melalui praktikum langsung dan pembelajaran berbasis proyek",
      features: ["Lab science modern", "Coding untuk anak", "Robotika sederhana"],
      color: "purple"
    },
    {
      icon: Palette,
      title: "Seni & Kreativitas",
      description: "Pengembangan bakat seni dan kreativitas melalui berbagai kegiatan ekstrakurikuler",
      features: ["Kaligrafi Islam", "Musik islami", "Kerajinan tangan"],
      color: "pink"
    },
    {
      icon: Globe,
      title: "Kepemimpinan",
      description: "Pembentukan jiwa kepemimpinan dan kemandirian sejak dini melalui berbagai kegiatan",
      features: ["Student council", "Public speaking", "Leadership camp"],
      color: "green"
    },
    {
      icon: Users,
      title: "Karakter Islami",
      description: "Pembinaan akhlak dan karakter islami melalui keteladanan dan pembiasaan sehari-hari",
      features: ["Shalat berjamaah", "Infaq & sedekah", "Akhlak mulia"],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: "bg-teal-500 group-hover:bg-teal-600",
      blue: "bg-blue-500 group-hover:bg-blue-600",
      purple: "bg-purple-500 group-hover:bg-purple-600",
      pink: "bg-pink-500 group-hover:bg-pink-600",
      green: "bg-green-500 group-hover:bg-green-600",
      yellow: "bg-yellow-500 group-hover:bg-yellow-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.teal;
  };

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Amiri", serif' }}>
            Program Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menawarkan berbagai program pendidikan yang dirancang khusus untuk 
            mengembangkan potensi optimal setiap siswa dalam berbagai aspek kehidupan
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${getColorClasses(program.color)} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                    Pelajari Lebih Lanjut →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Bergabung dengan MI Al Ikhlas?
            </h3>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Daftarkan putra-putri Anda sekarang dan berikan mereka pendidikan terbaik 
              untuk masa depan yang gemilang
            </p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;