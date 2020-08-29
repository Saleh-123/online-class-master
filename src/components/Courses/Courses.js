import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';
import './Courses.css';

const Courses = () => {
  const first14 = fakeData.slice(0, 13);
  const [courses, setCourses] = useState(first14);

  const [cart, setCart] = useState([]);
  const handleAddCourse = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      {/* Header Section */}
      <div className='header fixed-top'>
        <nav className='pt-3 pl-5'>
          <h3>Online Courses</h3>
          <h5>Anitime Anywher Learn and Improve Your Skill</h5>
        </nav>
      </div>

      {/* Cart Component */}
      <div className='row fixed-top mt-2 mr-1'>
        <div className='col-md-9'></div>
        <div className='col-md-3'>
          <Cart cart={cart}></Cart>
        </div>
      </div>

      {/* SingleCourse Component */}
      <div className='ml-3 courseContainer'>
        <div className='row'>
          <div className='col-md-9'>
            {courses.map((course) => (
              <SingleCourse
                key={course.id}
                course={course}
                handleAddCourse={handleAddCourse}
              ></SingleCourse>
            ))}
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
