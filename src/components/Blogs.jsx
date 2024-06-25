// Blog.jsx

import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Blog Post Title 1',
      date: 'June 20, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit odio in odio consequat, at placerat nulla condimentum.',
      imageUrl: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Blog Post Title 2',
      date: 'June 18, 2024',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Blog Post Title 2',
      date: 'June 18, 2024',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/400x200',
    }
    // Add more blog posts as needed
  ];

  return (
    <section id="blogs" className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Latest Blog Posts</h2>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">Published on <span className="font-semibold">{post.date}</span></p>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <a href="#" className="text-blue-500 mt-2 inline-block hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-900">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
