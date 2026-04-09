import { Link } from 'react-router-dom';
import { trips } from '../data/trips';
import TripCard from '../components/TripCard';

const HomePage = () => {
  const featuredTrip = trips[0];
  const recentTrips = trips.slice(1, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-rose-800/30 to-orange-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-rose-200 font-semibold tracking-widest uppercase mb-4 text-sm">
            ✨ Wanderlust Stories
          </p>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Travel <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">Diaries</span>
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 mb-4 font-light">
            Exploring India's Hidden Gems
          </p>
          <p className="text-rose-50/80 mb-8 max-w-2xl mx-auto text-lg">
            Join me on adventures through Vidarbha, Maharashtra & beyond. Tiger reserves, temples, and untold stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/trips" 
              className="bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-500 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Trips
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white/80 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-all duration-300 backdrop-blur-sm"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Location Badge */}
      <section className="bg-gradient-to-r from-rose-300 via-pink-300 to-orange-300 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
          <div className="flex items-center gap-2">
            <span>🏠</span>
            <span>Nagpur, India</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🐅</span>
            <span>Tiger Country</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🍊</span>
            <span>Orange City</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>India's Center</span>
          </div>
        </div>
      </section>

      {/* Featured Trip */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">✨ Latest Adventure</span>
            <h2 className="text-4xl font-black text-gray-800 mt-2">Featured Trip</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-rose-200/30">
            <div className="h-80 lg:h-full">
              <img 
                src={featuredTrip.coverImage} 
                alt={featuredTrip.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-sm font-bold">
                  {featuredTrip.duration}
                </span>
                <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold">
                  🐅 Safari
                </span>
              </div>
              <h3 className="text-3xl font-black text-gray-800 mb-3">
                {featuredTrip.title}
              </h3>
              <p className="text-rose-600 mb-2 flex items-center gap-2 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {featuredTrip.location}
              </p>
              <p className="text-orange-600 mb-4 flex items-center gap-2 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {featuredTrip.date}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {featuredTrip.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm font-semibold text-rose-600">
                <span className="flex items-center gap-1">
                  <span>💰</span> {featuredTrip.budget}
                </span>
              </div>
              <Link 
                to={`/trip/${featuredTrip.id}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-500 hover:to-orange-500 text-white px-7 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Read Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Adventures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">📖 More Stories</span>
            <h2 className="text-4xl font-black text-gray-800 mt-2">Recent Adventures</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Explore nearby destinations and hidden gems around Nagpur
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/trips"
              className="inline-flex items-center gap-2 border-2 border-rose-400 text-rose-500 hover:bg-gradient-to-r hover:from-rose-400 hover:to-orange-400 hover:text-white hover:border-transparent px-8 py-3 rounded-full font-bold transition-all duration-300"
            >
              View All Trips
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Nagpur Section */}
      <section className="py-20 bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">🏡 My Home Base</span>
              <h2 className="text-4xl font-black text-gray-800 mt-2 mb-6">Why Nagpur is Perfect for Travellers</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nagpur, the winter capital of Maharashtra, sits at the geographical center of India - 
                  marked by the famous Zero Mile Stone. This strategic location makes it an ideal base 
                  for exploring Central India's diverse landscapes.
                </p>
                <p>
                  Within 200 km radius, you have access to 6 tiger reserves, ancient temples, 
                  hill stations, and historical forts. The city itself offers the famous Nagpur oranges, 
                  Deekshabhoomi (Asia's largest stupa), and vibrant Sadar markets.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-5 rounded-2xl shadow-md border border-rose-200/50">
                  <div className="text-3xl font-black text-rose-500">6+</div>
                  <div className="text-gray-700 text-sm font-semibold">Tiger Reserves</div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-5 rounded-2xl shadow-md border border-orange-200/50">
                  <div className="text-3xl font-black text-orange-500">150km</div>
                  <div className="text-gray-700 text-sm font-semibold">To Tadoba</div>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-5 rounded-2xl shadow-md border border-pink-200/50">
                  <div className="text-3xl font-black text-pink-500">3</div>
                  <div className="text-gray-700 text-sm font-semibold">Trips</div>
                </div>
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-5 rounded-2xl shadow-md border border-amber-200/50">
                  <div className="text-3xl font-black text-amber-600">Zero</div>
                  <div className="text-gray-700 text-sm font-semibold">Mile Center</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=300&fit=crop" 
                alt="Bengal Tiger in Tadoba"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                alt="Chikhaldara Hill Station"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop" 
                alt="Ramtek Temple"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop" 
                alt="Pench Forest"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Join My Travel Updates</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Get notified about new adventures, travel tips, and exclusive stories straight to your inbox!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/90 border-2 border-white focus:outline-none focus:border-white text-gray-800 placeholder-gray-500 font-medium"
            />
            <button 
              type="submit"
              className="bg-white text-rose-500 hover:bg-rose-50 px-8 py-4 rounded-full font-bold transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/80 text-sm mt-4 font-semibold">
            Join 500+ fellow explorers ✨
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
