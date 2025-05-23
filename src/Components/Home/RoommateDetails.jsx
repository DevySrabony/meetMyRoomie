
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const RoommateDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [roommate, setRoommate] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/roommates/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoommate(data);
        setLikeCount(data.likes || 0);
      });
  }, [id]);

  if (!roommate) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-orange-500 text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  const isOwnPost = roommate.userEmail === user?.email;

  const handleLike = () => {
    if (hasLiked || isOwnPost) return;

    const updatedLikes = likeCount + 1;
    setLikeCount(updatedLikes);
    setShowContact(true);
    setHasLiked(true);

    fetch(`http://localhost:5000/update-roommate/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: updatedLikes }),
    }).catch((err) => console.error('Failed to update likes:', err));
  };

  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-orange-500">{roommate.title}</h2>
        <div className="text-sm text-gray-600">
          {likeCount} {likeCount === 1 ? 'person is' : 'people are'} interested
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 text-gray-700 text-lg">
        <p><strong className="text-gray-900">Location:</strong> {roommate.location}</p>
        <p><strong className="text-gray-900">Rent:</strong> ${roommate.rent}</p>
        <p><strong className="text-gray-900">Room Type:</strong> {roommate.roomType}</p>
        <p><strong className="text-gray-900">Lifestyle:</strong> {roommate.lifestyle}</p>
        <p><strong className="text-gray-900">Status:</strong> {roommate.availability}</p>
        <p><strong className="text-gray-900">Posted by:</strong> {roommate.userName} ({roommate.userEmail})</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">{roommate.description}</p>
      </div>
      <div className="mt-8">
        <button
          onClick={handleLike}
          disabled={hasLiked || isOwnPost}
          className={`flex items-center gap-2 border border-orange-400 text-black font-semibold py-3 px-6 rounded-lg shadow transition ${
            hasLiked || isOwnPost ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          ❤️ {isOwnPost ? 'Your Post' : hasLiked ? 'Liked' : 'Like'}
        </button>
      </div>

      {/* Contact Info */}
      {showContact && (
        <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded">
          <p className="text-green-800 font-medium">
            📞 Contact Info: {roommate.contact}
          </p>
        </div>
      )}
    </section>
  );
};

export default RoommateDetails;
