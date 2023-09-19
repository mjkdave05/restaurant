import {useState} from 'react'
import {ShoppingBagIcon, MagnifyingGlassIcon, PhoneIcon, XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline' 

const Navbar = () => {
    const links = [
        {name: 'Home', link: '/'},
        {name: 'Menu', link: '/menu'},
        {name: 'Services', link: '/services'},
        {name: 'Offers', link: '/offers'},
    ]

    const [isOpen, setisOpen] = useState(false);

  return (
    <div className='w-full  fixed shadow-md top-0 left-0 z-999 '>
       <div className=' md:px-10 py-7 px-8 md:flex justify-between bg-white items-center text-lg'>
         {/* logo here */}
            <div className='flex text-3xl cursor-pointer items-center gap-4'>
                <img src='' className='w-7 h-7 rounded-full' />
                <span className='font-bold text-[#39DB4A]'>Foodi</span>
            </div>
          {/**Menu Icon */}  
            <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
                {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon /> }
            </div>
            {/**Nav Links */}
                    <ul className={`md:flex pl-8 md:pl-0 md:items-center pt-4 md:pb-0 lg:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all bg-white duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'} `} >
                        {links.map((link, id) => (
                            <li key={id} className='  my-7 md:my-0 md:ml-8 hover:text-[#39DB4A]' >
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))}
                    
                    </ul>
                
                <div className={`md:flex pl-4 gap-6 items-center justify-center md:pl-3 md:item-center md:pb-0 lg:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all bg-white duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                    <MagnifyingGlassIcon className='w-7 h-7 cursor-pointer ' />
                    <ShoppingBagIcon className='w-7 h-7 cursor-pointer' />
                    <button className='gap-2 bg-[#39DB4A] hover:bg-[#39eb85] text-white flex py-2 rounded-full text-center px-5 cursor-pointer '>
                    <PhoneIcon className='w-7 h-7' />
                    Contact
                    </button>
                </div>
            
       </div>
    </div>
  )
}

export default Navbar