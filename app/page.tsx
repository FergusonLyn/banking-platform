import Image from "next/image";
import Link from "next/link";
import { FaRankingStar } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaShieldAlt, FaUsers, FaStar } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';


export default function Home() {
  return (
    
      <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
        
        <div className="md:h-[650px] w-full bg-violet-800 relative">

        <Image
          src="/bank.avif" // replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0" // ensures it covers the div
        />

          {/* navbar */}
          <div className="w-full m-4 z-10 relative">
            <ul className="flex gap-7 text-white p-2 justify-center">
              <li>
                <Link href='./' className="hover:border-">Home</Link>
              </li>
              <li>
                <Link href='#about'>About</Link>
              </li>
              <li>
                <Link href='#services'>Services</Link>
              </li>
              <li>
                <Link href='#contact'>Contact</Link>
              </li>
              <li>
                <Link href='/getStarted'>Get Started</Link>
              </li>
            </ul>
          </div>

          

          {/* Account, Personal Loans and Credit Cards */}
          <div className="h-56 w-3/4 absolute bottom-[-25%] left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4">

            {/* sqaure divs */}
            <div className="bg-white shadow-lg rounded-md border-2 grid grid-2 items-center justify-center p-3">
              <div className="h-1/2 flex flex-row gap-4">
                <div className="">
                  <FaShieldAlt className="w-10 h-12" />                      
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-base font-semibold">Top Security</span> 
                  <span className="text-xl font-semibold">Trusted & Secure</span>            
                </div>                  
              </div>
              <div className="text-center">
                <p>Our system uses advanced security measures to ensure that your financial data is protected against unauthorized access and fraud.</p>
              </div>              
            </div>   

            <div className="bg-white shadow-lg rounded-md border-2 grid grid-2 items-center justify-center p-3">
              <div className="h-1/2 flex flex-row gap-4">
                <div className="">
                  <FaUsers className="w-10 h-12" />                      
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-base font-semibold">Customer Satisfaction</span> 
                  <span className="text-xl font-semibold">4.9/5</span>            
                </div>                  
              </div>
              <div className="text-center">
                <p>We pride ourselves on exceptional customer service. Our users consistently rate us highly for our responsiveness and support.</p>
              </div>              
            </div> 

            <div className="bg-white shadow-lg rounded-md border-2 grid grid-2 items-center justify-center p-3">
              <div className="h-1/2 flex flex-row gap-4">
                <div className="">
                  <GiReceiveMoney className="w-10 h-12" />                      
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-base font-semibold">Easy Transactions</span> 
                  <span className="text-xl font-semibold">Seamless Experience</span>            
                </div>                  
              </div>
              <div className="text-center">
                <p>Experience a smooth and efficient process for all your transactions. From fund transfers to bill payments, we make banking simple.</p>
              </div>              
            </div>   
          </div>
        </div>


       {/* second div */}
      <div className="h-[520px] w-full flex items-center justify-center m-36" id="about">
          <div className="grid md:grid-cols-2 grid-cols-1 w-3/4 h-1/2">
              <div className="text-left justify-center p-6 pt-10">
                  <p className="text-2xl font-semibold">
                      Discover the Future of Banking with Our Innovative Solutions
                  </p>
                  <p className="text-base text-gray-500 mt-2">
                      Our platform offers a range of services designed to simplify your financial life. Whether you&apos;'re managing your accounts, applying for loans, or using our credit services, we provide the tools you need to achieve your financial goals with ease and confidence.
                  </p>
                  <div className="w-[200px] bg-violet-800 h-[45px] flex items-center justify-center rounded-2xl mt-4 cursor-pointer text-white">
                      Learn more
                  </div>
              </div>
              <div className="relative w-full h-full">
                <Image
                  src="/bankX.jpeg"
                  alt="banking"
                  layout="fill" 
                  objectFit="cover" 
                  quality={100} 
                  className="rounded-lg" 
                />
              </div>
          </div>
      </div>


       {/* services div */}
      <div className="h-[620px] w-full flex flex-col items-center justify-center bg-gray-50 pb-6" id="services">
        <div className="mb-16 text-center">
          <span className="text-xl font-semibold">Services</span> <hr  className="bg-violet-800 h-1"/>          
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 w-3/4 h-2/3 gap-4">
          <div className="flex p-3">
            <p>
              <span className="text-2xl font-semibold">&quot;</span>
              Our banking system is designed to provide secure, reliable, and convenient access to your finances. 
              Whether you&rsquo;'re managing accounts, applying for loans, or using credit cards, we ensure that your financial 
              journey is seamless and protected every step of the way.
              <span className="text-2xl font-semibold">&quot;</span>
            </p>
          </div>
          <div className="shadow-lg rounded-md border-2 bg-white flex flex-col gap-2 items-center justify-center p-3">
            <MdAccountBalance className="w-16 h-16" />
            <span className="text-xl">My Accounts</span>
            <p className="text-center text-sm text-gray-500">
              Manage your savings, checking, and investment accounts all in one place. View balances, 
              transfer funds, and monitor transactions with ease.
            </p>
          </div>
          <div className="shadow-lg rounded-md border-2 bg-white flex flex-col gap-2 items-center justify-center p-3">
            <FaMoneyBill className="w-16 h-16" />
            <span className="text-xl">Personal Loans</span>
            <p className="text-center text-sm text-gray-500">
              Access flexible personal loans tailored to your needs. Apply online and get quick approvals to finance your dreams.
            </p>
          </div>
          <div className="shadow-lg rounded-md border-2 bg-white flex flex-col gap-2 items-center justify-center p-3">
            <FaCreditCard className="w-16 h-16" />
            <span className="text-xl">Credit Card</span>
            <p className="text-center text-sm text-gray-500">
              Enjoy competitive rates and exclusive benefits with our credit cards. Shop, dine, and travel with added rewards and security.
            </p>
          </div>
        </div>
      </div>


      <div className="h-[700px] w-full flex items-center justify-center bg-white" id="contact">
          <div className="w-3/4 max-w-4xl bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-16 text-center">
              <span className="text-xl font-semibold">Contact Us</span>
              <hr className="bg-violet-800 h-1 mx-auto w-24 mt-2" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <form className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-lg font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your Message" 
                    className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-1/2 bg-violet-800 text-white p-3 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  Send Message
                </button>
              </form>
              <div className="flex flex-col justify-center items-center md:items-start">
                <h3 className="text-xl font-semibold mb-4">Reach Us Directly</h3>
                <p className="text-lg font-semibold mb-2">support@yourbank.com</p>
                <p className="text-lg font-semibold mb-2">+1 (234) 567-8901</p>
                <p className="text-gray-600">1234 Bank St, Finance City, FC 56789</p>
              </div>
            </div>
          </div>
        </div>




          {/* footer */}
          <div className='w-full h-[400px] flex items-center justify-center bg-violet-800'>
            <div className='w-4/5 grid md:grid-cols-4 gap-4 text-gray-300'>
              <div className="px-3">
                <p>  
                  At the heart of our banking system lies a commitment to efficiency, security, and user satisfaction
                </p>
              </div>
              <div>
                <ul>
                  <li className="py-2">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/blog">Mental Health Blog</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/testimonials">Success Stories</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="py-2">
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources">Resources</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/terms">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="py-2">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/support">Support</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/locations">Our Locations</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


      </div>
    
  );
}
