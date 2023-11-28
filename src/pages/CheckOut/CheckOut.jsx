import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context-api/AuthContextAPI";
import HeroBanner from './../Shared/HeroBanner/HeroBanner';

const CheckOut = () => {
    const service = useLoaderData();
    const {title, price, _id, img} = service;
    const {user} = useContext(AuthContext);

    const handleServiceCheckout = (event)=>{
      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;
      const details = form.details.value;

      // console.log(name, date, email);
      // i
      const order = {
        customerName: name,
        date,
        email,
        service: title,
        service_id: _id,
        price: price,
        details,
        img,
      }

      console.log(order);

      fetch('http://localhost:5000/orders',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res =>res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
          alert('Successfully added ')
        }
      })
      

    }
  return (

    <div>
      <HeroBanner
       title={"Check Out"}
       text={"Home / Checkout"}
      ></HeroBanner>
    <div className="w-min-h-screen bg-base-200">
      <form onSubmit={handleServiceCheckout}>
        <div className="w-full lg:w-10/12 lg:mx-auto py-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="text-[1.2rem] text-gray-700">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                className="input input-bordered"
                name="name"
                defaultValue={user?.displayName}
              /> 
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[1.2rem] text-gray-700">Date</span>
              </label>
              <input
                type="Date"
                className="input input-bordered"
                name="date"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[1.2rem] text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                name="email"
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[1.2rem] text-gray-700">Due Ammount</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                className="input input-bordered"
                name="dueAmount"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered h-24 mt-8"
              placeholder="Write message here"
              name="details"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="bg-[#FF3811] text-white text-[1.2rem] rounded-md py-3 text-center cursor-pointer" value=" Order Confirm" />
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CheckOut;