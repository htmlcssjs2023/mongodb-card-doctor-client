import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setService] = useState([]);
    // console.log(services)
    useEffect(()=>{
        fetch('services.json')
        .then(result => result.json())
        .then(data => setService(data))
    }, [])

    return (
      <div className="mb-20">
        <div className="text-center space-y-3 w-1/2 mx-auto">
          <p className="text-[#FF3811] text-[1.2rem] font-bold">Service</p>
          <h2 className="text-5xl font-bold">Our Service Area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid justify-center lg:grid-cols-3 lg:gap-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link className="border-red-400 border-2 text-[#FF3811] mr-5 py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
            More Services
          </Link>
        </div>
      </div>
    );
};

export default Services;