import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to our furniture store! We are passionate about providing you with high-quality, stylish furniture that makes your home feel warm and inviting.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Our mission is to offer a wide range of furniture that combines comfort, durability, and aesthetics. Whether you are looking for modern designs or classic pieces, we have something for everyone.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Our team is dedicated to helping you find the perfect furniture for your home. We believe in providing exceptional customer service and ensuring that you have a great shopping experience.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Thank you for choosing us as your furniture provider. We look forward to helping you create a beautiful and comfortable living space.
      </p>
      <div className="flex justify-center">
        <img src="../assets/images/about-us.jpg" alt="About Us" className="rounded shadow-md w-2/3"/>
      </div>
    </div>
  );
}

export default About;
