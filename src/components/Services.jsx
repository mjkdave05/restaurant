import {GiftIcon, ClockIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const Services = () => {
  return (
    <div className="w-full bg-white py-32 ">
        <div className="mx-auto grid md:grid-cols-2 ">
            <div className="flex flex-col justify-center px-12">
                <p className="text-red-600 text-xl">Our Story & Services</p>
                 <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold items-center justify-center pt-8">
                    Our Culinary Journey And Services
                </h1>
                <p className="text-gray-500 md:mt-15 mt-10 md:text-2xl sm:text-2xl text-xl">
                    Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                </p>
                <button className=' bg-[#39DB4A] hover:bg-[#39eb85] mt-4 text-2xl text-white w-48 mt-15 sm:mt-10 py-3 rounded-full text-center cursor-pointer '>
                    Explore
                </button>
            </div>

            <div className="px-5 pt-9">
               <div className='flex p-4 lg:gap-7 gap-4 justify-center'>
                    <div className='border w-72 py-7 px-4 rounded-3xl shadow-xl justify-center items-center flex flex-col '>
                        <h1 className='text-[#39eb85] text-center text-2xl pt-3 font-bold '>Catering</h1>
                        <p className='text-xl text-center text-gray-500 pt-3'>Delight your guests with our flavors and  presentation</p>
                    </div>

                    <div className='border w-72 py-7 px-4 rounded-3xl shadow-xl justify-center items-center flex flex-col '>
                        <ClockIcon className='w-16 h-16 ' />
                        <h1 className='text-[#39eb85] text-center text-2xl pt-3 font-bold'>Fast delivery</h1>
                        <p className='text-xl text-center text-gray-500 pt-3'>We deliver your order promptly to your door</p>
                    </div>
               </div>

               <div className='flex p-4 gap-7 justify-center'>
                    <div className='border w-72 py-7 px-4 rounded-3xl shadow-xl justify-center items-center flex flex-col '>
                        <ShoppingCartIcon className='w-16 h-16' />
                        <h1 className='text-[#39eb85] text-center text-2xl pt-3 font-bold'>Online Ordering</h1>
                        <p className='text-xl text-center text-gray-500 pt-3'>Explore menu & order with ease using our Online Ordering </p>
                    </div>

                    <div className='border w-72 py-7 px-4 rounded-3xl shadow-xl justify-center items-center flex flex-col '>
                        <GiftIcon className='w-16 h-16 ' />
                        <h1 className='text-[#39eb85] text-center text-2xl pt-3 font-bold'>Gift Cards</h1>
                        <p className='text-xl text-center text-gray-500 pt-3'>Give the gift of exceptional dining with Foodi Gift Cards</p>
                    </div>
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services