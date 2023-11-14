import Img1 from "../../../assets/images/banner/1.jpg";
import Img2 from "../../../assets/images/banner/2.jpg";
import Img3 from "../../../assets/images/banner/3.jpg";
import Img4 from "../../../assets/images/banner/4.jpg";
import Img5 from "../../../assets/images/banner/5.jpg";
import Img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      {/* SLIDER 01 START  */}
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={Img1} className="w-full  rounded-md lg:rounded-md" />

        {/* SLIDER TEXT AND BUTTON  START */}
        <div className="flex items-center pl-20 absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md lg:rounded-md ">
          <div className=" w-2/4 space-y-7 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[1.2rem]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811]   mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Discover More
              </button>
              <button className="border-2 mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/*  SLIDER TEXT AND BUTTON END */}

        <div className="absolute flex justify-end  transform -translate-y-1/2 bottom-0 right-8">
          <a href="#slide6" className="btn btn-circle mr-3 mb-4 bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      {/* ======================= SLIDER 01 END ==============  */}

      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={Img2} className="w-full  rounded-md lg:rounded-md" />

        {/* SLIDER TEXT AND BUTTON  START */}
        <div className="flex items-center pl-20 absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md lg:rounded-md ">
          <div className=" w-2/4 space-y-7 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[1.2rem]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811]   mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Discover More
              </button>
              <button className="border-2 mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/*  SLIDER TEXT AND BUTTON END */}

        <div className="absolute flex justify-end  transform -translate-y-1/2 bottom-0 right-8">
          <a href="#slide1" className="btn btn-circle mr-3 mb-4 bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      {/* ============================ SLIDER 02 END ===========  */}

      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src={Img3} className="w-full  rounded-md lg:rounded-md" />

        {/* SLIDER TEXT AND BUTTON  START */}
        <div className="flex items-center pl-20 absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md lg:rounded-md ">
          <div className=" w-2/4 space-y-7 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[1.2rem]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811]   mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Discover More
              </button>
              <button className="border-2 mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/*  SLIDER TEXT AND BUTTON END */}

        <div className="absolute flex justify-end  transform -translate-y-1/2 bottom-0 right-8">
          <a href="#slide2" className="btn btn-circle mr-3 bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={Img4} className="w-full  rounded-md lg:rounded-md" />

        {/* SLIDER TEXT AND BUTTON  START */}
        <div className="flex items-center pl-20 absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md lg:rounded-md ">
          <div className=" w-2/4 space-y-7 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[1.2rem]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811]   mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Discover More
              </button>
              <button className="border-2 mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/*  SLIDER TEXT AND BUTTON END */}

        <div className="absolute flex justify-end  transform -translate-y-1/2 bottom-0 right-8">
          <a href="#slide3" className="btn btn-circle mr-3 bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full h-[600px]">
        <img src={Img5} className="w-full  rounded-md lg:rounded-md" />

        {/* SLIDER TEXT AND BUTTON  START */}
        <div className="flex items-center pl-20 absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md lg:rounded-md ">
          <div className=" w-2/4 space-y-7 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[1.2rem]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811]   mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Discover More
              </button>
              <button className="border-2 mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/*  SLIDER TEXT AND BUTTON END */}
        <div className="absolute flex justify-end  transform -translate-y-1/2 bottom-0 right-8">
          <a href="#slide4" className="btn btn-circle mr-3 bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full h-[600px]">
        <img src={Img6} className="w-full  rounded-md lg:rounded-md" />

        {/* SLIDER TEXT AND BUTTON  START */}
        <div className="flex items-center pl-20 absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md lg:rounded-md ">
          <div className=" w-2/4 space-y-7 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[1.2rem]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811]   mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Discover More
              </button>
              <button className="border-2 mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/*  SLIDER TEXT AND BUTTON END */}

        <div className="absolute flex justify-end  transform -translate-y-1/2 bottom-0 right-8">
          <a href="#slide3" className="btn btn-circle mr-3 bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
