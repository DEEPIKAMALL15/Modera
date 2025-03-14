

const NewsletterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Subscribe Now and get 20% OFF</p>
        <p className="rext-gray-400 mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quos at dolorem maxime?
        </p>
        <form onSubmit={onSubmitHandler}  className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ">
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter Your Email" required/>
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox
