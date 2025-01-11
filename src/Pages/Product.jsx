import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";


const Product = () => {
  const {productId}=useParams();
  const {products,currency,addToCart}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('');

  
  const fetchProductData= async()=>{
     products.map((item)=>{
         if(item._id===productId){
          setProductData(item);
          setImage(item.image[0]);
          return null;
         }
     })
  }
  useEffect(()=>{
     fetchProductData();
  },[productId])

  const renderRatingIcons=(rating)=>{
    const stars=[];
    let remainingRating = rating; 
    for(let i=0;i<5;i++){
      if(remainingRating>0.5){
        stars.push(<i key={i} className='bi bi-star-fill'></i>);
        remainingRating--;
      }else if(remainingRating>0 && remainingRating<1){
        stars.push(<i key={"half"} className='bi bi-star-half'></i>);
        remainingRating--;
      }
      else{
        stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
        remainingRating--;
      }
    }
    return stars;

 }; 

  return productData? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {
                  productData.image.map((item,index)=>(
                    <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt=""/>
                  ))
                }
            </div>
            <div className="w-full sm:w-[80%]">
                  <img className="w-full h-auto" src={image} alt=""/>
            </div>

          </div>
          <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-1  text-2xl  ">
                 
                 {renderRatingIcons(productData.rating)} 
                 <p className="pl-2">(122)</p>
              </div>
              <p className="mt-4 text-3xl font-medium">{currency}{productData.price}</p>
              <p className="mt-4 text-gray-500 w-4/5">{productData.description}</p>
              <div className="flex flex-col gap-4 my-5">
                <p>Select Size</p>
                <div className="flex gap-2">
                   {productData.sizes.map((item,index)=>(
                      <button onClick={()=>setSize(item)}  className={`border py-2 px-4 bg-gray-100 ${item===size ?'border-orange-500':''}`} key={index} >{item}

                      </button>
                   ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ">ADD TO CART</button>
              <hr className="mt-8 sm:w-4/5"/>
              <div className="text-sm text-gray-500 mt-3 flex flex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
          </div>
      </div>

      <div className="mt-20 ">
          <div className="flex ">
              <b className="border px-5 py-3 text-sm">Description</b>
              <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          
      </div>
     <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
      <p>An eCommerce website is an online platform that enables businesses or individuals to buy and sell products or services over the internet.These websites provide users with a digital storefront, where they can browse products, add items to a shopping cart, and complete purchases securely. </p>
      <p>A clothing website is an eCommerce platform dedicated to showcasing and selling apparel and fashion-related products. These websites cater to individuals looking to purchase clothing items such as casual wear, formal attire, sportswear, accessories, and more.</p>
      </div>
     </div>
     
     <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
     
    </div>
  ):<div className="opacity-0"></div>
}

export default Product
