import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-orange-100">The story behind Nagpur Traveller</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face" 
                    alt="Rahul Deshmukh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Rahul Deshmukh</h2>
                <p className="text-orange-500 text-center mb-4">Travel Blogger & Wildlife Enthusiast</p>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📍</span>
                    <span>Dharampeth, Nagpur - 440010</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📱</span>
                    <span>+91 98234 56789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">✉️</span>
                    <span>rahul.deshmukh@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🎂</span>
                    <span>28 years old</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">💼</span>
                    <span>Software Engineer at Infosys, Nagpur</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4 border-t">
                  <a href="https://instagram.com/nagpurtraveller" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com/@nagpurtraveller" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/nagpurtraveller" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/nagpurtraveller" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">नमस्कार! My Story</h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    I'm Rahul Deshmukh, a 28-year-old software engineer born and raised in Nagpur, Maharashtra. 
                    I grew up in the Dharampeth area, studied at Centre Point School Katol Road, and completed 
                    my B.Tech from VNIT Nagpur in 2018. Currently, I work at Infosys SEZ in MIHAN.
                  </p>
                  <p>
                    My love for travel started with childhood trips to my grandparents' village near Wardha 
                    and family visits to the Ramtek temple. But it was my first tiger sighting at Tadoba in 
                    2019 that truly ignited my passion for exploring the incredible wilderness around Nagpur.
                  </p>
                  <p>
                    Living in Nagpur - the Tiger Capital of India - I realized how blessed we are to have 
                    such amazing destinations within a few hours' drive. Tadoba, Pench, Navegaon, Bor, 
                    Umred-Karhandla - we have more tiger reserves nearby than any other city in India!
                  </p>
                  <p>
                    Through this blog, I want to share my weekend explorations and help fellow Nagpurians 
                    (and visitors) discover the incredible travel opportunities our region offers. From 
                    wildlife safaris to heritage sites, hill stations to hidden waterfalls - Vidarbha has 
                    it all, and I'm here to document it.
                  </p>
                </div>
              </div>

              {/* Travel Stats */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Travel Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-orange-50 rounded-2xl">
                    <div className="text-4xl font-bold text-orange-500">15+</div>
                    <div className="text-gray-600 mt-1">Trips Taken</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-2xl">
                    <div className="text-4xl font-bold text-green-500">12</div>
                    <div className="text-gray-600 mt-1">Tiger Sightings</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-500">5</div>
                    <div className="text-gray-600 mt-1">Tiger Reserves</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-2xl">
                    <div className="text-4xl font-bold text-purple-500">8</div>
                    <div className="text-gray-600 mt-1">States Visited</div>
                  </div>
                </div>
              </div>

              {/* Places Visited */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Places I've Explored</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">🐅 Wildlife & Tiger Reserves</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Tadoba', 'Pench', 'Navegaon-Nagzira', 'Bor', 'Umred-Karhandla', 'Melghat'].map((place) => (
                        <span key={place} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">🏛️ Heritage & Temples</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Ramtek', 'Markanda', 'Sevagram', 'Pawnar', 'Khindsi Lake', 'Adasa Ganpati'].map((place) => (
                        <span key={place} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">⛰️ Hill Stations & Nature</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Chikhaldara', 'Lonar Crater', 'Satpura Range', 'Panchmarhi', 'Mahabaleshwar'].map((place) => (
                        <span key={place} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* My Gear */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">My Travel Gear</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl">📷</span>
                    <div>
                      <div className="font-semibold text-gray-800">Canon EOS 200D II</div>
                      <div className="text-sm text-gray-500">With 55-250mm zoom lens</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl">🚗</span>
                    <div>
                      <div className="font-semibold text-gray-800">Maruti Dzire ZXI+</div>
                      <div className="text-sm text-gray-500">MH-31 registration</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl">🎒</span>
                    <div>
                      <div className="font-semibold text-gray-800">Wildcraft 45L Backpack</div>
                      <div className="text-sm text-gray-500">Perfect for weekend trips</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl">🔭</span>
                    <div>
                      <div className="font-semibold text-gray-800">Nikon Aculon 10x50</div>
                      <div className="text-sm text-gray-500">Binoculars for wildlife</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
                <p className="mb-6 text-orange-100">
                  Planning a trip around Nagpur or Vidarbha? Have questions about tiger safaris or 
                  local travel? Feel free to reach out - I'm always happy to help fellow travelers!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:rahul.deshmukh@gmail.com"
                    className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
                  >
                    <span>✉️</span> Email Me
                  </a>
                  <a 
                    href="tel:+919823456789"
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                  >
                    <span>📱</span> +91 98234 56789
                  </a>
                  <Link 
                    to="/trips"
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                  >
                    <span>🗺️</span> See My Trips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
