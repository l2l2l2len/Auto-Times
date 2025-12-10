/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white border-t border-gray-100">
      
      {/* Introduction */}
      <div className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-8">
            Driving the Conversation <br/> Forward.
        </h2>
        
        <div className="max-w-2xl text-lg md:text-xl text-gray-600 font-light leading-relaxed space-y-8">
            <p>
            The Auto Times was founded on a simple premise: the automobile is the most significant industrial object of our time. It shapes our cities, our economies, and our dreams.
            </p>
            <p>
            In an era of rapid electrification and autonomous shifts, we provide the clarity and depth that enthusiasts and industry leaders demand. We celebrate the machine.
            </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-100">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Expertise</span>
           <h3 className="text-3xl font-serif mb-6 text-black leading-tight">
             Precision matters.
           </h3>
           <p className="text-gray-600 font-light leading-relaxed max-w-sm">
             From 0-60 times to battery chemistry analysis, we verify the data. Our upvote system ensures that real engineering breakthroughs rise above marketing fluff.
           </p>
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Passion</span>
           <h3 className="text-3xl font-serif mb-6 text-black leading-tight">
             Soul in the machine.
           </h3>
           <p className="text-gray-600 font-light leading-relaxed max-w-sm">
             We believe cars are more than appliances. Whether it's a V12 or a quad-motor EV, we chase the emotional connection between driver and road.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;