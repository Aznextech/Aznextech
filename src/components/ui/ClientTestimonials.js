
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import Image from "next/image";

import testimonials from "@/data/objects/Testimonials";
import PointingArrowRight  from "@/assets/SVGs/Pointing-Arrow-Round-Right .svg";


export default function TestimonialSection() {
  return (
    <section className="font-['SatoshiVariable'] overflow-hidden w-full sm:h-[100vh] lg:h-[90vh] py-28 relative z-20">
      <Image className="absolute left-[-10%] bottom-[-15%] rotate-12 select-none xl:h-80 2xl:h-[35vh] z-0 w-auto opacity-30 overflow-hidden object-fill" src={PointingArrowRight} alt="Background" />
      
      <div className="text-center mb-10 z-30">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-[#212121]">What Our Clients Say</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, EffectCards, Autoplay]}
        effect="cards"
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-[90%] xl:h-[45vh] 2xl:h-[50vh] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto flex items-center justify-center"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="bg-black border-1 border-gray-200 rounded-lg p-8 shadow-2xl relative"> {/* Added relative positioning */}
            <div className="h-auto flex items-center justify-center gap-6 relative z-10"> {/* Added relative z-index */}
              <div className="w-full md:w-3/4 lg:w-1/2 z-20 flex justify-center bg-gray-100 rounded-lg">
                <Image
                  src={testimonial.img}
                  alt="Client"
                  layout="intrinsic"
                  className="shadow-md md:hover:translate-y-[-8px] border border-white md:hover:translate-x-[-8px] transition-transform rounded-lg"
                />
              </div>
              <div className="z-30 text-black w-full md:w-3/4 lg:w-1/2 xl:w-2/3 flex flex-col items-start text-center md:text-left">
                <p className="text-lg font-bold text-center lg:text-left text-gray-300 uppercase mb-5">
                  {testimonial.role}
                </p>
                <p className="text-center lg:text-left md:text-xl xl:text-xl 2xl:text-2xl/snug relative z-40">  {/* Increased z-index */}
                  “{testimonial.quote}”
                </p>
                <span className="mt-4 text-center lg:text-left block font-semibold text-gray-400">
                  {testimonial.name} - <a href="#" className="text-blue-500 hover:underline">{testimonial.company}</a>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

