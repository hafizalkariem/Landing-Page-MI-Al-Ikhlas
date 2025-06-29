import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  GraduationCap,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: '"Amiri", serif' }}>
                  MI Al Ikhlas
                </h3>
                <p className="text-gray-400 text-sm">Sekolah Islam Modern</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Membangun generasi Islami yang cerdas dan berakhlak mulia melalui pendidikan 
              berkualitas dengan nilai-nilai Islam yang kuat.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Menu Utama</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('beranda')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tentang')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('program')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Program Unggulan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('fasilitas')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Fasilitas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimoni')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Testimoni
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pendaftaran')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Pendaftaran
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-bold mb-6">Program Kami</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">📖 Program Tahfidz</li>
              <li className="text-gray-300">🌍 Bahasa Arab & Inggris</li>
              <li className="text-gray-300">🔬 Sains & Teknologi</li>
              <li className="text-gray-300">🎨 Seni & Kreativitas</li>
              <li className="text-gray-300">👥 Kepemimpinan</li>
              <li className="text-gray-300">❤️ Karakter Islami</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Jl. Pendidikan No. 123<br />
                    Kota Malang, Jawa Timur 65119
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <p className="text-gray-300">(0341) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <p className="text-gray-300">info@mialikhlas.sch.id</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-teal-400 mt-1" />
                <div className="text-gray-300">
                  <p>Senin - Jumat: 07:00 - 15:00</p>
                  <p>Sabtu: 07:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <h5 className="font-semibold text-teal-400 mb-2">Kontak Darurat</h5>
              <p className="text-gray-300 text-sm">
                WhatsApp: <span className="font-semibold">0812-3456-7890</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h4 className="text-xl font-bold mb-4 text-center">Lokasi MI Al Ikhlas</h4>
          <div className="aspect-[16/9] md:aspect-[16/6] bg-gray-800 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">Google Maps akan dimuat di sini</p>
              <p className="text-sm text-gray-500 mt-2">
                Jl. Pendidikan No. 123, Kota Malang, Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; 2025 MI Al Ikhlas. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>untuk pendidikan yang lebih baik</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;