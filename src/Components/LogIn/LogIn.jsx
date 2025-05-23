import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

const LogIn = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        Swal.fire({
          title: 'Login Successful',
          icon: 'success',
        });
        form.reset();
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          title: 'Logged in with Google',
          icon: 'success',
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-white px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-2 border border-orange-400 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition duration-200"
          >
            Sign in with Google
          </button>

          <p className="text-sm text-center">
            Don’t have an account?{' '}
            <Link to="/register" className="text-orange-500 underline hover:text-orange-600">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
