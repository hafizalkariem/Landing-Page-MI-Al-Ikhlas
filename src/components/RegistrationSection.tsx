import React, { useState } from 'react';
import { Send, CheckCircle, User, Phone, Mail, GraduationCap } from 'lucide-react';

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    namaAnak: '',
    namaOrangTua: '',
    phone: '',
    email: '',
    kelas: '',
    pesan: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        namaAnak: '',
        namaOrangTua: '',
        phone: '',
        email: '',
        kelas: '',
        pesan: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="pendaftaran" className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Terima Kasih!
              </h3>
              <p className="text-gray-600 mb-6">
                Pendaftaran Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda 
                untuk informasi lebih lanjut mengenai proses penerimaan siswa baru.
              </p>
              <div className="bg-teal-50 rounded-xl p-4">
                <p className="text-teal-700 font-medium">
                  📞 Atau hubungi langsung: <span className="font-bold">(0341) 123-4567</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pendaftaran" className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Amiri", serif' }}>
            Daftar Sekarang
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan keluarga besar MI Al Ikhlas dan berikan pendidikan terbaik 
            untuk masa depan cerah putra-putri Anda
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Mengapa Memilih MI Al Ikhlas?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Akreditasi A</h4>
                      <p className="text-gray-600 text-sm">Sekolah terakreditasi A dengan standar pendidikan tinggi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Guru Berkualitas</h4>
                      <p className="text-gray-600 text-sm">Tenaga pendidik berpengalaman dan bersertifikat</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Fasilitas Lengkap</h4>
                      <p className="text-gray-600 text-sm">Gedung modern dengan fasilitas pembelajaran terdepan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Kurikulum Terintegrasi</h4>
                      <p className="text-gray-600 text-sm">Menggabungkan kurikulum nasional dengan nilai-nilai Islam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Butuh Informasi Lebih Lanjut?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>(0341) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>info@mialikhlas.sch.id</span>
                  </div>
                </div>
                <p className="text-teal-100 text-sm mt-4">
                  Tim kami siap membantu Anda 24/7
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Formulir Pendaftaran</h3>
                <p className="text-gray-600">Isi data dengan lengkap dan benar</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nama Anak */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap Anak *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="namaAnak"
                      value={formData.namaAnak}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Masukkan nama lengkap anak"
                    />
                  </div>
                </div>

                {/* Nama Orang Tua */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Orang Tua/Wali *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="namaOrangTua"
                      value={formData.namaOrangTua}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Masukkan nama orang tua/wali"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Kelas */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kelas yang Diminati *
                  </label>
                  <select
                    name="kelas"
                    value={formData.kelas}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Pilih kelas</option>
                    <option value="1">Kelas 1</option>
                    <option value="2">Kelas 2</option>
                    <option value="3">Kelas 3</option>
                    <option value="4">Kelas 4</option>
                    <option value="5">Kelas 5</option>
                    <option value="6">Kelas 6</option>
                  </select>
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan Tambahan
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tulis pesan atau pertanyaan Anda (opsional)"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Kirim Pendaftaran</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-600 text-center">
                  Dengan mengirim formulir ini, Anda menyetujui untuk dihubungi oleh tim MI Al Ikhlas 
                  untuk keperluan informasi pendaftaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;