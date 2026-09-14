const Hero = () => {
   return (
      <section className="hero">
            <img
               className="hero__img"
               src="https://framerusercontent.com/images/sVEgiTuWY22mpqqBUHhJV1hPhw.png?width=2752&height=1536"
               alt=""
               loading="eager"
               fetchPriority="high"
            />

         <div className="hero__overlay" />

         <div className="hero__content">
            <div className="hero__copy">
               <span className="">Surf camp · Canggu, Bali</span>
               <h1 className="hero__title">
                  SURF'S UP
               </h1>
               <p className="">
                  TWO WEEKS. ONE ISLAND. ENDLESS WAVES.
               </p>
            </div>

            <a
               className="hero__cta"
               href="#booking"
            >
               Reserve your spot
            </a>
         </div>
      </section>
   );
};

export default Hero;
