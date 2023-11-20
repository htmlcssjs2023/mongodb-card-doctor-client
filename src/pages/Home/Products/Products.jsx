import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import ProductCard from './ProductCard';
import p1 from '../../../assets/images/products/1.png'
import p2 from '../../../assets/images/products/2.png'
import p3 from '../../../assets/images/products/3.png'
import p4 from '../../../assets/images/products/4.png'
import p5 from '../../../assets/images/products/5.png'
import p6 from '../../../assets/images/products/6.png'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section className='mb-20'>
            <SectionTitle
            miniTitle={`Popular Products`}
            title={`Browse Our Products`}
            details={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
            ></SectionTitle>
           <div className='grid grid-cols-3'>
           <ProductCard proImg={p1} title={"Car Engine Plug"} price={20.00}></ProductCard>
            <ProductCard proImg={p2} title={"Car Air Filter"} price={20.00}></ProductCard>
            <ProductCard proImg={p3} title={"Cools Led Light"} price={20.00}></ProductCard>
            <ProductCard proImg={p4} title={"Cools Led Light"} price={20.00}></ProductCard>
            <ProductCard proImg={p5} title={"Cools Led Light"} price={20.00}></ProductCard>
            <ProductCard proImg={p6} title={"Cools Led Light"} price={20.00}></ProductCard>
           </div>
           {/* button  */}
           <div className="text-center mt-10">
          <Link className="border-red-400 border-2 text-[#FF3811] mr-5 py-2 px-4 rounded hover:border hover:bg-[#ccc] hover:text-black">
           More Products
          </Link>
        </div>
        </section>
    );
};

export default Products;
