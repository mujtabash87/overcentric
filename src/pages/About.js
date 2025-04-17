import React from 'react';
import overcentric from 'overcentric';

function About() {
  const handleLearnMore = (topic) => {
    overcentric.trackEvent('about_learn_more_clicked', {
      topic: topic
    });
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">About TrailSeeker</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Your Guide to the Great Outdoors
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We're passionate about connecting outdoor enthusiasts with the world's most beautiful hiking trails and camping spots.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="pt-6" onClick={() => handleLearnMore('trail_discovery')}>
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Trail Discovery</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Find the perfect trail for your next adventure with our comprehensive database of hiking trails.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="pt-6" onClick={() => handleLearnMore('community')}>
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Community</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Connect with fellow hikers, share experiences, and get tips from the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="pt-6" onClick={() => handleLearnMore('safety')}>
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Safety First</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Access trail conditions, weather updates, and safety guidelines for your hiking adventures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
