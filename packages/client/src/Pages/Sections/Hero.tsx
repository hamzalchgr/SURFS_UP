const Hero = () => {
   return (
      <section className="relative">
         <div className="h-screen w-full overflow-hidden">
            <img
               className="h-full w-full object-center object-cover"
               src="https://framerusercontent.com/images/sVEgiTuWY22mpqqBUHhJV1hPhw.png?width=2752&height=1536"
               alt=""
            />
         </div>

         <div className="absolute w-full h-screen top-0 left-0 flex flex-col items-center justify-center gap-5 bg-[#12111180]">
            <div className="pb-5 flex flex-col items-center justify-center">
               <p className="text-white uppercase font-semibold text-sm">Surf camp · Canggu, Bali</p>
               <h1 className="text-[68px] md:text-[100px] lg:text-[160px] font-bold text-[#ffee7d] leading-none">
                  SURF'S UP
               </h1>
               <p className="font-anton text-[#f4f3eee0] text-lg lg:text-[41px] text-center max-w-[400px] leading-none">
                  TWO WEEKS. ONE ISLAND. ENDLESS WAVES.
               </p>
            </div>

            <a
               className="bg-[#666143] px-6 py-3.5 rounded-full leading-none text-white font-medium"
               href="#booking"
            >
               Reserve your spot
            </a>
         </div>
      </section>
   );
};

export default Hero;
