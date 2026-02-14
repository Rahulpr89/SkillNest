import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const FreeCourses = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4000/course');
        setBook(res.data.filter((data) => data.price === 0));
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <div className="mb-6">
        <h1 className="font-semibold text-xl pb-2">
          Free Offered Courses
        </h1>
        <p className="text-gray-600">
          Start learning at zero cost with our handpicked free Courses, designed to help you explore new skills, strengthen fundamentals, and kick-start your learning journey with SkillNest.
        </p>
      </div>

      <Slider {...settings}>
        {book.map((item) => (
          <div key={item._id} className="px-3">
            <Cards item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FreeCourses;
