import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const FeaturedRoommates = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://meet-my-roomie.vercel.app/featured-roommates')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-14 px-6 md:px-20 bg-gray-50 dark:bg-black">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Featured Roommates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-1"><span className="font-medium">Location:</span> {post.location}</p>
              <p className="text-gray-600 mb-1"><span className="font-medium">Rent:</span> ${post.rent}</p>
              <p className="text-gray-600 mb-1"><span className="font-medium">Room Type:</span> {post.roomType}</p>
              <p className="text-gray-600 mb-1"><span className="font-medium">Lifestyle:</span> {post.lifestyle}</p>
              <p className="text-gray-600"><span className="font-medium">Posted by:</span> {post.userName}</p>
            </div>

            <div className="mt-4 text-right">
              <Link
                to={`/roommates/${post._id}`}
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRoommates;
