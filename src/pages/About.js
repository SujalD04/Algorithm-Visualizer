// src/pages/About.js
import React from 'react';
import AboutTeam from '../components/AboutTeam'; // Updated the import path

const About = () => {
  return (
    <>
      <section className="bg-gray-900 py-16 mt-8 rounded-tr-lg rounded-tl-lg shadow-lg ">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content: Image */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img
                className="rounded-lg shadow-lg w-full h-auto"
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHdvcmt8ZW58MHx8fHwxNjM3MzQ1MDE5&ixlib=rb-1.2.1&q=80&w=1080"
                alt="About Us"
              />
            </div>

            {/* Right Content: Text */}
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                About Our Team
              </h2>
              <p className="text-lg text-white mb-6">
                We are a team of three university students passionate about simplifying complex concepts. 
                Our goal is to create an intuitive and interactive algorithm visualization website that helps users easily understand and explore the inner workings of various algorithms. 
                We're combining our academic knowledge with innovative ideas to bring this project to life and make learning algorithms engaging and accessible.
              </p>
              <p className="text-lg text-white">
                With a strong focus on clarity and visual learning, we aim to bridge the gap between theory and practical understanding. 
                Our platform will serve as a valuable resource for students, educators, and anyone looking to deepen their knowledge of algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AboutTeam Component */}
      <AboutTeam />
      <div className="pt-4"></div>
    </>
  );
};

export default About;
