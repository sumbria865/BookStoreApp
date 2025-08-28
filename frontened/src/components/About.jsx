// About.jsx
import React from "react";


function About() {
  return (
    <div>
     

      {/* About Intro Section */}
      <section className="text-gray-600 body-font bg-pink-50">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="about"
            src="Booksimage.jpg" // replace with your existing hero image
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-pink-600">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Welcome to our platform! We’re passionate about helping learners
              grow their skills in technology and beyond. Our courses are
              designed by experts, keeping industry needs in mind. Whether
              you're a beginner or a professional, we’ve got something for you.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Section (Grid) */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Mission */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="mission"
                  className="object-cover object-center w-full h-full block"
                  src="Booksimage.jpg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-pink-500 text-xs tracking-widest title-font mb-1">
                  OUR MISSION
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Empower Learners
                </h2>
                <p className="mt-1 text-gray-700">
                  To make high-quality education affordable and accessible for
                  everyone.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="vision"
                  className="object-cover object-center w-full h-full block"
                  src="Booksimage.jpg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-pink-500 text-xs tracking-widest title-font mb-1">
                  OUR VISION
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Global Reach
                </h2>
                <p className="mt-1 text-gray-700">
                  To become the most trusted platform for learners worldwide.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="values"
                  className="object-cover object-center w-full h-full block"
                  src="Booksimage.jpg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-pink-500 text-xs tracking-widest title-font mb-1">
                  OUR VALUES
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Integrity & Quality
                </h2>
                <p className="mt-1 text-gray-700">
                  We believe in honest teaching and delivering practical
                  knowledge.
                </p>
              </div>
            </div>

            {/* Team */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="team"
                  className="object-cover object-center w-full h-full block"
                  src="Booksimage.jpg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-pink-500 text-xs tracking-widest title-font mb-1">
                  OUR TEAM
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Passionate Educators
                </h2>
                <p className="mt-1 text-gray-700">
                  Experienced instructors who love sharing knowledge with the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default About;
