import Image from "next/image";
import { motion } from "framer-motion";
import AIImage from "@/assets/AI-image.png";
import Dots from "@/assets/FloatingAssets/Dots.png";

const Subscription = () => {
  return (
    <section className="relative w-full flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <Image className="absolute grayscale-100 select-none -top-10 right-50" src={Dots} alt="Dots" width={100} height={100} />
      <motion.div 
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[90%] bg-white -mt-20 shadow-[0_4px_4px_#00000040] rounded-[15px] gap-2 md:gap-10 md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl flex flex-col lg:flex-row p-8 md:p-10 justify-between items-center">
        <div
          className="w-full lg:w-3/5 xl:w-1/2 2xl:w-2/5 z-20 space-y-4 text-center font-['SatoshiVariable'] md:text-left"
        >
          <h2 className="text-2xl text-center font-bold leading-tight lg:text-left md:text-3xl 2xl:text-4xl ">
            <span className="lg:block text-white md:text-black">Secure Your </span>
            <span className="lg:block text-white md:text-black">Business's Future </span>
            <span className="lg:block text-white md:text-black">with The Right </span>
            <span className="lg:block text-white md:text-black">IT Solutions</span>
          </h2>
          <p className="text-center lg:text-left text-white md:text-gray-500 text-sm sm:text-base 2xl:text-xl">
          We provide innovative technology solutions to help your business adapt, innovate, and thrive in this dynamic market.
          </p>

          <div className="flex flex-col sm:flex-row gap-1 items-center overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 md:p-2 xl:p-3 text-white md:text-[#9E9E9E] border-1 border-white md:border-[#9E9E9E] outline-none flex-1 rounded-[5px] w-full sm:w-auto"
            />
            <button className="bg-[#211951] text-white font-semibold text-base rounded-[5px] px-2 py-2 md:px-4 md:py-2 xl:px-6 xl:py-3 w-full sm:w-auto">
              SignUp
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:2/5 flex justify-center bg-gray-200 rounded-lg items-center mt-6 md:mt-0">
            <Image
              src={AIImage}
              alt="AI-Image"
              className="absolute z-0 object-cover top-0 bottom-0 md:relative w-full h-full md:hover:translate-y-[-8px] md:hover:translate-x-[-8px] transition-transform rounded-lg"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscription;

