import { useParams, Link, Navigate } from 'react-router-dom';
import { getTrip, getRelatedTrips } from '../data/trips';
import TripCard from '../components/TripCard';

const TripDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const trip = id ? getTrip(id) : undefined;
  const relatedTrips = id ? getRelatedTrips(id) : [];

  if (!trip) {
    return <Navigate to="/trips" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${trip.coverImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 w-full">
          <Link 
            to="/trips"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Trips
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              {trip.duration}
            </span>
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              {trip.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            {trip.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {trip.location}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {trip.budget}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Story */}
              <div className="prose prose-lg max-w-none">
                {trip.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Photo Gallery */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {trip.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${trip.title} - Photo ${index + 1}`}
                      className="w-full h-48 md:h-64 object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-bold text-gray-800 mb-4">Share this trip</h3>
                <div className="flex gap-3">
                  <a 
                    href={`https://wa.me/?text=Check out this trip: ${trip.title}`}
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${trip.title}&url=`}
                    className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=`}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Trip Info Card */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Trip Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-medium text-gray-800">{trip.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">⏱️</span>
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-medium text-gray-800">{trip.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">💰</span>
                      <div>
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="font-medium text-gray-800">{trip.budget}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🌤️</span>
                      <div>
                        <div className="text-sm text-gray-500">Best Time to Visit</div>
                        <div className="font-medium text-gray-800">{trip.bestTime}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🚗</span>
                      <div>
                        <div className="text-sm text-gray-500">How to Reach</div>
                        <div className="font-medium text-gray-800">{trip.transport}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Trip Highlights</h3>
                  <ul className="space-y-3">
                    {trip.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">✓</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Author Card */}
                <div className="bg-gray-900 text-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                      alt="Rahul Deshmukh"
                      className="w-14 h-14 rounded-full border-2 border-orange-400"
                    />
                    <div>
                      <div className="font-bold">Rahul Deshmukh</div>
                      <div className="text-gray-400 text-sm">Nagpur Traveller</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Planning a similar trip? Feel free to reach out for tips and recommendations!
                  </p>
                  <a 
                    href="tel:+919823456789"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-full font-medium transition-colors"
                  >
                    📱 +91 98234 56789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Trips */}
      {relatedTrips.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">More Trips You'll Love</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedTrips.map((relatedTrip) => (
                <TripCard key={relatedTrip.id} trip={relatedTrip} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TripDetailPage;
