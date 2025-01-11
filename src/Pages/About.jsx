import Title from "../Components/Title"
import { assets } from "../assets/assets"
import NewsletterBox from '../Components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
         <img className="w-full max-w-[450px]" src={assets.about_img} alt=""/>
         <div className="flex flex-col justify-center gap-6 md:w-2/4">
            <p>Modera Clothing Co. is an online clothing retailer based out of Fresno, California. They focus on providing a safe and clean shopping experience, emphasizing that all of their clothes are made in the USA. The brand promotes a community dedicated to excellence and authenticity, blending fashion with functionality.</p>
            <p>Customers can explore a variety of styles and products, showcasing a commitment to quality craftsmanship. The website aims to bring color and culture back into clothing, catering to diverse moods and occasions. If you are looking for a mix of trendy fashion pieces, Modera Clothing Co. appears to be a promising choice for online shopping.</p>
            <b className="text-gray-800">Our Mission</b>
            <p>he website aims to bring color and culture back into clothing, catering to diverse moods and occasions. If you are looking for a mix of trendy fashion pieces, Modera Clothing Co. appears to be a promising choice for online shopping.</p>
         </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
             <b>Quality Assurance</b>
             <p className="text-gray-600">Lorem ipsum vhgfhggg hjghyjg hhhhh qui quis earum placeat et recusandae animi dolor hii hhh am e amet?</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
             <b>Convenience</b>
             <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur explic\ recusandae animi dolore amet?</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
             <b>Exceptional Customer Service</b>
             <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ! Siqui quis earum placeat et recusandae animi dolore amet?</p>
          </div>
      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
