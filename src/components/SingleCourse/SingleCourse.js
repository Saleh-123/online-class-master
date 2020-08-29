import React from 'react';

const SingleCourse = (props) => {
  const { title, details, price, img, auth } = props.course;
  const myStyle = {
    color: '#4a54f1',
  };
  return (
    <div>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src={require('../../images/' + img)}
              className='card-img'
              alt=''
            />
          </div>

          <div className='col-md-7'>
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>
                <small class='text-muted'>{details}</small>
              </p>
              <p className='card-text'>
                Course By <span style={myStyle}>{auth}</span>
              </p>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => props.handleAddCourse(props.course)}
              >
                Enroll Now
              </button>
            </div>
          </div>
          <div className='col-md-1 pt-2'>
            <h4>${price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
