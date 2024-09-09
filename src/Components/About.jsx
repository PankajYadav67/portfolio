import React from "react";

export const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center lg:flex-row">
        <div id="about" className="mb-8 lg:mb-0">
          <img
            className="h-48 w-48 rounded-full object-cover mx-auto"
            src="/blackwhite.jpg"
            alt="Profile"
            loading="lazy"
          />
        </div>
        <div className="text-center lg:text-left lg:ml-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <h6 className="text-lg text-gray-600">
            I'm PankajKumar Yadav. Observant and meticulous aspiring full-stack web developer with a specialization in MERN stack.
            <br />
            Self-motivated and curious, with a keen interest in building user-centric products.
            <br />
            Looking forward to sharpening skills in a demanding workplace.
          </h6>
        </div>
      </div>
    </section>
  );
};


