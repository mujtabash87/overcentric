import React from 'react';
import { Link } from 'react-router-dom';
import overcentric from 'overcentric';

function Home() {
  return (
    <div className="pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Discover Your Next</span>
            <span className="block text-green-600">Outdoor Adventure</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore the world's most beautiful hiking trails and camping spots. Join our community of outdoor enthusiasts and find your next adventure.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/trails"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                onClick={() => overcentric.trackEvent('view_trails_clicked')}
              >
                View Trails
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Why Choose TrailSeeker
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Curated Trail Recommendations</h3>
                <p className="text-gray-600">
                  Our expert team and community members carefully review and rate trails based on difficulty,
                  scenery, and overall experience to help you find the perfect match for your skill level and preferences.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Real-Time Weather Updates</h3>
                <p className="text-gray-600">
                  Plan your adventures with confidence using our integrated weather forecasts that provide
                  up-to-date conditions for all trail locations, helping you prepare appropriately.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Community Insights</h3>
                <p className="text-gray-600">
                  Connect with fellow outdoor enthusiasts, share experiences, and get insider tips on
                  hidden gems and lesser-known trails that might not appear in traditional guidebooks.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Offline Trail Maps</h3>
                <p className="text-gray-600">
                  Download trail maps for offline use, ensuring you can navigate even in areas with
                  limited cell service. Your safety is our priority when you're exploring the wilderness.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-lg text-gray-600 italic">
                "TrailSeeker transformed how I explore the outdoors. I've discovered amazing trails I never would have found otherwise!"
              </p>
              <p className="mt-2 font-medium text-gray-800">— Sarah K., Avid Hiker</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <dt className="text-lg font-semibold text-green-600">How do I find trails near me?</dt>
                <dd className="mt-2 text-gray-600">
                  Simply create an account, enable location services, and our app will automatically show you the best trails in your area. You can also search by city, park name, or specific coordinates.
                </dd>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <dt className="text-lg font-semibold text-green-600">Is TrailSeeker free to use?</dt>
                <dd className="mt-2 text-gray-600">
                  Yes! The basic version of TrailSeeker is completely free. We also offer a premium subscription that includes advanced features like offline maps, detailed trail statistics, and ad-free experience.
                </dd>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <dt className="text-lg font-semibold text-green-600">Can I contribute my own trail discoveries?</dt>
                <dd className="mt-2 text-gray-600">
                  Absolutely! Our community thrives on user contributions. You can add new trails, upload photos, write reviews, and share tips with fellow hikers through your profile.
                </dd>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <dt className="text-lg font-semibold text-green-600">How accurate are the trail maps?</dt>
                <dd className="mt-2 text-gray-600">
                  Our trail maps are regularly updated and verified by both our team and community members. We use GPS data, satellite imagery, and user feedback to ensure the highest accuracy possible.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-green-50 border-t border-green-100">
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Ready to start your adventure?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of outdoor enthusiasts who've discovered their perfect trails with TrailSeeker.
            Sign up today and get personalized recommendations for your next adventure.
          </p>
          <div className="mt-8">
            <Link
              to="/signin"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              onClick={() => overcentric.trackEvent('cta_signup_clicked')}
            >
              Sign Up Now
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Already have an account? <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;