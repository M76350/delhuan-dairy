import React from "react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white font-[Arvo] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl text-center">
        {/* 404 GIF Section */}
        <div
          className="h-64 sm:h-80 md:h-96 bg-center bg-cover flex items-center justify-center rounded-lg shadow"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
          }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
            404
          </h1>
        </div>

        {/* Content Box */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl font-semibold">Look like you're lost</h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            The page you are looking for is not available!
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-5 inline-block bg-green-600 text-white text-sm sm:text-base px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-all duration-200"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}