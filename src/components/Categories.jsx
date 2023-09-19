

const Categories = () => {
  return (
    <div className="w-full bg-gray-100 py-32">
        <div className="mx-auto ">
            <div className=" text-center justify-center">
                <p className="text-red-600 text-xl">CUSTOMER FAVORITES</p>
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold pt-5">Popular Categories</h1>
            </div>

            <div className=" justify-center items-center max-w-[1240px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2 pt-20 lg:px-2 md:px-24 px-32">
                <div className=" md:w-[260px]  justify-center items-center border shadow-xl flex flex-col py-6 my-4 rounded-3xl">
                    <img className="w-20 h-20 rounded-full" src="burger.jpg " alt="" />
                    <h1 className="text-2xl font-bold">Burger</h1>
                    <p className="text-lg">(86 Burgers)</p>
                </div>
                <div className="md:w-[260px] justify-center items-center border shadow-xl flex flex-col py-6 my-4 rounded-3xl ">
                    <img className="w-20 h-20 rounded-full" src="cake.jpg " alt="" />
                    <h1 className="text-2xl font-bold">Cake</h1>
                    <p className="text-lg">(12 Cakes)</p>
                </div>
                <div className="md:w-[260px] justify-center items-center border shadow-xl flex flex-col py-6 my-4 rounded-3xl">
                    <img className="w-20 h-20 rounded-full" src="desert.jpg " alt="" />
                    <h1 className="text-2xl font-bold">Desert</h1>
                    <p className="text-lg">(48 Deserts)</p>
                </div>
                <div className="md:w-[260px] justify-center items-center border shadow-xl flex flex-col py-6 my-4 rounded-3xl">
                    <img className="w-20 h-20 rounded-full" src="icecream.jpg " alt="" />
                    <h1 className="text-2xl font-bold">Icecream</h1>
                    <p className="text-lg">(10 Icecreams)</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Categories