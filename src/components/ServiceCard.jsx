import React from "react";
// import infantImage from '../assets/Infant.png' // Adjust the relative path accordingly

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:bg-purple-600 hover:scale-105">
      <img src={imageUrl} alt={title} className="h-32 w-full object-cover mb-4 md:mb-6 rounded-lg" />
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
      <a href="#" className="text-blue-500 inline-block hover:underline">Learn more</a>
    </div>
  );
};

export default ServiceCard;

