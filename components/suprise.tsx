// import React from 'react';

const Suprise: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-blue-500 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Surprise Component!</h1>
      <p className="text-lg mb-4 text-center">
        This is a delightful surprise component that brings joy and excitement
        to your application.
      </p>
      <div className="bg-white bg-opacity-20 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Did you expect this?</h2>
        <p className="text-base">
          Sometimes, the best parts of life are the unexpected ones. Enjoy this
          little surprise!
        </p>
      </div>
    </div>
  );
};

export default Suprise;
