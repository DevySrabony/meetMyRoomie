import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Fade } from 'react-awesome-reveal';
import { Info } from 'lucide-react';
import 'react-tooltip/dist/react-tooltip.css';

const tips = [
  {
    title: 'Verify Identity',
    desc: 'Check profiles and match with IDs.',
    tooltip: 'Avoid scams by confirming identity through social media or video calls.',
  },
  {
    title: 'Discuss Habits',
    desc: 'Talk about sleep, cleanliness, guests.',
    tooltip: 'Having similar routines helps reduce friction.',
  },
  {
    title: 'Talk Finances',
    desc: 'Be clear about rent, bills, and responsibilities.',
    tooltip: 'Avoid surprises—clarity in expenses builds trust.',
  },
  {
    title: 'Meet in Public',
    desc: 'Never meet in private first time.',
    tooltip: 'Choose cafés or shared spaces for safety.',
  },
];

const RoommateTips = () => {
  return (
    <section className="bg-orange-50 py-20 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Roommate Matching Tips
      </h2>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition relative group"
            >
              <h3 className="text-xl font-semibold text-orange-600 flex items-center gap-2">
                {tip.title}
                <Info
                  size={18}
                  data-tooltip-id={`tip-${index}`}
                  data-tooltip-content={tip.tooltip}
                  className="text-gray-500 hover:text-orange-400 cursor-pointer"
                />
              </h3>
              <p className="mt-2 text-gray-600">{tip.desc}</p>
              <Tooltip id={`tip-${index}`} className="z-50 text-sm" />
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default RoommateTips;
