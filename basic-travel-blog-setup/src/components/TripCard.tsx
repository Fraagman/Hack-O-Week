import { Link } from 'react-router-dom';
import { Trip } from '../data/trips';

interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <Link 
      to={`/trip/${trip.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={trip.coverImage} 
          alt={trip.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {trip.duration}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {trip.location}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
          {trip.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {trip.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {trip.date}
          </span>
          <span className="text-orange-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
