import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';


const UpdateRoommate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

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

  const [initialData, setInitialData] = useState({}); 

  useEffect(() => {
    fetch(`https://meet-my-roomie.vercel.app/roommate/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        setInitialData(data);
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    const hasChanged = Object.keys(updatedData).some(
      key => updatedData[key] !== initialData[key]
    );

    if (!hasChanged) {
      Swal.fire({
        title: 'No changes made',
        text: 'You did not update any field.',
        icon: 'info',
        confirmButtonColor: '#f97316',
      });
      return;
    }
    const res = await fetch(`https://meet-my-roomie.vercel.app/update-roommate/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();

    if (data.modifiedCount > 0 || data.acknowledged) {
      Swal.fire({
        title: 'Success!',
        text: 'Your listing has been updated.',
        icon: 'success',
        confirmButtonColor: '#f97316',
      });
      navigate('/my-listings');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Update failed. Try again.',
        icon: 'error',
        confirmButtonColor: '#f97316',
      });
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
        Update Roommate Listing
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 shadow-lg rounded-lg"
      >
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Listing Title"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Location"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          name="rent"
          type="number"
          value={formData.rent}
          onChange={handleChange}
          required
          placeholder="Rent"
          className="w-full border border-gray-300 p-3 rounded"
        />

        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded"
        >
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
          <option value="1BHK">1BHK</option>
        </select>

        <select
          name="lifestyle"
          value={formData.lifestyle}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded"
        >
          <option value="">Select Lifestyle Preference</option>
          <option value="No Smoking">No Smoking</option>
          <option value="Pet Friendly">Pet Friendly</option>
          <option value="Night Owl">Night Owl</option>
          <option value="Early Bird">Early Bird</option>
        </select>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Description"
          className="w-full border border-gray-300 p-3 rounded h-28"
        />

        <input
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          placeholder="Contact Info"
          className="w-full border border-gray-300 p-3 rounded"
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <input
          readOnly
          value={user?.email || ''}
          className="w-full bg-gray-100 border border-gray-300 p-3 rounded"
        />
        <input
          readOnly
          value={user?.displayName || ''}
          className="w-full bg-gray-100 border border-gray-300 p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
        >
          Update Listing
        </button>
      </form>
    </section>
  );
};

export default UpdateRoommate;
