import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaUserShield, FaMapMarkedAlt, FaComments, FaHandshake, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserShield size={32} className="text-orange-500" />,
    title: "Verified Profiles",
    desc: "All users go through email verification and identity checks for safety.",
  },
  {
    icon: <FaMapMarkedAlt size={32} className="text-orange-500" />,
    title: "Smart Location Search",
    desc: "Find roommates in your desired city, neighborhood, or near your campus.",
  },
  {
    icon: <FaComments size={32} className="text-orange-500" />,
    title: "Instant Messaging",
    desc: "Chat instantly with potential roommates to find the best match.",
  },
  {
    icon: <FaHandshake size={32} className="text-orange-500" />,
    title: "Trust-Based Matching",
    desc: "Get suggestions based on preferences, lifestyle, and habits.",
  },
  {
    icon: <FaDollarSign size={32} className="text-orange-500" />,
    title: "No Hidden Fees",
    desc: "We believe in transparency — you pay exactly what’s listed.",
  },
  {
    icon: <FaCheckCircle size={32} className="text-orange-500" />,
    title: "Easy Approval System",
    desc: "Roommate posts are moderated and approved for better quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-orange-50 dark:bg-gray-900 py-20 px-6">
      <Fade cascade direction="up" damping={0.2} triggerOnce>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-4">Why Choose MeetMyRoomie?</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Here’s what makes us the go-to platform for finding your perfect roommate:
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <Zoom key={idx} triggerOnce delay={idx * 100}>
            <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300 p-6 rounded-xl text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

