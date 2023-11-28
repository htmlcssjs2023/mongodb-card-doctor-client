import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  console.log(title, img, price);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex items-center gap-10">
          <p className="text-[#FF3811] text-[1.2rem] font-bold">
            Price : ${price}
          </p>

          <Link to={`/checkout/${_id}`}>
            <div className="flex items-center gap-3">
              <span className="btn-sm rounded-md bg-[orange] text-center">Book Now</span>
              <FaArrowRight className="text-[#FF3811]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
