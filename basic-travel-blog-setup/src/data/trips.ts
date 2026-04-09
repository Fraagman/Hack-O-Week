export interface Trip {
  id: string;
  title: string;
  location: string;
  date: string;
  duration: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  gallery: string[];
  highlights: string[];
  budget: string;
  bestTime: string;
  transport: string;
}

export const trips: Trip[] = [
  {
    id: "tadoba-tiger-safari",
    title: "Tadoba Tiger Safari: Spotting the Royal Bengal",
    location: "Tadoba Andhari Tiger Reserve, Chandrapur",
    date: "March 15, 2024",
    duration: "3 Days / 2 Nights",
    excerpt: "An unforgettable wildlife adventure just 150 km from Nagpur, where I witnessed the majestic Royal Bengal Tigers in their natural habitat at Maharashtra's oldest national park.",
    content: [
      "As a Nagpur native, I've always been proud that our city is called the 'Tiger Capital of India.' Living just 150 kilometers from Tadoba Andhari Tiger Reserve, I finally decided to experience this wildlife paradise firsthand. I started my journey early morning at 5 AM from my home in Dharampeth, taking the NH930 highway towards Chandrapur.",
      "After a scenic 3-hour drive through the Vidarbha countryside, passing through Umred and Bhisi, I reached the Moharli gate of Tadoba. The forest department office was buzzing with excited tourists. I had pre-booked my safari through the official Maharashtra Tourism website - a tip for fellow Nagpurians: always book at least 2 weeks in advance, especially during peak season from February to May.",
      "My first safari was the afternoon batch starting at 3 PM. Our gypsy driver, Ramesh Uike, a local Gond tribal guide with 15 years of experience, knew every inch of the forest. Within the first hour, we spotted a family of wild boars near Telia Lake, followed by a magnificent sambar deer. The anticipation was building.",
      "Then it happened - near the Pandharpauni buffer zone, Ramesh suddenly stopped the vehicle. There, barely 30 meters away, was a massive male tiger, later identified as 'Matkasur,' one of Tadoba's famous dominant males. He was marking his territory, completely unfazed by our presence. I could hear my heart pounding as I clicked away on my camera. Those 15 minutes felt like a lifetime.",
      "The next morning's safari was equally rewarding. We spotted the tigress 'Maya' with her two cubs near Tadoba Lake. Watching the cubs play while their mother kept a watchful eye was the most heartwarming sight. Our guide told us that Tadoba now has over 80 tigers, making it one of the most densely populated tiger reserves in India.",
      "I stayed at MTDC Tadoba Resort, which offered clean rooms and authentic Vidarbha cuisine - the varhadi chicken curry and puran poli were exceptional. For fellow Nagpurians planning this trip, I recommend the Kolara and Navegaon gates for better tiger sighting probabilities. This trip reminded me why protecting our wildlife is so crucial, and why I'm proud to be from the Tiger Capital."
    ],
    coverImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1615963244664-5f5b2b7b0b0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop"
    ],
    highlights: [
      "Spotted 3 tigers including famous Matkasur",
      "Saw Maya tigress with cubs at Tadoba Lake",
      "Authentic Vidarbha cuisine at MTDC Resort",
      "Expert Gond tribal guide with local knowledge",
      "Beautiful sunrise over Tadoba Lake"
    ],
    budget: "₹8,500 per person (including stay, safaris, food)",
    bestTime: "February to May (Summer - best tiger sightings)",
    transport: "Self-drive from Nagpur via NH930 (3 hours) or hire taxi from Nagpur Airport"
  },
  {
    id: "pench-jungle-escape",
    title: "Pench National Park: The Land of Mowgli",
    location: "Pench Tiger Reserve, Seoni Border",
    date: "November 22, 2023",
    duration: "2 Days / 1 Night",
    excerpt: "Exploring the jungle that inspired Rudyard Kipling's 'The Jungle Book' - a magical weekend getaway from Nagpur to the enchanting Pench National Park.",
    content: [
      "Growing up in Nagpur reading 'The Jungle Book,' I never realized that the magical jungle Kipling wrote about was just 95 kilometers from my hometown. Pench National Park, straddling the Maharashtra-Madhya Pradesh border, is believed to be the inspiration behind Mowgli's adventures. This November, I finally made the pilgrimage.",
      "I left from Nagpur's Variety Square at 6 AM on a Saturday, taking the Nagpur-Seoni road. The drive through the rural Vidarbha landscape was beautiful - cotton fields ready for harvest, orange orchards (Nagpur oranges!), and small villages with their weekly haats. I reached Sillari gate on the Maharashtra side by 8:30 AM.",
      "Unlike Tadoba, Pench has a different charm - it's more about the overall jungle experience than just tiger sightings. The sal and teak forests here are denser, and the Pench River flowing through creates a unique ecosystem. My naturalist guide, Santosh from Khawasa village, pointed out that this diversity is what makes Pench special.",
      "On our first safari, we followed fresh pugmarks near Alikatta area. While we didn't spot a tiger that evening, the jungle came alive with other wildlife - a pack of wild dogs (dholes) hunting, langurs alarm-calling, a huge crocodile basking by the river, and countless species of birds including the Malabar pied hornbill.",
      "I stayed at a beautiful jungle lodge near Turiya gate. That night, sitting by a bonfire under a canopy of stars, listening to the distant calls of the jungle, I understood why Kipling fell in love with this place. The lodge owner, a retired forest officer from Nagpur, shared fascinating stories about the park's conservation efforts.",
      "The morning safari was magical. We spotted 'Collarwali's' lineage - a young tigress walking gracefully along the forest road. But the highlight was witnessing a huge herd of gaur (Indian bison) near Bodhanala. These magnificent creatures, some weighing over 1000 kg, are a sight to behold. As I drove back to Nagpur that afternoon, I was already planning my next visit."
    ],
    coverImage: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
    ],
    highlights: [
      "The real 'Jungle Book' forest experience",
      "Spotted wild dogs, gaur, and a young tigress",
      "Beautiful Pench River landscape",
      "Stargazing and bonfire at jungle lodge",
      "Expert local naturalist guides"
    ],
    budget: "₹6,500 per person (budget stay + safaris)",
    bestTime: "October to February (Pleasant weather, good sightings)",
    transport: "Drive from Nagpur via NH44 (2 hours) or shared jeeps from Kamptee"
  },
  {
    id: "ramtek-chikhaldara-heritage",
    title: "Ramtek to Chikhaldara: Heritage & Hill Station",
    location: "Ramtek & Chikhaldara, Vidarbha",
    date: "September 8, 2023",
    duration: "4 Days / 3 Nights",
    excerpt: "A cultural and scenic road trip through Vidarbha's hidden gems - from the ancient temples of Ramtek to Maharashtra's only coffee-growing hill station, Chikhaldara.",
    content: [
      "As someone born and raised in Nagpur's Sitabuldi area, I realized I had never properly explored my own backyard. This monsoon, I planned a 4-day road trip covering Ramtek and Chikhaldara - two destinations that showcase Vidarbha's rich heritage and natural beauty. Armed with my trusty Maruti Dzire and a playlist of Marathi songs, I set off.",
      "Ramtek is just 45 kilometers from Nagpur, but it feels like stepping into ancient India. The Ramtek Fort Temple complex, perched on a hill, is where Lord Ram is believed to have rested during his exile. Climbing the 700 steps to the main temple, I met pilgrims from across Maharashtra. The view from the top - overlooking Ambala Lake and the surrounding Vidarbha plains - was breathtaking.",
      "But Ramtek has another claim to fame - it's where the great Sanskrit poet Kalidasa wrote 'Meghdoot.' The Kalidasa Smarak memorial celebrates this connection. I spent hours at the beautiful garden complex, imagining Kalidasa watching the monsoon clouds that would inspire his masterpiece. The nearby Khindsi Lake is perfect for an evening picnic - many Nagpur families come here on weekends.",
      "From Ramtek, I drove 250 kilometers to Chikhaldara via Amravati. The road climbs through the Melghat Tiger Reserve, and suddenly you're in a different world - cool temperatures, coffee plantations, and lush green valleys. Chikhaldara, at 1,118 meters, is Maharashtra's only hill station in Vidarbha and the only place in the state where coffee is grown.",
      "I stayed at the MTDC Resort overlooking Hurricane Point. The sunrise view over the Gavilgad Fort and the plains below is worth waking up early for. I explored the various viewpoints - Prospect Point, Devi Point, and the beautiful Pandit Nehru Botanical Garden. The Tribal Museum here offers fascinating insights into the Korku tribe's culture.",
      "The highlight was trekking to Gavilgad Fort with a local guide, Pravin. This 17th-century Mughal fort, spread across the mountain top, has ruins that tell stories of battles and dynasties. At the fort, I met an elderly Korku tribal woman selling forest honey and mahua products - a taste of authentic Melghat. As I drove back to Nagpur via the scenic Paratwada route, I felt I had discovered treasures in my own Vidarbha region."
    ],
    coverImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop"
    ],
    highlights: [
      "Ancient Ramtek Temple with 700-step climb",
      "Kalidasa's Meghdoot inspiration site",
      "Chikhaldara - Vidarbha's only hill station",
      "Gavilgad Fort trek with tribal guide",
      "Maharashtra's only coffee plantation visit"
    ],
    budget: "₹12,000 total (self-drive, mid-range hotels, food)",
    bestTime: "July to February (Monsoon for greenery, Winter for clarity)",
    transport: "Self-drive recommended; MSRTC buses available from Nagpur's Ganeshpeth Bus Stand"
  }
];

export const getTrip = (id: string): Trip | undefined => {
  return trips.find(trip => trip.id === id);
};

export const getRelatedTrips = (currentId: string): Trip[] => {
  return trips.filter(trip => trip.id !== currentId).slice(0, 2);
};
