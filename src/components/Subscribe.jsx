import React, { useState } from 'react';

const SubscribePage = () => {
  const [name, setName] = useState('');
  const [favoriteMLSClub, setFavoriteMLSClub] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name && favoriteMLSClub) {
      setSubmitted(true);
      console.log(`Name: ${name}, Favorite MLS Club: ${favoriteMLSClub}, Email: ${email}`);
    }
    e.target.submit();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for subscribing!</h2>
            <p>We appreciate your interest. Check your inbox soon!</p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/moveojba"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-center text-gray-300">
              Fill out the details below to stay updated.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="favoriteMLSClub"
              placeholder="Your Favourite MLS Club"
              value={favoriteMLSClub}
              onChange={(e) => setFavoriteMLSClub(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubscribePage;