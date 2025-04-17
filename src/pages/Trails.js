import React from 'react';
import overcentric from 'overcentric';

const trails = [
  {
    id: 1,
    name: "Mount Rainier Wonderland Trail",
    location: "Washington, USA",
    difficulty: "Hard",
    length: "93 miles",
    image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Tour du Mont Blanc",
    location: "France/Switzerland/Italy",
    difficulty: "Moderate",
    length: "170 km",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Kungsleden Trail",
    location: "Sweden",
    difficulty: "Moderate",
    length: "440 km",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Inca Trail to Machu Picchu",
    location: "Peru",
    difficulty: "Moderate",
    length: "42 km",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Pacific Crest Trail",
    location: "California/Oregon/Washington, USA",
    difficulty: "Hard",
    length: "4,265 km",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Milford Track",
    location: "New Zealand",
    difficulty: "Moderate",
    length: "53.5 km",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Appalachian Trail",
    location: "Eastern USA",
    difficulty: "Hard",
    length: "3,500 km",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "West Highland Way",
    location: "Scotland",
    difficulty: "Moderate",
    length: "154 km",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Torres del Paine W Circuit",
    location: "Chile",
    difficulty: "Moderate",
    length: "71 km",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Overland Track",
    location: "Tasmania, Australia",
    difficulty: "Moderate",
    length: "65 km",
    image: "https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Annapurna Circuit",
    location: "Nepal",
    difficulty: "Hard",
    length: "160-230 km",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Tongariro Alpine Crossing",
    location: "New Zealand",
    difficulty: "Moderate",
    length: "19.4 km",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Camino de Santiago",
    location: "Spain",
    difficulty: "Moderate",
    length: "790 km",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Via Dinarica",
    location: "Bosnia and Herzegovina",
    difficulty: "Hard",
    length: "1,200 km",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Bjelašnica Mountain Trail",
    location: "Bosnia and Herzegovina",
    difficulty: "Moderate",
    length: "24 km",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Sutjeska National Park Trail",
    location: "Bosnia and Herzegovina",
    difficulty: "Moderate",
    length: "32 km",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Prenj Mountain Circuit",
    location: "Bosnia and Herzegovina",
    difficulty: "Hard",
    length: "45 km",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

function Trails() {
  const handleTrailClick = (trail) => {
    overcentric.trackEvent('trail_selected', {
      trail_id: trail.id,
      trail_name: trail.name,
      difficulty: trail.difficulty
    });

    // Redirect to trail details page
    window.location.href = `/trail/${trail.id}`;
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Popular Hiking Trails
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Discover some of the world's most beautiful hiking trails
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {trails.map((trail) => (
          <div
            key={trail.id}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => handleTrailClick(trail)}
          >
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={trail.image} alt={trail.name} />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-green-600">
                  {trail.location}
                </p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    {trail.name}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Length: {trail.length}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                  trail.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                  trail.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {trail.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trails;
