// HeroTyping.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroTyping = () => {
  return (
    <section className="bg-orange-50 py-16 px-6 md:px-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Find Your Perfect{' '}
        <span className="text-orange-500">
          <Typewriter
            words={['Roommate', 'Flatmate', 'Match', 'Partner']}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        MeetMyRoomie makes it easy to discover compatible roommates, share expenses, and feel at home.
      </p>
    </section>
  );
};

export default HeroTyping;
