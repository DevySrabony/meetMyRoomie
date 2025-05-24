import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from '../../assets/groovyWalk.json'; 

const HowItWorks = () => {
  return (
    <section className="py-14 px-6 md:px-20 bg-white ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-500">How It Works</h2>
        <p className="text-gray-600 mt-2">Find the perfect roommate in just a few steps</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <Lottie 
            animationData={groovyWalkAnimation} 
            loop={true} 
            className="w-full h-96"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">1. Create a Roommate Profile</h3>
            <p className="text-gray-600">Sign up and share your preferences, budget, and location to get started.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">2. Discover Featured Listings</h3>
            <p className="text-gray-600">Browse roommate posts that match your needs and availability.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">3. Connect & Finalize</h3>
            <p className="text-gray-600">Reach out, chat securely, and find your ideal roommate match.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
