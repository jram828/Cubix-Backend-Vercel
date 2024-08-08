
import Logo from '../assets/logoFooter.png'
import call from '../assets/call.png'
import email from '../assets/email.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

export default function Footer() {
  return (
    <div className='bg-[#20242A] py-3 px-6 pt-4 sm:flex sm:pl-60  w-full' >
        <div className="logo">
            <img className=' w-[90px] ' src={Logo} alt="" />
        </div>

        <div className='flex justify-between mt-4 sm:mt-0 sm:ml-5 ' >
        <div className='sm:ml-5' >
            <h2 className='text-white mb-2  ' >Help</h2>
            <p className='text-gray-300 my-2' >Privacy Policy</p>
            <p className='text-gray-300 my-2'>Help and support</p>
            <p className='text-gray-300 my-2'>FAQ</p>
        </div>

        <div className='sm:ml-10' >
            <h2 className='text-white mb-2'>Contact</h2>
            <div className='flex my-2 ' >
                <img className=' w-[25px] mr-2' src={call} alt="" />
                <p className='text-gray-300'>+55 (123) 145-7845 </p>   
            </div>
            <div className='flex my-2 ' >
                <img className='w-[25px] mr-2'  src={email} alt="" />
            <p className='text-gray-300'>cubix@email.com</p>
            </div>
            <div className='flex my-2 ' >
                <img className='w-[25px] mr-2' src={facebook} alt="" />
            <p className='text-gray-300'>facebook.com/cubix</p>
            </div>
            <div className='flex my-2 ' >
                <img className='w-[25px] mr-2' src={instagram} alt="" />
            <p className='text-gray-300'>instagram.com/cubix</p>
            </div>
        </div>
        </div>

    </div>
  )
}