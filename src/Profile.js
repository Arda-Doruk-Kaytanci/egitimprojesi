import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-[#e9f0ee] font-serif">
      {/* Header */}
      <header className="bg-[#535c63] text-white px-0 md:px-0 py-0 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-4 md:px-8">
          <div className="flex items-center gap-3">
            <img src={require('./assets/brain.png')} alt="Dersify Logo" className="w-12 h-12 mr-2" />
            <span className="text-2xl font-extrabold tracking-wide">DERSIFY</span>
          </div>
          <nav className="flex gap-8 text-lg font-semibold">
            <a href="#" className="hover:underline underline-offset-4">Dersler</a>
            <a href="#" className="hover:underline underline-offset-4">Konu Anlatımları</a>
            <a href="#" className="hover:underline underline-offset-4">Testler</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white text-[#535c63] px-4 py-2 rounded font-bold shadow text-base border border-gray-300">
              <span className="text-xl">👥</span> TOPLULUK
            </button>
            <button className="flex items-center gap-2 bg-white text-[#535c63] px-4 py-2 rounded font-bold shadow text-base border border-gray-300">
              <span className="text-xl">👤</span> GİRİŞ YAP
            </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto w-full flex flex-col md:flex-row bg-[#e9f0ee] mt-0 md:mt-8 rounded-lg shadow-none md:shadow-lg border-0 md:border md:border-gray-200">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start px-8 py-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center border-4 border-green-400 overflow-hidden">
              <img src="https://img.icons8.com/color/120/user-male-circle--v2.png" alt="Profil Fotoğrafı" className="w-full h-full object-cover" />
            </div>
            <img src="https://img.icons8.com/ios-filled/32/000000/settings.png" alt="Ayarlar" className="ml-2 w-8 h-8" />
          </div>
          <div className="text-2xl font-extrabold mb-6">@kullaniciadi</div>
          <div className="flex items-center gap-3 mb-4">
            <img src="https://img.icons8.com/color/48/000000/star--v1.png" alt="Yıldız" className="w-8 h-8" />
            <span className="text-xl font-semibold">Kazanılan Puan:</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="https://img.icons8.com/color/48/000000/fire-element.png" alt="Seri" className="w-8 h-8" />
            <span className="text-xl font-semibold">Seri:</span>
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block border-r-2 border-dashed border-gray-400 my-10"></div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col px-8 py-10">
          <div className="text-2xl font-bold underline mb-6">İçerikler</div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#7d6fd2] text-white text-xl font-bold rounded-lg py-3">Matematik</button>
            <button className="bg-[#7d6fd2] text-white text-xl font-bold rounded-lg py-3">TYT-2</button>
            <button className="bg-[#f26a4b] text-white text-xl font-bold rounded-lg py-3">Biyoloji</button>
            <button className="bg-[#f26a4b] text-white text-xl font-bold rounded-lg py-3">TYT-1</button>
            <button className="bg-[#f7b32b] text-white text-xl font-bold rounded-lg py-3">Tarih</button>
            <button className="bg-[#f7b32b] text-white text-xl font-bold rounded-lg py-3">AYT-1</button>
            <button className="bg-[#3bb18b] text-white text-xl font-bold rounded-lg py-3">Kimya</button>
            <button className="bg-[#3bb18b] text-white text-xl font-bold rounded-lg py-3">AYT-3</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile; 