import { Menu, X, MapPin, Mail, Phone, CheckCircle, Briefcase } from 'lucide-react';
import services from './data/services.ts';
import projectTimeline from './data/projectTimeLine.ts';
import { useState } from 'react';
import heroImage from "./assets/hero-image.jpeg"
import aboutImage from "./assets/about-image.jpeg"
import contactImage from "./assets/contact-image.jpeg"

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openTimeline, setOpenTimeline] = useState<number | null>(null);

  const packages = [
    {
      name: 'Basic Consultation',
      description: 'Cocok untuk bisnis yang membutuhkan arahan konsep dan evaluasi',
      features: [
        'Konsultasi & analisis dasar',
        'Rekomendasi strategi'
      ],
      popular: false
    },
    {
      name: 'Growth Consulting',
      description: 'Untuk bisnis yang ingin scale up dan meningkatkan penjualan',
      features: [
        'Menu engineering',
        'Strategy marketing',
        'Pendampingan & Monitoring'
      ],
      popular: true
    },
    {
      name: 'Consultan Production',
      description: 'Paket lengkap untuk transformasi bisnis F&B Anda',
      features: [
        'Strategy Concept Development F&B',
        'Menu engineering & food cost analysis',
        'Operational SOP & Kitchen Flow',
        'Strategy branding & marketing F&B',
        'Monitoring & business'
      ],
      popular: false
    }
  ];

  const handleWhatsAppClick = () => {
    const phone = "6281391111852";

    const message = `
    Halo, saya tertarik untuk konsultasi bisnis F&B.
    Pilih Paket:
    Kebutuhan bisnis:
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };



  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-white">bayu</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-amber-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors">Tentang Kami</a>
              <a href="#projects" className="text-gray-300 hover:text-amber-500 transition-colors">
                Proyek
              </a>

              <a href="#services" className="text-gray-300 hover:text-amber-500 transition-colors">Layanan</a>
              <a href="#packages" className="text-gray-300 hover:text-amber-500 transition-colors">Paket</a>
              <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors">Kontak</a>
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-amber-500 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-amber-500 transition-colors">Tentang Kami</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-amber-500 transition-colors">
                Proyek
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-amber-500 transition-colors">Layanan</a>
              <a href="#packages" className="block px-3 py-2 text-gray-300 hover:text-amber-500 transition-colors">Paket</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-amber-500 transition-colors">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-28 pb-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div
              className="
          max-w-xl
          text-center
          lg:text-left
          mx-auto
          lg:mx-0
          space-y-6
        "
            >
              <h1
                className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[52px]
            font-bold
            leading-tight
            text-white
          "
              >
                Transformasi Bisnis
                <span className="block text-amber-500 mt-2">
                  Food & Beverage Anda
                </span>
              </h1>

              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                text-gray-400
                  leading-relaxed
                "
              >
                Konsultan profesional yang membantu bisnis kuliner Anda tumbuh
                dengan strategi tepat, operasional efisien, dan finansial berkelanjutan.
              </p>

              <div
                className="
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
                lg:justify-start
              "
              >
                <a
                  href="#contact"
                  className="px-7 py-3 bg-amber-500 text-gray-900 font-semibold rounded-lg hover:bg-amber-400 transition"
                >
                  Konsultasi Sekarang
                </a>

                <a
                  href="#services"
                  className="px-7 py-3 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 transition"
                >
                  Lihat Layanan
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="max-w-xl mx-auto lg:ml-auto">
              <img
                src={heroImage}
                alt="F&B Consulting"
                loading="lazy"
                className="rounded-2xl border border-gray-700 shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>



      <section id="about" className="py-24 bg-gray-800/50">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* IMAGE */}
            <div className="max-w-xl mx-auto lg:mx-0">
              <img
                src={aboutImage}
                alt="F&B Consulting Discussion"
                loading="lazy"
                className="rounded-2xl border border-gray-700 shadow-xl"
              />
            </div>

            {/* TEXT */}
            <div
              className="
              max-w-xl
              mx-auto
              lg:mx-0
              text-center
              lg:text-left
              space-y-6
            "
            >
              {/* Small heading */}
              <span className="block text-amber-500 font-semibold tracking-wide text-sm uppercase">
                Tentang Kami
              </span>

              {/* Main paragraph */}
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Kami adalah konsultan Food & Beverage yang
                membantu pelaku usaha membangun <span className="text-white font-medium">bisnis yang kuat secara konsep,
                  efisien dalam operasional, dan berkelanjutan secara finansial.</span>
              </p>

              {/* Supporting paragraphs */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Dengan pengalaman mendampingi berbagai skala bisnis mulai dari UMKM, café, restoran, hingga brand F&B yang sedang ekspansi kami memahami bahwa setiap bisnis memiliki tantangan unik.
              </p>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Setiap solusi yang kami berikan selalu disesuaikan dengan kebutuhan dan kondisi nyata di era saat ini.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-gray-900">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Proyek
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* DESKTOP CENTER LINE */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-700 -translate-x-1/2" />

            {/* MOBILE LEFT LINE */}
            <div className="md:hidden absolute left-4 top-0 h-full w-px bg-gray-700" />

            <div className="space-y-16 md:space-y-24">
              {projectTimeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isOpen = openTimeline === index;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row 
                    ${isLeft ? "md:justify-start" : "md:justify-end"}
                    `}
                  >
                    {/* STEP DOT */}
                    <div
                      className="absolute left-2 md:left-1/2 top-6 w-5 h-5 rounded-full bg-amber-500 border-4 border-gray-900 -translate-x-1/2"
                    />

                    {/* CARD */}
                    <div className="w-full md:w-1/2 pl-10 md:px-4">
                      <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden">

                        {/* MEDIA */}
                        {item.type === "image" ? (
                          <img
                            src={item.media}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-[200px] sm:h-[220px] object-cover"
                          />
                        ) : (
                          <video
                            src={item.media}
                            controls
                            // preload="none"
                            className="w-full h-[200px] sm:h-[220px] object-cover bg-black"
                          />
                        )}

                        {/* CONTENT */}
                        <div className="p-5 sm:p-6">

                          {/* HEADER */}
                          <button
                            onClick={() =>
                              setOpenTimeline(isOpen ? null : index)
                            }
                            className="w-full flex items-start justify-between gap-4 text-left"
                          >
                            <div className="flex flex-col gap-1">
                              <span className="text-amber-500 text-sm font-bold">
                                STEP {item.step}
                              </span>
                              <h3 className="text-base sm:text-lg font-semibold text-white">
                                {item.title}
                              </h3>
                            </div>

                            <span
                              className={`text-gray-400 transition-transform duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                            >
                              ▼
                            </span>
                          </button>

                          {/* DROPDOWN */}
                          <div
                            className={`
                            overflow-hidden
                            transition-all duration-300 ease-in-out
                            ${isOpen
                                ? 'max-h-40 opacity-100 mt-4'
                                : 'max-h-0 opacity-0 mt-0 pointer-events-none'}
                            `}
                          >
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>



                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Layanan Kami</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Solusi lengkap untuk mengembangkan bisnis F&B Anda dengan strategi yang tepat sasaran
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Icon className="h-12 w-12 text-amber-500 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>


                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {

              return (
                <div
                  key={index}
                  className=" bg-gray-900 p-8 rounded-lg border-2 justify-between flex flex-col transition-all duration-300 relative border-amber-500"
                >
                  {/* Badge populer */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Paling Populer
                      </span>
                    </div>
                  )}


                  <div className='w-full flex flex-col'>

                    {/* Judul */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {pkg.name}
                    </h3>

                    {/* Deskripsi */}
                    <p className="text-gray-400 mb-6">{pkg.description}</p>

                    {/* Fitur */}
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-amber-500/10 to-gray-900"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">

            {/* HEADLINE UTAMA */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Siap Membawa Bisnis F&B Anda
              <span className="block text-amber-500 mt-1">
                Naik ke Level Berikutnya?
              </span>
            </h2>

            {/* DIVIDER */}
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>

            {/* SUPPORTING TEXT */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
              Jangan biarkan bisnis berjalan tanpa arah yang jelas.
              Diskusikan kebutuhan bisnis Anda bersama konsultan yang
              memahami tantangan industri F&B.
            </p>

            {/* CTA STATEMENT */}
            <p className="text-lg sm:text-xl font-semibold text-white tracking-wide">
              Jadwalkan Konsultasi Sekarang
            </p>

          </div>


          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">

            {/* LEFT - INFO */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-2xl p-8 flex flex-col">

                <img
                  src={contactImage}
                  alt="Consultation Discussion"
                  loading="lazy"
                  className="rounded-xl mb-8 border border-gray-700 shadow-md object-cover h-[220px]"
                />

                <h3 className="text-xl font-semibold text-white mb-4">
                  Konsultasi via WhatsApp
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Diskusikan kebutuhan bisnis Anda secara langsung bersama konsultan kami.
                  Respon cepat dan lebih praktis untuk tahap awal.
                </p>

                {/* WHATSAPP BUTTON */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Chat Konsultasi via WhatsApp
                </button>

                {/* INFO KECIL */}
                <p className="mt-4 text-xs text-gray-500 text-center">
                  Jam respon: Senin – Jumat, 09.00 – 18.00 WIB
                </p>

                {/* CONTACT INFO */}
                <div className="mt-8 space-y-4 text-sm text-gray-300">
                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-400">chamada.atf@gmail.com</span>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-400">
                      Banyumas, Purwokerto, Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>


            {/* RIGHT - FORM */}
            <div className="flex justify-center lg:justify-end">
              <form
                className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-2xl p-8 flex flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form siap dikirim (hubungkan ke backend)");
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Atau tinggalkan pesan melalui form
                </h3>

                <div className="space-y-5 flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Aktif"
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-500"
                  />

                  <textarea
                    name="message"
                    placeholder="Ceritakan kebutuhan bisnis Anda..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 text-white font-semibold rounded-lg border border-gray-700 hover:bg-amber-500 transition-colors"
                >
                  Kirim via Email
                </button>
              </form>
            </div>


          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-6 w-6 text-amber-500" />
            <span className="ml-2 text-lg font-bold text-white">F&B Consulting</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 F&B Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
