import {StarIcon} from '@heroicons/react/24/solid'

const Testimonial = () => {
  return (
    <div className="w-full bg-gray-100 py-32">
        <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col justify-center">
                <img className=" " src="chef1.png" alt="" />
            </div>
            <div className="lg:px-9 px-12 py-9">
                <p className="text-red-600 text-xl">Testimonials</p>
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold py-9 leading-loose">What Our Customers Says About Us</h1>
                <p className="md:text-2xl text-xl text-gray-500 leading-6 "> &quot;I had the pleasure of dining at Foodi last night, and I&apos;m still raving about the experience! The attention to detail in presentation and service was impeccable &quot; </p>
                <div className="flex pt-14">
                    <div className="flex ">
                        <img className="w-16 h-16 rounded-full" src="img.jpg" alt="/" />
                        <img className="w-16 h-16 rounded-full " src="customer1.jpg" alt="/" />
                        <img className="w-16 h-16 rounded-full" src="customer2.jpg" alt="/" />
                    </div>
                    <div className="pl-6 font-bold">
                        <h1 className="text-2xl ">Customer Feedback</h1>
                        <div className='flex'>
                            <StarIcon className='w-6 h-6 text-yellow-400' />
                            <p className='text-xl pl-2'>4.9</p>
                            <p className='text-xl text-gray-500 pl-4 '>(18.6k Reviews)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial