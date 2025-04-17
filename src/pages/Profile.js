import React from 'react';
import overcentric from 'overcentric';

function Profile() {
  overcentric.setContext('product');

  const [selectedDifficulty, setSelectedDifficulty] = React.useState('moderate');

  const handlePreferenceUpdate = () => {
    overcentric.trackEvent('preferences_updated', {
      preferred_difficulty: selectedDifficulty
    });
    alert('Preferences updated!');
  };

  const handleLogError = () => {
    try {
      throw new Error('Test error from profile page');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">My Profile</h1>

        <p className="mt-3 mb-2 cursor-pointer text-red-400 hover:text-red-700" onClick={() => {
          overcentric.trackEvent('sign_out');
          localStorage.removeItem('trailSeeker_userID');
          localStorage.removeItem('trailSeeker_email');
          localStorage.removeItem('trailSeeker_name');
          window.location.href = '/';
        }}>
          Sign out
        </p>

        <hr />
        <h2 className="text-xl text-gray-700 mt-4">Trail Preferences</h2>

        <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-500">
                Update your hiking preferences and notification settings.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Trail Difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  >
                    <option value="easy">Easy</option>
                    <option value="moderate">Moderate</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={handleLogError}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Throw error
                  </button>
                  <button
                    type="submit"
                    onClick={handlePreferenceUpdate}
                    className="bg-green-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Save Preferences
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
