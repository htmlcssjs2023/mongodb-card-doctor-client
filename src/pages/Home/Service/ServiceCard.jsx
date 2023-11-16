import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    console.log(title, img, price)
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex items-center gap-24">
            <p className="text-[#FF3811] text-[1.2rem] font-bold">
              Price : ${price}
            </p>
            <button className="">
              <FaArrowRight className="text-[#FF3811]" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;