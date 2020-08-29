import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, course) => total + course.price, 0);

  let formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  let tax = (total / 10).toFixed(2);
  const grandTotal = formatNumber(total + Number(tax));

  return (
    <div className='card p-2'>
      <h4 className='card-title text-center'>Course Added</h4>

      {/* First Row */}
      <div className='row'>
        <div className='col-md-6'>
          <small>Price: {formatNumber(total)}</small>
        </div>
        <div className='col-md-6'>
          <small>Tax: {tax}</small>
        </div>
      </div>
      {/* Second Row */}
      <div className='row'>
        <div className='col-md-6 redTxt'>Total Price: {grandTotal}</div>
        <div className='col-md-6'>
          <small>Courses Enroll: {cart.length}</small>
        </div>
      </div>
      <hr />
      <div className='text-center'>
        <button type='button' className='btn btn-danger '>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
