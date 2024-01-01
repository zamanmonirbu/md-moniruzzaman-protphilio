import React, { useState } from "react";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // You can implement your subscription logic here
    // For demonstration purposes, we'll just set the subscribed state to true
    setSubscribed(true);
  };

  return (
    <div className="mx-4 max-w-md  p-6 text-white bg-gray-500 rounded-2xl mt-8 shadow-2xl text-left pt-10">
      <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      
      <p className=" mb-4">
        Why You Should Subscribe:
        <br />
        - Stay informed about the latest updates
        <br />
        - Exclusive content and offers
        <br />
        - Be part of our awesome community
      </p>

      {!subscribed ? (
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 py-2 sm:px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
            value={email}
            onChange={handleInputChange}
          />
          <button
            className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      ) : (
        <p className="text-green-500 mt-4">Thank you for subscribing!</p>
      )}
    </div>
  );
};

export default NewsletterCard;
