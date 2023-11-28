import { Link } from "react-router-dom";
import checkout from "../../../assets/images/checkout/checkout.png";

const HeroBanner = ({title, text}) => {

  return (
    <div className="carousel w-full">
      <div className="carousel-item w-full max-h-96 relative">
        <img src={checkout} className="w-full  rounded-md lg:rounded-md" />
        <h2 className="text-5xl font-semibold absolute top-[50%] left-28 text-white">{title}</h2>
        <Link to="/">
        <button className="bg-[#FF3811] text-white absolute bottom-10 left-[40%] rounded-md px-4 py-2">{text}</button>
        </Link>
    </div>
    </div> 
  );
};

export default HeroBanner;
