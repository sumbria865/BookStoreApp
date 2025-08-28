import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'


function Courses() {
  
return (
  <>
    <div className="flex flex-col min-h-screen">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1">
        <Course />
      </div>

      {/* Footer at bottom */}
      <Footer />
    </div>
    </>
  );
}

export default Courses
