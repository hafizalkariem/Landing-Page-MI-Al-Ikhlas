import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Amiri", serif' }}>
            Tentang MI Al Ikhlas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sekolah Islam yang berkomitmen menghadirkan pendidikan berkualitas tinggi 
            dengan nilai-nilai Islami yang kuat sejak tahun 2008
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                MI Al Ikhlas didirikan dengan visi mencetak generasi muslim yang unggul dalam 
                akademik dan akhlak. Kami mengintegrasikan kurikulum nasional dengan nilai-nilai 
                Islam yang komprehensif, menciptakan lingkungan belajar yang kondusif bagi 
                perkembangan optimal peserta didik.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan didukung oleh tenaga pendidik yang berpengalaman dan fasilitas modern, 
                kami berkomitmen memberikan layanan pendidikan terbaik untuk mempersiapkan 
                siswa menghadapi tantangan masa depan.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-teal-500">
                <Award className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 mb-1">A</div>
                <div className="text-sm text-gray-600">Akreditasi</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-yellow-500">
                <div className="text-2xl font-bold text-gray-800 mb-1">25+</div>
                <div className="text-sm text-gray-600">Guru Berkualitas</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8617784/pexels-photo-8617784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Suasana belajar di MI Al Ikhlas"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menjadi lembaga pendidikan Islam unggulan yang menghasilkan generasi beriman, 
              bertakwa, berakhlak mulia, cerdas, dan berprestasi dalam menghadapi tantangan 
              global dengan tetap berpegang teguh pada nilai-nilai Islam.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
            </div>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <Heart className="w-4 h-4 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                <span>Menyelenggarakan pendidikan yang mengintegrasikan ilmu pengetahuan dengan nilai-nilai Islam</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-4 h-4 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                <span>Mengembangkan potensi siswa secara optimal dalam bidang akademik dan non-akademik</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-4 h-4 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                <span>Membentuk karakter islami yang kuat dan berakhlak mulia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;