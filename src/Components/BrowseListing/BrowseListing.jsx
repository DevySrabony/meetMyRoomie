import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // corrected import

const BrowseListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('https://meet-my-roomie.vercel.app/all-roommates')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="px-4 py-10 md:px-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        🏠 Browse All Listings
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-orange-100 dark:bg-orange-800 text-gray-800 dark:text-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Rent</th>
              <th className="px-6 py-4">Room Type</th>
              <th className="px-6 py-4">Posted By</th>
              <th className="px-6 py-4">Availability</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {listings.map(post => (
              <tr
                key={post._id}
                className="even:bg-gray-50 dark:even:bg-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900 transition-transform duration-200 transform hover:scale-[1.01]"
              >
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{post.location}</td>
                <td className="px-6 py-4">${post.rent}</td>
                <td className="px-6 py-4">{post.roomType}</td>
                <td className="px-6 py-4">{post.userName}</td>
                <td className="px-6 py-4">{post.availability}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/roommates/${post._id}`}
                    className="inline-block bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
                  >
                    See More →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BrowseListings;

