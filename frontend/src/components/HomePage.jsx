import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MapPin, Clock, Star, Gift, Heart, ShoppingBag } from 'lucide-react';

export default function KrishnaSaariCenter() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collections = [
    { name: 'सिल्क साड्या', color: 'from-purple-600 to-pink-600' },
    { name: 'कॉटन साड्या', color: 'from-blue-600 to-cyan-600' },
    { name: 'डिझायनर साड्या', color: 'from-orange-600 to-red-600' },
    { name: 'ब्राइडल कलेक्शन', color: 'from-rose-600 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Saree Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,215,0,0.1) 35px, rgba(255,215,0,0.1) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,105,180,0.1) 35px, rgba(255,105,180,0.1) 70px),
            linear-gradient(to bottom, rgba(255,140,0,0.2), rgba(255,20,147,0.2))
          `,
          backgroundSize: 'cover'
        }}>
        </div>
      </div>

      {/* Saree Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 50 25, 100 0 L 100 10 Q 50 35, 0 10 Z' fill='%23ff6b35' fill-opacity='0.15'/%3E%3Cpath d='M0 20 Q 50 45, 100 20 L 100 30 Q 50 55, 0 30 Z' fill='%23f7931e' fill-opacity='0.15'/%3E%3Cpath d='M0 40 Q 50 65, 100 40 L 100 50 Q 50 75, 0 50 Z' fill='%23ffd700' fill-opacity='0.15'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}>
      </div>

      {/* Floating Diwali Diyas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="text-orange-400 opacity-40" size={20} />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-orange-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                  कृष्णा साडी सेंटर
                </h1>
                <p className="text-xs text-orange-200">दिवाळीच्या शुभेच्छा</p>
              </div>
            </div>
            <a href="tel:+918087400221" className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Phone size={18} />
              <span>आता कॉल करा</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-pink-600/30"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-white font-semibold shadow-lg animate-bounce">
              <Gift className="inline mr-2" size={20} />
              दिवाळी स्पेशल कलेक्शन २०२५
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              दिवाळीला नवीन रंग द्या
              <br />
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">सुंदर साड्यांसोबत</span>
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed drop-shadow-lg">
              पारंपरिक आणि आधुनिक डिझाईनची उत्कृष्ट साड्या. 
              या दिवाळीला आपले सौंदर्य अधिक उजळवा.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <ShoppingBag size={24} />
                <span>दिवाळी कलेक्शन पहा</span>
              </button>
              <button className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/50">
                नवीन आगमन
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">आमचे उत्सवी कलेक्शन</h3>
            <p className="text-orange-200 text-lg">प्रत्येक सणासाठी खास साड्या</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-orange-500/50"
                onMouseEnter={() => setActiveCollection(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <Star className="mb-4 animate-pulse" size={40} />
                  <h4 className="text-2xl font-bold mb-2 text-center">{collection.name}</h4>
                  <p className="text-sm text-center opacity-90">सर्वोत्तम डिझाईन पहा</p>
                  <button className="mt-4 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    अधिक पहा
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-black/30 backdrop-blur">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">कृष्णा साडी सेंटर का निवडावे?</h3>
            <p className="text-orange-200 text-lg">प्रामाणिक साड्यांसाठी तुमचे विश्वासू ठिकाण</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-900/50 to-pink-900/50 backdrop-blur hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 border border-orange-500/30">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">उत्तम दर्जा</h4>
              <p className="text-orange-200">सर्वोत्कृष्ट फॅब्रिक आणि कारागिरी</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 border border-purple-500/30">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <Star className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">खास डिझाईन</h4>
              <p className="text-purple-200">अनन्य साधारण कलेक्शन</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur hover:shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 border border-pink-500/30">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Gift className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">विशेष ऑफर</h4>
              <p className="text-pink-200">दिवाळी सवलत आणि खास ऑफर</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white border-4 border-yellow-400/50">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">आमच्या दुकानाला भेट द्या</h3>
              <p className="text-lg opacity-90">आमच्या दिवाळी कलेक्शनचा आस्वाद घ्या</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                  <MapPin className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">पत्ता</h4>
                    <p className="opacity-90 leading-relaxed">
                      १२, गुरुनाथ, स्वागत नगर रोड,<br />
                      नागेंद्र नगर, कुमटा नाका,<br />
                      सोलापूर, महाराष्ट्र ४१३००३
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                  <Phone className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">फोन</h4>
                    <a href="tel:+918087400221" className="text-lg hover:underline">
                      +९१ ८०८७४ ००२२१
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                  <Clock className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">दुकान वेळ</h4>
                    <p className="opacity-90">सोम - शनि: सकाळी १०:०० - रात्री ९:००<br />रविवार: सकाळी ११:०० - रात्री ८:००</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <Sparkles className="mx-auto mb-4 animate-spin" size={60} style={{ animationDuration: '3s' }} />
                  <h4 className="text-2xl font-bold mb-4">दिवाळी विशेष वेळ</h4>
                  <p className="text-lg mb-6">सणाच्या काळात विस्तारित वेळ!</p>
                  <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    मार्गदर्शन मिळवा
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-orange-950 to-gray-900 text-white py-12 px-4 relative overflow-hidden border-t-4 border-orange-500/50">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
              size={12}
            />
          ))}
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                कृष्णा साडी सेंटर
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                उत्कृष्ट साड्यांसाठी तुमचे एकमेव ठिकाण. पारंपरिक आणि आधुनिक साड्यांचा संग्रह.
              </p>
              <div className="flex space-x-4">
                {['F', 'I', 'W'].map((social) => (
                  <div key={social} className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">द्रुत दुवे</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-orange-400 cursor-pointer transition-colors">मुख्यपृष्ठ</li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">कलेक्शन</li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">आमच्याबद्दल</li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">संपर्क</li>
                <li className="hover:text-orange-400 cursor-pointer transition-colors">दिवाळी ऑफर</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">संपर्कात रहा</h4>
              <p className="text-gray-300 mb-4">खास ऑफर आणि नवीन आगमनासाठी सबस्क्राइब करा</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="तुमचा ईमेल"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border border-white/20 focus:outline-none focus:border-orange-400 text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-2 rounded-r-full font-semibold hover:shadow-lg transition-all">
                  सबस्क्राइब
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-300">
              © २०२५ कृष्णा साडी सेंटर. सर्व हक्क राखीव. | साडी प्रेमींसाठी <Heart className="inline text-pink-500" size={16} /> ने तयार केलेले
            </p>
            <p className="text-sm text-orange-300 mt-2 font-bold">
              🪔 तुम्हाला आणि तुमच्या कुटुंबाला दिवाळीच्या हार्दिक शुभेच्छा! 🪔
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}