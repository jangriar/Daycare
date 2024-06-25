import React from 'react';
import ServiceCard from './ServiceCard';
import Blogs from './Blogs'
//import { FaBaby, FaSchool, FaPlayground } from 'react-icons/fa';
import About from './About'; // Import the About component
import Home from './Home';
import Contact from './Contact';

const MainContent = () => (
  <>

    <Home />
    <main className="flex-grow container mx-auto p-4">
      <section id="services" className="py-12">
        <div className="max-w-screen-xl mx-auto p-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              title="Infant Care"
              description="Loving and nurturing care for infants."
              imageUrl="/assets/Infant.png"
            />
            <ServiceCard
              title="Pre-School"
              description="Educational and fun pre-school programs."
              imageUrl="/assets/new.jpg"
            />
            <ServiceCard
              title="Outdoor Play"
              description="Safe and exciting outdoor play areas."
              imageUrl="/assets/outdoorplay.png"
            />
          </div>
        </div>
      </section>
    </main>
    <Blogs />
    <About />
    <Contact />
  </>
);

export default MainContent;

