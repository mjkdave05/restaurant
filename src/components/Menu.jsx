import {StarIcon} from '@heroicons/react/24/solid'

const Menu = () => {
  return (
    <div className="w-full bg-white py-32">
        <div className="mx-auto item-center justify-center">
            <div className="px-6 md:px-24 ">
                <p className="text-red-600 text-xl">Special Dishes</p>
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold pt-5">
                    Standard Dishes <br /> From Our Menu
                </h1>
            </div>

            <div className=" grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-12 pt-20 lg:px-2 md:px-24 px">

                <div className='border shadow-xl rounded-3xl py-9 px-7'>
                    <div className="justify-center items-center flex flex-col ">
                        <img className="w-44 h-44 rounded-full" src="food3.jpg" alt="/" />
                    </div>
                        <h1 className="text-2xl font-bold pt-3">
                            Fattoush salad
                        </h1>
                        <p className="text-lg pt-2">
                            Description of the item
                        </p>
                        <div className="flex justify-between pt-2">
                            <div>
                                <p className="text-xl font-bold"><span className="text-red-600">$</span>24.00</p>
                            </div>
                            <div className='flex'>
                                <StarIcon className='text-yellow-400 w-6 h-6' />
                                <p className='text-xl'>4.9</p>
                            </div>
                        </div>
                </div>

                <div className='border shadow-xl rounded-3xl py-9 px-7'>
                    <div className="justify-center items-center flex flex-col ">
                        <img className="w-44 h-44 rounded-full" src="food4.jpg" alt="/" />
                    </div>
                        <h1 className="text-2xl font-bold pt-3">
                            Fattoush salad
                        </h1>
                        <p className="text-lg pt-2">
                            Description of the item
                        </p>
                        <div className="flex justify-between pt-2">
                            <div>
                                <p className="text-xl font-bold"><span className="text-red-600">$</span>24.00</p>
                            </div>
                            <div className='flex'>
                                <StarIcon className='text-yellow-400 w-6 h-6' />
                                <p className='text-xl'>4.9</p>
                            </div>
                        </div>
                </div>

                <div className='border shadow-xl rounded-3xl py-9 px-7'>
                    <div className="justify-center items-center flex flex-col ">
                        <img className="w-44 h-44 rounded-full" src="food3.jpg" alt="/" />
                    </div>
                        <h1 className="text-2xl font-bold pt-3">
                            Fattoush salad
                        </h1>
                        <p className="text-lg pt-2">
                            Description of the item
                        </p>
                        <div className="flex justify-between pt-2">
                            <div>
                                <p className="text-xl font-bold"><span className="text-red-600">$</span>24.00</p>
                            </div>
                            <div className='flex'>
                                <StarIcon className='text-yellow-400 w-6 h-6' />
                                <p className='text-xl'>4.9</p>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Menu