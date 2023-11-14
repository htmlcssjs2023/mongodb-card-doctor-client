import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row ">
            {/* image part ====  */}
            <div className='w-1/2 relative'>
              <img src={person} className="max-w-sm rounded-lg shadow-2xl w-3/4" />
              <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-5 top-1/2 border-8 border-white" />
            </div>

            {/* content part  */}
            <div className="space-y-6 w-1/2">
              <p className="text-[1.2rem] text-[#FF3811] font-bold">About Us</p>
              <h1 className="py-6 text-4xl font-bold w-1/2">
                We are qualified & of experience in this field
              </h1>
              <p className="text-[1.2rem]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
              <p className="text-[1.2rem]">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <button className="bg-[#FF3811]   mr-5 text-white py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
                Get More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;