import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { GrGoogle } from 'react-icons/gr';

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;
    return hasUppercase && hasLowercase && isValidLength;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photoURL.value.trim();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Passwords don't match!",
        toast: true,
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
      });
      return;
    }

    if (!validatePassword(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        html: `
          Password must have:
          <ul style="text-align:left;">
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>Minimum length of 6 characters</li>
          </ul>
        `,
        toast: true,
        position: 'top-end',
        timer: 6000,
        showConfirmButton: false,
      });
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Optional: Update user profile with name & photoURL here using Firebase API if needed
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          toast: true,
          position: 'top-end',
          timer: 3000,
          showConfirmButton: false,
        });
        form.reset();
        navigate('/login');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
          toast: true,
          position: 'top-end',
          timer: 4000,
          showConfirmButton: false,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Signed in with Google',
          toast: true,
          position: 'top-end',
          timer: 3000,
          showConfirmButton: false,
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Google Sign-In Failed',
          text: error.message,
          toast: true,
          position: 'top-end',
          timer: 4000,
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-white px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Create an Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="url"
            name="photoURL"
            placeholder="Photo URL (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Register
          </button>

          <div className="text-center relative my-4">
            <span className="bg-white px-2 text-gray-500 text-sm">or</span>
            <div className="absolute top-1/2 left-0 right-0 border-t border-gray-300 transform -translate-y-1/2"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-2 border border-gray-300 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <GrGoogle />
            <span>Continue with Google</span>
          </button>

          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-orange-500 underline hover:text-orange-600">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
