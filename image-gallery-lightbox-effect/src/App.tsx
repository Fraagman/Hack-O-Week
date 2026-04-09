import { useState, useEffect, useCallback } from 'react';

interface Photo {
  id: number;
  src: string;
  title: string;
  location: string;
  description: string;
  photographer: string;
  date: string;
  category: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    title: "Deekshabhoomi Stupa",
    location: "Deekshabhoomi, Nagpur, Maharashtra",
    description: "The sacred Buddhist monument where Dr. B.R. Ambedkar embraced Buddhism in 1956. A major pilgrimage site for Buddhists.",
    photographer: "Rahul Sharma",
    date: "January 15, 2026",
    category: "Religious Heritage"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Ambazari Lake Sunset",
    location: "Ambazari Lake, Nagpur, Maharashtra",
    description: "One of the most beautiful lakes in Nagpur, perfect for evening walks and boating. Known for its scenic sunset views.",
    photographer: "Priya Deshmukh",
    date: "February 8, 2026",
    category: "Nature & Lakes"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    title: "Nagpur Railway Station",
    location: "Sitabuldi, Nagpur, Maharashtra",
    description: "The major railway station of Nagpur, serving as a crucial hub in Central India. Built in 1921 during British era.",
    photographer: "Amit Kumar",
    date: "March 22, 2026",
    category: "Architecture"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562604398-20204736c382?w=800&q=80",
    title: "Sitabuldi Fort",
    location: "Sitabuldi Hills, Nagpur, Maharashtra",
    description: "Historic fort built by the British in 1818. Offers panoramic views of the city and houses a war museum.",
    photographer: "Sneha Patil",
    date: "April 5, 2026",
    category: "Historical"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    title: "Raman Science Centre",
    location: "Pande Layout, Nagpur, Maharashtra",
    description: "Interactive science museum and planetarium. Popular destination for students and science enthusiasts.",
    photographer: "Vikram Singh",
    date: "May 18, 2026",
    category: "Science & Education"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1584559582126-bfc4d71316a7?w=800&q=80",
    title: "Zero Mile Stone",
    location: "Nagpur City Centre, Maharashtra",
    description: "Historical marker indicating the geographical centre of India. Built by the British in 1907.",
    photographer: "Meera Joshi",
    date: "June 12, 2026",
    category: "Historical"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1605008642886-a4c54e5cb32d?w=800&q=80",
    title: "Telankhedi Temple",
    location: "Telankhedi, Nagpur, Maharashtra",
    description: "Ancient temple dedicated to Lord Shiva. Located near a natural spring with peaceful surroundings.",
    photographer: "Rajendra Waghmare",
    date: "July 20, 2026",
    category: "Temples"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    title: "Futala Lake",
    location: "Futala, Nagpur, Maharashtra",
    description: "Serene lake known for its clean water and peaceful atmosphere. Popular morning walk destination.",
    photographer: "Anjali More",
    date: "August 14, 2026",
    category: "Nature & Lakes"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    title: "Maharajbagh Temple",
    location: "Maharajbagh, Nagpur, Maharashtra",
    description: "Ancient temple complex with beautiful architecture. Known for its annual festivals and cultural events.",
    photographer: "Deepak Choudhary",
    date: "September 28, 2026",
    category: "Temples"
  }
];

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(photos.map(p => p.category))];

  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(p => p.category === filter);

  const currentIndex = selectedPhoto 
    ? filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    : -1;

  const showNext = useCallback(() => {
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
  }, [currentIndex, filteredPhotos]);

  const showPrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    }
  }, [currentIndex, filteredPhotos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, showNext, showPrev]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Nagpur Gallery
            </h1>
            <p className="text-gray-600 mt-2">Discover the Orange City</p>
          </div>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                  <span className="inline-block bg-rose-500 text-xs px-3 py-1 rounded-full mb-2 font-semibold">
                    {photo.category}
                  </span>
                  <h3 className="font-bold text-lg">{photo.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm line-clamp-2">{photo.description}</p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <span>📷 {photo.photographer}</span>
                  <span>{photo.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light z-10 transition-colors"
          >
            ×
          </button>

          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-6 text-white/70 hover:text-white text-5xl font-bold transition-colors z-10"
            >
              ‹
            </button>
          )}
          {currentIndex < filteredPhotos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-6 text-white/70 hover:text-white text-5xl font-bold transition-colors z-10"
            >
              ›
            </button>
          )}

          <div 
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />
            
            <div className="bg-white rounded-xl mt-4 p-6 shadow-2xl">
              <span className="inline-block bg-rose-100 text-rose-700 text-xs px-3 py-1 rounded-full font-semibold mb-3">
                {selectedPhoto.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedPhoto.title}
              </h2>
              <p className="text-gray-600 mt-2">{selectedPhoto.description}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t text-sm text-gray-500">
                <span>📷 {selectedPhoto.photographer}</span>
                <span>{selectedPhoto.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">© 2026 Nagpur Gallery • Discover the Orange City</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
