import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/course");
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      
      {/* Header Section */}
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          We're delighted to have you{" "}
          <span className="text-pink-500">here! :)</span>
        </h1>

        <p className="mt-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our premium courses crafted by industry experts to help you master in-demand skills, gain practical experience, and accelerate your career with structured, high-quality learning on SkillNest.
        </p>

        <Link to="/">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
        </Link>
      </div>

      {/* Course Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {book.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default Course;
