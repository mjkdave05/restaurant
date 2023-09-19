{/*import {StarIcon} from '@heroicons/react/24/outline' */}
import {StarIcon} from '@heroicons/react/24/solid'

const Hero = () => {
  return (
    <div className="w-full bg-white mx-auto pb-32 pt-5 ">
        <div className=" mt-[-20] px-11 grid md:grid-cols-2 pt-24">
            <div className="flex flex-col justify-center pt-9">
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold items-center justify-center">
                    Dive into Delights Of Delectable <span className="text-[#39DB4A]">Food</span>
                </h1>
                <p className="text-gray-500 md:mt-15 mt-10 md:text-3xl sm:text-2xl text-xl">
                    Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftmanship
                </p>
                <button className=' bg-[#39DB4A] hover:bg-[#39eb85] text-2xl text-white w-48 mt-15 sm:mt-10 py-3 rounded-full text-center cursor-pointer '>
                    Order Now
                </button>
            </div>
           
            <div className='flex flex-col justify-center'>
                <img className="" src="food2.png" alt="/" />
                    <div className='lg:flex gap-2 md:gap-4 item-center justify-center '>

                        <div className='flex border my-2 shadow-xl rounded-lg px-2 py-2'>
                            <img className="w-16 h-16 rounded-lg" src="food3.jpg" alt="/" />
                           <div className='justify-center items-center px-4'>
                            <p>Pizza</p>
                                <div className='flex'>
                                    <StarIcon className='w-5 h-5 text-yellow-400' />
                                    <StarIcon className='w-5 h-5 text-yellow-400' />
                                    <StarIcon className='w-5 h-5 text-yellow-400' />
                                    <StarIcon className='w-5 h-5 text-gray-300' />
                                    <StarIcon className='w-5 h-5 text-gray-300' />
                                </div>
                                <p><span className='text-red-600'>$</span>18.00</p>
                           </div>
                        </div>
                        
                        <div className='flex border my-2 shadow-xl rounded-lg px-2 py-2'>
                            <img className="w-16 h-16 rounded-lg" src="food4.jpg" alt="/" />
                            <div className='justify-center items-center px-4'>
                                <p>Pancake</p>
                                <div className='flex'>
                                    <StarIcon className='w-5 h-5 text-yellow-400' />
                                    <StarIcon className='w-5 h-5 text-yellow-400' />
                                    <StarIcon className='w-5 h-5 text-yellow-400' />
                                    <StarIcon className='w-5 h-5 text-yellow-400' />
                                    <StarIcon className='w-5 h-5 text-gray-300' />
                                </div>
                                <p><span className='text-red-600'>$</span>23.00</p>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default Hero