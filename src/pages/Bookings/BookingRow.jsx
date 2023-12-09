import React from "react";

const BookingRow = ({ booking, handleBookingsDelete, handleOrderConfirm }) => {
  const {_id, customerName, date, email, service, img, price, status } = booking;
 
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-circle" onClick={()=> handleBookingsDelete(_id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-20 rounded">
              {img && <img src={img} alt="instrument img" />}
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        {
          status === 'confirm' ? <span className="rounded p-2 bg-green-600 btn-sm">Confirmed</span>:
          <button className="btn btn-ghost btn-xs" onClick={()=>handleOrderConfirm(_id)}>Confirm</button>
          
        }
        
      </th>
    </tr>
  );
};

export default BookingRow;
