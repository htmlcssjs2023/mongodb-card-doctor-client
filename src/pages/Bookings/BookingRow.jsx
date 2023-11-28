import React from 'react';

const BookingRow = ({booking}) => {
    const {customerName,date, email, service, img, price} = booking;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
               {img &&<img src={img} alt="instrument img" />} 
              </div>
            </div>
          </div>
        </td>
        <td>{customerName}</td>
        <td>{email}</td>
        <td>${price}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default BookingRow;