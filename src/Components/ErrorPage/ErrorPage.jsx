import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-4">
      <h1 className="text-7xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</p>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
