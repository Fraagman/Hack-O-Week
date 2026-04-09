import { trips } from '../data/trips';
import TripCard from '../components/TripCard';

const TripsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">My Travel Stories</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Weekend getaways and adventures from Nagpur exploring Vidarbha's 
            tiger reserves, heritage sites, and hidden gems
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
              All Trips
            </span>
            <span className="bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
              🐅 Wildlife Safari
            </span>
            <span className="bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
              🏛️ Heritage
            </span>
            <span className="bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
              ⛰️ Hill Station
            </span>
            <span className="bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
              🚗 Road Trip
            </span>
          </div>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trips Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            More adventures are on the way! Here's what I'm planning next...
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-dashed border-orange-200">
              <span className="text-4xl mb-4 block">🦌</span>
              <h3 className="font-bold text-gray-800 mb-2">Navegaon-Nagzira</h3>
              <p className="text-sm text-gray-600">Wildlife corridor exploration</p>
              <span className="text-orange-500 text-xs font-medium mt-2 block">April 2024</span>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-dashed border-orange-200">
              <span className="text-4xl mb-4 block">🕳️</span>
              <h3 className="font-bold text-gray-800 mb-2">Lonar Crater Lake</h3>
              <p className="text-sm text-gray-600">India's only meteor crater</p>
              <span className="text-orange-500 text-xs font-medium mt-2 block">May 2024</span>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-dashed border-orange-200">
              <span className="text-4xl mb-4 block">🙏</span>
              <h3 className="font-bold text-gray-800 mb-2">Sevagram Ashram</h3>
              <p className="text-sm text-gray-600">Gandhi's village near Wardha</p>
              <span className="text-orange-500 text-xs font-medium mt-2 block">June 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Travel Tips from Nagpur</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-2xl">
              <span className="text-3xl mb-4 block">🚗</span>
              <h3 className="font-bold mb-2">Self Drive</h3>
              <p className="text-gray-400 text-sm">
                Most destinations are 2-4 hours from Nagpur. Rent from Zoomcar or use your own vehicle.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <span className="text-3xl mb-4 block">📱</span>
              <h3 className="font-bold mb-2">Book Safari Online</h3>
              <p className="text-gray-400 text-sm">
                Use official Maharashtra Tourism website for safari bookings 2 weeks in advance.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <span className="text-3xl mb-4 block">🌡️</span>
              <h3 className="font-bold mb-2">Best Season</h3>
              <p className="text-gray-400 text-sm">
                Feb-May for tigers (hot but better sightings), Oct-Feb for pleasant weather.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <span className="text-3xl mb-4 block">🍊</span>
              <h3 className="font-bold mb-2">Local Food</h3>
              <p className="text-gray-400 text-sm">
                Try Saoji cuisine, Tarri Poha, and obviously Nagpur oranges from Kalamna market!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripsPage;
