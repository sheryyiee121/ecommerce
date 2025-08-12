import React from "react";

export default function ProductShowcase() {
  return (
    <div className="p-4 border rounded-xl shadow bg-white max-w-7xl mx-auto flex">
      {/* Sidebar */}
      <div className="w-1/4 pr-4">
        <ul className="space-y-3">
          <li className="font-semibold bg-blue-100 p-2 rounded">Automobiles</li>
          <li className="text-gray-700">Clothes and wear</li>
          <li className="text-gray-700">Home interiors</li>
          <li className="text-gray-700">Computer and tech</li>
          <li className="text-gray-700">Tools, equipments</li>
          <li className="text-gray-700">Sports and outdoor</li>
          <li className="text-gray-700">Animal and pets</li>
          <li className="text-gray-700">Machinery tools</li>
          <li className="text-gray-700">More category</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-2/4 px-4">
        <div className="relative bg-green-200 h-full rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/black-headphones-laptop-mint-green-background-flat-lay-copy-space_169016-32628.jpg"
            alt="Electronics"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 p-10">
            <h2 className="text-2xl font-medium">Latest trending</h2>
            <h1 className="text-4xl font-bold mb-4">Electronic items</h1>
            <button className="bg-white px-4 py-2 rounded font-semibold shadow">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-1/4 pl-4 space-y-3">
        <div className="bg-blue-100 p-4 rounded-xl flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-white rounded-full mb-2" />
          <p>
            <span className="font-medium">Hi, user</span> <br /> let’s get stated
          </p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded mt-2 w-full">
            Join now
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded mt-2 w-full">
            Log in
          </button>
        </div>
        <div className="bg-orange-400 text-white p-4 rounded-xl font-medium">
          Get US $10 off with a new supplier
        </div>
        <div className="bg-teal-400 text-white p-4 rounded-xl font-medium">
          Send quotes with supplier preferences
        </div>
      </div>
    </div>
  );
}
