import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const AddRoommate = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    rent: '',
    roomType: '',
    lifestyle: '',
    description: '',
    contact: '',
    availability: 'Available',
  });

  useEffect(() => {
    if (!loading && !user) {
      Swal.fire({
        icon: 'warning',
        title: 'Unauthorized',
        text: 'You must be logged in to add a listing.',
        toast: true,
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
      });
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      const res = await fetch('http://localhost:5000/add-roommate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your listing has been added.',
          toast: true,
          position: 'top-end',
          timer: 3000,
          showConfirmButton: false,
        });
        navigate('/my-listings');
      } else {
        throw new Error('Failed to add listing.');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: error.message,
        toast: true,
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-orange-500 font-bold">Loading...</div>;
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">Add Roommate Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="title"
          onChange={handleChange}
          required
          placeholder="Listing Title (e.g., Looking for a roommate in NYC)"
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="location"
          onChange={handleChange}
          required
          placeholder="Location"
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="rent"
          onChange={handleChange}
          required
          type="number"
          placeholder="Rent Amount ($)"
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <select
          name="roomType"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
          <option value="1BHK">1BHK</option>
        </select>

        <select
          name="lifestyle"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Select Lifestyle Preference</option>
          <option value="No Smoking">No Smoking</option>
          <option value="Pet Friendly">Pet Friendly</option>
          <option value="Night Owl">Night Owl</option>
          <option value="Early Bird">Early Bird</option>
        </select>

        <textarea
          name="description"
          onChange={handleChange}
          required
          placeholder="Description"
          className="w-full border border-gray-300 p-4 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          name="contact"
          onChange={handleChange}
          required
          placeholder="Contact Info (Phone/Email)"
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <select
          name="availability"
          onChange={handleChange}
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          defaultValue="Available"
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <input
          readOnly
          value={user?.email || ''}
          placeholder="User Email"
          className="w-full bg-gray-100 border border-gray-300 p-4 rounded text-gray-500 cursor-not-allowed"
        />
        <input
          readOnly
          value={user?.displayName || ''}
          placeholder="User Name"
          className="w-full bg-gray-100 border border-gray-300 p-4 rounded text-gray-500 cursor-not-allowed"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Add Listing
        </button>
      </form>
    </section>
  );
};

export default AddRoommate;



