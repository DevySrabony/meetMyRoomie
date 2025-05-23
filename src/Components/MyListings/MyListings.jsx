import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const navigate = useNavigate();

  const fetchListings = async () => {
    const res = await fetch(`http://localhost:5000/my-roommates?email=${user?.email}`);
    const data = await res.json();
    setMyPosts(data);
  };

  useEffect(() => {
    if (user?.email) {
      fetchListings();
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: "This listing will be deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      const res = await fetch(`http://localhost:5000/roommate/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.deletedCount > 0) {
        Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
        fetchListings(); // refresh table
      }
    }
  };

  return (
    <section className="px-4 py-10 md:px-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">📋 My Listings</h2>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full text-sm text-left bg-white dark:bg-gray-800 rounded-xl">
          <thead className="bg-orange-100 dark:bg-orange-800 text-gray-800 dark:text-white sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Rent</th>
              <th className="px-6 py-4">Room Type</th>
              <th className="px-6 py-4">Availability</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myPosts.map((post) => (
              <tr
                key={post._id}
                className="even:bg-gray-50 dark:even:bg-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900 transition-transform duration-200 transform hover:scale-[1.01]"
              >
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">${post.rent}</td>
                <td className="px-6 py-4">{post.roomType}</td>
                <td className="px-6 py-4">{post.availability}</td>
                <td className="px-6 py-4 space-x-3">
                <button
                  onClick={() => navigate(`/update-roommate/${post._id}`)}
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-1.5 rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  ✏️ Update
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-1.5 rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  🗑️ Delete
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyListings;

