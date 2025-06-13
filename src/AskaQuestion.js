import React from "react";

function AskaQuestion() {
  return (
    <div className="min-h-screen bg-[#e9f0ee] font-serif relative">
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
        <div className="flex-1 flex flex-col items-start px-8 py-10">
          <div className="flex items-center mb-4">
            <img src="https://img.icons8.com/ios-filled/80/000000/question-mark.png" alt="Soru işareti" className="w-20 h-20 mr-2" />
            <input
              type="text"
              placeholder="Sorunu sor..."
              className="border-4 border-black rounded-full px-8 py-3 text-2xl font-semibold text-gray-500 focus:outline-none ml-2 w-[320px] max-w-full"
            />
          </div>
          <div className="relative mt-2">
            <div className="w-[320px] h-[220px] bg-white rounded-2xl shadow-md border-2 border-gray-200 flex items-end p-4">
              <img src="https://img.icons8.com/ios-filled/50/000000/camera--v1.png" alt="Kamera" className="w-8 h-8" />
            </div>
            <span className="absolute bottom-4 left-4 text-2xl text-gray-500"></span>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-10">
          <div className="text-2xl text-gray-400 font-semibold text-center md:text-left">
            Yapamadığın soruyu paylaş,<br />cevabını hemen öğren!
          </div>
        </div>
      </main>
      {/* Floating help button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-yellow-400 rounded-full p-4 shadow-lg flex items-center gap-2 text-2xl hover:bg-yellow-300">
          <img src="https://img.icons8.com/ios-filled/32/000000/question-mark.png" alt="Yardım" className="w-8 h-8" />
          <img src="https://img.icons8.com/ios-filled/32/000000/topic.png" alt="Sohbet" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default AskaQuestion; 