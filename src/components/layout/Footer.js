import "@/styles/globals.css";
import Logo from "@/assets/LogoComapny.png";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full font-['SatoshiVariable'] flex flex-col items-center justify-center bg-black z-10 pt-16 pb-12 px-6">
      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto grid grid-cols-1 gap-8 items-center text-white">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col items-left">
            <div className="flex items-center">
              <Image
                className="w-24 sm:w-28 md:w-32 h-auto max-h-28"
                src={Logo}
                alt="Aznextech"
                objectFit="contain"
              />
            </div>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
            Where Development Meets Technology for Tomorrow’s Solutions.
            </p>
          </div>

          <nav className="flex flex-wrap justify-start sm:justify-center md:justify-start gap-4 sm:gap-6 text-sm md:text-base text-gray-400 font-medium">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Why Us</a>
            <a href="#" className="hover:text-white">Projects</a>
            <a href="#" className="hover:text-white">Testimonials</a>
            <a href="#" className="hover:text-white">Team</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>

      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl flex flex-col md:flex-row items-center justify-between pt-10 border-t-[1px] border-gray-200 text-sm mt-8 px-2">
        <span className="text-center md:text-left text-gray-30 text-gray-400">© 2025 Aznextech. All rights reserved.</span>
        <div className="flex justify-center space-x-4 mt-4 md:mt-0 ">
          <a href="https://www.linkedin.com/company/aznextech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/aznex_tech?igsh=ZWNteXRoNzczbjl6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/1EdzbPGx3s/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
}
