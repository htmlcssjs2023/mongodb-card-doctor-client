
// ========= React Rating ========== 
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductCard = ({proImg,title,price}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={proImg}
          alt="Product"
          className="rounded-xl h-36 w-36"
        />
      </figure>
      <div className="card-body items-center text-center">
        <Rating style={{maxWidth:160}} value={5} readOnly></Rating>
         <h3 className='text-3xl font-bold'>{title}</h3>
         <p className='text-[1.3rem] text-[#FF3811] font-bold'>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
